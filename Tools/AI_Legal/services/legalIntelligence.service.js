import * as vertexService from '../../../services/vertex.service.js';
import logger from '../../../utils/logger.js';
import { safeParseLLMJson } from '../../../utils/jsonUtils.js';

/**
 * analyzeCaseDetails
 * Analyzes case details using AI and returns structured legal intelligence.
 */
export const analyzeCaseDetails = async (rawText, currentData = {}) => {
    const prompt = [
        'You are an advanced, specialized Legal AI Intelligence Engine. Your task is to perform a thorough, professional legal analysis on raw input text (which may contain case facts, client details, notes, or uploaded document content) and generate a complete structured JSON analysis report.',
        '',
        '### Input Data Provided:',
        `- Client Name: ${currentData.clientName || 'Not specified'}`,
        `- Opponent Name: ${currentData.opponentName || 'Not specified'}`,
        `- Case Type: ${currentData.caseType || 'Not specified'}`,
        `- Raw Case Facts/Details: ${rawText}`,
        '',
        '### Critical Execution Rules:',
        '1. Output MUST be strictly valid JSON.',
        '2. Do NOT include any introductory or concluding text, explanations, or formatting outside of the JSON structure itself.',
        '3. If the input case facts are sparse or incomplete, you MUST use your advanced legal reasoning to make realistic, logical, and context-aware assumptions to fill out all sections. Do not leave any fields empty.',
        '4. Ensure all generated advice, applicable laws, and steps are realistic and highly relevant to the specific context of the dispute (e.g., if it is a cheque bounce case in India, reference Section 138 of the Negotiable Instruments Act; if it is a breach of contract, reference contract laws, etc.).',
        '5. Do NOT return null, undefined, or empty arrays.',
        '',
        '### Expected JSON Output Schema:',
        JSON.stringify({
          "executive_summary": "Provide a detailed, professional paragraph summarizing the core dispute, facts, timeline highlights, and legal position.",
          "case_strength": 75, 
          "win_probability": 65, 
          "parties": {
            "plaintiff": {
              "name": "Name of the Plaintiff / Client",
              "role": "Role (e.g., Petitioner / Complainant)"
            },
            "defendant": {
              "name": "Name of the Defendant / Opponent",
              "role": "Role (e.g., Respondent / Accused)"
            }
          },
          "timeline": [
            {
              "date": "YYYY-MM-DD",
              "event": "Short title of the event",
              "description": "Details of what occurred on this date"
            }
          ],
          "evidence": [
            {
              "title": "Document/Evidence Name (e.g., Original Loan Agreement, Dishonour Memo)",
              "type": "document / electronic_record / witness / physical_evidence",
              "description": "How this evidence proves or supports the claim.",
              "strength": "strong / medium / weak"
            }
          ],
          "legal_research": [
            {
              "law": "Name of the Act/Statute (e.g., Negotiable Instruments Act, 1881)",
              "section": "Specific Section (e.g., Section 138)",
              "description": "Detailed explanation of how this specific section applies to the case facts."
            }
          ],
          "process_steps": [
            {
              "step": "Actionable task for the lawyer (e.g., Draft and serve 15-day statutory demand notice)",
              "priority": "high / medium / low"
            }
          ],
          "risk_assessment": {
            "level": "low / medium / high / critical",
            "reason": "Clear explanation of the main risk factors or evidentiary loopholes in the case."
          },
          "critical_vulnerabilities": [
            "Specific vulnerability 1 (e.g., Notice was served 2 days past the statutory limit)",
            "Specific vulnerability 2"
          ],
          "opponent_strategy": [
            "Likely defence tactic 1 (e.g., Opponent will claim the signature on the cheque was forged)",
            "Likely defence tactic 2"
          ],
          "primary_relief": "The ultimate remedy or compensation the client is seeking (e.g., Recovery of principal amount ₹5,00,000 along with 18% interest and legal costs).",
          "strategy_recommendation": [
            "Actionable strategy recommendation 1",
            "Actionable strategy recommendation 2"
          ]
        }, null, 2),
        '',
        '### Quality Guidelines:',
        '- The "timeline" array must have at least 3 events.',
        '- The "evidence" array must have at least 2 relevant entries.',
        '- The "legal_research" array must list at least 2 real, legally correct sections/statutes.',
        '- The "process_steps" array must act as a checklist of legal actions for the lawyer.'
    ].join('\n');

    try {
        const response = await vertexService.AskVertexRaw(prompt, {
            maxOutputTokens: 3000,
            temperature: 0.1,
            modelOverride: 'gemini-2.5-flash',
            isJson: true
        });

        const fallback = {
            executive_summary: "__AI_ANALYSIS_FAILED__",
            case_strength: 0,
            win_probability: 0,
            timeline: [],
            parties: { plaintiff: { name: "Unknown", role: "Unknown" }, defendant: { name: "Unknown", role: "Unknown" } },
            evidence: [],
            legal_research: [],
            process_steps: [],
            risk_assessment: { level: "high", reason: "AI Analysis failed to return structured data." },
            critical_vulnerabilities: ["Data parsing failed."],
            opponent_strategy: [],
            primary_relief: "Unknown",
            strategy_recommendation: ["Please try running the analysis again or contact support if the issue persists."]
        };

        return safeParseLLMJson(response, fallback);
    } catch (error) {
        logger.error(`[LegalIntelligence] Analysis failed: ${error.message}`);
        logger.error(`[LegalIntelligence] Stack trace: ${error.stack}`);
        
        // Return fallback instead of throwing to prevent 500 error
        return {
            executive_summary: "__AI_ANALYSIS_FAILED__",
            case_strength: 0,
            win_probability: 0,
            timeline: [],
            parties: { plaintiff: { name: "Unknown", role: "Unknown" }, defendant: { name: "Unknown", role: "Unknown" } },
            evidence: [],
            legal_research: [],
            process_steps: [],
            risk_assessment: { level: "high", reason: "Backend request failed." },
            critical_vulnerabilities: [],
            opponent_strategy: [],
            primary_relief: "Unknown",
            strategy_recommendation: []
        };
    }
};

/**
 * analyzeDocumentContent
 * Extracts structured data from a specific document.
 */
export const analyzeDocumentContent = async (content, fileName) => {
    const prompt = [
        'Analyze the following legal document and extract key information.',
        `File: ${fileName}`,
        '',
        'Content:',
        content,
        '',
        'Return ONLY this JSON structure:',
        JSON.stringify({
            docType: "Notice",
            tags: ["tag1", "tag2"],
            summary: "Short summary of the document",
            keyClauses: [{ title: "Clause Name", description: "Why it matters" }]
        }, null, 2)
    ].join('\n');

    try {
        const response = await vertexService.AskVertexRaw(prompt, {
            maxOutputTokens: 1024,
            temperature: 0.1,
            modelOverride: 'gemini-2.5-flash',
            isJson: true
        });

        return safeParseLLMJson(response);
    } catch (error) {
        logger.error(`[LegalIntelligence] Document analysis failed: ${error.message}`);
        logger.error(`[LegalIntelligence] Stack trace: ${error.stack}`);
        return null;
    }
};
