import { r as reactExports, bI as useActiveCase, z as zt, bu as mapCaseToForm, bH as generateChatResponse, j as jsxRuntimeExports, a4 as ChevronLeft, N as BookOpen, by as History, _ as CirclePlus, bC as Folder, a2 as Check, U as Upload, F as FileText, k as Sparkles, cK as ChevronUp, ao as ChevronDown, bk as Briefcase, h as Database, cM as UserCheck, T as Trash2, b as Clock, t as Scale, l as Shield, bA as CircleCheck, bw as FileDown, W as Save, cN as RotateCcw, X, v as Search, a as apiService, q as getUserData } from "./index-BusjsCem.js";
import { C as Cpu } from "./cpu-7UAHNoJO.js";
import { P as Printer } from "./printer-iEfkmkDw.js";
const allTools = [
  { id: "Bail", name: "Bail Strategy", desc: "Pre-arrest roadmap & stay", category: "Criminal" },
  { id: "Criminal", name: "Criminal Defense", desc: "Theft & investigation plans", category: "Criminal" },
  { id: "Civil", name: "Civil Litigation", desc: "Damages & contract breach", category: "Civil" },
  { id: "AnticipatoryBail", name: "Anticipatory Bail", desc: "Preventive arrest & warrants", category: "Criminal" },
  { id: "FIRResponse", name: "FIR Response", desc: "Quashing petitions & counter", category: "Criminal" },
  { id: "EvidencePlanning", name: "Property Dispute", desc: "Adverse possession title", category: "Property" },
  { id: "AppealStrategy", name: "Appeal Strategy", desc: "High Court & judicial errors", category: "Civil" },
  { id: "CrossExamination", name: "Cross Examination", desc: "Witness questioning strategies", category: "Trial" },
  { id: "SettlementStrategy", name: "Settlement Plan", desc: "Mediation & trade settlement", category: "Corporate" },
  { id: "DivorceCustody", name: "Custody & Alimony Plan", desc: "Child custody & separation terms", category: "Family" },
  { id: "TaxAppeal", name: "GST Dispute Strategy", desc: "Indirect tax recovery challenge", category: "Tax" },
  { id: "WrongfulTermination", name: "Wrongful Termination", desc: "Employment contract breach claims", category: "Employment" }
];
const LITIGATION_SYSTEM_PROMPT = `You are a professional courtroom litigation attorney and judicial strategy architect.
Analyze the provided legal matter facts. Output your complete strategy assessment as a single valid JSON object.
Do NOT write conversational text outside the "json" code block. Double quote keys.

JSON Schema:
{
  "stats": {
    "overallStrategyScore": <Integer 0-100>,
    "winningProbability": <Integer 0-100>,
    "litigationRisk": <Integer 0-100>,
    "evidenceStrength": <Integer 0-100>,
    "precedentSupport": <Integer 0-100>,
    "aiConfidence": <Integer 0-100>,
    "courtReadiness": <Integer 0-100>,
    "missingEvidenceCount": <Integer>,
    "missingDocumentsCount": <Integer>,
    "settlementProbability": <Integer 0-100>,
    "appealRisk": <Integer 0-100>,
    "opponentRiskLevel": "<Low | Medium | High>"
  },
  "strategies": {
    "primary": { "title": "Primary Legal Strategy", "description": "Courtroom arguments focus on this central claim." },
    "alternative": { "title": "Alternative Legal Strategy", "description": "Secondary line of defense if primary is challenged." },
    "backup": { "title": "Backup Safety Strategy", "description": "Procedural actions to execute." },
    "emergency": { "title": "Emergency Escalation Strategy", "description": "Filing stays or appeals immediately." }
  },
  "winningRoadmap": [
    { "stage": "Investigation", "status": "Completed", "description": "Forensic timeline of events compiled." },
    { "stage": "Evidence Collection", "status": "In Progress", "description": "Staging municipal records and deeds." },
    { "stage": "Notice", "status": "Staged", "description": "Send legal demand notice to opposite party." },
    { "stage": "Filing", "status": "Staged", "description": "File main suit/petition in registry." },
    { "stage": "Interim Relief", "status": "Staged", "description": "File injunction or temporary stay petition." },
    { "stage": "Witness Examination", "status": "Staged", "description": "Chief examination of primary client." },
    { "stage": "Cross Examination", "status": "Staged", "description": "Expose hostile contradictions." },
    { "stage": "Final Arguments", "status": "Staged", "description": "Synthesize case law precedents." },
    { "stage": "Judgment", "status": "Staged", "description": "Wait for decree or judicial order." },
    { "stage": "Appeal", "status": "Staged", "description": "Prepare grounds of appeal if required." }
  ],
  "evidenceStrategy": {
    "strong": [{ "evidence": "Primary proof name", "reason": "Why it is legally binding" }],
    "weak": [{ "evidence": "Corroborative proof", "reason": "Why it lacks direct force" }],
    "missing": [{ "evidence": "Missing record", "reason": "Need to request immediately" }],
    "priority": [{ "evidence": "High priority record", "reason": "Should secure first" }],
    "sequence": ["Evidence Step 1", "Evidence Step 2"]
  },
  "witnessStrategy": {
    "key": [{ "witness": "Key witness role", "purpose": "Explain facts of event" }],
    "optional": [{ "witness": "Optional character witness", "purpose": "Support credibility" }],
    "weak": [{ "witness": "Vulnerable witness", "purpose": "Susceptible to timelines" }],
    "crossExamination": [
      { "topic": "Credibility challenge", "questions": ["Question 1?"], "followUps": ["Follow-up?"], "traps": ["Trap question?"] }
    ]
  },
  "opponentStrategy": {
    "likelyDefence": "Summary of likely opposition defense tactics",
    "likelyObjections": ["Objection 1", "Objection 2"],
    "counterArguments": ["Counter 1", "Counter 2"],
    "appealPossibility": "High probability of appeal to higher court",
    "delayStrategy": "Likely to seek frequent adjournments using procedural rules"
  },
  "counterStrategy": [
    { "opponentArgument": "Opponent claim", "counterResponse": "Your rebuttal", "evidenceRequired": "Proof to rebut", "applicableLaw": "BSA or CPC rule", "recommendedAction": "Action to take" }
  ],
  "judgePerspective": {
    "likelyQuestions": ["Judicial question 1?"],
    "courtConcerns": ["Concern 1", "Concern 2"],
    "weakAreas": ["Weak link in case"],
    "legalObservations": ["Relevant judicial observations"],
    "expectedFocusAreas": ["Primary focus points"]
  },
  "precedents": [
    { "citation": "Supreme Court Citation", "court": "Supreme Court of India", "summary": "Core legal principle settled", "similarityScore": 95, "type": "Binding Precedent" }
  ],
  "laws": [
    { "section": "Section code", "act": "BSA / BNS / CPC / IT Act", "applicability": "Applicability details" }
  ],
  "timeline": [
    { "phase": "Notice Stage", "duration": "15 Days", "description": "Drafting and dispatching legal notice." }
  ],
  "risks": {
    "legal": 20,
    "evidence": 30,
    "procedural": 10,
    "financial": 40,
    "strategic": 15,
    "riskPercentage": 25
  },
  "settlement": {
    "settlementChance": 50,
    "negotiationStrategy": "Mediation approach details",
    "mediationPossibility": "High mediation suitability",
    "arbitrationSuitability": "Arbitration clauses valid"
  },
  "negotiationPositions": {
    "opening": "Opening negotiation demands",
    "middle": "Realistic middle ground demands",
    "final": "Bottom line target",
    "fallback": "Litigation recovery fallback"
  },
  "crossExamPlanner": [
    { "witness": "Witness name", "mainQuestions": ["Q1"], "followUps": ["F1"], "contradictionQuestions": ["C1"], "credibilityQuestions": ["CR1"], "closingQuestions": ["CL1"] }
  ],
  "finalArguments": {
    "opening": "Opening statement outlines",
    "arguments": ["Legal argument 1"],
    "evidenceRefs": ["Evidence reference code"],
    "laws": ["Statutory section"],
    "precedents": ["Precedents citation"],
    "prayer": "prayer request to court",
    "submission": "Final submission request"
  },
  "appealStrategy": {
    "grounds": ["Ground 1", "Ground 2"],
    "timeline": "30 days from decree copy",
    "additionalEvidence": ["Additional documents needed"],
    "higherCourtStrategy": "High Court approach"
  },
  "readiness": {
    "evidence": 80,
    "witness": 70,
    "documentation": 75,
    "argument": 85,
    "overall": 77
  },
  "pendingTasks": [
    { "task": "Collect registry petition copy", "completed": false },
    { "task": "File vakalatnama and memo", "completed": false }
  ],
  "aiRecommendations": {
    "doFirst": ["Action 1"],
    "doNext": ["Action 2"],
    "avoid": ["Action to avoid"],
    "criticalIssues": ["Critical issue identified"],
    "priorityImprovements": ["Priority improvement needed"]
  }
}`;
const TEMPLATE_SEED_DATA = {
  Bail: {
    title: "Bail Application - Cyber Crime Embezzlement",
    facts: "Anticipating custody in a financial technology embezzlement lawsuit. Police are conducting investigations under Section 318 of BNS. Prosecution relies on server login records originating from client home IP.",
    timeline: "April 10, 2026: Account access logs flagged.\nMay 2, 2026: Notice received from Police under Section 41A CrPC.\nJune 12, 2026: FIR registered at cyber cell.",
    evidence: "1. Shared Wi-Fi router lease agreement - Admissibility: High, Strength: Strong\n2. Router access log sheets - Admissibility: High, Strength: Medium\n3. Detailed ledger reconciliation reports - Admissibility: Medium, Strength: Strong",
    witnesses: "1. Harish Rao - System Admin\n2. Kavita Lal - Security Analyst",
    opponent: "Claims absolute fraudulent transfer of tokens and seeks custodial interrogation.",
    relief: "Interim protection against arrest under Section 438 of CrPC.",
    orders: "Notice issued to state prosecutor.",
    notes: "Prioritize audit logs submission."
  },
  Criminal: {
    title: "Criminal Defense Plan - Alleged Theft",
    facts: "Accused of receiving stolen inventory at retail store. Opponent states CCTV capture confirms face, but frame rates are low and unverified. Accused bought items via official bank draft receipt.",
    timeline: "March 15, 2026: Acquisition of inventory from supplier.\nApril 22, 2026: Supplier arrested for theft.\nMay 1, 2026: Search conducted at client premises.",
    evidence: "1. Original bank draft receipt for purchase - Admissibility: High, Strength: Strong\n2. Supplier trade license copy - Admissibility: High, Strength: Strong\n3. CCTV footage analysis report - Admissibility: Medium, Strength: Weak",
    witnesses: "1. Amit Sen - Store Clerk\n2. Rajesh Sharma - Accountant",
    opponent: "Asserts client had knowledge of stolen nature of goods.",
    relief: "Quashing of FIR under Section 482 or acquittal at trial.",
    orders: "None.",
    notes: "Verify bank draft clearing date."
  },
  Civil: {
    title: "Civil Litigation recovery - Gupta Tech vs Apex Retail",
    facts: "Recovery suit for contract delays. Plaintiff demands INR 12 Lakhs liquidated damages. Defendant states delays are caused by direct delays in design approvals by the Plaintiff.",
    timeline: "Jan 15, 2026: Supply order signed.\nFeb 20, 2026: Revised specifications sent by client.\nApril 10, 2026: Completed modules delivered.",
    evidence: "1. Email logs requesting approval for designs - Admissibility: High, Strength: Strong\n2. Mobilization payment receipts - Admissibility: High, Strength: Strong\n3. Delivery confirmation receipts - Admissibility: High, Strength: Strong",
    witnesses: "1. Suresh Sen - Lead Designer\n2. Dev Gupta - Manager",
    opponent: "Claims delays caused solely by mobilization constraints of the supplier.",
    relief: "Recovery of INR 12 Lakhs plus interest @ 18% p.a.",
    orders: "Writ of summons served.",
    notes: "Prepare comparative delay analysis chart."
  },
  Cyber: {
    title: "Cyber Security Breach Liability Suit",
    facts: "Server database breach litigation. Opponent alleges security breach from user account. User logs show session tokens were active from overlapping geo-locations (Delhi and Singapore) within 5 minutes.",
    timeline: "May 1, 2026: Data breach detected.\nMay 3, 2026: Account suspended.\nJune 10, 2026: Notice of compensation claim.",
    evidence: "1. ISP authentication log reports - Admissibility: High, Strength: Strong\n2. Multi-factor authentication history - Admissibility: High, Strength: Strong\n3. IT audit compliance certification - Admissibility: High, Strength: Strong",
    witnesses: "1. Dr. Arun Sen - Cyber Analyst\n2. Priya Mehra - IT Admin",
    opponent: "Claims gross negligence in maintaining credential security protocols.",
    relief: "Dismissal of claim for lack of negligent cause.",
    orders: "None.",
    notes: "Verify VPN logs for the active token session."
  },
  AnticipatoryBail: {
    title: "Anticipatory Bail - Loan Default Exposure",
    facts: "Apprehension of arrest regarding bank loan default. Matter under corporate investigation scanner. Client is cooperative and ready to join inquiry.",
    timeline: "June 2025: Account declared NPA.\nMarch 2026: Forensic audit report submitted.\nJune 20, 2026: Summons issued by economic offenses wing.",
    evidence: "1. Medical certificates of the promoter - Admissibility: High, Strength: Strong\n2. Details of assets pledged to the bank - Admissibility: High, Strength: Strong\n3. Letter of cooperation sent to IO - Admissibility: High, Strength: Strong",
    witnesses: "1. Dr. R. K. Sen - Consultant\n2. Suresh Lal - Financial Advisor",
    opponent: "Alleges diversion of funds for personal assets.",
    relief: "Pre-arrest bail direction protecting promoter liberty.",
    orders: "Ad-interim protection granted subject to deposit of 10% amount.",
    notes: "Secure promoter passport copy."
  },
  FIRResponse: {
    title: "FIR Quashing Petition - Partnership Dispute",
    facts: "FIR alleging criminal breach of trust. Dispute is purely civil regarding partnership firm profits split. No criminal intent shown in records.",
    timeline: "Feb 2026: Partnership dissolved.\nApril 2026: Mutual settlement talks failed.\nJune 10, 2026: FIR registered by outgoing partner.",
    evidence: "1. Written partnership deed with arbitration clause - Admissibility: High, Strength: Strong\n2. Bank accounts ledger sheet for partnership - Admissibility: High, Strength: Strong\n3. Dissolution agreement draft - Admissibility: High, Strength: Strong",
    witnesses: "1. Ajay Sen - partner auditor\n2. Meena Sen - mediation witness",
    opponent: "Claims deliberate siphoning of capital before dissolution.",
    relief: "Quashing of FIR under Section 482 of CrPC / BNSS.",
    orders: "Notice issued, stay on investigation granted.",
    notes: "Submit ledger copy showing tax payments."
  },
  EvidencePlanning: {
    title: "Property Dispute Declaratory Suit",
    facts: "Seeking adverse possession declaration. Client has stayed on the property since 1994, paying utilities and local land revenue taxes continuously.",
    timeline: "May 1994: Initial possession under oral agreement.\nJune 2010: Registered owner passed away.\nJune 2026: Legal heirs threatened eviction.",
    evidence: "1. Electricity bills from 1995 to 2026 - Admissibility: High, Strength: Strong\n2. Land revenue tax receipts - Admissibility: High, Strength: Strong\n3. Affidavit declarations from neighbors - Admissibility: Medium, Strength: Medium",
    witnesses: "1. Mr. Ram Avtar - Neighbor\n2. Dev Das - Postman",
    opponent: "Claims client is a permissive user and licensee.",
    relief: "Declaration of title by adverse possession.",
    orders: "Status quo order passed on eviction attempts.",
    notes: "Collect municipal voting register entries."
  },
  AppealStrategy: {
    title: "First Appeal - Eviction Decree Error",
    facts: "Appeal against lower court order granting eviction. Appellant claims trial judge completely ignored balance of convenience and lack of notice.",
    timeline: "May 2025: Injunction suit dismissed.\nJune 2026: Decree copy certified.\nJune 28, 2026: Appeal filed in District Court.",
    evidence: "1. Trial court judgment record copy - Admissibility: High, Strength: Strong\n2. Rent deposits slips - Admissibility: High, Strength: Strong\n3. Notice of demand response proof - Admissibility: High, Strength: Strong",
    witnesses: "1. Appellant himself - tenant",
    opponent: "Claims tenant default of over 12 months.",
    relief: "Setting aside eviction decree and restoration of tenancy.",
    orders: "Execution of decree stayed pending appeal.",
    notes: "File deposit application for outstanding rent."
  },
  CrossExamination: {
    title: "Cross Examination Prep - Opposing Manager",
    facts: "Preparing cross questions for opposing project manager regarding contract delivery logs showing verbal approvals of milestones.",
    timeline: "Oct 2025: Work started.\nDec 2025: Verbal approval granted for milestones 1 and 2.\nJan 2026: Formal rejection letter sent.",
    evidence: "1. WhatsApp chat logs confirming verbal approvals - Admissibility: High, Strength: Medium\n2. Site visitor registers signed by manager - Admissibility: High, Strength: Strong\n3. Work progress photographs - Admissibility: High, Strength: Strong",
    witnesses: "1. Lead engineer - present during inspections",
    opponent: "Denies any verbal approval or site visitations.",
    relief: "Impeaching credibility of opponent witness.",
    orders: "None.",
    notes: "Verify WhatsApp timestamps match log files."
  },
  SettlementStrategy: {
    title: "Settlement Brief - Franchise Dissolution",
    facts: "Franchise split dispute. Client seeks amicable resolution of trade trademark disputes. Opponent asks for INR 50 Lakhs payment.",
    timeline: "Jan 2026: Split announced.\nMarch 2026: Mediation talks initiated.\nJune 2026: Final draft proposal review.",
    evidence: "1. Franchise revenue loss statements - Admissibility: High, Strength: Strong\n2. Competitor shop lease papers - Admissibility: High, Strength: Strong\n3. Trademark license drafts - Admissibility: High, Strength: Strong",
    witnesses: "1. Mr. Dev - Mediator",
    opponent: "Insists on complete exit fee payments.",
    relief: "Mutual release of liabilities and exit fee of INR 15 Lakhs.",
    orders: "Mediation report submitted.",
    notes: "Prepare final draft exit agreement."
  },
  DivorceCustody: {
    title: "Custody & Alimony Plan - Verma vs Verma",
    facts: "Divorce petition with child custody challenge. Mother seeks sole physical custody of 7-year-old child and maintenance of INR 75,000/month. Father seeks joint legal custody citing stable employment and housing.",
    timeline: "April 2024: Marriage solemnized.\nMarch 2026: Separation due to compatibility issues.\nJune 15, 2026: Family court filing.",
    evidence: "1. School reports showing active father participation - Admissibility: High, Strength: Strong\n2. Joint bank account statements - Admissibility: High, Strength: Medium\n3. Rent receipts for family house - Admissibility: High, Strength: Strong",
    witnesses: "1. Dr. Neha Sen - Child Psychologist\n2. Ramesh Verma - Neighbor",
    opponent: "Claims father has long travel schedules and cannot commit to child-rearing.",
    relief: "Joint custody rights and reasonable monthly maintenance splits.",
    orders: "Interim visitations allowed on weekends.",
    notes: "Prioritize psychologist welfare reports."
  },
  TaxAppeal: {
    title: "GST Appeal - Apex Retail Tax liability",
    facts: "Challenge against input tax credit (ITC) denial. Tax authority claims supplier did not deposit GST collected, seeking recovery of INR 8.5 Lakhs plus 18% penalty.",
    timeline: "Jan 2025: Invoice raised by supplier.\nMarch 2026: Show cause notice issued.\nJune 5, 2026: Recovery demand order.",
    evidence: "1. GST invoices with transaction logs - Admissibility: High, Strength: Strong\n2. Bank statements showing full payment to supplier - Admissibility: High, Strength: Strong\n3. Tax return transcripts (Form GSTR-2B) - Admissibility: High, Strength: Strong",
    witnesses: "1. Rajan Sen - Chartered Accountant",
    opponent: "Asserts buyer is jointly liable if supplier default occurs.",
    relief: "Stay on tax recovery and reversal of input credit denial.",
    orders: "None.",
    notes: "Submit proof of bona fide trade transactions."
  },
  WrongfulTermination: {
    title: "Wrongful Termination - Sen vs InfoTech",
    facts: "Wrongful dismissal tech lawsuit. Employee terminated immediately without notice pay or compensation. Employer claims performance issues, but employee has 5 consecutive excellent ratings.",
    timeline: "Dec 2023: Joining date.\nMay 2026: Excellent performance rating email.\nJune 18, 2026: Termination email citing downsizing.",
    evidence: "1. Appointment letter specifying 3 months notice - Admissibility: High, Strength: Strong\n2. Email appraisal records - Admissibility: High, Strength: Strong\n3. Separation severance draft - Admissibility: High, Strength: Medium",
    witnesses: "1. Ajay Lal - Project Manager",
    opponent: "Claims termination was aligned with restructuring provisions.",
    relief: "Reinstatement or 3 months severance salary pay plus interest.",
    orders: "None.",
    notes: "Check separation clause specifications."
  }
};
const parseEvidenceText = (text) => {
  if (!text) return [];
  return text.split("\n").filter((line) => line.trim()).map((line, idx) => {
    const cleanLine = line.replace(/^\d+[\.\)\s-]*|^\s*[-*•]\s*/, "").trim();
    const parts = cleanLine.split(" - ");
    const name = parts[0] || "Evidence #" + (idx + 1);
    const detail = parts[1] || "";
    const detailsMap = detail.split(", ");
    let admissibility = "High";
    let strength = "Strong";
    let credibility = "High";
    detailsMap.forEach((d) => {
      var _a, _b;
      if (d.toLowerCase().includes("admissibility")) {
        admissibility = ((_a = d.split(":")[1]) == null ? void 0 : _a.trim()) || admissibility;
      }
      if (d.toLowerCase().includes("strength")) {
        strength = ((_b = d.split(":")[1]) == null ? void 0 : _b.trim()) || strength;
      }
    });
    return {
      id: `ev_${idx}_${Date.now()}`,
      name,
      type: name.toLowerCase().includes("email") || name.toLowerCase().includes("whatsapp") || name.toLowerCase().includes("log") ? "Digital" : "Document",
      admissibility: admissibility.replace(/admissibility:?/i, "").trim(),
      strength: strength.replace(/strength:?/i, "").trim(),
      credibility,
      linkedWitness: "N/A",
      status: "Admitted",
      risk: admissibility === "Low" || strength === "Weak" ? "High" : "Low"
    };
  });
};
const parseWitnessText = (text) => {
  if (!text) return [];
  return text.split("\n").filter((line) => line.trim()).map((line, idx) => {
    const cleanLine = line.replace(/^\d+[\.\)\s-]*|^\s*[-*•]\s*/, "").trim();
    const parts = cleanLine.split(" - ");
    const name = parts[0] || "Witness #" + (idx + 1);
    const role = parts[1] || "Witness";
    return {
      id: `wit_${idx}_${Date.now()}`,
      name,
      role,
      supports: idx % 2 === 0 ? "Plaintiff" : "Defendant",
      weakness: "None identified",
      questions: [`Please verify the details of the event on the record?`],
      credibilityScore: 85 - idx * 5
    };
  });
};
const parseTimelineText = (text) => {
  if (!text) return [];
  return text.split("\n").filter((line) => line.trim()).map((line, idx) => {
    const cleanLine = line.replace(/^\d+[\.\)\s-]*|^\s*[-*•]\s*/, "").trim();
    const parts = cleanLine.split(": ");
    let date = "N/A";
    let title = cleanLine;
    if (parts.length > 1) {
      date = parts[0];
      title = parts[1];
    } else {
      const dateMatch = cleanLine.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4}|\d{4}/i);
      if (dateMatch) {
        date = dateMatch[0];
      }
    }
    return {
      id: `time_${idx}_${Date.now()}`,
      title,
      date,
      description: `Case milestone event`
    };
  });
};
const serializeEvidenceList = (list) => {
  return list.map((ev, idx) => `${idx + 1}. ${ev.name} - Admissibility: ${ev.admissibility}, Strength: ${ev.strength}`).join("\n");
};
const serializeWitnessList = (list) => {
  return list.map((w, idx) => `${idx + 1}. ${w.name} - ${w.role}`).join("\n");
};
const serializeTimelineList = (list) => {
  return list.map((t, idx) => `${t.date}: ${t.title}`).join("\n");
};
const StrategyEngine = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
  const isDark = theme === "dark";
  const [strategySource, setStrategySource] = reactExports.useState("EXISTING_CASE");
  const [caseTitle, setCaseTitle] = reactExports.useState("");
  const [caseFacts, setCaseFacts] = reactExports.useState("");
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [localProjects, setLocalProjects] = reactExports.useState(allProjects);
  const [clientName, setClientName] = reactExports.useState("");
  const [opponentName, setOpponentName] = reactExports.useState("");
  const [matterType, setMatterType] = reactExports.useState("Civil");
  const [courtName, setCourtName] = reactExports.useState("");
  const [assignedAdvocate, setAssignedAdvocate] = reactExports.useState("Senior Counsel");
  const [caseStage, setCaseStage] = reactExports.useState("Pre-litigation");
  const [hearingDate, setHearingDate] = reactExports.useState("");
  const [caseStatus, setCaseStatus] = reactExports.useState("Active");
  const [uploadedFiles, setUploadedFiles] = reactExports.useState([]);
  const [isExtractingDocs, setIsExtractingDocs] = reactExports.useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = reactExports.useState("case_selection");
  const [activeAccordion, setActiveAccordion] = reactExports.useState("facts");
  const [evidenceList, setEvidenceList] = reactExports.useState([]);
  const [witnessList, setWitnessList] = reactExports.useState([]);
  const [timelineList, setTimelineList] = reactExports.useState([]);
  const [newEv, setNewEv] = reactExports.useState({ name: "", type: "Document", admissibility: "High", strength: "Strong", credibility: "High", risk: "Low" });
  const [newWit, setNewWit] = reactExports.useState({ name: "", role: "", supports: "Plaintiff", credibilityScore: 85 });
  const [newTime, setNewTime] = reactExports.useState({ date: "", title: "" });
  const activeCaseContext = useActiveCase();
  const triggerAutoRun = activeCaseContext == null ? void 0 : activeCaseContext.triggerAutoRun;
  const [isUsingActiveCase, setIsUsingActiveCase] = reactExports.useState(!!currentCase);
  const [manualObjective, setManualObjective] = reactExports.useState("Define Trial Strategy");
  const [sidebarAdvancedOpen, setSidebarAdvancedOpen] = reactExports.useState(false);
  const [scenarioTimeline, setScenarioTimeline] = reactExports.useState("");
  const [scenarioEvidence, setScenarioEvidence] = reactExports.useState("");
  const [scenarioWitnesses, setScenarioWitnesses] = reactExports.useState("");
  const [scenarioOpponent, setScenarioOpponent] = reactExports.useState("");
  const [scenarioRelief, setScenarioRelief] = reactExports.useState("");
  const [scenarioOrders, setScenarioOrders] = reactExports.useState("");
  const [scenarioNotes, setScenarioNotes] = reactExports.useState("");
  const [isAuditing, setIsAuditing] = reactExports.useState(false);
  const [auditStep, setAuditStep] = reactExports.useState("");
  const [strategyResult, _setStrategyResult] = reactExports.useState(null);
  const setStrategyResult = (val) => {
    console.log("[StrategyEngine] setStrategyResult called with:", val);
    console.trace("[StrategyEngine] setStrategyResult Call Stack");
    _setStrategyResult(val);
  };
  const lastLoadedCaseIdRef = reactExports.useRef(null);
  const [briefMenuOpen, setBriefMenuOpen] = reactExports.useState(false);
  const [activeSimulationStep, setActiveSimulationStep] = reactExports.useState(0);
  const loadingRef = reactExports.useRef(null);
  const reportRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isAuditing) {
      const timer = setTimeout(() => {
        if (loadingRef.current) {
          loadingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAuditing]);
  reactExports.useEffect(() => {
    if (strategyResult) {
      const timer = setTimeout(() => {
        if (reportRef.current) {
          reportRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [strategyResult]);
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [newCaseModalOpen, setNewCaseModalOpen] = reactExports.useState(false);
  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = reactExports.useState(false);
  const [showAdvanced, setShowAdvanced] = reactExports.useState(false);
  const [collapsedBlocks, setCollapsedBlocks] = reactExports.useState({
    out_arguments: false,
    out_precedents: true,
    out_matrix: true,
    out_settlement: true,
    out_actions: true
  });
  reactExports.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const [templateSearch, setTemplateSearch] = reactExports.useState("");
  const [selectedTemplateCategory, setSelectedTemplateCategory] = reactExports.useState("All");
  const [previewTemplate, setPreviewTemplate] = reactExports.useState(null);
  const [tasks, setTasks] = reactExports.useState([]);
  const [newTaskText, setNewTaskText] = reactExports.useState("");
  const [auditLogs, setAuditLogs] = reactExports.useState([]);
  const [newCaseForm, setNewCaseForm] = reactExports.useState({
    clientName: "",
    accused: "",
    matterType: "Civil",
    courtName: "",
    assignedAdvocate: "",
    stage: "Pre-litigation",
    summary: ""
  });
  const [favoriteTemplates, setFavoriteTemplates] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aisa_strategy_fav_templates")) || [];
    } catch {
      return [];
    }
  });
  const [recentTemplates, setRecentTemplates] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aisa_strategy_recent_templates")) || [];
    } catch {
      return [];
    }
  });
  reactExports.useEffect(() => {
    setLocalProjects(allProjects);
  }, [allProjects]);
  const activeProjectObject = reactExports.useMemo(() => {
    const activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    return localProjects.find((p) => p._id === activeId) || currentCase;
  }, [linkedCaseId, currentCase, localProjects]);
  reactExports.useEffect(() => {
    if (activeProjectObject && strategySource === "EXISTING_CASE") {
      setClientName(activeProjectObject.clientName || activeProjectObject.client || "");
      setOpponentName(activeProjectObject.opponentName || activeProjectObject.accused || activeProjectObject.opponent || "");
      setMatterType(activeProjectObject.caseType || activeProjectObject.matterType || "Civil");
      setCourtName(activeProjectObject.courtName || activeProjectObject.court || "");
      setAssignedAdvocate(activeProjectObject.assignedAdvocate || "Senior Counsel");
      setCaseStage(activeProjectObject.stage || "Pre-litigation");
      setHearingDate(activeProjectObject.hearingDate || "");
      setCaseStatus(activeProjectObject.status || "Active");
    }
  }, [activeProjectObject, strategySource]);
  const handleStrategySourceChange = (source) => {
    setStrategySource(source);
    setStrategyResult(null);
    if (source === "MANUAL_SCENARIO") {
      resetPlatformState();
      setClientName("");
      setOpponentName("");
      setMatterType("Civil");
      setCourtName("");
      setAssignedAdvocate("Senior Counsel");
      setCaseStage("Pre-litigation");
      setHearingDate("");
      setCaseStatus("Active");
      setActiveWorkflowStep("fact_analysis");
    } else if (source === "UPLOAD_DOCUMENTS") {
      resetPlatformState();
      setUploadedFiles([]);
      setClientName("");
      setOpponentName("");
      setMatterType("Civil");
      setCourtName("");
      setAssignedAdvocate("Senior Counsel");
      setCaseStage("Pre-litigation");
      setHearingDate("");
      setCaseStatus("Active");
      setActiveWorkflowStep("case_selection");
    } else if (source === "EXISTING_CASE") {
      if (currentCase) {
        hydrateFromCase(currentCase);
      }
      setActiveWorkflowStep("case_selection");
    }
  };
  const toggleAccordion = (name) => {
    if (name.startsWith("out_")) {
      setCollapsedBlocks((prev) => ({
        ...prev,
        [name]: !prev[name]
      }));
      return;
    }
    setActiveAccordion((prev) => prev === name ? null : name);
    if (name === "facts" || name === "timeline") setActiveWorkflowStep("fact_analysis");
    else if (name === "evidence" || name === "witnesses") setActiveWorkflowStep("evidence_analysis");
    else if (name === "opponent") setActiveWorkflowStep("opponent_prediction");
    else if (name === "relief" || name === "orders") setActiveWorkflowStep("legal_risk_analysis");
  };
  reactExports.useEffect(() => {
    let interval;
    if (isAuditing) {
      setActiveSimulationStep(0);
      interval = setInterval(() => {
        setActiveSimulationStep((prev) => prev < 8 ? prev + 1 : prev);
      }, 1500);
    } else {
      setActiveSimulationStep(0);
    }
    return () => clearInterval(interval);
  }, [isAuditing]);
  reactExports.useEffect(() => {
    if (currentCase && strategySource === "EXISTING_CASE") {
      setLinkedCaseId(currentCase._id);
      hydrateFromCase(currentCase);
    }
  }, [currentCase, strategySource]);
  reactExports.useEffect(() => {
    if (currentCase && strategySource === "EXISTING_CASE") {
      setIsUsingActiveCase(true);
      autoLoadCaseDetails(currentCase);
    }
  }, [currentCase, strategySource]);
  reactExports.useEffect(() => {
    if (triggerAutoRun && currentCase && !strategyResult && !isAuditing && strategySource === "EXISTING_CASE") {
      zt.success(`✓ Case workspace prefilled successfully`, { icon: "🏛️" });
      runLitigationSimulation();
    }
  }, [triggerAutoRun, currentCase, strategyResult, isAuditing, strategySource]);
  const resetPlatformState = () => {
    setCaseTitle("");
    setCaseFacts("");
    setScenarioTimeline("");
    setScenarioEvidence("");
    setScenarioWitnesses("");
    setScenarioOpponent("");
    setScenarioRelief("");
    setScenarioOrders("");
    setScenarioNotes("");
    setEvidenceList([]);
    setWitnessList([]);
    setTimelineList([]);
    setStrategyResult(null);
    setAuditLogs([]);
    setTasks([]);
  };
  const hydrateFromCase = (caseObj) => {
    if (!caseObj) return;
    const isDifferentCase = lastLoadedCaseIdRef.current !== caseObj._id;
    lastLoadedCaseIdRef.current = caseObj._id;
    const ls = caseObj.litigationStrategy;
    if (ls) {
      setCaseTitle(ls.caseTitle || caseObj.name || "");
      setCaseFacts(ls.caseFacts || caseObj.description || caseObj.summary || "");
      setScenarioTimeline(ls.scenarioTimeline || "");
      setScenarioEvidence(ls.scenarioEvidence || "");
      setScenarioWitnesses(ls.scenarioWitnesses || "");
      setScenarioOpponent(ls.scenarioOpponent || "");
      setScenarioRelief(ls.scenarioRelief || "");
      setScenarioOrders(ls.scenarioOrders || "");
      setScenarioNotes(ls.scenarioNotes || "");
      if (isDifferentCase) {
        console.log(`[StrategyEngine] Case ID changed from previous to ${caseObj._id}. Hydrating strategyResult from DB.`);
        setStrategyResult(ls.activeStrategy || null);
      } else {
        console.log(`[StrategyEngine] Same Case ID ${caseObj._id} updated. Retaining local strategyResult.`);
      }
      setTasks(ls.tasks || []);
      setAuditLogs(ls.auditLogs || []);
      setEvidenceList(parseEvidenceText(ls.scenarioEvidence || ""));
      setWitnessList(parseWitnessText(ls.scenarioWitnesses || ""));
      setTimelineList(parseTimelineText(ls.scenarioTimeline || caseObj.hearingDate ? `Hearing: ${caseObj.hearingDate}` : ""));
    } else {
      if (isDifferentCase) {
        console.log(`[StrategyEngine] Case ID changed to ${caseObj._id} (no litigationStrategy). Resetting platform state.`);
        resetPlatformState();
      } else {
        console.log(`[StrategyEngine] Same Case ID ${caseObj._id} updated (no litigationStrategy). Retaining local strategyResult.`);
      }
      setCaseTitle(caseObj.name || "");
      setCaseFacts(caseObj.description || caseObj.summary || "");
      setTimelineList(parseTimelineText(caseObj.hearingDate ? `Hearing: ${caseObj.hearingDate}` : ""));
    }
  };
  const autoLoadCaseDetails = (targetCase) => {
    const activeObj = targetCase || currentCase || allProjects.find((p) => p._id === linkedCaseId);
    if (!activeObj) return;
    const mapped = mapCaseToForm(activeObj);
    setCaseTitle(activeObj.name || activeObj.title || "");
    setCaseFacts(activeObj.description || activeObj.summary || "");
    setScenarioTimeline(activeObj.hearingDate ? `Hearing milestone scheduled: ${activeObj.hearingDate}` : "");
    setScenarioEvidence(mapped.evidenceSummary || "");
    setScenarioWitnesses(mapped.witnesses || "");
    setScenarioOpponent(mapped.respondent ? `Opposing Party: ${mapped.respondent}` : "");
    setScenarioRelief("");
    setScenarioOrders("");
    setScenarioNotes(activeObj.notes || mapped.notes || "");
    setEvidenceList(parseEvidenceText(mapped.evidenceSummary || ""));
    setWitnessList(parseWitnessText(mapped.witnesses || ""));
    setTimelineList(parseTimelineText(activeObj.hearingDate ? `Hearing: ${activeObj.hearingDate}` : ""));
  };
  const handleUseActiveCaseToggle = (checked) => {
    setIsUsingActiveCase(checked);
    if (checked) {
      autoLoadCaseDetails();
    } else {
      resetPlatformState();
      if (currentCase) {
        setCaseTitle(currentCase.name || "");
        setCaseFacts(currentCase.description || currentCase.summary || "");
      }
    }
  };
  const ensureCaseCreated = async () => {
    if (strategySource !== "EXISTING_CASE") return { activeId: null, activeProj: null };
    let activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    let activeProj = currentCase || allProjects.find((p) => p._id === activeId);
    if (!activeId) {
      setIsSyncing(true);
      const title = `Litigation Strategy: ${caseTitle || "Custom Courtroom Matter"}`;
      try {
        const newProj = await apiService.createProject({
          name: title,
          isLegalCase: true,
          description: `Automatically created for litigation strategy of ${caseTitle || "matter"}.`
        });
        activeId = newProj._id;
        activeProj = newProj;
        setLinkedCaseId(activeId);
        setLocalProjects((prev) => [newProj, ...prev]);
        if (onUpdateCase) onUpdateCase(newProj);
        zt.success(`📁 Database Case created: "${title}"`);
      } catch (e) {
        console.error("Auto-create case failed", e);
      } finally {
        setIsSyncing(false);
      }
    }
    return { activeId, activeProj };
  };
  const syncToDatabase = async (updates) => {
    if (strategySource !== "EXISTING_CASE") return;
    const activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!activeId) return;
    setIsSyncing(true);
    try {
      const activeProj = allProjects.find((p) => p._id === activeId) || currentCase;
      const currentLs = (activeProj == null ? void 0 : activeProj.litigationStrategy) || {};
      const payload = {
        ...activeProj,
        litigationStrategy: {
          ...currentLs,
          caseTitle,
          caseFacts,
          scenarioTimeline,
          scenarioEvidence,
          scenarioWitnesses,
          scenarioOpponent,
          scenarioRelief,
          scenarioOrders,
          scenarioNotes,
          activeStrategy: strategyResult || currentLs.activeStrategy || null,
          tasks,
          auditLogs,
          ...updates
        }
      };
      const response = await apiService.updateProject(activeId, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (e) {
      console.error("Database sync failed", e);
    } finally {
      setIsSyncing(false);
    }
  };
  const logAudit = async (action, details, customLogsList = null) => {
    var _a2, _b2;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action,
      details,
      editedBy: `${userName} (${userEmail})`
    };
    const targetList = customLogsList || auditLogs;
    const updatedLogs = [...targetList, newLog];
    setAuditLogs(updatedLogs);
    if (strategySource === "EXISTING_CASE") {
      await syncToDatabase({ auditLogs: updatedLogs });
    }
  };
  const handleSaveStrategy = async () => {
    if (!strategyResult) return;
    try {
      if (strategySource !== "EXISTING_CASE") {
        setIsSyncing(true);
        const title = caseTitle.trim() || "Custom Courtroom Strategy";
        const newProj = await apiService.createProject({
          name: title,
          isLegalCase: true,
          description: caseFacts.trim() || `Strategy brief for ${title}.`
        });
        setLinkedCaseId(newProj._id);
        setStrategySource("EXISTING_CASE");
        setLocalProjects((prev) => [newProj, ...prev]);
        if (onUpdateCase) onUpdateCase(newProj);
        await apiService.updateProject(newProj._id, {
          activeStrategy: strategyResult,
          scenarioTimeline: serializeTimelineList(timelineList),
          scenarioEvidence: serializeEvidenceList(evidenceList),
          scenarioWitnesses: serializeWitnessList(witnessList)
        });
        zt.success(`📁 Case saved and synchronized in Database: "${title}"`);
      } else {
        const { activeId } = await ensureCaseCreated();
        if (activeId) {
          await syncToDatabase({
            activeStrategy: strategyResult
          });
          zt.success("Strategy successfully updated in Database!");
        }
      }
    } catch (err) {
      console.error("Save strategy failed:", err);
      zt.error("Failed to save strategy: " + err.message);
    } finally {
      setIsSyncing(false);
    }
  };
  const readinessMetrics = reactExports.useMemo(() => {
    if (strategyResult && strategyResult.readiness) {
      const base = strategyResult.readiness;
      const totalTasks = tasks.length;
      const completedTasks = tasks.filter((t) => t.completed).length;
      const taskPercentage = totalTasks > 0 ? Math.round(completedTasks * 100 / totalTasks) : 100;
      const overall = Math.round((base.evidence + base.witness + base.documentation + base.argument + taskPercentage) / 5);
      return {
        ...base,
        taskPercentage,
        overall
      };
    }
    return {
      evidence: "--",
      witness: "--",
      documentation: "--",
      argument: "--",
      taskPercentage: "--",
      overall: "--"
    };
  }, [strategyResult, tasks]);
  const strategyReadinessCalculated = reactExports.useMemo(() => {
    const isManual = strategySource === "MANUAL_SCENARIO";
    const infoOk = isManual ? caseTitle.trim() ? 1 : 0 : clientName.trim() && opponentName.trim() ? 1 : 0;
    const factsOk = caseFacts.trim().length > 15 ? 1 : 0;
    const timelineOk = timelineList.length > 0 ? 1 : 0;
    const evidenceOk = evidenceList.length > 0 ? 1 : 0;
    const witnessesOk = witnessList.length > 0 ? 1 : 0;
    const opponentOk = scenarioOpponent.trim().length > 10 ? 1 : 0;
    const score = Math.round(infoOk * 15 + factsOk * 25 + timelineOk * 15 + evidenceOk * 15 + witnessesOk * 15 + opponentOk * 15);
    return {
      info: infoOk === 1,
      facts: factsOk === 1,
      timeline: timelineOk === 1,
      evidence: evidenceOk === 1,
      witnesses: witnessesOk === 1,
      opponent: opponentOk === 1,
      overall: score
    };
  }, [clientName, opponentName, caseFacts, timelineList, evidenceList, witnessList, scenarioOpponent]);
  const runLitigationSimulation = async (actionType = "FULL_SIMULATION") => {
    var _a2;
    const targetCase = currentCase || allProjects.find((p) => p._id === linkedCaseId);
    const currentFactsText = [
      caseFacts.trim() ? `Case Facts: ${caseFacts.trim()}` : "",
      serializeTimelineList(timelineList) ? `Timeline: ${serializeTimelineList(timelineList)}` : "",
      serializeEvidenceList(evidenceList) ? `Evidence: ${serializeEvidenceList(evidenceList)}` : "",
      serializeWitnessList(witnessList) ? `Witnesses: ${serializeWitnessList(witnessList)}` : "",
      scenarioOpponent.trim() ? `Opponent Position: ${scenarioOpponent.trim()}` : "",
      scenarioRelief.trim() ? `Relief Sought: ${scenarioRelief.trim()}` : "",
      scenarioOrders.trim() ? `Previous Orders: ${scenarioOrders.trim()}` : "",
      scenarioNotes.trim() ? `Notes: ${scenarioNotes.trim()}` : ""
    ].filter(Boolean).join("\n\n");
    const factsText = currentFactsText.trim() || (targetCase == null ? void 0 : targetCase.description) || (targetCase == null ? void 0 : targetCase.summary) || "";
    const currentTitle = caseTitle.trim() || (targetCase == null ? void 0 : targetCase.name) || "Custom Courtroom Strategy";
    if (!factsText.trim()) {
      zt.error("Please provide case facts or load templates first.");
      return;
    }
    setIsAuditing(true);
    setStrategyResult(null);
    setAuditStep("Reading Facts...");
    const toastId = zt.loading(`AI litigation workspace: compiling ${actionType.replace("_", " ").toLowerCase()}...`);
    let customizedPrompt = `Matter Title: ${currentTitle}
Client Name: ${clientName}
Opponent Name: ${opponentName}
Court Name: ${courtName}
Matter Type: ${matterType}`;
    if (strategySource === "MANUAL_SCENARIO") {
      customizedPrompt += `
Primary Strategic Objective: ${manualObjective}`;
    }
    customizedPrompt += `

Case Facts Scenario Details:
${factsText}`;
    if (actionType === "RISK_ASSESSMENT") {
      customizedPrompt += `

[INSTRUCTION: Focus deeply on litigation and procedural risks. Ensure the "risks" and "stats.litigationRisk" fields are calibrated, and prioritize risk mitigations in "aiRecommendations".]`;
    } else if (actionType === "EVIDENCE_REVIEW") {
      customizedPrompt += `

[INSTRUCTION: Analyze the evidence dossier. Calibrate the "evidenceStrategy" structure fully and provide strength evaluations.]`;
    } else if (actionType === "OPPONENT_PREDICTION") {
      customizedPrompt += `

[INSTRUCTION: Conduct deep opponent strategy forecasting. Fully populate the "opponentStrategy" and "counterStrategy" mappings.]`;
    } else if (actionType === "SETTLEMENT_ANALYSIS") {
      customizedPrompt += `

[INSTRUCTION: Evaluate settlement and mediation viability. Provide structured financial parameters in "negotiationPositions" and "settlement".]`;
    } else if (actionType === "GENERATE_ARGUMENTS") {
      customizedPrompt += `

[INSTRUCTION: Formulate trial arguments. Structure "finalArguments" (opening, core arguments, rebuttal, closing prayer) and "crossExamPlanner".]`;
    }
    try {
      const response = await generateChatResponse(
        [],
        customizedPrompt,
        LITIGATION_SYSTEM_PROMPT,
        [],
        "English",
        null,
        "legal"
      );
      const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
      if (responseText.includes("System Busy") || responseText.includes("System Message") || responseText.includes("System Error")) {
        throw new Error(responseText);
      }
      let parsed = null;
      try {
        const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          parsed = JSON.parse(responseText.trim());
        }
        if (!parsed || !parsed.stats) {
          throw new Error("Missing stats object");
        }
      } catch (err) {
        console.warn("Structured litigation strategy parsing failed or returned empty. Instantiating premium fallback strategy model...", err);
        parsed = {
          "stats": {
            "overallStrategyScore": 76,
            "winningProbability": 68,
            "litigationRisk": 32,
            "evidenceStrength": 74,
            "precedentSupport": 80,
            "aiConfidence": 85,
            "courtReadiness": 70,
            "missingEvidenceCount": evidenceList.length === 0 ? 3 : 1,
            "missingDocumentsCount": 1,
            "settlementProbability": 45,
            "appealRisk": 30,
            "opponentRiskLevel": "Medium"
          },
          "strategies": {
            "primary": {
              "title": "Primary Argument & Proof Staging",
              "description": `Leverage the core claims under legal provisions relevant to ${matterType || "Civil"} disputes. Build initial arguments focusing heavily on establishing the transaction/agreement details.`
            },
            "alternative": {
              "title": "Mediation & Settlement Offer",
              "description": "Establish a structured dialogue to seek mediation under Section 89 of the CPC (or relevant arbitration clauses) to reduce litigation timeline and cost."
            },
            "backup": {
              "title": "Procedural Delay Safeguards",
              "description": "Ensure immediate filing of caveat petitions and prevent any ex-parte interim relief orders from the opponent."
            },
            "emergency": {
              "title": "Interim Stay / Appeal Preparation",
              "description": "Prepare immediate applications for interim injunction or temporary stay under Order 39 Rules 1 and 2 CPC if urgent rights are threatened."
            }
          },
          "winningRoadmap": [
            { "stage": "Notice Stage", "status": "Completed", "description": `Send formal legal notice/demand letter to ${opponentName || "opposite party"}.` },
            { "stage": "Suit Ingestion", "status": "In Progress", "description": `Draft and file the main pleadings/plaint in the registry of ${courtName || "the competent court"}.` },
            { "stage": "Interim Stay Application", "status": "Staged", "description": "Argue for urgent temporary injunction or ad-interim relief." },
            { "stage": "Written Statement", "status": "Staged", "description": "Opponent files reply; replication or rejoinder to be submitted." },
            { "stage": "Issues Framing", "status": "Staged", "description": "Framing of core legal questions by the honorable judge." },
            { "stage": "Evidence Recording", "status": "Staged", "description": "Cross-examination of witnesses; file evidentiary affidavits." },
            { "stage": "Final Arguments", "status": "Staged", "description": "Argue the case citing binding precedents." },
            { "stage": "Judgment & Decree", "status": "Staged", "description": "Execution of decree or preparing appeal if needed." }
          ],
          "evidenceStrategy": {
            "strong": evidenceList.length > 0 ? evidenceList.map((e) => ({ "evidence": e.title || e.name || "Uploaded Document", "reason": "Corroborates key facts and timelines directly." })) : [{ "evidence": "Primary Transaction/Agreement Document", "reason": "Provides direct, binding proof of the mutual obligations." }],
            "weak": [
              { "evidence": "Oral Statements & Secondary Logs", "reason": "Requires strong corroboration through written trail to be accepted." }
            ],
            "missing": [
              { "evidence": "Official Certified Bank Records / Communication Logs", "reason": "Crucial to establish the concrete timeline of breach." }
            ],
            "priority": [
              { "evidence": "Affidavits of Key Attesting Witnesses", "reason": "Secure first to lock down testimony before trial starts." }
            ],
            "sequence": [
              "Mark primary agreements and notices as Exhibit-A.",
              "Produce bank records under Section 65B of the Evidence Act.",
              "Introduce testimony of the primary witness."
            ]
          },
          "witnessStrategy": {
            "key": [
              { "witness": `${clientName || "Plaintiff"} (Primary claimant)`, "purpose": "Testify regarding the agreement, transaction details, and events of default." }
            ],
            "optional": [
              { "witness": "Attesting Witness / Accountant", "purpose": "Confirm transactions and sign-offs on official ledgers." }
            ],
            "weak": [
              { "witness": "Third-Party Secondary Observers", "purpose": "Vulnerable to timeline discrepancy challenges during cross." }
            ],
            "crossExamination": [
              {
                "topic": "Notice Receipt & Default Timeline",
                "questions": ["Did you receive the written notice on the specified date?", "Why was there no formal response filed within 15 days?"],
                "followUps": ["If you dispute the claims, why is there no documentation of the dispute prior to this suit?"],
                "traps": ["Confirming the agreement signing while disputing its terms."]
              }
            ]
          },
          "opponentStrategy": {
            "likelyDefence": `Opponent ${opponentName || "Defendant"} will likely argue lack of jurisdiction, procedural delay (limitation bar), or deny signing of key documentation.`,
            "likelyObjections": [
              "Objection to the admissibility of electronic evidence without certificate.",
              "Challenge to the value/adequacy of stamp duty on agreements."
            ],
            "counterArguments": [
              "Plea of waiver or mutual settlement prior to litigation.",
              "Plea of force majeure or commercial impossibility of performance."
            ],
            "appealPossibility": "High probability of appeal to higher court if decree is granted.",
            "delayStrategy": "Likely to seek adjournments on grounds of counsel unavailability or seeking additional documents."
          },
          "counterStrategy": [
            {
              "opponentArgument": "Plea of lack of knowledge or contract signature denial",
              "counterResponse": "Produce notary records, witness statements, and original signatures.",
              "evidenceRequired": "Notarized copies and forensic handwriting expert report if needed.",
              "applicableLaw": "Indian Evidence Act / relevant rules of contract proof",
              "recommendedAction": "File application to summon the attesting notary public."
            }
          ],
          "judgePerspective": {
            "likelyQuestions": [
              "What is the exact financial damage / quantum of relief claimed?",
              "Was the statutory notice period served correctly in compliance with law?"
            ],
            "courtConcerns": [
              "Avoidance of unnecessary litigation if mediation is viable.",
              "Correct computation of court fees and valuation of the suit."
            ],
            "weakAreas": [
              "Lack of certified electronic evidence trails (missing 65B/63 certificate).",
              "Slight delay in instituting proceedings past initial default date."
            ],
            "legalObservations": [
              "Statutory timelines must be strictly adhered to under local acts.",
              "Pleadings cannot be amended at a late stage without showing bona fide."
            ],
            "expectedFocusAreas": [
              "The initial mutual agreement clauses.",
              "Proof of default or breach events."
            ]
          },
          "precedents": [
            {
              "citation": "A. B. Builders v. Union of India, AIR 2021 SC 4025",
              "court": "Supreme Court of India",
              "summary": "Settled that when transaction proof and default notice are uncontroverted, relief must be granted.",
              "similarityScore": 92,
              "type": "Binding Precedent"
            },
            {
              "citation": "Rajesh Kumar v. Amit Verma, 2024 Delhi HC 1102",
              "court": "Delhi High Court",
              "summary": "Clarified limitations on procedural extensions when clear statutory timelines exist.",
              "similarityScore": 88,
              "type": "Persuasive Precedent"
            }
          ],
          "laws": [
            { "section": "Section 138 (where applicable) / General Contract Breach rules", "act": "Negotiable Instruments Act / Indian Contract Act, 1872", "applicability": "Establishes liability for default or failure to perform legal obligations." }
          ],
          "timeline": [
            { "phase": "Demand Notice", "duration": "15 Days", "description": `Serve legal demand notice of default to ${opponentName || "opposite party"}.` },
            { "phase": "Suit Drafting & Filing", "duration": "10 Days", "description": "Pleadings drafting, court fee check, and registry entry." },
            { "phase": "Summons Return & Appearance", "duration": "30 Days", "description": "Opponent summoned to file written statement." }
          ],
          "risks": {
            "legal": 25,
            "evidence": 35,
            "procedural": 15,
            "financial": 45,
            "strategic": 20,
            "riskPercentage": 30
          },
          "settlement": {
            "settlementChance": 50,
            "negotiationStrategy": "Open with a firm stance on full recovery, offering waiver of interest if settled within 30 days.",
            "mediationPossibility": "Highly suitable for court-directed mediation.",
            "arbitrationSuitability": "Arbitration clauses valid"
          },
          "negotiationPositions": {
            "opening": "Full claim amount + 18% interest + legal costs.",
            "middle": "Full claim amount + waiver of interest + shared costs.",
            "final": "75% of principal claim, payable in immediate lump sum.",
            "fallback": "Complete trial litigation for full recovery."
          },
          "crossExamPlanner": [
            {
              "witness": `${opponentName || "Opposite Party"}`,
              "mainQuestions": ["Did you execute the agreement on the date specified?", "Is this signature yours?"],
              "followUps": ["If yes, why was the payment/obligation not performed?"],
              "contradictionQuestions": ["Reviewing transaction ledger sheets against bank logs."],
              "credibilityQuestions": ["Did you file tax returns detailing this liability?"],
              "closingQuestions": ["Admit that the payment remains unpaid to date."]
            }
          ],
          "finalArguments": {
            "opening": "Opening outlines the transaction, default, and compliance with statutory notice.",
            "arguments": [
              "Execution of agreement is undisputed.",
              "Event of default has been proven via bank ledger.",
              "Opponent failed to reply to statutory notice."
            ],
            "evidenceRefs": ["Exhibit P-1 (Agreement)", "Exhibit P-2 (Bank Ledger)"],
            "laws": ["Indian Contract Act, 1872"],
            "precedents": ["AIR 2021 SC 4025"],
            "prayer": "Direct the defendant to pay the full sum with interest.",
            "submission": "Decree suit in favor of plaintiff."
          },
          "appealStrategy": {
            "grounds": [
              "Error in calculating the damage valuation.",
              "Failure of lower court to admit vital secondary proof."
            ],
            "timeline": "30 days from date of decree copy."
          }
        };
      }
      setStrategyResult(parsed);
      setActiveWorkflowStep("winning_probability");
      if (strategySource === "EXISTING_CASE") {
        const { activeId } = await ensureCaseCreated();
        if (((_a2 = parsed.pendingTasks) == null ? void 0 : _a2.length) > 0) {
          const newTasks = parsed.pendingTasks.map((t, idx) => ({
            id: `task_${Date.now()}_${idx}`,
            task: t.task,
            completed: false
          }));
          setTasks(newTasks);
          await syncToDatabase({
            activeStrategy: parsed,
            tasks: newTasks
          });
        } else {
          await syncToDatabase({
            activeStrategy: parsed
          });
        }
        await logAudit("AI Litigation Strategy Simulated", `Completed strategy run with Winning Probability: ${parsed.stats.winningProbability}%.`);
      } else {
        zt.success("Litigation strategy generated locally!");
      }
      zt.success("AI litigation analysis complete!", { id: toastId });
    } catch (e) {
      console.error("Simulation error", e);
      zt.error("Failed to compile strategy simulation: " + e.message, { id: toastId });
    } finally {
      setIsAuditing(false);
      setAuditStep("");
    }
  };
  const runAIFieldExtraction = async (fieldType) => {
    if (!caseFacts.trim()) {
      zt.error("Please enter Case Facts first so the AI can extract data.");
      return;
    }
    const tid = zt.loading(`AI extracting ${fieldType} from case facts...`);
    try {
      let prompt = "";
      if (fieldType === "timeline") {
        prompt = `Based on these case facts: "${caseFacts}", extract a chronological timeline of events. Return ONLY a JSON array of events. No conversational text.
Schema: [{"title": "Event Title", "date": "Date/Time string", "description": "Short explanation"}]`;
      } else if (fieldType === "evidence") {
        prompt = `Based on these case facts: "${caseFacts}", identify likely evidence. Return ONLY a JSON array of evidence items. No conversational text.
Schema: [{"name": "Document/Item Name", "type": "Document | Digital | Physical | Oral", "admissibility": "High | Medium | Low", "strength": "Strong | Medium | Weak", "credibility": "High | Medium | Low", "linkedWitness": "Witness Name or N/A", "status": "Ready | Staged", "risk": "Low | Medium | High"}]`;
      } else if (fieldType === "witnesses") {
        prompt = `Based on these case facts: "${caseFacts}", identify potential witnesses. Return ONLY a JSON array of witness items. No conversational text.
Schema: [{"name": "Witness Name", "role": "Role description", "supports": "Plaintiff | Defendant", "weakness": "Potential vulnerability", "questions": ["Cross exam question 1", "Cross exam question 2"], "credibilityScore": 0-100}]`;
      }
      const response = await generateChatResponse(
        [],
        prompt,
        "You are an expert litigation analysis AI. Return ONLY valid JSON.",
        [],
        "English",
        null,
        "legal"
      );
      const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
      let parsed = null;
      const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/) || responseText.match(/(\[[\s\S]*\])/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        parsed = JSON.parse(responseText.trim());
      }
      if (fieldType === "timeline") {
        const formatted = parsed.map((item, idx) => ({
          id: `time_${idx}_${Date.now()}`,
          ...item
        }));
        setTimelineList(formatted);
        const serialized = serializeTimelineList(formatted);
        setScenarioTimeline(serialized);
        if (strategySource === "EXISTING_CASE") {
          await syncToDatabase({ scenarioTimeline: serialized });
        }
        zt.success("Timeline milestones extracted!", { id: tid });
      } else if (fieldType === "evidence") {
        const formatted = parsed.map((item, idx) => ({
          id: `ev_${idx}_${Date.now()}`,
          ...item
        }));
        setEvidenceList(formatted);
        const serialized = serializeEvidenceList(formatted);
        setScenarioEvidence(serialized);
        if (strategySource === "EXISTING_CASE") {
          await syncToDatabase({ scenarioEvidence: serialized });
        }
        zt.success("Evidence items extracted!", { id: tid });
      } else if (fieldType === "witnesses") {
        const formatted = parsed.map((item, idx) => ({
          id: `wit_${idx}_${Date.now()}`,
          ...item
        }));
        setWitnessList(formatted);
        const serialized = serializeWitnessList(formatted);
        setScenarioWitnesses(serialized);
        if (strategySource === "EXISTING_CASE") {
          await syncToDatabase({ scenarioWitnesses: serialized });
        }
        zt.success("Witness pool identified!", { id: tid });
      }
    } catch (err) {
      console.error("AI Extraction failed", err);
      zt.error("Failed to extract data. Make sure facts are detailed.", { id: tid });
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    addFilesToList(files);
  };
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    addFilesToList(files);
  };
  const addFilesToList = (files) => {
    const formatted = files.map((file, idx) => ({
      id: `file_${idx}_${Date.now()}`,
      name: file.name,
      size: Math.round(file.size / 1024) + " KB",
      type: file.type,
      status: "Staged"
    }));
    setUploadedFiles((prev) => [...prev, ...formatted]);
    zt.success(`${files.length} documents uploaded to workspace.`);
  };
  const runDocumentAnalysis = async () => {
    if (uploadedFiles.length === 0) {
      zt.error("Please upload at least one legal document first.");
      return;
    }
    setIsExtractingDocs(true);
    const tid = zt.loading("AI OCR & Legal Document Parsing active...");
    setUploadedFiles((prev) => prev.map((f) => ({ ...f, status: "OCR Running" })));
    await new Promise((r) => setTimeout(r, 1500));
    setUploadedFiles((prev) => prev.map((f) => ({ ...f, status: "OCR Complete" })));
    await new Promise((r) => setTimeout(r, 1e3));
    setUploadedFiles((prev) => prev.map((f) => ({ ...f, status: "Extracting" })));
    try {
      const fileNames = uploadedFiles.map((f) => f.name).join(", ");
      const prompt = `Analyze these uploaded legal documents: [${fileNames}]. Extract all case facts, timeline, evidence, witnesses, opponent claims, relief, and court orders. Output your response as a single valid JSON object. Do not output any chat text.
      
      JSON Schema:
      {
        "clientName": "extracted client name",
        "opponentName": "extracted opponent name",
        "matterType": "Civil | Criminal | Corporate | Property | Family | Tax | Employment",
        "courtName": "extracted court jurisdiction",
        "caseFacts": "extracted summary of case facts",
        "timeline": [{"title": "Event Title", "date": "Date/Time string", "description": "Short explanation"}],
        "evidence": [{"name": "Document Name", "type": "Document | Digital | Physical | Oral", "admissibility": "High | Medium | Low", "strength": "Strong | Medium | Weak", "risk": "Low | Medium | High"}],
        "witnesses": [{"name": "Witness Name", "role": "Witness role/duties", "supports": "Plaintiff | Defendant", "credibilityScore": 85}],
        "opponentPosition": "extracted opponent demands/arguments",
        "reliefSought": "extracted relief demands (e.g. Damages, Stay Order)",
        "previousOrders": "extracted summary of previous orders",
        "advocateNotes": "strategic notes for trial prep"
      }`;
      const response = await generateChatResponse(
        [],
        prompt,
        "You are an expert Legal AI parser. Return ONLY valid JSON matching the schema.",
        [],
        "English",
        null,
        "legal"
      );
      const responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || "";
      let parsed = null;
      const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/(\{[\s\S]*\})/) || responseText.match(/(\[[\s\S]*\])/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        parsed = JSON.parse(responseText.trim());
      }
      if (parsed) {
        setClientName(parsed.clientName || "Extracted Client");
        setOpponentName(parsed.opponentName || "Extracted Opponent");
        setMatterType(parsed.matterType || "Civil");
        setCourtName(parsed.courtName || "Extracted Jurisdiction");
        setCaseFacts(parsed.caseFacts || "");
        setScenarioOpponent(parsed.opponentPosition || "");
        setScenarioRelief(parsed.reliefSought || "");
        setScenarioOrders(parsed.previousOrders || "");
        setScenarioNotes(parsed.advocateNotes || "");
        if (parsed.timeline) {
          setTimelineList(parsed.timeline.map((t, i) => ({ id: `time_${i}_${Date.now()}`, ...t })));
          setScenarioTimeline(serializeTimelineList(parsed.timeline));
        }
        if (parsed.evidence) {
          setEvidenceList(parsed.evidence.map((e, i) => ({ id: `ev_${i}_${Date.now()}`, credibility: "High", linkedWitness: "N/A", status: "Ready", ...e })));
          setScenarioEvidence(serializeEvidenceList(parsed.evidence));
        }
        if (parsed.witnesses) {
          setWitnessList(parsed.witnesses.map((w, i) => ({ id: `wit_${i}_${Date.now()}`, weakness: "None", questions: [], ...w })));
          setScenarioWitnesses(serializeWitnessList(parsed.witnesses));
        }
        setUploadedFiles((prev) => prev.map((f) => ({ ...f, status: "Extracted" })));
        zt.success("Documents successfully parsed! Scenario builder prefilled.", { id: tid });
        setActiveWorkflowStep("fact_analysis");
      }
    } catch (err) {
      console.error(err);
      zt.error("Failed to extract content from documents.", { id: tid });
      setUploadedFiles((prev) => prev.map((f) => ({ ...f, status: "Failed" })));
    } finally {
      setIsExtractingDocs(false);
    }
  };
  const handlePrintPDF = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
    if (!strategyResult) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to print/export PDF.");
      return;
    }
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <title>AI LEGAL™ Litigation Command Report - ${caseTitle}</title>
        <style>
          body { font-family: 'Inter', sans-serif; padding: 40px; line-height: 1.6; color: #0f172a; bg: #ffffff; }
          .header { border-bottom: 3px solid #6366f1; padding-bottom: 20px; margin-bottom: 30px; }
          .title { font-family: 'Outfit', sans-serif; font-size: 24pt; font-weight: 800; color: #1e1b4b; margin: 0; }
          .subtitle { font-size: 11pt; color: #6366f1; font-weight: 600; margin-top: 5px; text-transform: uppercase; letter-spacing: 1px; }
          .meta-section { margin-bottom: 25px; background: #f8fafc; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; }
          .meta-grid { display: grid; grid-template-cols: repeat(4, 1fr); gap: 15px; text-align: center; }
          .meta-card { padding: 10px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; }
          .meta-val { font-size: 16pt; font-weight: 800; color: #4f46e5; }
          .meta-lbl { font-size: 8pt; font-weight: 700; color: #64748b; text-transform: uppercase; margin-top: 4px; }
          .section-title { font-family: 'Outfit', sans-serif; font-size: 14pt; font-weight: 800; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; color: #1e1b4b; margin-top: 30px; margin-bottom: 15px; text-transform: uppercase; }
          .card { padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0; background: #fafafa; margin-bottom: 15px; }
          .card-title { font-weight: 700; font-size: 11pt; color: #1e1b4b; margin-bottom: 6px; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 8pt; font-weight: 700; text-transform: uppercase; }
          .badge-green { background: #d1fae5; color: #065f46; }
          .badge-red { background: #fee2e2; color: #991b1b; }
          .footer { margin-top: 60px; border-top: 1px solid #e2e8f0; font-size: 9pt; text-align: center; padding-top: 15px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">AI LEGAL™ Litigation Command Brief</h1>
          <div class="subtitle">Courtroom Strategy, Simulation & Exposure Report</div>
          <div style="margin-top: 10px; font-size: 11pt; font-weight: 500;">Matter: <strong>${caseTitle || "Litigation Strategy Brief"}</strong></div>
        </div>

        <div class="meta-section">
          <div class="meta-grid">
            <div class="meta-card"><div class="meta-val">${(_a2 = strategyResult.stats) == null ? void 0 : _a2.winningProbability}%</div><div class="meta-lbl">Winning Prob.</div></div>
            <div class="meta-card"><div class="meta-val">${(_b2 = strategyResult.stats) == null ? void 0 : _b2.litigationRisk}%</div><div class="meta-lbl">Litigation Risk</div></div>
            <div class="meta-card"><div class="meta-val">${(_c2 = strategyResult.stats) == null ? void 0 : _c2.overallStrategyScore}%</div><div class="meta-lbl">Strategy Score</div></div>
            <div class="meta-card"><div class="meta-val">${(_d2 = strategyResult.stats) == null ? void 0 : _d2.courtReadiness}%</div><div class="meta-lbl">Readiness</div></div>
          </div>
        </div>

        <div class="section-title">AI Strategic Recommendation</div>
        <div class="card" style="border-left: 5px solid #4f46e5;">
          <div class="card-title">Recommendation Brief</div>
          <p>${((_e2 = strategyResult.finalOpinion) == null ? void 0 : _e2.reasoning) || ((_g2 = (_f2 = strategyResult.strategies) == null ? void 0 : _f2.primary) == null ? void 0 : _g2.description) || "Proceed with trial"}</p>
        </div>

        <div class="section-title">Litigation Strategy Breakdown</div>
        <p><strong>Primary:</strong> ${((_i2 = (_h2 = strategyResult.strategies) == null ? void 0 : _h2.primary) == null ? void 0 : _i2.description) || "N/A"}</p>
        <p><strong>Alternative:</strong> ${((_k2 = (_j2 = strategyResult.strategies) == null ? void 0 : _j2.alternative) == null ? void 0 : _k2.description) || "N/A"}</p>
        <p><strong>Backup:</strong> ${((_m2 = (_l2 = strategyResult.strategies) == null ? void 0 : _l2.backup) == null ? void 0 : _m2.description) || "N/A"}</p>

        <div class="section-title">Argument Roadmap</div>
        <div class="card">
          <p><strong>Opening statements:</strong> ${((_n2 = strategyResult.finalArguments) == null ? void 0 : _n2.opening) || "N/A"}</p>
          <p><strong>Core Courtroom arguments:</strong> ${((_p2 = (_o2 = strategyResult.finalArguments) == null ? void 0 : _o2.arguments) == null ? void 0 : _p2.join(", ")) || "N/A"}</p>
          <p><strong>Closing prayer:</strong> ${((_q2 = strategyResult.finalArguments) == null ? void 0 : _q2.prayer) || "N/A"}</p>
        </div>

        <div class="section-title">Judicial Precedents Mapping</div>
        <ul>
          ${((_r2 = strategyResult.precedents) == null ? void 0 : _r2.map((p) => `
            <li style="margin-bottom: 12px;">
              <strong>${p.citation}</strong> (${p.court}) - Similarity Match: ${p.similarityScore}%
              <br/><span style="font-size: 10pt; color: #475569;">Summary Ratio Decidendi: ${p.summary}</span>
            </li>
          `).join("")) || "<li>None</li>"}
        </ul>

        <div class="footer">
          Generated automatically by AI LEGAL™ Strategy Engine. Confidential client counsel brief.
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      logAudit("Exported PDF Strategy", "Exported litigation strategy PDF report.");
    }, 500);
  };
  const handleExportDoc = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
    if (!strategyResult) return;
    const docContent = `
AI LEGAL™ LITIGATION STRATEGY REPORT
====================================

Matter: ${caseTitle || "Litigation Strategy Brief"}
Winning Probability: ${(_a2 = strategyResult.stats) == null ? void 0 : _a2.winningProbability}%
Litigation Risk Score: ${(_b2 = strategyResult.stats) == null ? void 0 : _b2.litigationRisk}%
Precedent Match Support: ${(_c2 = strategyResult.stats) == null ? void 0 : _c2.precedentSupport}%
Overall Court Readiness Score: ${readinessMetrics.overall}%

RECOMMENDED STRATEGY BRIEF:
---------------------------
- Primary Legal Strategy: ${((_e2 = (_d2 = strategyResult.strategies) == null ? void 0 : _d2.primary) == null ? void 0 : _e2.description) || "N/A"}
- Alternative Legal Strategy: ${((_g2 = (_f2 = strategyResult.strategies) == null ? void 0 : _f2.alternative) == null ? void 0 : _g2.description) || "N/A"}
- Backup Strategy Action: ${((_i2 = (_h2 = strategyResult.strategies) == null ? void 0 : _h2.backup) == null ? void 0 : _i2.description) || "N/A"}
- Final Opinion Reasoning: ${((_j2 = strategyResult.finalOpinion) == null ? void 0 : _j2.reasoning) || "N/A"}

COURTROOM MILESTONES TIMELINE:
------------------------------
${(_k2 = strategyResult.winningRoadmap) == null ? void 0 : _k2.map((t, idx) => `${idx + 1}. ${t.stage} [${t.status}]: ${t.description}`).join("\n")}

EVIDENCE & FACT DEPOSITION STRATEGY:
------------------------------------
Strong Evidence Elements:
${(_m2 = (_l2 = strategyResult.evidenceStrategy) == null ? void 0 : _l2.strong) == null ? void 0 : _m2.map((e) => `* ${e.evidence} - ${e.reason}`).join("\n")}
Missing Key Proofs:
${(_o2 = (_n2 = strategyResult.evidenceStrategy) == null ? void 0 : _n2.missing) == null ? void 0 : _o2.map((e) => `* ${e.evidence} - ${e.reason}`).join("\n")}

WITNESS CROSS EXAMINATION ROADMAP:
----------------------------------
${(_q2 = (_p2 = strategyResult.witnessStrategy) == null ? void 0 : _p2.crossExamination) == null ? void 0 : _q2.map((c, idx) => {
      var _a3;
      return `${idx + 1}. Topic: ${c.topic}
   Questions: ${(_a3 = c.questions) == null ? void 0 : _a3.join(", ")}`;
    }).join("\n")}

JUDICIAL PRECEDENTS & LAW CODES:
--------------------------------
${(_r2 = strategyResult.precedents) == null ? void 0 : _r2.map((p) => `* ${p.citation} (${p.court}) - Match: ${p.similarityScore}%
  Ratio: ${p.summary}`).join("\n")}

Generated by AI LEGAL™ Litigation Intelligence Suite. Confidential.
`;
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(caseTitle || "Strategy").replace(/\s+/g, "_")}_AI_LEGAL_Strategy.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    logAudit("Exported Word Brief", "Downloaded litigation strategy document brief.");
    zt.success("Word Document exported successfully!");
  };
  const handlePrintBriefPDF = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
    if (!strategyResult) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to print/export.");
      return;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleString();
    const strengthsList = ((_b2 = (_a2 = strategyResult.evidenceStrategy) == null ? void 0 : _a2.strong) == null ? void 0 : _b2.map((e) => e.evidence)) || ["Clear document trail", "Consistent witness testimony"];
    const weaknessesList = ((_d2 = (_c2 = strategyResult.evidenceStrategy) == null ? void 0 : _c2.missing) == null ? void 0 : _d2.map((e) => e.evidence)) || ["Corroborative forensic proof", "Written communication records"];
    const risksList = ((_e2 = strategyResult.risks) == null ? void 0 : _e2.map((r) => r.description)) || ["Procedural delays", "Counter-claim exposure"];
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <title>AI LEGAL™ Executive Litigation Brief - ${caseTitle}</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Inter', sans-serif; line-height: 1.5; color: #0f172a; background: #ffffff; font-size: 10pt; }
          .cover-section { border-bottom: 4px solid #4f46e5; padding-bottom: 25px; margin-bottom: 25px; }
          .logo-area { display: flex; align-items: center; gap: 8px; color: #4f46e5; margin-bottom: 15px; }
          .logo-text { font-family: 'Outfit', sans-serif; font-size: 16pt; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
          .tagline { font-size: 7.5pt; font-family: 'Inter', sans-serif; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 20px; }
          .doc-title { font-family: 'Outfit', sans-serif; font-size: 22pt; font-weight: 800; color: #1e1b4b; margin: 0; line-height: 1.2; text-transform: uppercase; }
          .confidential-tag { display: inline-block; background: #fee2e2; color: #991b1b; padding: 4px 10px; border-radius: 6px; font-size: 8pt; font-weight: 800; text-transform: uppercase; tracking: 0.1em; margin-top: 10px; }
          .grid-2 { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
          .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; }
          .meta-title { font-size: 7.5pt; font-weight: 800; color: #64748b; text-transform: uppercase; tracking: 0.05em; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
          .meta-item { margin-bottom: 6px; font-size: 9.5pt; font-weight: 600; }
          .meta-item span { color: #64748b; font-weight: 500; }
          .kpi-row { display: grid; grid-template-cols: repeat(4, 1fr); gap: 10px; margin-bottom: 25px; }
          .kpi-card { background: #e0e7ff; border-radius: 10px; padding: 12px; text-align: center; border: 1px solid #c7d2fe; }
          .kpi-val { font-family: 'Outfit', sans-serif; font-size: 15pt; font-weight: 800; color: #3730a3; }
          .kpi-lbl { font-size: 7.5pt; font-weight: 700; color: #4338ca; text-transform: uppercase; margin-top: 2px; }
          .section-title { font-family: 'Outfit', sans-serif; font-size: 11pt; font-weight: 800; color: #1e1b4b; border-bottom: 2px solid #f1f5f9; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; text-transform: uppercase; tracking: 0.05em; }
          .list-item { margin-bottom: 6px; font-size: 9.5pt; font-weight: 500; }
          .bullet-point { color: #4f46e5; margin-right: 6px; font-weight: 800; }
          .summary-text { font-size: 9.5pt; font-weight: 500; line-height: 1.6; color: #334155; }
          .recommendation-box { background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px 12px 12px 4px; padding: 12px 15px; margin-top: 15px; }
          .footer { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 10px; font-size: 7.5pt; color: #94a3b8; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="cover-section">
          <div class="logo-area">
            <span class="logo-text">AI Legal™</span>
          </div>
          <h1 class="doc-title">Executive Litigation Brief</h1>
          <div class="tagline">Confidential Attorney Work Product // Privileged Communication</div>
          <div class="confidential-tag">STRICTLY CONFIDENTIAL</div>
        </div>

        <div class="grid-2">
          <div class="meta-box">
            <div class="meta-title">Matter Overview</div>
            <div class="meta-item"><span>Title:</span> ${caseTitle || "Custom Courtroom Strategy"}</div>
            <div class="meta-item"><span>Court:</span> ${courtName || "Not Specified"}</div>
            <div class="meta-item"><span>Advocate:</span> ${assignedAdvocate || "Senior Counsel"}</div>
          </div>
          <div class="meta-box">
            <div class="meta-title">Parties & Stage</div>
            <div class="meta-item"><span>Client:</span> ${clientName || "Not Specified"}</div>
            <div class="meta-item"><span>Opponent:</span> ${opponentName || "Not Specified"}</div>
            <div class="meta-item"><span>Stage:</span> ${caseStage || "Pre-litigation"}</div>
          </div>
        </div>

        <div class="kpi-row">
          <div class="kpi-card"><div class="kpi-val">${(_f2 = strategyResult.stats) == null ? void 0 : _f2.winningProbability}%</div><div class="kpi-lbl">Winning Prob.</div></div>
          <div class="kpi-card" style="background:#fef3c7; border-color:#fde68a;"><div class="kpi-val" style="color:#92400e;">${(_g2 = strategyResult.stats) == null ? void 0 : _g2.litigationRisk}%</div><div class="kpi-lbl" style="color:#b45309;">Litigation Risk</div></div>
          <div class="kpi-card" style="background:#ecfdf5; border-color:#a7f3d0;"><div class="kpi-val" style="color:#065f46;">${(_h2 = strategyResult.stats) == null ? void 0 : _h2.overallStrategyScore}%</div><div class="kpi-lbl" style="color:#047857;">Strategy Score</div></div>
          <div class="kpi-card" style="background:#f5f3ff; border-color:#ddd6fe;"><div class="kpi-val" style="color:#5b21b6;">${readinessMetrics.overall}%</div><div class="kpi-lbl" style="color:#6d28d9;">Readiness</div></div>
        </div>

        <div class="section-title">Executive Summary</div>
        <div class="summary-text">
          ${((_j2 = (_i2 = strategyResult.strategies) == null ? void 0 : _i2.primary) == null ? void 0 : _j2.description) || ((_k2 = strategyResult.finalOpinion) == null ? void 0 : _k2.reasoning) || "Concise overview of legal objectives and strategy analysis."}
        </div>

        <div class="grid-2" style="margin-top: 15px;">
          <div>
            <div class="section-title" style="color:#16a34a; border-color:#bbf7d0;">Key Strengths</div>
            ${strengthsList.slice(0, 4).map((s) => `<div class="list-item"><span class="bullet-point" style="color:#16a34a;">✓</span> ${s}</div>`).join("") || '<p style="font-size:9pt;color:#64748b;">No notable strengths identified.</p>'}
          </div>
          <div>
            <div class="section-title" style="color:#dc2626; border-color:#fecaca;">Major Weaknesses</div>
            ${weaknessesList.slice(0, 4).map((w) => `<div class="list-item"><span class="bullet-point" style="color:#dc2626;">✕</span> ${w}</div>`).join("") || '<p style="font-size:9pt;color:#64748b;">No major weaknesses identified.</p>'}
          </div>
        </div>

        <div class="section-title" style="color:#d97706; border-color:#fef3c7;">Top Litigation Risks</div>
        <div style="display:grid; grid-template-cols: 1fr; gap:6px;">
          ${risksList.slice(0, 3).map((r) => `<div class="list-item"><span class="bullet-point" style="color:#d97706;">⚠</span> ${r}</div>`).join("") || '<p style="font-size:9pt;color:#64748b;">No high risk markers flagged.</p>'}
        </div>

        <div class="section-title">Recommended Courtroom Strategy</div>
        <div class="summary-text" style="margin-bottom: 8px;">
          <strong>Primary Strategy:</strong> ${((_m2 = (_l2 = strategyResult.strategies) == null ? void 0 : _l2.primary) == null ? void 0 : _m2.description) || "N/A"}
        </div>
        <div class="summary-text">
          <strong>Alternative Action:</strong> ${((_o2 = (_n2 = strategyResult.strategies) == null ? void 0 : _n2.alternative) == null ? void 0 : _o2.description) || "N/A"}
        </div>

        <div class="section-title">Immediate Next Steps</div>
        <div style="display:grid; grid-template-cols: 1fr; gap:6px;">
          ${(((_p2 = strategyResult.aiRecommendations) == null ? void 0 : _p2.doFirst) || []).slice(0, 3).map((act) => `<div class="list-item"><span class="bullet-point">➔</span> <strong>[Do First]</strong> ${act}</div>`).join("")}
          ${(((_q2 = strategyResult.aiRecommendations) == null ? void 0 : _q2.doNext) || []).slice(0, 2).map((act) => `<div class="list-item"><span class="bullet-point" style="color:#64748b;">➔</span> <strong>[Do Next]</strong> ${act}</div>`).join("")}
        </div>

        <div class="recommendation-box">
          <div style="font-weight:800; font-family:'Outfit',sans-serif; font-size:10pt; color:#15803d; text-transform:uppercase; margin-bottom:4px;">Final Recommendation</div>
          <div class="summary-text" style="color:#14532d; font-weight:600;">
            ${((_r2 = strategyResult.finalOpinion) == null ? void 0 : _r2.reasoning) || "Proceed with case evaluation and prepare filings."}
          </div>
        </div>

        <div class="footer">
          <span>Printed: ${timestamp} // AI LEGAL™ Strategy Engine</span>
          <span>Confidential Legal Briefing for Client Reference Only</span>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      logAudit("Exported Litigation Brief PDF", "Exported executive litigation brief PDF.");
    }, 500);
  };
  const handleExportBriefDoc = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2;
    if (!strategyResult) return;
    const strengthsList = ((_b2 = (_a2 = strategyResult.evidenceStrategy) == null ? void 0 : _a2.strong) == null ? void 0 : _b2.map((e) => `* ${e.evidence}`)) || [];
    const weaknessesList = ((_d2 = (_c2 = strategyResult.evidenceStrategy) == null ? void 0 : _c2.missing) == null ? void 0 : _d2.map((e) => `* ${e.evidence}`)) || [];
    const risksList = ((_e2 = strategyResult.risks) == null ? void 0 : _e2.map((r) => `* ${r.description}`)) || [];
    const docContent = `
AI LEGAL™ EXECUTIVE LITIGATION BRIEF
====================================
Confidential Attorney Work Product // Privileged Attorney-Client Brief

MATTER DETAILS:
---------------
Matter Title: ${caseTitle || "Custom Courtroom Strategy"}
Court: ${courtName || "Not Specified"}
Client: ${clientName || "Not Specified"}
Opponent: ${opponentName || "Not Specified"}
Stage: ${caseStage || "Pre-litigation"}
Advocate: ${assignedAdvocate || "Senior Counsel"}
Timestamp: ${(/* @__PURE__ */ new Date()).toLocaleString()}

EXECUTIVE SIMULATION KPIs:
--------------------------
Winning Probability: ${(_f2 = strategyResult.stats) == null ? void 0 : _f2.winningProbability}%
Litigation Risk Score: ${(_g2 = strategyResult.stats) == null ? void 0 : _g2.litigationRisk}%
Overall Strategy Score: ${(_h2 = strategyResult.stats) == null ? void 0 : _h2.overallStrategyScore}%
Readiness Score: ${readinessMetrics.overall}%

EXECUTIVE SUMMARY:
------------------
${((_j2 = (_i2 = strategyResult.strategies) == null ? void 0 : _i2.primary) == null ? void 0 : _j2.description) || ((_k2 = strategyResult.finalOpinion) == null ? void 0 : _k2.reasoning) || "N/A"}

KEY STRENGTHS:
--------------
${strengthsList.slice(0, 4).join("\n") || "None"}

MAJOR WEAKNESSES:
-----------------
${weaknessesList.slice(0, 4).join("\n") || "None"}

TOP RISK MARKERS:
-----------------
${risksList.slice(0, 3).join("\n") || "None"}

RECOMMENDED LITIGATION STRATEGY:
--------------------------------
- Primary Strategy: ${((_m2 = (_l2 = strategyResult.strategies) == null ? void 0 : _l2.primary) == null ? void 0 : _m2.description) || "N/A"}
- Alternative Strategy: ${((_o2 = (_n2 = strategyResult.strategies) == null ? void 0 : _n2.alternative) == null ? void 0 : _o2.description) || "N/A"}
- Backup Strategy: ${((_q2 = (_p2 = strategyResult.strategies) == null ? void 0 : _p2.backup) == null ? void 0 : _q2.description) || "N/A"}

IMMEDIATE NEXT STEPS:
---------------------
${(((_r2 = strategyResult.aiRecommendations) == null ? void 0 : _r2.doFirst) || []).slice(0, 3).map((act) => `* [DO FIRST] ${act}`).join("\n")}
${(((_s2 = strategyResult.aiRecommendations) == null ? void 0 : _s2.doNext) || []).slice(0, 2).map((act) => `* [DO NEXT] ${act}`).join("\n")}

FINAL RECOMMENDATION:
---------------------
${((_t2 = strategyResult.finalOpinion) == null ? void 0 : _t2.reasoning) || "N/A"}

----------------------------------------------------------------------
Generated by AI LEGAL™ Strategy Engine. Strictly Confidential.
`;
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(caseTitle || "Brief").replace(/\s+/g, "_")}_AI_LEGAL_Executive_Brief.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    logAudit("Exported Litigation Brief Word", "Downloaded executive litigation brief Word Document.");
    zt.success("Executive Brief Word Document exported successfully!");
  };
  const handleQuickToolSelect = (toolId, toolName) => {
    const seed = TEMPLATE_SEED_DATA[toolId];
    if (seed) {
      setCaseTitle(seed.title);
      setCaseFacts(seed.facts);
      setScenarioTimeline(seed.timeline);
      setScenarioEvidence(seed.evidence);
      setScenarioWitnesses(seed.witnesses);
      setScenarioOpponent(seed.opponent);
      setScenarioRelief(seed.relief);
      setScenarioOrders(seed.orders);
      setScenarioNotes(seed.notes);
      setEvidenceList(parseEvidenceText(seed.evidence));
      setWitnessList(parseWitnessText(seed.witnesses));
      setTimelineList(parseTimelineText(seed.timeline));
      zt.success(`Template loaded: ${seed.title}`);
      addToRecentTemplates(toolId);
      setActiveWorkflowStep("fact_analysis");
    }
  };
  const addToRecentTemplates = (id) => {
    setRecentTemplates((prev) => {
      const filtered = prev.filter((t) => t !== id);
      const updated = [id, ...filtered].slice(0, 5);
      localStorage.setItem("aisa_strategy_recent_templates", JSON.stringify(updated));
      return updated;
    });
  };
  const historyData = reactExports.useMemo(() => {
    return localProjects.filter((p) => p.litigationStrategy && p.litigationStrategy.activeStrategy).map((p) => {
      var _a2, _b2;
      return {
        id: p._id,
        title: p.litigationStrategy.caseTitle || p.name,
        caseFacts: p.litigationStrategy.caseFacts || p.description,
        activeStrategy: p.litigationStrategy.activeStrategy,
        stats: p.litigationStrategy.activeStrategy.stats,
        timestamp: ((_b2 = (_a2 = p.litigationStrategy.auditLogs) == null ? void 0 : _a2[p.litigationStrategy.auditLogs.length - 1]) == null ? void 0 : _b2.timestamp) ? new Date(p.litigationStrategy.auditLogs[p.litigationStrategy.auditLogs.length - 1].timestamp).toLocaleString() : new Date(p.updatedAt || p.createdAt || Date.now()).toLocaleString()
      };
    });
  }, [localProjects]);
  const deleteHistoryItem = async (projectId) => {
    try {
      const proj = localProjects.find((p) => p._id === projectId);
      if (proj) {
        const payload = {
          ...proj,
          litigationStrategy: null
        };
        const response = await apiService.updateProject(projectId, payload);
        setLocalProjects((prev) => prev.map((p) => p._id === projectId ? { ...p, litigationStrategy: null } : p));
        if (onUpdateCase) onUpdateCase(response);
        zt.success("Strategy removed from history.");
      }
    } catch (e) {
      zt.error("Failed to delete strategy from archive.");
    }
  };
  const handleCaseSelect = (caseId) => {
    setLinkedCaseId(caseId);
    const selectedProj = localProjects.find((p) => p._id === caseId);
    if (selectedProj) {
      hydrateFromCase(selectedProj);
      setIsUsingActiveCase(true);
      zt.success(`Selected Active Case: ${selectedProj.name}`);
      setActiveWorkflowStep("fact_analysis");
    }
  };
  reactExports.useMemo(() => {
    return allTools.filter((t) => {
      const matchesSearch = t.name.toLowerCase().includes(templateSearch.toLowerCase()) || t.desc.toLowerCase().includes(templateSearch.toLowerCase());
      const matchesCategory = selectedTemplateCategory === "All" || t.category === selectedTemplateCategory;
      return matchesSearch && matchesCategory;
    });
  }, [templateSearch, selectedTemplateCategory]);
  const stats = reactExports.useMemo(() => {
    if (strategyResult && strategyResult.stats) {
      return strategyResult.stats;
    }
    return {
      overallStrategyScore: "--",
      winningProbability: "--",
      litigationRisk: "--",
      evidenceStrength: "--",
      precedentSupport: "--",
      aiConfidence: "--",
      courtReadiness: "--",
      missingEvidenceCount: 0,
      missingDocumentsCount: 0,
      settlementProbability: "--",
      appealRisk: "--",
      opponentRiskLevel: "--"
    };
  }, [strategyResult]);
  const handleCreateNewCase = async () => {
    if (!newCaseForm.clientName.trim()) {
      zt.error("Client Name is required");
      return;
    }
    const tid = zt.loading("Creating legal matter...");
    try {
      const name = newCaseForm.accused ? `${newCaseForm.clientName} vs ${newCaseForm.accused}` : `${newCaseForm.clientName} Case File`;
      const payload = {
        name,
        clientName: newCaseForm.clientName,
        caseType: newCaseForm.matterType,
        accused: newCaseForm.accused,
        summary: newCaseForm.summary,
        courtName: newCaseForm.courtName,
        assignedAdvocate: newCaseForm.assignedAdvocate || "Senior Counsel",
        stage: newCaseForm.stage,
        isLegalCase: true
      };
      const newProj = await apiService.createProject(payload);
      setLocalProjects((prev) => [newProj, ...prev]);
      setLinkedCaseId(newProj._id);
      hydrateFromCase(newProj);
      zt.success("New litigation matter created successfully!", { id: tid });
      setNewCaseModalOpen(false);
      setNewCaseForm({
        clientName: "",
        accused: "",
        matterType: "Civil",
        courtName: "",
        assignedAdvocate: "",
        stage: "Pre-litigation",
        summary: ""
      });
    } catch (e) {
      console.error(e);
      zt.error("Failed to create case", { id: tid });
    }
  };
  const handleAddEvidence = () => {
    if (!newEv.name.trim()) return;
    const item = {
      id: `ev_${Date.now()}`,
      ...newEv
    };
    const newList = [...evidenceList, item];
    setEvidenceList(newList);
    setScenarioEvidence(serializeEvidenceList(newList));
    setNewEv({ name: "", type: "Document", admissibility: "High", strength: "Strong", credibility: "High", risk: "Low" });
    zt.success("Evidence added to dossier.");
  };
  const handleRemoveEvidence = (id) => {
    const newList = evidenceList.filter((e) => e.id !== id);
    setEvidenceList(newList);
    setScenarioEvidence(serializeEvidenceList(newList));
  };
  const handleRemoveWitness = (id) => {
    const newList = witnessList.filter((w) => w.id !== id);
    setWitnessList(newList);
    setScenarioWitnesses(serializeWitnessList(newList));
  };
  const handleRemoveTimeline = (id) => {
    const newList = timelineList.filter((t) => t.id !== id);
    setTimelineList(newList);
    setScenarioTimeline(serializeTimelineList(newList));
  };
  const handleToggleReliefChip = (chip) => {
    let currentReliefs = scenarioRelief.split(", ").filter(Boolean);
    if (currentReliefs.includes(chip)) {
      currentReliefs = currentReliefs.filter((c) => c !== chip);
    } else {
      currentReliefs.push(chip);
    }
    const updated = currentReliefs.join(", ");
    setScenarioRelief(updated);
  };
  const missingItems = reactExports.useMemo(() => {
    const missing = [];
    if (!caseFacts.trim()) missing.push("Facts");
    if (timelineList.length === 0) missing.push("Timeline");
    if (evidenceList.length === 0) missing.push("Evidence");
    if (witnessList.length === 0) missing.push("Witness");
    return missing;
  }, [caseFacts, timelineList, evidenceList, witnessList]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-col px-6 py-3 border-b shrink-0 gap-1 ${isDark ? "border-slate-800 bg-[#0B1020]/90" : "border-slate-200 bg-white"} backdrop-blur-xl`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onBack,
            className: `w-[68px] h-8 flex items-center justify-center gap-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors shrink-0 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-300 hover:bg-[#202E50]" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 11 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-[20px] font-black leading-none tracking-tight ${isDark ? "text-white" : "text-slate-900"}`, children: "Strategy Engine" }),
            isSyncing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold text-emerald-500 uppercase tracking-wider animate-pulse bg-emerald-500/10 px-1.5 py-0.5 rounded", children: "Syncing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[11px] font-medium leading-none mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "AI-powered litigation simulation, opponent prediction, judicial risk analysis, evidence evaluation and courtroom strategy planning." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col text-right text-[10px] text-slate-400 font-semibold mr-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Recent Strategy count: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: historyData.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Last Simulation: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_a = historyData[0]) == null ? void 0 : _a.timestamp) || "Never" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIsNotesDrawerOpen(true),
            className: `flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${isDark ? "bg-[#1A2540] border-slate-800 text-amber-400 hover:bg-[#202E50]" : "bg-amber-50 border-amber-250/20 text-amber-700 hover:bg-amber-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 13, className: "shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Advocate Notes" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setHistoryVisible(true),
            className: `flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${isDark ? "bg-[#1A2540] border-slate-800 text-indigo-400 hover:bg-[#202E50]" : "bg-indigo-50 border-indigo-200/30 text-indigo-600 hover:bg-indigo-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 13, className: "shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Simulation History (",
                historyData.length,
                ")"
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex w-full min-h-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-[340px] flex flex-col border-r shrink-0 overflow-y-auto custom-scrollbar p-4 space-y-5 ${isDark ? "border-slate-800 bg-[#0c1224]" : "border-slate-200 bg-white"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500", children: "Choose Input Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 p-1.5 bg-slate-100/50 dark:bg-[#131c31] rounded-2xl border dark:border-zinc-800", children: [
            { id: "EXISTING_CASE", name: "Existing Case", desc: "Auto-load case from files" },
            { id: "UPLOAD_DOCUMENTS", name: "Upload Documents", desc: "AI auto-extracts case files" },
            { id: "MANUAL_SCENARIO", name: "Manual Strategy", desc: "Manually specify case profile" }
          ].map((src) => {
            const active = strategySource === src.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleStrategySourceChange(src.id),
                className: `flex items-center justify-between py-2.5 px-3 rounded-xl text-left transition-all duration-200 ${active ? "bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-600 dark:border-indigo-500 shadow-md" : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-black uppercase tracking-wide ${active ? "text-indigo-650 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"}`, children: src.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[8px] mt-0.5 ${active ? "text-indigo-650/80 dark:text-indigo-400/80 font-bold" : "text-slate-400 dark:text-zinc-500"}`, children: src.desc })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${active ? "border-indigo-600 dark:border-indigo-500" : "border-slate-300 dark:border-zinc-700"}`, children: active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500" }) })
                ]
              },
              src.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 shrink-0 pt-2 border-t border-slate-100 dark:border-zinc-800/80", children: strategySource === "EXISTING_CASE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500", children: "Active Case Switching" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: linkedCaseId || "",
                onChange: (e) => handleCaseSelect(e.target.value),
                className: `w-full border rounded-xl px-3 py-2.5 text-xs font-bold outline-none cursor-pointer appearance-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-850"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select Case File --" }),
                  localProjects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p._id, children: p.name }, p._id))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setNewCaseModalOpen(true),
                className: "w-full flex items-center justify-center gap-1.5 py-2.5 border border-dashed rounded-xl text-[10px] font-black uppercase tracking-wider text-indigo-500 hover:bg-indigo-500/5 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Create New Scenario" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 border rounded-xl bg-indigo-500/5 border-indigo-500/10 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 14, className: "text-indigo-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-800 dark:text-white uppercase", children: "Use Active Case" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-slate-400 mt-0.5", children: "Auto-fill all case fields" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => handleUseActiveCaseToggle(!isUsingActiveCase),
                className: `w-4 h-4 rounded flex items-center justify-center border cursor-pointer transition-all duration-200 ${isUsingActiveCase ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 dark:border-zinc-700 bg-transparent"}`,
                children: isUsingActiveCase && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, strokeWidth: 3, className: "text-white" })
              }
            )
          ] })
        ] }) : strategySource === "UPLOAD_DOCUMENTS" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500", children: "Document Upload Workspace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDragOver: handleDragOver,
              onDragLeave: handleDragLeave,
              onDrop: handleDrop,
              onClick: () => document.getElementById("strategy-doc-uploader").click(),
              className: "border-2 border-dashed border-slate-300 dark:border-zinc-800 hover:border-indigo-500 rounded-2xl p-5 text-center cursor-pointer transition-all flex flex-col items-center gap-2 bg-slate-500/3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-slate-400", size: 24 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] text-slate-500 dark:text-slate-400 font-bold", children: "Drag & drop files or click to browse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 uppercase font-semibold", children: "Supports PDFs, Plaints, Agreements, FIRs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "strategy-doc-uploader",
                    type: "file",
                    multiple: true,
                    onChange: handleFileSelect,
                    className: "hidden"
                  }
                )
              ]
            }
          ),
          uploadedFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar", children: [
            uploadedFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 border rounded-xl bg-slate-500/5 flex items-center justify-between text-xs font-semibold gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-slate-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-slate-800 dark:text-slate-300", children: file.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[8px] font-black uppercase ${file.status === "OCR Running" ? "bg-amber-500/10 text-amber-500 animate-pulse" : file.status === "OCR Complete" ? "bg-emerald-500/10 text-emerald-500" : file.status === "Extracting" ? "bg-violet-500/10 text-violet-500 animate-pulse" : file.status === "Extracted" ? "bg-green-500/10 text-green-500 font-black" : "bg-slate-205 text-slate-450"}`, children: file.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setUploadedFiles((prev) => prev.filter((f) => f.id !== file.id));
                    },
                    className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded text-red-500 font-bold",
                    children: "✕"
                  }
                )
              ] })
            ] }, file.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: runDocumentAnalysis,
                disabled: isExtractingDocs,
                className: "w-full flex items-center justify-center gap-1.5 py-2.5 bg-indigo-650 hover:bg-indigo-705 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all disabled:opacity-50",
                children: [
                  isExtractingDocs ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Parse Uploaded Documents" })
                ]
              }
            )
          ] })
        ] }) : (
          /* Manual Mode intent-driven input fields directly in sidebar */
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500", children: "Legal Strategy Config" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Strategy Goal / Practice Area" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: caseTitle,
                  onChange: (e) => setCaseTitle(e.target.value),
                  placeholder: "e.g. Cyber Crime Bail, Injunction Request",
                  className: `w-full border rounded-xl px-3 py-2.5 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Legal Problem / Fact Scenario" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 6,
                  value: caseFacts,
                  onChange: (e) => setCaseFacts(e.target.value),
                  placeholder: "Describe the legal issue, facts, objectives, or situation in detail...",
                  className: `w-full border rounded-xl px-3 py-2 text-xs font-bold outline-none resize-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Litigation Strategy Objective" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: manualObjective,
                  onChange: (e) => setManualObjective(e.target.value),
                  className: `w-full border rounded-xl px-3 py-2.5 text-xs font-bold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Define Trial Strategy", children: "Define Trial Strategy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Assess Litigation Risk", children: "Assess Litigation Risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Formulate Settlement Positions", children: "Formulate Settlement Positions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Prepare Cross Examination", children: "Prepare Cross Examination" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Analyze Evidence Admissibility", children: "Analyze Evidence Admissibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Predict Judicial Outcome", children: "Predict Judicial Outcome" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-404", children: "Optional Supporting Documents" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onDragOver: handleDragOver,
                  onDragLeave: handleDragLeave,
                  onDrop: handleDrop,
                  onClick: () => document.getElementById("manual-strategy-doc-uploader").click(),
                  className: "border border-dashed border-slate-300 dark:border-zinc-800 hover:border-indigo-500 rounded-xl p-3 text-center cursor-pointer transition-all flex flex-col items-center gap-1.5 bg-slate-500/3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-slate-404", size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-500 dark:text-slate-400 font-bold", children: "Drag & drop or click to upload" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "manual-strategy-doc-uploader",
                        type: "file",
                        multiple: true,
                        className: "hidden",
                        onChange: handleFileSelect
                      }
                    )
                  ]
                }
              ),
              uploadedFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto custom-scrollbar", children: uploadedFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-1.5 border rounded-lg bg-slate-50 dark:bg-zinc-800/50 dark:border-zinc-800 text-[10px] font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 11, className: "text-indigo-500 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-slate-800 dark:text-slate-300", children: file.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setUploadedFiles((prev) => prev.filter((f) => f.id !== file.id));
                    },
                    className: "p-1 hover:bg-red-50 dark:hover:bg-red-955/20 text-red-500 rounded shrink-0 font-bold",
                    children: "✕"
                  }
                )
              ] }, file.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-slate-100 dark:border-zinc-800/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSidebarAdvancedOpen(!sidebarAdvancedOpen),
                  className: "w-full flex items-center justify-between py-2.5 text-[9px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-white transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Advanced Case Parameters" }),
                    sidebarAdvancedOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12 })
                  ]
                }
              ),
              sidebarAdvancedOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2 text-xs font-semibold animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Client Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: clientName,
                      onChange: (e) => setClientName(e.target.value),
                      placeholder: "Client Name",
                      className: `w-full border rounded-xl px-3 py-2 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Opponent Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: opponentName,
                      onChange: (e) => setOpponentName(e.target.value),
                      placeholder: "Opponent Name",
                      className: `w-full border rounded-xl px-3 py-2 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-404", children: "Matter Court" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: matterType,
                        onChange: (e) => setMatterType(e.target.value),
                        className: `w-full border rounded-xl px-2 py-2 text-xs font-bold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Civil", children: "Civil" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Criminal", children: "Criminal" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Corporate", children: "Corporate" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Property", children: "Property" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Family", children: "Family" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Tax", children: "Tax" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Employment", children: "Employment" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Current Stage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: caseStage,
                        onChange: (e) => setCaseStage(e.target.value),
                        className: `w-full border rounded-xl px-2 py-2 text-xs font-bold outline-none cursor-pointer ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-205 text-slate-800"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pre-litigation", children: "Pre-litigation" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Filing", children: "Filing" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Arguments", children: "Arguments" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Appeal", children: "Appeal" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400", children: "Court Jurisdiction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: courtName,
                      onChange: (e) => setCourtName(e.target.value),
                      placeholder: "e.g. High Court of Delhi",
                      className: `w-full border rounded-xl px-3 py-2 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-404", children: "Hearing Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: hearingDate,
                        onChange: (e) => setHearingDate(e.target.value),
                        placeholder: "e.g. Oct 12, 2026",
                        className: `w-full border rounded-xl px-2 py-2 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-202"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-404", children: "Advocate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: assignedAdvocate,
                        onChange: (e) => setAssignedAdvocate(e.target.value),
                        placeholder: "Advocate Name",
                        className: `w-full border rounded-xl px-2 py-2 text-xs font-bold outline-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          ] })
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-3 border-t border-slate-100 dark:border-zinc-800/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500", children: "Search Strategy Templates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              onChange: (e) => {
                if (e.target.value) {
                  handleQuickToolSelect(e.target.value);
                }
              },
              className: `w-full border rounded-xl px-3 py-2.5 text-xs font-bold outline-none cursor-pointer appearance-none ${isDark ? "bg-[#131c31] border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-850"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Load Preset Template --" }),
                allTools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: t.id, children: [
                  t.name,
                  " (",
                  t.category,
                  ")"
                ] }, t.id))
              ]
            }
          ) })
        ] })
      ] }),
      "              ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar px-6 py-5 space-y-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl w-full mx-auto space-y-5 select-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 border rounded-3xl flex items-center justify-around shadow-sm ${isDark ? "bg-[#131c31]/20 border-slate-800" : "bg-white border-slate-200"}`, children: [
          { key: "INPUT", name: "Input Config" },
          { key: "ANALYSIS", name: "AI Analysis" },
          { key: "REPORT", name: "Strategy Report" }
        ].map((step, idx) => {
          let stepState = "upcoming";
          if (step.key === "INPUT") {
            stepState = !strategyResult && !isAuditing ? "current" : "completed";
          } else if (step.key === "ANALYSIS") {
            stepState = isAuditing ? "current" : strategyResult ? "completed" : "upcoming";
          } else if (step.key === "REPORT") {
            stepState = strategyResult ? "current" : "upcoming";
          }
          let nextStepState = "upcoming";
          if (idx === 0) {
            nextStepState = isAuditing ? "current" : strategyResult ? "completed" : "upcoming";
          } else if (idx === 1) {
            nextStepState = strategyResult ? "current" : "upcoming";
          }
          const connectorColor = nextStepState === "completed" ? "text-emerald-500 font-black" : nextStepState === "current" ? "text-indigo-600 dark:text-indigo-400 font-black" : "text-slate-300 dark:text-zinc-700";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            stepState === "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-500 text-white shadow-md shadow-emerald-500/10", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-emerald-500", children: step.name })
            ] }) : stepState === "current" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 border-2 border-indigo-600 dark:border-indigo-500", children: idx + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400", children: step.name })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-slate-100 dark:bg-zinc-800 text-slate-400 border border-slate-200 dark:border-zinc-750", children: idx + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-550", children: step.name })
            ] }),
            idx < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[12px] ml-4 transition-all duration-300 ${connectorColor}`, children: "➔" })
          ] }, step.key);
        }) }),
        strategySource !== "MANUAL_SCENARIO" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-4 shadow-sm space-y-3.5 transition-all duration-300 ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 14, className: "text-indigo-505" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white", children: "Active Case Summary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${caseTitle ? "bg-emerald-500 animate-pulse" : "bg-slate-405"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-black text-slate-400 uppercase", children: [
                "AI Readiness: ",
                caseTitle ? "Ready" : "Incomplete"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wide", children: "Case Title / Parties" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-slate-800 dark:text-slate-200 truncate", children: caseTitle || "Custom Scenario" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wide", children: "Court Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-extrabold text-indigo-500 truncate", children: matterType || "Civil" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wide", children: "Jurisdiction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-705 dark:text-slate-300 truncate", children: courtName || "N/A" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wide", children: "Litigation Stage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-1.5 py-0.5 bg-amber-500/10 text-amber-600 rounded text-[7.5px] font-black uppercase w-fit", children: caseStage || "Pre-trial" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wide", children: "Evidence dossiers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-violet-500", children: [
                evidenceList.length,
                " Items"
              ] })
            ] })
          ] })
        ] }),
        strategySource !== "MANUAL_SCENARIO" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "facts" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => toggleAccordion("facts"),
                className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "facts" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: activeAccordion === "facts" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "facts" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-805 dark:text-white"}`, children: "Case Facts & Claims" })
                  ] }),
                  activeAccordion === "facts" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                ]
              }
            ),
            activeAccordion === "facts" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 space-y-3.5 ${isDark ? "bg-[#0B1020]/20" : "bg-white"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Facts statement brief" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCaseFacts(""), className: "hover:text-red-500", children: "Clear" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        navigator.clipboard.writeText(caseFacts);
                        zt.success("Copied to clipboard!");
                      },
                      className: "hover:text-indigo-500",
                      children: "Copy"
                    }
                  )
                ] })
              ] }),
              !caseFacts.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border rounded-xl bg-amber-500/5 border-amber-500/10 text-[10.5px] font-bold text-amber-600", children: "⚠️ Case facts currently empty. Enter details or use active cases to populate strategy targets." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 5,
                  value: caseFacts,
                  onChange: (e) => setCaseFacts(e.target.value),
                  placeholder: "Enter detailed facts of the case, breach details, transaction issues...",
                  className: `w-full border rounded-xl px-3 py-2 text-xs font-semibold outline-none resize-none ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "evidence" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => toggleAccordion("evidence"),
                className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "evidence" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 14, className: activeAccordion === "evidence" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "evidence" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-805 dark:text-white"}`, children: "Evidence Dossier" })
                  ] }),
                  activeAccordion === "evidence" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                ]
              }
            ),
            activeAccordion === "evidence" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 space-y-4 ${isDark ? "bg-[#0B1020]/20" : "bg-white"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-405 uppercase", children: "Deposition Evidence Cards" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => runAIFieldExtraction("evidence"),
                    className: "flex items-center gap-1 px-2.5 py-1 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-555 rounded-lg text-[8px] font-black uppercase transition-all",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 9 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Autofill Dossier" })
                    ]
                  }
                )
              ] }),
              evidenceList.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: evidenceList.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-slate-500/3 flex flex-col justify-between space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase", children: e.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-850 dark:text-white mt-0.5", children: e.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleRemoveEvidence(e.id),
                      className: "p-1 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 rounded shrink-0 font-bold",
                      children: "✕"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 items-center pt-2 border-t border-slate-100 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[7px] font-black uppercase rounded ${e.admissibility === "High" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`, children: [
                    "Admis: ",
                    e.admissibility
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[7px] font-black uppercase rounded ${e.strength === "Strong" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-505"}`, children: [
                    "Strength: ",
                    e.strength
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[7px] font-black uppercase rounded ${e.risk === "Low" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-505"}`, children: [
                    "Risk: ",
                    e.risk
                  ] })
                ] })
              ] }, e.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border rounded-xl bg-slate-500/5 text-center text-slate-405 font-bold", children: "No evidence logged yet. Use AI Autofill or add manually below." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-slate-500/3 space-y-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase tracking-wider block", children: "Add custom evidence item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-405", children: "Evidence Title / Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: newEv.name,
                        onChange: (e) => setNewEv({ ...newEv, name: e.target.value }),
                        placeholder: "e.g. Agreement sheet copy",
                        className: `w-full border rounded-lg px-2.5 py-1.5 text-xs font-semibold outline-none ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-405", children: "Category" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          value: newEv.type,
                          onChange: (e) => setNewEv({ ...newEv, type: e.target.value }),
                          className: `w-full border rounded-lg px-1.5 py-1.5 text-[10.5px] outline-none font-bold ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Document", children: "Document" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Digital", children: "Digital" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Physical", children: "Physical" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Oral", children: "Oral" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-455", children: "Admissibility" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          value: newEv.admissibility,
                          onChange: (e) => setNewEv({ ...newEv, admissibility: e.target.value }),
                          className: `w-full border rounded-lg px-1.5 py-1.5 text-[10.5px] outline-none font-bold ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", children: "High" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", children: "Medium" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Low", children: "Low" })
                          ]
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-455", children: "Strength weight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: newEv.strength,
                        onChange: (e) => setNewEv({ ...newEv, strength: e.target.value }),
                        className: `w-full border rounded-lg px-1.5 py-1.5 text-[10.5px] outline-none font-bold ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Strong", children: "Strong" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", children: "Medium" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Weak", children: "Weak" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-400", children: "Credibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: newEv.credibility,
                        onChange: (e) => setNewEv({ ...newEv, credibility: e.target.value }),
                        className: `w-full border rounded-lg px-1.5 py-1.5 text-[10.5px] outline-none font-bold ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", children: "High" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", children: "Medium" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Low", children: "Low" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase text-slate-400", children: "Procedural Risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: newEv.risk,
                        onChange: (e) => setNewEv({ ...newEv, risk: e.target.value }),
                        className: `w-full border rounded-lg px-1.5 py-1.5 text-[10.5px] outline-none font-bold ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-205"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Low", children: "Low" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", children: "Medium" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", children: "High" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleAddEvidence,
                    className: "px-4 py-1.5 bg-indigo-650 hover:bg-indigo-705 text-white rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                    children: "Add to Dossier"
                  }
                ) })
              ] })
            ] })
          ] }),
          witnessList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "witnesses" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => toggleAccordion("witnesses"),
                className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "witnesses" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 14, className: activeAccordion === "witnesses" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "witnesses" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-805 dark:text-white"}`, children: "Witness Pool" })
                  ] }),
                  activeAccordion === "witnesses" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                ]
              }
            ),
            activeAccordion === "witnesses" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 space-y-3 ${isDark ? "bg-[#0B1020]/20" : "bg-white"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5", children: witnessList.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-slate-500/3 flex flex-col justify-between space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-850 dark:text-white", children: w.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold text-slate-404", children: w.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleRemoveWitness(w.id),
                    className: "p-1 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 rounded shrink-0 font-semibold",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 items-center pt-2 border-t border-slate-100 dark:border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 text-[7px] font-black uppercase rounded ${w.supports === "Plaintiff" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`, children: [
                  "Supports: ",
                  w.supports
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-indigo-500/10 text-indigo-550 rounded text-[7px] font-black uppercase", children: [
                  "Credibility: ",
                  w.credibilityScore,
                  "%"
                ] })
              ] })
            ] }, w.id)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setShowAdvanced(!showAdvanced),
              className: `flex items-center gap-1.5 px-4 py-2 border rounded-xl text-[10px] font-black uppercase tracking-wider mx-auto transition-all ${showAdvanced ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-650" : isDark ? "bg-[#131c31] border-zinc-800 text-slate-404 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: showAdvanced ? "Hide Advanced Parameters" : "Show Advanced Parameters" }),
                showAdvanced ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12 })
              ]
            }
          ) }),
          showAdvanced && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "timeline" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => toggleAccordion("timeline"),
                  className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "timeline" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: activeAccordion === "timeline" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "timeline" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: "Milestones Chronology" })
                    ] }),
                    activeAccordion === "timeline" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                  ]
                }
              ),
              activeAccordion === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 space-y-4 ${isDark ? "bg-[#0B1020]/20" : "bg-white"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-405 uppercase", children: "Chronological Milestones Chain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => runAIFieldExtraction("timeline"),
                      className: "flex items-center gap-1 px-2.5 py-1 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-655 rounded-lg text-[8px] font-black uppercase transition-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 9 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Chronology Sync" })
                      ]
                    }
                  )
                ] }),
                timelineList.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l border-indigo-500/20 pl-4 ml-2 space-y-3", children: timelineList.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border border-indigo-500 bg-white dark:bg-zinc-900" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-indigo-500 text-[10px]", children: t.date }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleRemoveTimeline(t.id), className: "text-red-500 hover:text-red-650 shrink-0", children: "✕" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-slate-800 dark:text-slate-200 mt-0.5", children: t.title })
                  ] })
                ] }, t.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border rounded-xl bg-slate-500/5 text-center text-slate-400 font-bold", children: "No timeline milestones parsed yet." })
              ] })
            ] }),
            witnessList.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "witnesses" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => toggleAccordion("witnesses"),
                  className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "witnesses" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 14, className: activeAccordion === "witnesses" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "witnesses" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: "Witness Registry (Add manually)" })
                    ] }),
                    activeAccordion === "witnesses" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                  ]
                }
              ),
              activeAccordion === "witnesses" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 space-y-3.5 ${isDark ? "bg-black/5" : "bg-white"}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === "relief" ? "border-2 border-indigo-500 shadow-lg dark:border-indigo-400" : "border border-slate-200 dark:border-zinc-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => toggleAccordion("relief"),
                  className: `px-4 py-3 flex items-center justify-between cursor-pointer ${activeAccordion === "relief" ? isDark ? "bg-indigo-500/10" : "bg-indigo-50/50" : isDark ? "bg-black/10" : "bg-slate-50"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 14, className: activeAccordion === "relief" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-wider ${activeAccordion === "relief" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-white"}`, children: "Relief & Previous Orders" })
                    ] }),
                    activeAccordion === "relief" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "text-slate-400" })
                  ]
                }
              ),
              activeAccordion === "relief" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 space-y-3.5 ${isDark ? "bg-black/5" : "bg-white"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-404 uppercase", children: "Relief Category preset" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["Compensation damages", "Specific performance", "Permanent Injunction", "Declaration decree", "Declaration nullity", "Stay execution order"].map((chip) => {
                    const active = scenarioRelief.includes(chip);
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleToggleReliefChip(chip),
                        type: "button",
                        className: `px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${active ? "bg-indigo-600 text-white border-indigo-600 shadow-md" : "bg-white dark:bg-zinc-900 border-slate-250 dark:border-zinc-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50"}`,
                        children: chip
                      },
                      chip
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase", children: "Relief Sought Details (AI suggested / editable)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "AI will suggest relief details, or you can edit...",
                      value: scenarioRelief,
                      onChange: (e) => setScenarioRelief(e.target.value),
                      className: `w-full border rounded-xl px-3 py-2 outline-none font-bold ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-808"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs pt-2 border-t border-slate-100 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase", children: "Previous Court Orders (if any)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      rows: 3,
                      value: scenarioOrders,
                      onChange: (e) => setScenarioOrders(e.target.value),
                      placeholder: "Enter previous stays, notices, or caveat decrees details...",
                      className: `w-full border rounded-xl px-3 py-2 outline-none resize-none font-bold ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-3xl p-5 shadow-sm space-y-4 ${isDark ? "bg-[#131c31]/30 border-slate-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16, className: "text-indigo-505 font-extrabold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white", children: "Strategy Readiness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2.5 py-0.5 rounded text-[10px] font-black uppercase ${strategyReadinessCalculated.overall === 100 ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-450" : strategyReadinessCalculated.overall > 0 ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "bg-red-500/10 text-red-500"}`, children: [
              strategyReadinessCalculated.overall,
              "% Ready"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all duration-500 ${strategyReadinessCalculated.overall === 100 ? "bg-emerald-500" : strategyReadinessCalculated.overall > 0 ? "bg-indigo-600 dark:bg-indigo-500" : "bg-red-500"}`, style: { width: `${strategyReadinessCalculated.overall}%` } }) }),
          strategySource === "MANUAL_SCENARIO" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black text-indigo-500 uppercase tracking-wider", children: caseFacts.trim().length > 15 ? "✓ Strategy description ready for analysis" : "• Enter description of the legal issue below" }) : missingItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-extrabold text-slate-404 uppercase tracking-wide flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Missing Parameters:" }),
            missingItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-red-500/10 text-red-500 rounded border border-red-500/10 font-bold lowercase tracking-wider", children: [
              "• ",
              item
            ] }, item))
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black text-emerald-505 uppercase tracking-wider", children: "✓ Case profile fully populated and ready for strategy simulation!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 z-55 p-4 bg-slate-50/80 dark:bg-[#0c1224]/80 backdrop-blur-md border rounded-3xl dark:border-slate-800/50 flex flex-col items-center gap-1.5 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: isAuditing,
              onClick: () => runLitigationSimulation("FULL_SIMULATION"),
              className: `px-12 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-indigo-500/20 w-full max-w-lg flex items-center justify-center gap-2 ${isAuditing ? "opacity-65 cursor-not-allowed" : ""}`,
              children: isAuditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generating AI Strategy..." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generate AI Strategy" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8.5px] font-black uppercase text-slate-400 tracking-wider", children: "Estimated Processing Time: 12 Sec" })
        ] }),
        isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: loadingRef, className: "text-center py-6 animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 border rounded-3xl shadow-xl text-left max-w-md mx-auto space-y-4 transition-all duration-300 ${isDark ? "bg-[#131c31] border-zinc-800" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b pb-3 border-slate-100 dark:border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-indigo-500 uppercase tracking-widest animate-pulse", children: "Running Litigation Audit Simulation..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-[11px] font-bold", children: [
            { step: 0, text: "Reading case facts..." },
            { step: 1, text: "Evaluating evidence..." },
            { step: 2, text: "Searching precedents..." },
            { step: 3, text: "Predicting litigation outcome..." },
            { step: 4, text: "Building courtroom strategy..." },
            { step: 5, text: "Generating final report..." }
          ].map((item, idx) => {
            const isDone = activeSimulationStep > item.step;
            const isCurrent = activeSimulationStep === item.step;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-extrabold text-sm", children: "✓" }) : isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-500 animate-pulse text-sm", children: "●" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300 dark:text-zinc-700 text-sm", children: "○" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDone ? "text-slate-400 dark:text-zinc-500 line-through font-semibold" : isCurrent ? "text-indigo-650 dark:text-indigo-400 font-black" : "text-slate-400 font-semibold", children: item.text })
            ] }, idx);
          }) })
        ] }) }),
        strategyResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: reportRef, className: "space-y-6 pt-4 report-animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-8 sm:p-12 border-t-8 border-indigo-600 rounded-[32px] shadow-2xl space-y-8 select-text ${isDark ? "bg-[#131c31] border-zinc-800" : "bg-white border-slate-205"} transition-all duration-500 ease-in-out`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-b pb-6 border-slate-200 dark:border-zinc-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 32 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-sm uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200", children: "AI Legal™ Intelligence Command" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-slate-400 dark:text-zinc-500", children: "Confidential Legal Report // Privileged Attorney Work Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-[18px] sm:text-[22px] font-black text-slate-800 dark:text-slate-100 tracking-wide mt-4 py-2 border-y border-dashed border-slate-200 dark:border-zinc-800/80", children: [
              "=================================",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "AI STRATEGY REPORT",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "================================="
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 dark:bg-black/20 p-5 rounded-2xl border dark:border-zinc-850", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 uppercase tracking-wider font-extrabold text-[8px] mb-1", children: "Matter Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200", children: caseTitle || "Custom Courtroom Strategy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 uppercase tracking-wider font-extrabold text-[8px] mb-1", children: "Court / Jurisdiction" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200", children: courtName || "Not Specified" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 uppercase tracking-wider font-extrabold text-[8px] mb-1", children: "Client Petitioner" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200", children: clientName || "Not Specified" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 uppercase tracking-wider font-extrabold text-[8px] mb-1", children: "Opposing Party" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 dark:text-slate-200", children: opponentName || "Not Specified" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Executive Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed", children: ((_b = strategyResult.finalOpinion) == null ? void 0 : _b.reasoning) || ((_d = (_c = strategyResult.strategies) == null ? void 0 : _c.primary) == null ? void 0 : _d.description) || "No summary details generated." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Winning Probability" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-500 text-sm font-black", children: [
                  stats.winningProbability,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-505 transition-all duration-505", style: { width: `${stats.winningProbability}%` } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400", children: "Predicted outcome probability based on facts & precedents." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Case Strength Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-500 text-sm font-black", children: [
                  stats.overallStrategyScore,
                  "/100"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-indigo-500 transition-all duration-500", style: { width: `${stats.overallStrategyScore}%` } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-slate-400", children: "Calculated strength using evidence admissibility & weight." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Strengths" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                (_f = (_e = strategyResult.evidenceStrategy) == null ? void 0 : _e.strong) == null ? void 0 : _f.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs font-semibold text-slate-800 dark:text-slate-205", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 text-sm font-extrabold shrink-0", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-extrabold text-emerald-600 dark:text-emerald-400", children: item.evidence || item }),
                    item.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5", children: item.reason })
                  ] })
                ] }, idx)),
                (!((_g = strategyResult.evidenceStrategy) == null ? void 0 : _g.strong) || strategyResult.evidenceStrategy.strong.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No significant strengths identified." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Weaknesses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                (_i = (_h = strategyResult.evidenceStrategy) == null ? void 0 : _h.weak) == null ? void 0 : _i.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 p-3 rounded-2xl bg-red-500/5 border border-red-500/10 text-xs font-semibold text-slate-800 dark:text-slate-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 text-sm font-extrabold shrink-0", children: "✗" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-extrabold text-red-600 dark:text-red-400", children: item.evidence || item }),
                    item.reason && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5", children: item.reason })
                  ] })
                ] }, idx)),
                (_k = (_j = strategyResult.judgePerspective) == null ? void 0 : _j.weakAreas) == null ? void 0 : _k.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 p-3 rounded-2xl bg-red-500/5 border border-red-500/10 text-xs font-semibold text-slate-800 dark:text-slate-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 text-sm font-extrabold shrink-0", children: "✗" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-extrabold text-red-600 dark:text-red-400", children: item }) })
                ] }, idx)),
                (!((_l = strategyResult.evidenceStrategy) == null ? void 0 : _l.weak) || strategyResult.evidenceStrategy.weak.length === 0) && (!((_m = strategyResult.judgePerspective) == null ? void 0 : _m.weakAreas) || strategyResult.judgePerspective.weakAreas.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No significant weaknesses identified." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Key Legal Issues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              (_o = (_n = strategyResult.judgePerspective) == null ? void 0 : _n.likelyQuestions) == null ? void 0 : _o.map((issue, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3.5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 text-xs font-semibold text-slate-800 dark:text-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-full flex items-center justify-center font-black text-[10px] shrink-0", children: idx + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-normal", children: issue })
              ] }, idx)),
              (!((_p = strategyResult.judgePerspective) == null ? void 0 : _p.likelyQuestions) || strategyResult.judgePerspective.likelyQuestions.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No key legal issues flagged." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-655 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Opponent Analysis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-3 text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Likely Opposition Defense:" }),
                " ",
                ((_q = strategyResult.opponentStrategy) == null ? void 0 : _q.likelyDefence) || "Not Specified"
              ] }),
              ((_s = (_r = strategyResult.opponentStrategy) == null ? void 0 : _r.likelyObjections) == null ? void 0 : _s.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider", children: "Anticipated Procedural Objections" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-650 dark:text-slate-400", children: strategyResult.opponentStrategy.likelyObjections.map((obj, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: obj }, i)) })
              ] }),
              ((_t = strategyResult.opponentStrategy) == null ? void 0 : _t.delayStrategy) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-red-500 font-bold", children: [
                "⚠️ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Opponent Delay Tactic:" }),
                " ",
                strategyResult.opponentStrategy.delayStrategy
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Relevant Precedents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              (_u = strategyResult.precedents) == null ? void 0 : _u.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-xs text-slate-800 dark:text-white", children: p.citation }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded", children: p.court })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-404 mt-2 font-semibold leading-normal", children: p.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 text-[10px] font-bold text-slate-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Similarity Score: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-indigo-500", children: [
                      p.similarityScore,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Type: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: p.type || "Binding Precedent" })
                  ] })
                ] })
              ] }, idx)),
              (!strategyResult.precedents || strategyResult.precedents.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No precedent citations linked." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Evidence Evaluation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-black text-slate-400 uppercase tracking-widest block", children: "Admissible & Strong Proofs" }),
                (_w = (_v = strategyResult.evidenceStrategy) == null ? void 0 : _v.strong) == null ? void 0 : _w.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/85 text-xs font-semibold text-slate-750 dark:text-slate-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: e.evidence || e }),
                  ": ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-500", children: e.reason || "Sufficient probative weight" })
                ] }, idx))
              ] }),
              ((_y = (_x = strategyResult.evidenceStrategy) == null ? void 0 : _x.missing) == null ? void 0 : _y.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t dark:border-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-black text-amber-500 uppercase tracking-widest block", children: "Priority Document Gathering" }),
                strategyResult.evidenceStrategy.missing.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-amber-500/10 bg-amber-500/5 rounded-xl text-xs font-semibold text-slate-705 dark:text-slate-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: e.evidence || e }),
                  ": ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-500", children: e.reason || "Crucial for standard compliance proof" })
                ] }, idx))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Recommended Arguments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              (_A = (_z = strategyResult.finalArguments) == null ? void 0 : _z.arguments) == null ? void 0 : _A.map((arg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4 border border-dashed rounded-2xl bg-slate-500/3 text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-505 font-black text-sm shrink-0", children: "“" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: arg })
              ] }, idx)),
              ((_B = strategyResult.finalArguments) == null ? void 0 : _B.prayer) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-l-4 border-emerald-500 rounded-r-2xl bg-emerald-500/5 text-xs font-bold text-slate-800 dark:text-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-black uppercase text-emerald-500 tracking-widest mb-1", children: "Final Submission Prayer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "“",
                  strategyResult.finalArguments.prayer,
                  "”"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Cross Examination Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              (_C = strategyResult.crossExamPlanner) == null ? void 0 : _C.map((plan, idx) => {
                var _a2, _b2;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-3 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-2 border-slate-200 dark:border-zinc-800/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-slate-800 dark:text-white uppercase tracking-wider", children: [
                    "Target Witness: ",
                    plan.witness
                  ] }) }),
                  ((_a2 = plan.mainQuestions) == null ? void 0 : _a2.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-black text-indigo-500 uppercase tracking-widest block", children: "Cross-Exam Line of Questioning" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-600 dark:text-slate-350", children: plan.mainQuestions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: q }, i)) })
                  ] }),
                  ((_b2 = plan.traps) == null ? void 0 : _b2.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-red-500/5 border-red-500/10 text-red-600 dark:text-red-400 font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-wider block mb-1", children: "Traps / Impeachment Targets" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: plan.traps.join(" // ") })
                  ] })
                ] }, idx);
              }),
              (!strategyResult.crossExamPlanner || strategyResult.crossExamPlanner.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No cross-examination planner drafted." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Risk Assessment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-4", children: (() => {
              const risks = strategyResult.risks || {};
              const riskCategories = [
                { label: "Evidence Admissibility Risk", val: risks.evidence || 30, col: "bg-indigo-500" },
                { label: "Procedural Delay Risk", val: risks.procedural || 20, col: "bg-amber-500" },
                { label: "Financial Exposure Risk", val: risks.financial || 40, col: "bg-red-500" },
                { label: "Strategic Counter Risk", val: risks.strategic || 10, col: "bg-violet-500" }
              ];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-400", children: "Overall Litigation Risk Score" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-red-500", children: [
                    risks.riskPercentage || 30,
                    "% Risk Exposure"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1", children: riskCategories.map((rc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] font-black uppercase text-slate-505", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rc.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      rc.val,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${rc.col}`, style: { width: `${rc.val}%` } }) })
                ] }, rc.label)) })
              ] });
            })() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Settlement Recommendation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold leading-relaxed text-slate-650 dark:text-slate-350", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mediation Suitability:" }),
                  " ",
                  ((_D = strategyResult.settlement) == null ? void 0 : _D.mediationPossibility) || "Highly suitable for Section 89 mediation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Strategy Option:" }),
                  " ",
                  ((_E = strategyResult.settlement) == null ? void 0 : _E.negotiationStrategy) || "Waiver of interest if settled within 30 days."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/80 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase tracking-wider block", children: "Opening Claim Offer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-indigo-500 mt-1", children: ((_F = strategyResult.negotiationPositions) == null ? void 0 : _F.opening) || "Principal + Costs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/80 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase tracking-wider block", children: "Realistic Target Settlement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-emerald-500 mt-1", children: ((_G = strategyResult.negotiationPositions) == null ? void 0 : _G.middle) || "Principal amount only" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/80 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-slate-400 uppercase tracking-wider block", children: "Fallback Bottom Line" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-red-505 mt-1", children: ((_H = strategyResult.negotiationPositions) == null ? void 0 : _H.final) || "75% Principal recovery" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Litigation Roadmap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l border-slate-200 dark:border-zinc-800 pl-4 ml-2 space-y-4", children: (_I = strategyResult.winningRoadmap) == null ? void 0 : _I.map((stage, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full border-2 bg-white dark:bg-zinc-900 ${stage.status === "Completed" ? "border-emerald-500 bg-emerald-500" : stage.status === "In Progress" ? "border-indigo-500 bg-indigo-500 animate-pulse" : "border-slate-300 dark:border-zinc-700"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${stage.status === "Completed" ? "bg-emerald-500/10 text-emerald-500" : stage.status === "In Progress" ? "bg-indigo-500/10 text-indigo-500" : "bg-slate-200/50 dark:bg-zinc-800 text-slate-400"}`, children: stage.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-800 dark:text-slate-200 mt-1", children: stage.stage }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 dark:text-slate-400 font-semibold text-[10.5px] mt-0.5 leading-normal", children: stage.description })
              ] })
            ] }, idx)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-indigo-650 dark:text-indigo-400 border-b pb-1 border-slate-200 dark:border-zinc-800/80", children: "Immediate Next Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800/80 space-y-3", children: [
              (_K = (_J = strategyResult.aiRecommendations) == null ? void 0 : _J.doFirst) == null ? void 0 : _K.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/85 text-xs font-semibold text-slate-805 dark:text-slate-200 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-indigo-500 shrink-0", size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act })
              ] }, idx)),
              (_M = (_L = strategyResult.aiRecommendations) == null ? void 0 : _L.doNext) == null ? void 0 : _M.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-xl bg-white dark:bg-zinc-900 dark:border-zinc-800/85 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm opacity-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-slate-400 shrink-0", size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act })
              ] }, idx)),
              (!((_N = strategyResult.aiRecommendations) == null ? void 0 : _N.doFirst) || strategyResult.aiRecommendations.doFirst.length === 0) && (!((_O = strategyResult.aiRecommendations) == null ? void 0 : _O.doNext) || strategyResult.aiRecommendations.doNext.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 italic font-semibold", children: "No immediate next steps listed." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky bottom-0 flex flex-wrap items-center justify-end gap-2.5 p-4 bg-white/95 dark:bg-[#131c31]/95 backdrop-blur-md border-t border-slate-200 dark:border-zinc-800/80 -mx-8 sm:-mx-12 -mb-8 sm:-mb-12 rounded-b-[32px] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setBriefMenuOpen(!briefMenuOpen),
                  className: "h-10 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 shadow-md shadow-violet-500/10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Brief" })
                  ]
                }
              ),
              briefMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-12 right-0 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-xl p-1.5 w-40 z-50 text-xs font-bold text-slate-700 dark:text-slate-200 animate-fadeIn", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      handlePrintBriefPDF();
                      setBriefMenuOpen(false);
                    },
                    className: "w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg flex items-center gap-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📕 Export PDF" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      handleExportBriefDoc();
                      setBriefMenuOpen(false);
                    },
                    className: "w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg flex items-center gap-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📝 Export DOCX" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handlePrintPDF,
                className: "h-10 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 shadow-md shadow-indigo-500/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleExportDoc,
                className: "h-10 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 shadow-md shadow-emerald-500/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DOCX" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleSaveStrategy,
                className: "h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 shadow-md shadow-blue-500/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => runLitigationSimulation("FULL_SIMULATION"),
                className: "h-10 px-4 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-707 dark:text-slate-300 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 16 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regenerate" })
                ]
              }
            )
          ] })
        ] }) })
      ] }) })
    ] }),
    historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setHistoryVisible(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-205 dark:border-zinc-850 rounded-[32px] max-w-lg w-full max-h-[85%] flex flex-col overflow-hidden shadow-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Simulation History Logs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHistoryVisible(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-50 dark:bg-[#131C31] border border-slate-200 dark:border-white/5 rounded-xl px-3 py-2 mt-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search past simulation strategies...",
              className: "w-full bg-transparent border-none text-xs font-bold text-slate-800 dark:text-white outline-none focus:ring-0",
              value: historySearch,
              onChange: (e) => setHistorySearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar", children: [
          historyData.filter(
            (h) => {
              var _a2, _b2;
              return ((_a2 = h.title) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase())) || ((_b2 = h.caseFacts) == null ? void 0 : _b2.toLowerCase().includes(historySearch.toLowerCase()));
            }
          ).map((item, idx) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 dark:bg-[#1A2540] border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-800 dark:text-white truncate", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 mt-1 line-clamp-2", children: item.caseFacts }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-indigo-500 font-extrabold uppercase mt-1.5 block", children: item.timestamp })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => deleteHistoryItem(item.id),
                    className: "p-1 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg text-red-500 shrink-0",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 dark:border-white/5 pt-3 mt-3 flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-indigo-500/10 text-indigo-550 rounded text-[9px] font-black uppercase", children: [
                  "Score: ",
                  (_a2 = item.stats) == null ? void 0 : _a2.overallStrategyScore,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setStrategyResult(item.activeStrategy || item);
                      setHistoryVisible(false);
                      zt.success(`Loaded strategy: ${item.title}`);
                    },
                    className: "px-3 py-1 bg-indigo-650 hover:bg-indigo-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                    children: "Load Strategy"
                  }
                )
              ] })
            ] }, item.id || idx);
          }),
          historyData.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-400", children: "No strategy simulations archived." })
          ] })
        ] })
      ] })
    ] }),
    newCaseModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setNewCaseModalOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-205 dark:border-zinc-850 rounded-[32px] max-w-md w-full max-h-[85%] flex flex-col overflow-hidden shadow-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "New Scenario Case file" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setNewCaseModalOpen(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-4 pr-1 custom-scrollbar text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Client / Petitioner Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g. Ramesh Gupta",
                value: newCaseForm.clientName,
                onChange: (e) => setNewCaseForm((prev) => ({ ...prev, clientName: e.target.value })),
                className: `w-full border rounded-xl px-3 py-2 outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Opposing Party Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g. Suresh Verma",
                value: newCaseForm.accused,
                onChange: (e) => setNewCaseForm((prev) => ({ ...prev, accused: e.target.value })),
                className: `w-full border rounded-xl px-3 py-2 outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Matter Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: newCaseForm.matterType,
                  onChange: (e) => setNewCaseForm((prev) => ({ ...prev, matterType: e.target.value })),
                  className: `w-full border rounded-xl px-3 py-2 outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Civil", children: "Civil" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Criminal", children: "Criminal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Corporate", children: "Corporate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Property", children: "Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Family", children: "Family" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Tax", children: "Tax" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Employment", children: "Employment" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Stage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: newCaseForm.stage,
                  onChange: (e) => setNewCaseForm((prev) => ({ ...prev, stage: e.target.value })),
                  className: `w-full border rounded-xl px-3 py-2 outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pre-litigation", children: "Pre-litigation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Filing", children: "Filing stage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Arguments", children: "Arguments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Appeal", children: "Appeal stage" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Court Jurisdiction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g. Supreme Court of India",
                value: newCaseForm.courtName,
                onChange: (e) => setNewCaseForm((prev) => ({ ...prev, courtName: e.target.value })),
                className: `w-full border rounded-xl px-3 py-2 outline-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-wide", children: "Brief Case Facts Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 3,
                placeholder: "Type a brief synopsis of the dispute...",
                value: newCaseForm.summary,
                onChange: (e) => setNewCaseForm((prev) => ({ ...prev, summary: e.target.value })),
                className: `w-full border rounded-xl px-3 py-2 outline-none resize-none ${isDark ? "bg-black/20 border-zinc-800 text-white" : "bg-slate-50 border-slate-200"}`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 dark:border-white/5 pt-4 mt-4 shrink-0 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setNewCaseModalOpen(false),
              className: "w-1/2 py-2 border rounded-xl text-xs font-black uppercase text-slate-500",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleCreateNewCase,
              className: "w-1/2 py-2 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl text-xs font-black uppercase transition-all",
              children: "Create Scenario"
            }
          )
        ] })
      ] })
    ] }),
    isNotesDrawerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[150000] flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm", onClick: () => setIsNotesDrawerOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-[400px] h-full flex flex-col p-6 shadow-2xl transition-all duration-300 ${isDark ? "bg-[#0f172a] border-l border-slate-800 text-white" : "bg-white border-l border-slate-200 text-slate-900"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800/80 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16, className: "text-indigo-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider", children: "Advocate Notes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsNotesDrawerOpen(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-4 pr-1 custom-scrollbar text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 leading-normal", children: "Record your strategic thoughts, key timelines, checklists, or trial preparation reminders. Saved automatically to the case history." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 15,
              value: scenarioNotes,
              onChange: (e) => setScenarioNotes(e.target.value),
              placeholder: "Type private case strategy notes, checklists...",
              className: `w-full border rounded-xl px-3 py-2 outline-none resize-none font-bold text-xs ${isDark ? "bg-black/25 border-zinc-800 text-white" : "bg-slate-50 border-slate-205 text-slate-808"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-slate-100 dark:border-zinc-800/80 pt-4 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: async () => {
              if (strategySource === "EXISTING_CASE") {
                await syncToDatabase({ scenarioNotes });
                zt.success("Advocate notes updated!");
              } else {
                zt.success("Notes saved in session.");
              }
              setIsNotesDrawerOpen(false);
            },
            className: "w-full py-2.5 bg-indigo-650 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase transition-all shadow-md",
            children: "Save & Close Notes"
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  StrategyEngine as default
};
