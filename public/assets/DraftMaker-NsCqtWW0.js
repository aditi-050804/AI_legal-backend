import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, G as Globe, a2 as Check, X, ao as ChevronDown, v as Search, bs as Landmark, l as Shield, z as zt, t as Scale, Y as Plus, bt as useOutputLanguage, bu as mapCaseToForm, a as apiService, a4 as ChevronLeft, W as Save, bv as Download, bw as FileDown, bo as FileCheck, F as FileText, bx as Share2, by as History, bz as EllipsisVertical, bA as CircleCheck, e as ChevronRight, bB as Star, k as Sparkles, b as Clock, bC as Folder, R as RefreshCw, bD as PenLine, bl as Gavel, a0 as Pen, bE as Copy, T as Trash2, bF as Link, a3 as Mail, s as Lock, bG as consumePrefillIntent, bH as generateChatResponse, J as CreditCard, bk as Briefcase, I as Users, C as CircleAlert } from "./index-BusjsCem.js";
import { P as Printer } from "./printer-iEfkmkDw.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("House", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
];
const Laptop = createLucideIcon("Laptop", __iconNode);
const DRAFT_TEMPLATES = {
  // ══════════════════════ CRIMINAL LAW ══════════════════════
  "FIR Draft": {
    category: "CRIMINAL LAW",
    courtHeader: "BEFORE THE STATION HOUSE OFFICER",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true, placeholder: "Full name of the complainant" },
      { key: "complainantAddress", label: "Complainant Address", type: "text", required: true, placeholder: "Full residential address" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Name of the Police Station" },
      { key: "district", label: "District", type: "text", required: true, placeholder: "District name" },
      { key: "accusedName", label: "Name of Accused", type: "text", required: true, placeholder: "Name(s) of accused person(s)" },
      { key: "accusedAddress", label: "Address of Accused", type: "text", required: false, placeholder: "Known address of accused" },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "incidentPlace", label: "Place of Incident", type: "text", required: true, placeholder: "Exact location where incident occurred" },
      { key: "ipcSections", label: "IPC Sections Applicable", type: "text", required: false, placeholder: "e.g., IPC 420, 406, 120B" },
      { key: "incidentFacts", label: "Facts of the Incident", type: "textarea", required: true, placeholder: "Describe the incident in detail — who, what, when, where, how..." },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false, placeholder: "CCTV footage, messages, documents, witnesses..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Registration of FIR, arrest of accused, investigation..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false, placeholder: "Name of the Advocate (if any)" }
    ],
    systemPrompt: "You are an expert criminal law advocate. Draft a formal FIR (First Information Report) complaint in professional legal format suitable for submission to the Police Station. Follow the format: Complainant details, Accused details, Facts, Offences committed, Evidence, Prayer for Registration of FIR."
  },
  "Bail Application": {
    category: "CRIMINAL LAW",
    courtHeader: "IN THE HON'BLE SESSIONS COURT",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true, placeholder: "State vs [Accused Name]" },
      { key: "caseNumber", label: "FIR/Case Number", type: "text", required: true, placeholder: "FIR No. / Case No." },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Sessions Court / High Court" },
      { key: "judgeName", label: "Judge Name (if known)", type: "text", required: false, placeholder: "Hon'ble Judge Name" },
      { key: "accusedName", label: "Name of Accused", type: "text", required: true, placeholder: "Full name of the accused" },
      { key: "accusedAge", label: "Age of Accused", type: "text", required: true, placeholder: "Age in years" },
      { key: "accusedAddress", label: "Accused Address", type: "text", required: true, placeholder: "Permanent residential address" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Name of Police Station" },
      { key: "arrestDate", label: "Date of Arrest", type: "date", required: true },
      { key: "ipcSections", label: "Sections Invoked", type: "text", required: true, placeholder: "IPC 420, 302 etc." },
      { key: "custodyDetails", label: "Custody Details", type: "textarea", required: true, placeholder: "Details of custody, jail, remand orders..." },
      { key: "groundsForBail", label: "Grounds for Bail", type: "textarea", required: true, placeholder: "Elaborate grounds — no criminal record, cooperative, flight risk minimal, family dependent..." },
      { key: "surety", label: "Surety Details", type: "text", required: false, placeholder: "Name and address of surety person" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true, placeholder: "Name of Advocate" }
    ],
    systemPrompt: "You are a senior criminal defence advocate. Draft a formal regular bail application (under Section 437/439 CrPC or as applicable) for submission before the Sessions Court. Include: Case heading, FIR details, Grounds of bail (clean record, cooperative, family dependent, no flight risk), Precedents if relevant, and Prayer for bail."
  },
  "Anticipatory Bail": {
    category: "CRIMINAL LAW",
    courtHeader: "IN THE HON'BLE HIGH COURT",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true, placeholder: "Full name of applicant" },
      { key: "applicantAddress", label: "Applicant Address", type: "text", required: true, placeholder: "Permanent address" },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Sessions Court / High Court" },
      { key: "policeStation", label: "Police Station", type: "text", required: true, placeholder: "Concerned Police Station" },
      { key: "ipcSections", label: "Sections Alleged", type: "text", required: true, placeholder: "IPC Sections likely to be invoked" },
      { key: "fearOfArrest", label: "Reason for Fear of Arrest", type: "textarea", required: true, placeholder: "Why applicant apprehends arrest..." },
      { key: "groundsForAnticipatoryBail", label: "Grounds for Anticipatory Bail", type: "textarea", required: true, placeholder: "False implication, no criminal antecedents, cooperative..." },
      { key: "previousComplaint", label: "Previous Complaint/Case Details", type: "textarea", required: false, placeholder: "Any prior complaint or case details..." },
      { key: "conditionsOffered", label: "Conditions Offered", type: "textarea", required: false, placeholder: "Passport surrender, weekly reporting, not tampering evidence..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true, placeholder: "Name of Advocate" }
    ],
    systemPrompt: "You are a senior criminal advocate. Draft a formal Anticipatory Bail Application under Section 438 CrPC for submission before the Sessions Court/High Court. Include: Applicant details, grounds of apprehension, absence of criminal antecedents, cooperative nature, prayer for pre-arrest bail with conditions."
  },
  "Criminal Complaint": {
    category: "CRIMINAL LAW",
    courtHeader: "BEFORE THE HON'BLE JUDICIAL MAGISTRATE",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true, placeholder: "Full name" },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Judicial Magistrate Court" },
      { key: "accusedName", label: "Accused Name(s)", type: "text", required: true, placeholder: "Name(s) of accused" },
      { key: "accusedAddress", label: "Accused Address", type: "text", required: true, placeholder: "Address of accused" },
      { key: "offenceDate", label: "Date of Offence", type: "date", required: true },
      { key: "offencePlace", label: "Place of Offence", type: "text", required: true, placeholder: "Location of the offence" },
      { key: "ipcSections", label: "IPC/Penal Sections", type: "text", required: true, placeholder: "IPC 420, 406, 500 etc." },
      { key: "facts", label: "Facts of the Case", type: "textarea", required: true, placeholder: "Detailed narration of the offence..." },
      { key: "evidence", label: "Evidence Details", type: "textarea", required: false, placeholder: "List of evidence available..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Cognizance of offence, summoning accused, trial..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false, placeholder: "Advocate name" }
    ],
    systemPrompt: "Draft a formal criminal complaint for submission before the Judicial Magistrate under Section 200 CrPC. Include complainant details, accused details, offence particulars, grounds, evidence, and prayer for cognizance and summoning of accused."
  },
  "Police Complaint": {
    category: "CRIMINAL LAW",
    courtHeader: "TO THE STATION HOUSE OFFICER",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantPhone", label: "Complainant Phone/Email", type: "text", required: false },
      { key: "policeStation", label: "Police Station", type: "text", required: true },
      { key: "accusedName", label: "Accused/Party Name", type: "text", required: true },
      { key: "incidentDate", label: "Incident Date", type: "date", required: true },
      { key: "incidentPlace", label: "Incident Location", type: "text", required: true },
      { key: "complaintSubject", label: "Subject of Complaint", type: "text", required: true, placeholder: "e.g. Cheating, Harassment, Theft..." },
      { key: "facts", label: "Complete Facts", type: "textarea", required: true, placeholder: "Describe the incident in full detail" },
      { key: "witnessDetails", label: "Witness Details", type: "text", required: false },
      { key: "reliefRequested", label: "Relief / Action Requested", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a formal police complaint letter addressed to the Station House Officer. Include complainant details, subject, facts, incident narration, witness information and request for appropriate police action including FIR registration and investigation."
  },
  "Cyber Crime FIR": {
    category: "CRIMINAL LAW",
    courtHeader: "TO THE CYBER CRIME CELL",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantPhone", label: "Contact Number", type: "text", required: true },
      { key: "complainantEmail", label: "Email Address", type: "text", required: true },
      { key: "cyberCrimeType", label: "Type of Cyber Crime", type: "select", required: true, options: ["Online Fraud", "Identity Theft", "Hacking", "Phishing", "Cyberbullying", "Sextortion", "Ransomware", "Social Media Abuse", "Other"] },
      { key: "platformUsed", label: "Platform/Website Used", type: "text", required: true, placeholder: "e.g. WhatsApp, Instagram, Email..." },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "amountLost", label: "Amount Lost (if any)", type: "text", required: false, placeholder: "₹ amount" },
      { key: "accusedProfile", label: "Accused Profile/URL", type: "text", required: false, placeholder: "Profile URL, phone number, email of accused" },
      { key: "incidentFacts", label: "Detailed Incident Facts", type: "textarea", required: true, placeholder: "Step by step narration of how the crime occurred..." },
      { key: "digitalEvidence", label: "Digital Evidence", type: "textarea", required: false, placeholder: "Screenshots, transaction IDs, call logs, emails..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a formal Cyber Crime FIR/Complaint to be submitted to the Cyber Crime Cell under IT Act 2000 and relevant IPC sections. Include all digital evidence references, platform details, and prayer for blocking/freezing accounts and investigation."
  },
  // ══════════════════════ CIVIL LAW ══════════════════════
  "Legal Notice": {
    category: "CIVIL LAW",
    courtHeader: "LEGAL NOTICE",
    fields: [
      { key: "senderName", label: "Sender / Client Name", type: "text", required: true },
      { key: "senderAddress", label: "Sender Address", type: "textarea", required: true },
      { key: "receiverName", label: "Receiver Name", type: "text", required: true },
      { key: "receiverAddress", label: "Receiver Address", type: "textarea", required: true },
      { key: "noticeDate", label: "Notice Date", type: "date", required: true },
      { key: "subject", label: "Subject / Nature of Dispute", type: "text", required: true, placeholder: "e.g. Recovery of Dues, Breach of Contract" },
      { key: "facts", label: "Facts of the Dispute", type: "textarea", required: true, placeholder: "Chronological facts leading to this notice..." },
      { key: "causeOfAction", label: "Cause of Action", type: "textarea", required: true, placeholder: "Legal grounds, agreements breached, losses suffered..." },
      { key: "amountDue", label: "Amount Due (if applicable)", type: "text", required: false, placeholder: "₹ Amount" },
      { key: "reliefDemanded", label: "Relief / Demand", type: "textarea", required: true, placeholder: "Payment demanded, action required, time limit given..." },
      { key: "timeLimit", label: "Time Limit Given", type: "text", required: true, placeholder: "e.g. 15 days, 30 days" },
      { key: "advocateName", label: "Issuing Advocate Name", type: "text", required: true },
      { key: "advocateAddress", label: "Advocate Office Address", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal legal notice under signature of advocate. Include sender/client particulars, receiver details, subject, chronological facts, cause of action, demand/relief, time limit for compliance, and consequence of non-compliance (legal proceedings). Use formal legal language."
  },
  "Recovery Notice": {
    category: "CIVIL LAW",
    courtHeader: "NOTICE FOR RECOVERY OF DUES",
    fields: [
      { key: "creditorName", label: "Creditor / Claimant Name", type: "text", required: true },
      { key: "creditorAddress", label: "Creditor Address", type: "textarea", required: true },
      { key: "debtorName", label: "Debtor / Respondent Name", type: "text", required: true },
      { key: "debtorAddress", label: "Debtor Address", type: "textarea", required: true },
      { key: "transactionDate", label: "Date of Transaction/Agreement", type: "date", required: true },
      { key: "principalAmount", label: "Principal Amount (₹)", type: "text", required: true },
      { key: "interestRate", label: "Interest Rate (if applicable)", type: "text", required: false, placeholder: "e.g. 18% p.a." },
      { key: "totalDue", label: "Total Amount Due (₹)", type: "text", required: true },
      { key: "transactionFacts", label: "Facts of Transaction", type: "textarea", required: true },
      { key: "previousReminders", label: "Previous Reminders Given", type: "textarea", required: false },
      { key: "timeLimit", label: "Time to Pay", type: "text", required: true, placeholder: "e.g. 7 days from receipt of this notice" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Recovery Notice demanding repayment of dues. Include creditor particulars, transaction history, amount breakdown (principal + interest), previous communication records, demand for payment within specified period, and warning of legal proceedings under Order 37 CPC and applicable laws."
  },
  "Civil Suit": {
    category: "CIVIL LAW",
    courtHeader: "IN THE CIVIL COURT",
    fields: [
      { key: "plaintiffName", label: "Plaintiff Name", type: "text", required: true },
      { key: "plaintiffAddress", label: "Plaintiff Address", type: "textarea", required: true },
      { key: "defendantName", label: "Defendant Name", type: "text", required: true },
      { key: "defendantAddress", label: "Defendant Address", type: "textarea", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "suitValuation", label: "Suit Valuation (₹)", type: "text", required: true },
      { key: "causeOfAction", label: "Cause of Action", type: "text", required: true, placeholder: "e.g. Breach of Contract, Recovery of Money" },
      { key: "facts", label: "Statement of Facts", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true, placeholder: "Sections, Acts, case laws relied upon..." },
      { key: "reliefClaimed", label: "Relief Claimed", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Civil Suit plaint under CPC Order 7. Include plaintiff and defendant details, court jurisdiction, valuation, cause of action, statement of facts, legal grounds (sections/acts), prayer for relief, and verification clause."
  },
  "Injunction Petition": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE CIVIL COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "injunctionType", label: "Type of Injunction", type: "select", required: true, options: ["Temporary Injunction", "Permanent Injunction", "Mandatory Injunction", "Prohibitory Injunction", "Ex-Parte Injunction"] },
      { key: "subjectMatter", label: "Subject Matter", type: "text", required: true, placeholder: "Property / Activity to be restrained" },
      { key: "urgency", label: "Urgency / Prima Facie Case", type: "textarea", required: true, placeholder: "Why immediate injunction is needed..." },
      { key: "irreparableHarm", label: "Irreparable Harm if Not Granted", type: "textarea", required: true },
      { key: "balanceOfConvenience", label: "Balance of Convenience", type: "textarea", required: true },
      { key: "facts", label: "Facts of the Case", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Injunction Petition under Order 39 CPC establishing prima facie case, balance of convenience, irreparable harm. Include urgency, supporting facts, and prayer for temporary/permanent injunction with or without notice."
  },
  "Property Dispute": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE CIVIL COURT",
    fields: [
      { key: "plaintiffName", label: "Plaintiff Name", type: "text", required: true },
      { key: "defendantName", label: "Defendant Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true, placeholder: "Survey No., Address, Area, boundaries..." },
      { key: "titleDocuments", label: "Title Documents Available", type: "text", required: false, placeholder: "Sale deed, registry, mutation..." },
      { key: "disputeNature", label: "Nature of Dispute", type: "select", required: true, options: ["Ownership Dispute", "Possession Dispute", "Boundary Dispute", "Adverse Possession", "Partition Suit", "Encroachment", "Other"] },
      { key: "howDisposeArised", label: "How Dispute Arose", type: "textarea", required: true },
      { key: "facts", label: "Facts & Background", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal property dispute suit/petition. Include property description, title documents, chain of ownership, nature of encroachment/dispute, facts, legal grounds under TPA/CPC, and prayer for declaration of title, possession, or injunction."
  },
  "Compensation Claim": {
    category: "CIVIL LAW",
    courtHeader: "IN THE HON'BLE COURT",
    fields: [
      { key: "claimantName", label: "Claimant Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent/Opposite Party", type: "text", required: true },
      { key: "courtName", label: "Court / Forum", type: "text", required: true },
      { key: "natureOfClaim", label: "Nature of Claim", type: "select", required: true, options: ["Accident Compensation", "Wrongful Act Damages", "Contract Breach Damages", "Medical Negligence", "Consumer Deficiency", "Other"] },
      { key: "incidentDate", label: "Date of Incident", type: "date", required: true },
      { key: "incidentFacts", label: "Incident Facts", type: "textarea", required: true },
      { key: "lossesIncurred", label: "Losses / Damages Suffered", type: "textarea", required: true, placeholder: "Physical, financial, mental losses..." },
      { key: "compensationAmount", label: "Compensation Claimed (₹)", type: "text", required: true },
      { key: "legalBasis", label: "Legal Basis", type: "textarea", required: true, placeholder: "Sections, negligence, breach..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal compensation claim petition. Include claimant details, incident description, legal basis for compensation (negligence/breach/strict liability), loss assessment, quantum of damages, and prayer for compensation with interest."
  },
  // ══════════════════════ FAMILY LAW ══════════════════════
  "Divorce Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent (Spouse) Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true, placeholder: "Family Court, District..." },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: true },
      { key: "marriagePlace", label: "Place of Marriage", type: "text", required: true },
      { key: "separationDate", label: "Date of Separation", type: "date", required: false },
      { key: "childrenDetails", label: "Children Details", type: "textarea", required: false, placeholder: "Names, ages, custody preference..." },
      { key: "groundsForDivorce", label: "Grounds for Divorce", type: "select", required: true, options: ["Cruelty", "Desertion", "Adultery", "Conversion", "Mental Disorder", "Communicable Disease", "Mutual Consent", "Irretrievable Breakdown", "Other"] },
      { key: "factsOfDivorce", label: "Facts Supporting Grounds", type: "textarea", required: true, placeholder: "Detailed facts establishing grounds for divorce..." },
      { key: "previousProceedings", label: "Previous Proceedings", type: "textarea", required: false },
      { key: "matrimonialProperty", label: "Matrimonial Property Details", type: "textarea", required: false },
      { key: "maintenanceClaim", label: "Maintenance/Alimony Claim", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Divorce Petition under Hindu Marriage Act 1955 / Special Marriage Act / applicable personal law. Include marriage details, grounds, supporting facts, children details, property division, maintenance, and prayer for dissolution of marriage."
  },
  "Mutual Divorce": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitioner1Name", label: "Petitioner 1 (Husband) Name", type: "text", required: true },
      { key: "petitioner2Name", label: "Petitioner 2 (Wife) Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: true },
      { key: "marriagePlace", label: "Place of Marriage", type: "text", required: true },
      { key: "separationDate", label: "Separation Date", type: "date", required: true },
      { key: "livingApartDuration", label: "Living Apart Duration", type: "text", required: true, placeholder: "e.g. More than 1 year" },
      { key: "childrenDetails", label: "Children Details", type: "textarea", required: false },
      { key: "settledTerms", label: "Terms Mutually Settled", type: "textarea", required: true, placeholder: "Custody, maintenance, alimony, property division..." },
      { key: "alimonyAmount", label: "Alimony / Settlement Amount (₹)", type: "text", required: false },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Mutual Consent Divorce Petition under Section 13B Hindu Marriage Act. Include joint petitioner details, marriage details, separation period (1 year+), mutually agreed terms (custody, alimony, property), and joint prayer for dissolution."
  },
  "Child Custody": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "childName", label: "Child's Name", type: "text", required: true },
      { key: "childAge", label: "Child's Age", type: "text", required: true },
      { key: "childCurrentStatus", label: "Child's Current Status", type: "textarea", required: true, placeholder: "With whom child is currently living, school, wellbeing..." },
      { key: "relationshipToChild", label: "Petitioner's Relationship to Child", type: "text", required: true, placeholder: "Mother / Father / Guardian" },
      { key: "custodyType", label: "Custody Sought", type: "select", required: true, options: ["Sole Custody", "Joint Custody", "Physical Custody", "Legal Custody", "Temporary Custody"] },
      { key: "groundsForCustody", label: "Grounds for Custody", type: "textarea", required: true, placeholder: "Why petitioner is better suited for child's welfare..." },
      { key: "childWelfareDetails", label: "Child Welfare Considerations", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Child Custody Petition under Guardian and Wards Act 1890 / Hindu Minority and Guardianship Act. Emphasize child's best interest as paramount consideration. Include petitioner qualifications for custody, living conditions, financial stability, emotional attachment, and prayer for custody."
  },
  "Maintenance Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE FAMILY COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "relationship", label: "Relationship", type: "select", required: true, options: ["Wife", "Children", "Parents", "Divorced Wife", "Other"] },
      { key: "marriageDate", label: "Date of Marriage", type: "date", required: false },
      { key: "separationDate", label: "Date of Separation", type: "date", required: false },
      { key: "petitionerIncome", label: "Petitioner's Income/Resources", type: "text", required: true, placeholder: 'Monthly income or "Nil"' },
      { key: "respondentIncome", label: "Respondent's Estimated Income", type: "text", required: true },
      { key: "maintenanceRequired", label: "Monthly Maintenance Required (₹)", type: "text", required: true },
      { key: "groundsForMaintenance", label: "Grounds for Maintenance", type: "textarea", required: true },
      { key: "dependents", label: "Dependent Children/Members", type: "textarea", required: false },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Maintenance Petition under Section 125 CrPC / Section 24 HMA / applicable law. Include petitioner's needs, respondent's capacity, marriage details, desertion/neglect, and prayer for monthly maintenance including interim maintenance."
  },
  "Domestic Violence Case": {
    category: "FAMILY LAW",
    courtHeader: "BEFORE THE HON'BLE MAGISTRATE",
    fields: [
      { key: "aggrievedName", label: "Aggrieved Person Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent Name", type: "text", required: true },
      { key: "magistrateCourt", label: "Magistrate Court", type: "text", required: true },
      { key: "sharedHousehold", label: "Shared Household Address", type: "textarea", required: true },
      { key: "relationshipToRespondent", label: "Relationship to Respondent", type: "select", required: true, options: ["Spouse", "In-Laws", "Live-in Partner", "Family Member", "Other"] },
      { key: "dvActsCommitted", label: "Acts of Domestic Violence", type: "textarea", required: true, placeholder: "Physical abuse, emotional abuse, economic abuse, sexual abuse — describe incidents with dates" },
      { key: "medicalReports", label: "Medical Reports / Injuries", type: "textarea", required: false },
      { key: "witnessDetails", label: "Witnesses", type: "text", required: false },
      { key: "reliefSought", label: "Relief Under DV Act", type: "textarea", required: true, placeholder: "Protection Order, Residence Order, Monetary Relief, Compensation..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal complaint/application under Protection of Women from Domestic Violence Act 2005. Include aggrieved person details, acts of domestic violence (physical, mental, economic, sexual), shared household, prayer for Protection Order, Residence Order, monetary relief, and compensation."
  },
  "Adoption Petition": {
    category: "FAMILY LAW",
    courtHeader: "IN THE HON'BLE DISTRICT COURT",
    fields: [
      { key: "adoptiveFatherName", label: "Adoptive Father Name", type: "text", required: true },
      { key: "adoptiveMotherName", label: "Adoptive Mother Name", type: "text", required: false },
      { key: "adoptiveParentsAddress", label: "Adoptive Parents Address", type: "textarea", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "childName", label: "Child's Name", type: "text", required: true },
      { key: "childAge", label: "Child's Age/DOB", type: "text", required: true },
      { key: "childBackground", label: "Child's Background", type: "textarea", required: true },
      { key: "naturalParentsDetails", label: "Natural/Biological Parents Details", type: "textarea", required: false },
      { key: "agencyName", label: "Adoption Agency (if any)", type: "text", required: false },
      { key: "reasonForAdoption", label: "Reason for Adoption", type: "textarea", required: true },
      { key: "financialStatus", label: "Financial Status of Adoptive Parents", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Adoption Petition under Hindu Adoption and Maintenance Act / JJ Act. Include adoptive parent qualifications, child background, consent details, home study report reference, and prayer for adoption order."
  },
  // ══════════════════════ PROPERTY LAW ══════════════════════
  "Sale Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "AGREEMENT FOR SALE OF PROPERTY",
    fields: [
      { key: "sellerName", label: "Seller Name", type: "text", required: true },
      { key: "sellerAddress", label: "Seller Address", type: "textarea", required: true },
      { key: "buyerName", label: "Buyer Name", type: "text", required: true },
      { key: "buyerAddress", label: "Buyer Address", type: "textarea", required: true },
      { key: "propertyDescription", label: "Property Description", type: "textarea", required: true, placeholder: "Survey No., Plot No., Address, dimensions, boundaries..." },
      { key: "saleConsideration", label: "Sale Consideration (₹)", type: "text", required: true },
      { key: "advancePaid", label: "Advance Amount Paid (₹)", type: "text", required: true },
      { key: "balanceAmount", label: "Balance Amount (₹)", type: "text", required: true },
      { key: "registrationDate", label: "Proposed Registration Date", type: "date", required: true },
      { key: "possessionDate", label: "Possession Date", type: "date", required: true },
      { key: "encumbrance", label: "Encumbrance Status", type: "text", required: true, placeholder: "Free from encumbrance / Loan details" },
      { key: "specialConditions", label: "Special Conditions", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal Agreement for Sale of immovable property. Include seller/buyer details, property description (with boundaries), consideration amount, advance paid, payment schedule, encumbrance status, possession date, registration obligations, and penalty for breach."
  },
  "Rent Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "RENTAL AGREEMENT / LEAVE AND LICENSE",
    fields: [
      { key: "landlordName", label: "Landlord Name", type: "text", required: true },
      { key: "landlordAddress", label: "Landlord Address", type: "textarea", required: true },
      { key: "tenantName", label: "Tenant Name", type: "text", required: true },
      { key: "tenantAddress", label: "Tenant Permanent Address", type: "textarea", required: true },
      { key: "propertyAddress", label: "Property Address", type: "textarea", required: true, placeholder: "Full address of rented property" },
      { key: "rentAmount", label: "Monthly Rent (₹)", type: "text", required: true },
      { key: "securityDeposit", label: "Security Deposit (₹)", type: "text", required: true },
      { key: "agreementStartDate", label: "Agreement Start Date", type: "date", required: true },
      { key: "agreementDuration", label: "Agreement Duration", type: "text", required: true, placeholder: "e.g. 11 months, 1 year" },
      { key: "lockInPeriod", label: "Lock-in Period", type: "text", required: false, placeholder: "e.g. 6 months" },
      { key: "noticePeriod", label: "Notice Period for Vacating", type: "text", required: true, placeholder: "e.g. 1 month" },
      { key: "purposeOfUse", label: "Purpose of Use", type: "select", required: true, options: ["Residential", "Commercial", "Industrial", "Mixed Use"] },
      { key: "maintenanceTerms", label: "Maintenance Terms", type: "textarea", required: false },
      { key: "witnessName", label: "Witness Name(s)", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Rental Agreement / Leave and License Agreement. Include landlord/tenant details, property description, rent amount, security deposit, duration, lock-in period, notice period, permitted use, maintenance obligations, utility payments, termination conditions, and dispute resolution."
  },
  "Lease Agreement": {
    category: "PROPERTY LAW",
    courtHeader: "DEED OF LEASE",
    fields: [
      { key: "lessorName", label: "Lessor (Owner) Name", type: "text", required: true },
      { key: "lesseeName", label: "Lessee (Tenant) Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "leasePeriod", label: "Lease Period", type: "text", required: true, placeholder: "e.g. 5 years from [date]" },
      { key: "monthlyRent", label: "Monthly Rent (₹)", type: "text", required: true },
      { key: "annualIncrement", label: "Annual Increment (%)", type: "text", required: false },
      { key: "securityDeposit", label: "Security Deposit (₹)", type: "text", required: true },
      { key: "leaseStartDate", label: "Lease Start Date", type: "date", required: true },
      { key: "purposeOfLease", label: "Purpose of Lease", type: "text", required: true },
      { key: "renewalTerms", label: "Renewal Terms", type: "textarea", required: false },
      { key: "termination", label: "Termination Clause", type: "textarea", required: false },
      { key: "stampDuty", label: "Stamp Duty Reference", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Deed of Lease for immovable property. Include lessor/lessee details, property description, lease period, rent, security deposit, permitted use, maintenance, renewal options, sub-letting restrictions, termination conditions, and stamp duty compliance."
  },
  "Tenant Eviction Notice": {
    category: "PROPERTY LAW",
    courtHeader: "NOTICE TO VACATE PREMISES",
    fields: [
      { key: "landlordName", label: "Landlord Name", type: "text", required: true },
      { key: "tenantName", label: "Tenant Name", type: "text", required: true },
      { key: "propertyAddress", label: "Property Address", type: "textarea", required: true },
      { key: "agreementDate", label: "Rental Agreement Date", type: "date", required: false },
      { key: "reasonForEviction", label: "Reason for Eviction", type: "select", required: true, options: ["Non-Payment of Rent", "Agreement Expiry", "Personal Use Required", "Illegal Subletting", "Property Damage", "Breach of Terms", "Other"] },
      { key: "rentDue", label: "Rent Arrears (₹)", type: "text", required: false },
      { key: "evictionDetails", label: "Details / Facts", type: "textarea", required: true },
      { key: "vacatingDeadline", label: "Deadline to Vacate", type: "date", required: true },
      { key: "legalWarning", label: "Legal Action if Not Vacated", type: "textarea", required: false, placeholder: "Eviction suit, recovery proceedings..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Eviction/Vacate Notice under Rent Control Act / Transfer of Property Act. Include landlord/tenant details, property description, grounds for eviction, arrears, deadline to vacate, and warning of legal proceedings (eviction suit)."
  },
  "Registry Verification": {
    category: "PROPERTY LAW",
    courtHeader: "APPLICATION FOR PROPERTY TITLE VERIFICATION",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "surveyNumber", label: "Survey/Khasra Number", type: "text", required: false },
      { key: "registrationOffice", label: "Registration Office", type: "text", required: true },
      { key: "previousOwners", label: "Known Previous Owners", type: "textarea", required: false },
      { key: "purposeOfVerification", label: "Purpose of Verification", type: "text", required: true, placeholder: "Purchase, Mortgage, Legal Due Diligence..." },
      { key: "documentsAvailable", label: "Documents Available", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal application for property title/registry verification. Include property details, survey number, encumbrance certificate request, chain of title verification request, and certified copies of registered documents."
  },
  "Property Transfer": {
    category: "PROPERTY LAW",
    courtHeader: "DEED OF TRANSFER / GIFT DEED / CONVEYANCE DEED",
    fields: [
      { key: "transferorName", label: "Transferor Name", type: "text", required: true },
      { key: "transfereeName", label: "Transferee Name", type: "text", required: true },
      { key: "transferType", label: "Type of Transfer", type: "select", required: true, options: ["Sale", "Gift", "Inheritance", "Exchange", "Partition", "Will Execution"] },
      { key: "propertyDetails", label: "Property Details", type: "textarea", required: true },
      { key: "propertyValue", label: "Property Market Value (₹)", type: "text", required: true },
      { key: "consideration", label: "Consideration (₹)", type: "text", required: false, placeholder: 'Amount paid or "Love and Affection" for gift' },
      { key: "transferDate", label: "Date of Transfer", type: "date", required: true },
      { key: "witnessDetails", label: "Witness Names", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Property Transfer Deed / Conveyance Deed / Gift Deed under Transfer of Property Act. Include transferor/transferee details, property description, consideration, transfer conditions, possession delivery, and registration compliance."
  },
  // ══════════════════════ CORPORATE LAW ══════════════════════
  "NDA Draft": {
    category: "CORPORATE LAW",
    courtHeader: "NON-DISCLOSURE AGREEMENT",
    fields: [
      { key: "disclosingParty", label: "Disclosing Party Name", type: "text", required: true },
      { key: "receivingParty", label: "Receiving Party Name", type: "text", required: true },
      { key: "effectiveDate", label: "Effective Date", type: "date", required: true },
      { key: "ndaType", label: "NDA Type", type: "select", required: true, options: ["Unilateral", "Mutual/Bilateral"] },
      { key: "purposeOfDisclosure", label: "Purpose of Disclosure", type: "textarea", required: true, placeholder: "Business discussion, partnership evaluation, due diligence..." },
      { key: "confidentialInfoScope", label: "Scope of Confidential Information", type: "textarea", required: true },
      { key: "duration", label: "Duration of Confidentiality", type: "text", required: true, placeholder: "e.g. 2 years, 5 years, Indefinite" },
      { key: "exclusions", label: "Exclusions from Confidentiality", type: "textarea", required: false },
      { key: "jurisdiction", label: "Governing Law & Jurisdiction", type: "text", required: true, placeholder: "e.g. Laws of India, Delhi Courts" },
      { key: "penaltyForBreach", label: "Remedy for Breach", type: "text", required: false }
    ],
    systemPrompt: "Draft a professional Non-Disclosure Agreement (NDA). Include parties, definition of confidential information, disclosure purpose, obligations, exceptions (public domain, prior knowledge, compelled disclosure), duration, injunctive relief remedy, governing law, and dispute resolution."
  },
  "Contract Draft": {
    category: "CORPORATE LAW",
    courtHeader: "SERVICE AGREEMENT / CONTRACT",
    fields: [
      { key: "party1Name", label: "Party 1 Name", type: "text", required: true },
      { key: "party1Address", label: "Party 1 Address", type: "textarea", required: true },
      { key: "party2Name", label: "Party 2 Name", type: "text", required: true },
      { key: "party2Address", label: "Party 2 Address", type: "textarea", required: true },
      { key: "contractType", label: "Contract Type", type: "text", required: true, placeholder: "Service Agreement, Purchase Agreement, SLA..." },
      { key: "scopeOfWork", label: "Scope of Work / Services", type: "textarea", required: true },
      { key: "contractValue", label: "Contract Value (₹)", type: "text", required: true },
      { key: "paymentTerms", label: "Payment Terms", type: "textarea", required: true },
      { key: "contractDuration", label: "Contract Duration", type: "text", required: true },
      { key: "liabilityClause", label: "Liability Cap", type: "text", required: false },
      { key: "terminationClause", label: "Termination Terms", type: "textarea", required: false },
      { key: "governingLaw", label: "Governing Law & Jurisdiction", type: "text", required: true },
      { key: "disputeResolution", label: "Dispute Resolution", type: "select", required: true, options: ["Arbitration", "Mediation", "Court Litigation", "Negotiation first then Arbitration"] }
    ],
    systemPrompt: "Draft a comprehensive commercial contract/service agreement. Include parties, scope of services, deliverables, timelines, payment terms, IP ownership, representations and warranties, indemnification, limitation of liability, termination rights, governing law, and dispute resolution."
  },
  "Employment Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "EMPLOYMENT AGREEMENT",
    fields: [
      { key: "employerName", label: "Employer / Company Name", type: "text", required: true },
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "designation", label: "Designation / Role", type: "text", required: true },
      { key: "department", label: "Department", type: "text", required: false },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: true },
      { key: "salary", label: "CTC / Salary (₹ per annum)", type: "text", required: true },
      { key: "workLocation", label: "Work Location", type: "text", required: true },
      { key: "probationPeriod", label: "Probation Period", type: "text", required: false, placeholder: "e.g. 6 months" },
      { key: "workingHours", label: "Working Hours", type: "text", required: false },
      { key: "noticePeriod", label: "Notice Period", type: "text", required: true, placeholder: "e.g. 90 days" },
      { key: "nonCompete", label: "Non-Compete Clause", type: "textarea", required: false },
      { key: "confidentiality", label: "Confidentiality Obligation", type: "textarea", required: false },
      { key: "benefits", label: "Benefits / Perks", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a comprehensive Employment Agreement. Include employer/employee details, role, CTC, benefits, working hours, probation, notice period, IP assignment, confidentiality, non-compete/non-solicitation, code of conduct, termination conditions, and dispute resolution under Indian labour laws."
  },
  "Partnership Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "PARTNERSHIP DEED",
    fields: [
      { key: "firmName", label: "Partnership Firm Name", type: "text", required: true },
      { key: "partner1Name", label: "Partner 1 Name", type: "text", required: true },
      { key: "partner2Name", label: "Partner 2 Name", type: "text", required: true },
      { key: "additionalPartners", label: "Other Partners", type: "text", required: false },
      { key: "firmAddress", label: "Firm / Business Address", type: "textarea", required: true },
      { key: "businessNature", label: "Nature of Business", type: "text", required: true },
      { key: "partnershipStartDate", label: "Partnership Start Date", type: "date", required: true },
      { key: "capitalContribution", label: "Capital Contribution", type: "textarea", required: true, placeholder: "Partner 1: ₹X, Partner 2: ₹Y..." },
      { key: "profitSharingRatio", label: "Profit Sharing Ratio", type: "text", required: true, placeholder: "e.g. 50:50, 60:40" },
      { key: "managingPartner", label: "Managing Partner", type: "text", required: false },
      { key: "bankAccount", label: "Bank Account Details", type: "text", required: false },
      { key: "dissolutionTerms", label: "Dissolution Terms", type: "textarea", required: false }
    ],
    systemPrompt: "Draft a formal Partnership Deed under Indian Partnership Act 1932. Include firm name, partners, business nature, capital, profit/loss sharing, management powers, banking, admission/retirement of partners, dissolution clause, and dispute resolution."
  },
  "Vendor Agreement": {
    category: "CORPORATE LAW",
    courtHeader: "VENDOR / SUPPLIER AGREEMENT",
    fields: [
      { key: "companyName", label: "Company (Buyer) Name", type: "text", required: true },
      { key: "vendorName", label: "Vendor / Supplier Name", type: "text", required: true },
      { key: "productsServices", label: "Products / Services Supplied", type: "textarea", required: true },
      { key: "contractValue", label: "Contract Value (₹)", type: "text", required: true },
      { key: "deliveryTerms", label: "Delivery Terms", type: "textarea", required: true, placeholder: "Lead times, locations, frequency..." },
      { key: "paymentTerms", label: "Payment Terms", type: "text", required: true, placeholder: "Net 30, Net 60..." },
      { key: "qualityStandards", label: "Quality Standards", type: "textarea", required: false },
      { key: "penaltyForDelay", label: "Penalty for Delay/Defect", type: "text", required: false },
      { key: "agreementDuration", label: "Agreement Duration", type: "text", required: true },
      { key: "terminationClause", label: "Termination Clause", type: "textarea", required: false },
      { key: "governingLaw", label: "Governing Law", type: "text", required: true }
    ],
    systemPrompt: "Draft a Vendor/Supplier Agreement covering supply terms, delivery obligations, quality specifications, price, payment terms, penalty for delays, force majeure, IP ownership of custom work, termination rights, indemnification, and dispute resolution."
  },
  "Startup Compliance": {
    category: "CORPORATE LAW",
    courtHeader: "STARTUP INCORPORATION & COMPLIANCE DOCUMENT",
    fields: [
      { key: "companyName", label: "Company Name", type: "text", required: true },
      { key: "founders", label: "Founder Names", type: "textarea", required: true },
      { key: "businessDescription", label: "Business Description", type: "textarea", required: true },
      { key: "incorporationType", label: "Incorporation Type", type: "select", required: true, options: ["Private Limited Company", "LLP", "OPC", "Partnership Firm", "Sole Proprietorship"] },
      { key: "registeredAddress", label: "Registered Office Address", type: "textarea", required: true },
      { key: "authorizedCapital", label: "Authorized Capital (₹)", type: "text", required: false },
      { key: "directors", label: "Directors / Designated Partners", type: "textarea", required: true },
      { key: "shareholdingPattern", label: "Shareholding Pattern", type: "textarea", required: false },
      { key: "startupIndiaCriteria", label: "Startup India Registration Criteria", type: "textarea", required: false },
      { key: "complianceScope", label: "Compliance Scope Required", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Startup Compliance Document covering incorporation structure, founders agreement, IP assignment, ESOP policy, Startup India registration eligibility, GST registration, statutory compliance checklist (ROC filings, annual returns), and recommended legal framework."
  },
  // ══════════════════════ BANKING & FINANCE ══════════════════════
  "Loan Dispute": {
    category: "BANKING & FINANCE",
    courtHeader: "BEFORE THE HON'BLE DEBT RECOVERY TRIBUNAL / COURT",
    fields: [
      { key: "borrowerName", label: "Borrower / Petitioner Name", type: "text", required: true },
      { key: "bankName", label: "Bank / NBFC Name", type: "text", required: true },
      { key: "loanAccountNumber", label: "Loan Account Number", type: "text", required: true },
      { key: "loanType", label: "Loan Type", type: "select", required: true, options: ["Home Loan", "Personal Loan", "Business Loan", "Vehicle Loan", "Education Loan", "Gold Loan", "Other"] },
      { key: "loanAmount", label: "Original Loan Amount (₹)", type: "text", required: true },
      { key: "disputeNature", label: "Nature of Dispute", type: "select", required: true, options: ["Wrong Charges", "Incorrect Interest Calculation", "Illegal Repossession", "Wrongful NPA Classification", "SARFAESI Violation", "Fraud by Bank", "Other"] },
      { key: "disputeFacts", label: "Facts of Dispute", type: "textarea", required: true },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: false },
      { key: "previousCorrespondence", label: "Previous Communication with Bank", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Loan Dispute Petition/Complaint to DRT/Banking Ombudsman/Civil Court. Include loan details, nature of dispute, illegal charges/actions, RBI guidelines violated, prayer for stay of recovery proceedings, correction of records, and compensation."
  },
  "Cheque Bounce Notice": {
    category: "BANKING & FINANCE",
    courtHeader: "LEGAL NOTICE UNDER SECTION 138 NEGOTIABLE INSTRUMENTS ACT",
    fields: [
      { key: "payeeName", label: "Payee (Complainant) Name", type: "text", required: true },
      { key: "payeeAddress", label: "Payee Address", type: "textarea", required: true },
      { key: "drawerName", label: "Drawer (Accused) Name", type: "text", required: true },
      { key: "drawerAddress", label: "Drawer Address", type: "textarea", required: true },
      { key: "chequeNumber", label: "Cheque Number", type: "text", required: true },
      { key: "chequeDate", label: "Cheque Date", type: "date", required: true },
      { key: "chequeAmount", label: "Cheque Amount (₹)", type: "text", required: true },
      { key: "bankName", label: "Drawer's Bank Name", type: "text", required: true },
      { key: "dishonourDate", label: "Date of Dishonour", type: "date", required: true },
      { key: "dishonourReason", label: "Reason for Dishonour", type: "text", required: true, placeholder: "Insufficient funds, account closed, stop payment..." },
      { key: "underlyingTransaction", label: "Underlying Transaction", type: "textarea", required: true, placeholder: "Purpose for which cheque was given..." },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal legal notice under Section 138 Negotiable Instruments Act 1881. This is mandatory 15-day demand notice before filing complaint. Include payee/drawer details, cheque particulars, dishonour details, legal demand within 15 days of receipt, and warning of criminal prosecution."
  },
  "Banking Fraud Complaint": {
    category: "BANKING & FINANCE",
    courtHeader: "COMPLAINT OF BANKING FRAUD",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "bankName", label: "Bank / Institution Name", type: "text", required: true },
      { key: "accountNumber", label: "Account Number", type: "text", required: true },
      { key: "fraudType", label: "Type of Fraud", type: "select", required: true, options: ["Unauthorized Transaction", "Identity Theft", "Phishing", "UPI Fraud", "Card Cloning", "KYC Fraud", "Insider Fraud", "Other"] },
      { key: "fraudDate", label: "Date of Fraud", type: "date", required: true },
      { key: "amountDefrauded", label: "Amount Defrauded (₹)", type: "text", required: true },
      { key: "fraudFacts", label: "How Fraud Occurred", type: "textarea", required: true },
      { key: "bankResponse", label: "Bank's Response (if any)", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief / Refund Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Banking Fraud complaint to be filed with Police Cyber Cell, Banking Ombudsman, and RBI. Include fraud details, transaction references, bank's failure to comply with RBI circular on liability in unauthorized transactions, and demand for refund with compensation."
  },
  "EMI Settlement": {
    category: "BANKING & FINANCE",
    courtHeader: "ONE-TIME SETTLEMENT / EMI RESTRUCTURING PROPOSAL",
    fields: [
      { key: "borrowerName", label: "Borrower Name", type: "text", required: true },
      { key: "bankName", label: "Bank/NBFC Name", type: "text", required: true },
      { key: "loanAccountNumber", label: "Loan Account Number", type: "text", required: true },
      { key: "outstandingAmount", label: "Outstanding Amount (₹)", type: "text", required: true },
      { key: "settlementAmountOffered", label: "Settlement Amount Offered (₹)", type: "text", required: true },
      { key: "reasonForDefault", label: "Reason for Default", type: "textarea", required: true },
      { key: "settlementTerms", label: "Proposed Settlement Terms", type: "textarea", required: true },
      { key: "paymentTimeline", label: "Payment Timeline", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal One-Time Settlement (OTS) / Loan Restructuring application to the bank. Include borrower hardship, outstanding dues, settlement offer with justification, payment plan, and request for NOC/closure letter upon settlement."
  },
  "Debt Recovery": {
    category: "BANKING & FINANCE",
    courtHeader: "APPLICATION FOR DEBT RECOVERY",
    fields: [
      { key: "creditorName", label: "Creditor Name", type: "text", required: true },
      { key: "debtorName", label: "Debtor Name", type: "text", required: true },
      { key: "debtorAddress", label: "Debtor Address", type: "textarea", required: true },
      { key: "principalDebt", label: "Principal Debt (₹)", type: "text", required: true },
      { key: "interestAccrued", label: "Interest Accrued (₹)", type: "text", required: false },
      { key: "totalClaim", label: "Total Claim (₹)", type: "text", required: true },
      { key: "transactionFacts", label: "Transaction Facts", type: "textarea", required: true },
      { key: "documents", label: "Supporting Documents", type: "textarea", required: false },
      { key: "courtOrForum", label: "Court / DRT / NCLT", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a Debt Recovery application/suit. Include creditor/debtor details, debt origin, principal + interest calculation, previous demands, legal basis (Order 37 CPC / DRT Act / IBC), and prayer for recovery decree with interest and costs."
  },
  "Financial Agreement": {
    category: "BANKING & FINANCE",
    courtHeader: "FINANCIAL AGREEMENT / LOAN AGREEMENT",
    fields: [
      { key: "lenderName", label: "Lender Name", type: "text", required: true },
      { key: "borrowerName", label: "Borrower Name", type: "text", required: true },
      { key: "loanAmount", label: "Loan Amount (₹)", type: "text", required: true },
      { key: "interestRate", label: "Interest Rate (% p.a.)", type: "text", required: true },
      { key: "loanDuration", label: "Loan Duration", type: "text", required: true },
      { key: "repaymentSchedule", label: "Repayment Schedule", type: "textarea", required: true },
      { key: "securityProvided", label: "Security / Collateral", type: "textarea", required: false },
      { key: "penaltyForDefault", label: "Penalty for Default", type: "text", required: false },
      { key: "guarantorDetails", label: "Guarantor Details (if any)", type: "text", required: false },
      { key: "disbursementDate", label: "Disbursement Date", type: "date", required: true }
    ],
    systemPrompt: "Draft a formal Financial/Loan Agreement. Include lender/borrower details, loan amount, interest rate (reducing balance method), repayment schedule, security/collateral, guarantor obligations, default consequences, prepayment terms, and dispute resolution."
  },
  // ══════════════════════ LABOUR LAW ══════════════════════
  "Employee Complaint": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT TO LABOUR AUTHORITY",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employeeDesignation", label: "Designation", type: "text", required: true },
      { key: "companyName", label: "Employer / Company Name", type: "text", required: true },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: false },
      { key: "complaintType", label: "Nature of Complaint", type: "select", required: true, options: ["Salary Non-Payment", "Wrongful Termination", "Harassment", "PF/ESI Non-Deposit", "Leave Denial", "Discrimination", "Other"] },
      { key: "complaintFacts", label: "Facts of Complaint", type: "textarea", required: true },
      { key: "dateOfGrievance", label: "Date Grievance Arose", type: "date", required: true },
      { key: "previousComplaints", label: "Previous Internal Complaints", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "labourAuthority", label: "Labour Authority", type: "text", required: true, placeholder: "Labour Commissioner / Industrial Tribunal / High Court" }
    ],
    systemPrompt: "Draft a formal employee complaint to Labour Commissioner / Industrial Tribunal under Industrial Disputes Act / Payment of Wages Act / Factories Act. Include employment details, nature of grievance, facts, applicable labour law violations, and prayer for relief."
  },
  "Salary Recovery": {
    category: "LABOUR LAW",
    courtHeader: "CLAIM FOR RECOVERY OF UNPAID WAGES",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "designation", label: "Designation", type: "text", required: true },
      { key: "salaryDue", label: "Total Salary Due (₹)", type: "text", required: true },
      { key: "duePeriod", label: "Period for Which Salary is Due", type: "text", required: true, placeholder: "e.g. March to June 2024" },
      { key: "lastSalaryReceived", label: "Last Salary Received", type: "text", required: false },
      { key: "deductionDetails", label: "Wrongful Deductions (if any)", type: "textarea", required: false },
      { key: "employerResponse", label: "Employer's Response (if any)", type: "textarea", required: false },
      { key: "labourCourt", label: "Labour Court / Authority", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a salary recovery claim under Payment of Wages Act / Industrial Disputes Act. Include employment particulars, salary breakdown, period of non-payment, employer default, and prayer for payment of arrears with 15% interest and compensation under Section 15 Payment of Wages Act."
  },
  "Wrongful Termination": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT FOR WRONGFUL / ILLEGAL TERMINATION",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer / Company Name", type: "text", required: true },
      { key: "designation", label: "Designation", type: "text", required: true },
      { key: "joiningDate", label: "Date of Joining", type: "date", required: true },
      { key: "terminationDate", label: "Date of Termination", type: "date", required: true },
      { key: "terminationBasis", label: "Stated Reason for Termination", type: "textarea", required: true },
      { key: "groundsForChallenge", label: "Grounds for Challenging Termination", type: "textarea", required: true },
      { key: "procedureViolated", label: "Procedure Violated", type: "textarea", required: true, placeholder: "Show Cause Notice not given, natural justice violation..." },
      { key: "settlementOffered", label: "Settlement Offered by Employer", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true, placeholder: "Reinstatement, back wages, compensation..." }
    ],
    systemPrompt: "Draft an Industrial Dispute complaint for wrongful/illegal termination under Section 2A Industrial Disputes Act. Challenge retrenchment without retrenchment compensation, violation of natural justice, discriminatory termination, and pray for reinstatement with continuity of service and full back wages."
  },
  "Workplace Harassment": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT OF WORKPLACE HARASSMENT / POSH",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent / Harasser Name", type: "text", required: true },
      { key: "companyName", label: "Company / Employer Name", type: "text", required: true },
      { key: "harassmentType", label: "Type of Harassment", type: "select", required: true, options: ["Sexual Harassment (POSH)", "Verbal/Mental Harassment", "Physical Harassment", "Caste-Based Discrimination", "Gender Discrimination", "Bullying", "Other"] },
      { key: "harassmentDates", label: "Dates of Harassment Incidents", type: "text", required: true },
      { key: "harrassmentFacts", label: "Detailed Facts", type: "textarea", required: true },
      { key: "witnesses", label: "Witnesses (if any)", type: "text", required: false },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false },
      { key: "icComplaintFiled", label: "Internal Committee Complaint Filed", type: "select", required: false, options: ["Yes", "No", "Not Applicable"] },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a workplace harassment complaint under POSH Act 2013 / Industrial Disputes Act / IPC provisions. Include incidents, dates, pattern of harassment, witnesses, impact on work, complaint to Internal Committee, and prayer for inquiry, disciplinary action, and compensation."
  },
  "PF Dispute": {
    category: "LABOUR LAW",
    courtHeader: "COMPLAINT REGARDING PF / ESIC NON-COMPLIANCE",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "pfAccountNumber", label: "PF Account / UAN Number", type: "text", required: false },
      { key: "disputeType", label: "Type of Dispute", type: "select", required: true, options: ["PF Not Deposited", "PF Deducted but Not Deposited", "Wrong PF Amount", "ESIC Not Provided", "Withdrawal Issue", "Transfer Issue"] },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: false },
      { key: "periodCovered", label: "Period Covered", type: "text", required: true },
      { key: "complaintFacts", label: "Facts of the Dispute", type: "textarea", required: true },
      { key: "pfOffice", label: "EPFO Office", type: "text", required: true, placeholder: "Regional PF Office address" }
    ],
    systemPrompt: "Draft a complaint/grievance to EPFO Regional Office regarding PF non-compliance under Employees Provident Fund and Miscellaneous Provisions Act 1952. Include employment details, PF violation, employer's default, and prayer for recovery + penalty against employer."
  },
  "Labour Notice": {
    category: "LABOUR LAW",
    courtHeader: "LABOUR LAW NOTICE",
    fields: [
      { key: "employeeName", label: "Employee Name", type: "text", required: true },
      { key: "employerName", label: "Employer Name", type: "text", required: true },
      { key: "noticeSubject", label: "Subject of Notice", type: "text", required: true },
      { key: "labourViolations", label: "Labour Law Violations", type: "textarea", required: true },
      { key: "reliefDemanded", label: "Relief Demanded", type: "textarea", required: true },
      { key: "timeLimit", label: "Time Limit", type: "text", required: true, placeholder: "e.g. 15 days" },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Labour Law Notice to employer citing violations of Payment of Wages Act, Factories Act, Minimum Wages Act, Shops and Establishments Act, or Industrial Disputes Act. Demand compliance within specified period, warning of complaint to Labour Commissioner and legal proceedings."
  },
  // ══════════════════════ CONSUMER COURT ══════════════════════
  "Consumer Complaint": {
    category: "CONSUMER COURT",
    courtHeader: "BEFORE THE HON'BLE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "complainantAddress", label: "Complainant Address", type: "textarea", required: true },
      { key: "oppositeName", label: "Opposite Party Name", type: "text", required: true },
      { key: "oppositeAddress", label: "Opposite Party Address", type: "textarea", required: true },
      { key: "consumerForumLevel", label: "Forum Level", type: "select", required: true, options: ["District Commission (up to ₹50L)", "State Commission (₹50L-₹2Cr)", "National Commission (above ₹2Cr)"] },
      { key: "productService", label: "Product / Service Purchased", type: "text", required: true },
      { key: "purchaseDate", label: "Date of Purchase", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "deficiencyNature", label: "Nature of Deficiency / Defect", type: "textarea", required: true },
      { key: "complaintFacts", label: "Facts of the Complaint", type: "textarea", required: true },
      { key: "previousComplaints", label: "Previous Complaints to Company", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Total Compensation Claimed (₹)", type: "text", required: true },
      { key: "advocateName", label: "Advocate / Self Represented", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Consumer Complaint under Consumer Protection Act 2019. Include complainant/opposite party details, purchase details, nature of deficiency/unfair trade practice, facts, previous complaints, and prayer for refund + compensation + litigation costs under Section 35 CPA."
  },
  "Refund Notice": {
    category: "CONSUMER COURT",
    courtHeader: "LEGAL NOTICE FOR REFUND",
    fields: [
      { key: "consumerName", label: "Consumer Name", type: "text", required: true },
      { key: "companyName", label: "Company / Merchant Name", type: "text", required: true },
      { key: "productService", label: "Product / Service", type: "text", required: true },
      { key: "purchaseDate", label: "Date of Purchase", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "reasonForRefund", label: "Reason for Refund", type: "textarea", required: true },
      { key: "refundDemanded", label: "Refund Amount Demanded (₹)", type: "text", required: true },
      { key: "previousRefundRequests", label: "Previous Refund Requests", type: "textarea", required: false },
      { key: "timeLimit", label: "Time Given for Refund", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Refund Notice under Consumer Protection Act 2019. Include purchase details, defect/deficiency facts, refund demand, previous requests ignored, time limit for compliance, and warning of consumer forum complaint with compensation claim."
  },
  "Product Defect Case": {
    category: "CONSUMER COURT",
    courtHeader: "CONSUMER COMPLAINT — PRODUCT LIABILITY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "companyName", label: "Manufacturer / Seller", type: "text", required: true },
      { key: "productName", label: "Product Name & Model", type: "text", required: true },
      { key: "purchaseDate", label: "Purchase Date", type: "date", required: true },
      { key: "productPrice", label: "Product Price (₹)", type: "text", required: true },
      { key: "defectDescription", label: "Nature of Defect", type: "textarea", required: true },
      { key: "warrantyPeriod", label: "Warranty Period", type: "text", required: false },
      { key: "harmCaused", label: "Harm / Loss Caused", type: "textarea", required: true },
      { key: "companyResponse", label: "Company's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Product Liability complaint under Consumer Protection Act 2019 Chapter VI. Include product details, defect description, injury/loss caused, manufacturer strict liability, and prayer for refund/replacement + compensation for injury, mental agony, litigation costs."
  },
  "Online Shopping Fraud": {
    category: "CONSUMER COURT",
    courtHeader: "COMPLAINT — ONLINE SHOPPING FRAUD / E-COMMERCE DEFICIENCY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "platformName", label: "E-Commerce Platform", type: "text", required: true, placeholder: "Amazon, Flipkart, Meesho..." },
      { key: "orderNumber", label: "Order Number", type: "text", required: true },
      { key: "orderDate", label: "Order Date", type: "date", required: true },
      { key: "productOrdered", label: "Product Ordered", type: "text", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "fraudType", label: "Type of Issue", type: "select", required: true, options: ["Counterfeit Product", "Non-Delivery", "Wrong Product Delivered", "Refund Not Processed", "Fake Listing", "OTP Fraud"] },
      { key: "fraudFacts", label: "Facts of the Issue", type: "textarea", required: true },
      { key: "platformResponse", label: "Platform's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Consumer Complaint against e-commerce platform under Consumer Protection (E-Commerce) Rules 2020 and CPA 2019. Include order details, fraud/deficiency nature, platform's failure, and prayer for refund + e-commerce rule violation penalty + compensation."
  },
  "Service Deficiency Complaint": {
    category: "CONSUMER COURT",
    courtHeader: "CONSUMER COMPLAINT — SERVICE DEFICIENCY",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "serviceName", label: "Service Provider Name", type: "text", required: true },
      { key: "serviceType", label: "Type of Service", type: "text", required: true, placeholder: "Hospital, Builder, Telecom, Insurance, Education..." },
      { key: "serviceDate", label: "Date of Service", type: "date", required: true },
      { key: "amountPaid", label: "Amount Paid (₹)", type: "text", required: true },
      { key: "deficiencyFacts", label: "Nature of Service Deficiency", type: "textarea", required: true },
      { key: "losses", label: "Loss / Harm Suffered", type: "textarea", required: true },
      { key: "serviceProviderResponse", label: "Service Provider's Response", type: "textarea", required: false },
      { key: "compensationClaimed", label: "Compensation Claimed (₹)", type: "text", required: true }
    ],
    systemPrompt: "Draft a Consumer Complaint for service deficiency under CPA 2019 Section 2(11). Include service details, contracted vs delivered service gap, deficiency facts, losses, and prayer for refund + compensation for mental agony + litigation costs."
  },
  // ══════════════════════ CYBER LAW ══════════════════════
  "Social Media Harassment": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — SOCIAL MEDIA HARASSMENT / CYBERBULLYING",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "harasser", label: "Harasser's Name / Profile", type: "text", required: true },
      { key: "platform", label: "Social Media Platform", type: "select", required: true, options: ["Instagram", "Facebook", "Twitter/X", "WhatsApp", "Telegram", "YouTube", "Snapchat", "LinkedIn", "Other"] },
      { key: "harassmentType", label: "Type of Harassment", type: "select", required: true, options: ["Abusive Messages", "Stalking", "Morphed Images", "Fake Profile", "Defamatory Content", "Sextortion", "Doxxing", "Other"] },
      { key: "startDate", label: "Harassment Started From", type: "date", required: true },
      { key: "harassmentFacts", label: "Detailed Facts", type: "textarea", required: true },
      { key: "digitalEvidence", label: "Screenshots / Evidence", type: "textarea", required: false },
      { key: "platformAction", label: "Platform's Action Taken", type: "textarea", required: false },
      { key: "ipcSections", label: "Applicable Sections", type: "text", required: false, placeholder: "IT Act 66A, 67; IPC 354D, 507..." },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber crime complaint for social media harassment under IT Act 2000 Section 66C, 67 and IPC 354D, 509, 507. Include platform details, harassment type, digital evidence, NCPCR/cybercrime portal reference, and prayer for account takedown, FIR registration, and compensation."
  },
  "Online Scam Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — ONLINE FRAUD / SCAM",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "scamType", label: "Type of Online Scam", type: "select", required: true, options: ["Job Fraud", "Investment Fraud", "Lottery Scam", "Romance Scam", "KYC Fraud", "Tech Support Scam", "Cryptocurrency Fraud", "Other"] },
      { key: "scamDate", label: "Date of Scam", type: "date", required: true },
      { key: "amountLost", label: "Amount Lost (₹)", type: "text", required: true },
      { key: "scammerContact", label: "Scammer's Contact Details", type: "text", required: false },
      { key: "transactionDetails", label: "Transaction / Payment Details", type: "textarea", required: true },
      { key: "scamFacts", label: "How the Scam Occurred", type: "textarea", required: true },
      { key: "evidenceAvailable", label: "Evidence Available", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber crime FIR/complaint for online fraud under IT Act 2000 Section 66C, 66D and IPC 420, 419. Include cybercrime helpline (1930) filing reference, transaction details, modus operandi, and prayer for FIR, account freeze, and recovery of lost amount."
  },
  "Data Privacy Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — DATA PRIVACY VIOLATION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "companyName", label: "Data Controller / Company", type: "text", required: true },
      { key: "dataBreachDate", label: "Date of Breach / Discovery", type: "date", required: true },
      { key: "dataExposed", label: "Data Exposed", type: "textarea", required: true, placeholder: "Name, Aadhaar, financial data, health data..." },
      { key: "howDiscovered", label: "How Breach Was Discovered", type: "textarea", required: true },
      { key: "harmCaused", label: "Harm Caused", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Data Privacy Violation complaint under IT Act 2000 Section 43A, IT (Reasonable Security Practices) Rules 2011 and pending DPDP Act 2023. Include data breach details, company's failure to protect, harm suffered, and prayer for compensation and injunction to secure data."
  },
  "Hacking Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — COMPUTER HACKING / UNAUTHORIZED ACCESS",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "systemHacked", label: "System / Account Hacked", type: "text", required: true },
      { key: "hackingDate", label: "Date of Hacking", type: "date", required: true },
      { key: "hackingFacts", label: "How Hacking Occurred", type: "textarea", required: true },
      { key: "dataStolen", label: "Data / Files Stolen/Damaged", type: "textarea", required: false },
      { key: "financialLoss", label: "Financial Loss (₹)", type: "text", required: false },
      { key: "suspectedHacker", label: "Suspected Hacker Details", type: "text", required: false },
      { key: "evidenceAvailable", label: "Digital Evidence", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a hacking complaint under IT Act 2000 Section 43, 66, 66B and IPC 379. Include system access details, unauthorized intrusion facts, data stolen, financial loss, and prayer for FIR, cyber forensic investigation, and compensation."
  },
  "Fake Profile Complaint": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — IMPERSONATION / FAKE PROFILE",
    fields: [
      { key: "complainantName", label: "Complainant (Victim) Name", type: "text", required: true },
      { key: "platform", label: "Platform Where Fake Profile Exists", type: "text", required: true },
      { key: "fakeProfileURL", label: "Fake Profile URL / ID", type: "text", required: false },
      { key: "profileCreatedDate", label: "When Profile Was Created / Discovered", type: "date", required: false },
      { key: "impersonationFacts", label: "How Impersonation Occurred", type: "textarea", required: true },
      { key: "harmCaused", label: "Harm / Damage Caused", type: "textarea", required: true },
      { key: "evidenceScreenshots", label: "Evidence / Screenshots", type: "textarea", required: false },
      { key: "platformAction", label: "Platform's Action", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a complaint for identity theft/impersonation under IT Act 2000 Section 66C and IPC 419, 468. Include fake profile evidence, harm to reputation, financial damage, and prayer for FIR, profile takedown order, and compensation."
  },
  "Cyber Defamation": {
    category: "CYBER LAW",
    courtHeader: "COMPLAINT — CYBER DEFAMATION",
    fields: [
      { key: "complainantName", label: "Complainant Name", type: "text", required: true },
      { key: "accusedName", label: "Accused Name / Profile", type: "text", required: true },
      { key: "defamatoryContent", label: "Nature of Defamatory Content", type: "textarea", required: true },
      { key: "platform", label: "Platform / Website", type: "text", required: true },
      { key: "publicationDate", label: "Date Published", type: "date", required: true },
      { key: "reputationDamage", label: "Reputation / Business Damage", type: "textarea", required: true },
      { key: "evidenceLinks", label: "URLs / Screenshot Evidence", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a cyber defamation complaint under IPC 499, 500 and IT Act Section 66A (principles still apply). Include defamatory publication details, falsity of statements, damage to reputation, and prayer for FIR, content removal order, and compensation."
  },
  // ══════════════════════ TAX & GST ══════════════════════
  "GST Notice Reply": {
    category: "TAX & GST",
    courtHeader: "REPLY TO SHOW CAUSE NOTICE — GST DEPARTMENT",
    fields: [
      { key: "taxpayerName", label: "Taxpayer / Company Name", type: "text", required: true },
      { key: "gstin", label: "GSTIN", type: "text", required: true },
      { key: "noticeNumber", label: "Notice Number / DRC Reference", type: "text", required: true },
      { key: "noticeDate", label: "Notice Date", type: "date", required: true },
      { key: "noticePeriod", label: "Tax Period in Question", type: "text", required: true },
      { key: "taxDemanded", label: "Tax / Penalty Demanded (₹)", type: "text", required: true },
      { key: "groundsOfDemand", label: "Grounds Stated in Notice", type: "textarea", required: true },
      { key: "replyGrounds", label: "Grounds of Reply / Defence", type: "textarea", required: true, placeholder: "Input tax credit entitlement, classification correct, exports properly documented..." },
      { key: "documentsEnclosed", label: "Documents to be Enclosed", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a comprehensive Reply to GST Show Cause Notice under CGST Act 2017. Include taxpayer details, GSTIN, notice reference, factual reply, legal grounds under relevant CGST sections, supporting evidence, and prayer for dropping/reducing the demand."
  },
  "Income Tax Appeal": {
    category: "TAX & GST",
    courtHeader: "APPEAL BEFORE COMMISSIONER OF INCOME TAX (APPEALS)",
    fields: [
      { key: "appellantName", label: "Appellant Name", type: "text", required: true },
      { key: "pan", label: "PAN Number", type: "text", required: true },
      { key: "assessmentYear", label: "Assessment Year", type: "text", required: true, placeholder: "e.g. AY 2023-24" },
      { key: "assessmentOrderDate", label: "Date of Assessment Order", type: "date", required: true },
      { key: "taxDemand", label: "Tax Demand (₹)", type: "text", required: true },
      { key: "groundsOfAppeal", label: "Grounds of Appeal", type: "textarea", required: true },
      { key: "factsAndLaw", label: "Facts & Legal Arguments", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "taxPaid", label: "Tax Paid Under Protest (₹)", type: "text", required: false }
    ],
    systemPrompt: "Draft a formal Income Tax Appeal before CIT(A) under Section 246A of Income Tax Act 1961. Include grounds of appeal, legal arguments against additions/disallowances, case laws supporting appellant's position, and prayer for deletion/reduction of demand."
  },
  "Tax Dispute": {
    category: "TAX & GST",
    courtHeader: "TAX DISPUTE PETITION / OBJECTION",
    fields: [
      { key: "taxpayerName", label: "Taxpayer Name", type: "text", required: true },
      { key: "pan_gstin", label: "PAN / GSTIN", type: "text", required: true },
      { key: "taxType", label: "Tax Type", type: "select", required: true, options: ["Income Tax", "GST", "TDS", "Corporate Tax", "Customs", "State Tax"] },
      { key: "disputePeriod", label: "Dispute Period", type: "text", required: true },
      { key: "amountInDispute", label: "Amount in Dispute (₹)", type: "text", required: true },
      { key: "disputeFacts", label: "Facts of the Dispute", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Tax Dispute Petition / Rectification Application / Writ Petition against arbitrary tax assessment. Include taxpayer details, assessment facts, legal errors in assessment, applicable case laws, and prayer for reassessment or quashing of demand."
  },
  "GST Registration Draft": {
    category: "TAX & GST",
    courtHeader: "GST REGISTRATION / COMPLIANCE DOCUMENT",
    fields: [
      { key: "businessName", label: "Business / Trade Name", type: "text", required: true },
      { key: "constitutionType", label: "Constitution of Business", type: "select", required: true, options: ["Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited", "HUF", "Trust", "Other"] },
      { key: "principalAddress", label: "Principal Place of Business", type: "textarea", required: true },
      { key: "stateJurisdiction", label: "State / Jurisdiction", type: "text", required: true },
      { key: "businessActivity", label: "Business Activity / HSN/SAC", type: "textarea", required: true },
      { key: "turnoverEstimate", label: "Estimated Annual Turnover (₹)", type: "text", required: true },
      { key: "applicantName", label: "Authorized Signatory Name", type: "text", required: true },
      { key: "gstPurpose", label: "Purpose (New / Amendment / Cancellation)", type: "select", required: true, options: ["New Registration", "Amendment", "Cancellation", "Voluntary Registration", "Composition Scheme"] }
    ],
    systemPrompt: "Draft a GST Registration Application covering business details, registration type, HSN/SAC codes, bank account particulars, authorized signatory, digital signature requirements, and compliance obligations post-registration under CGST Act 2017."
  },
  // ══════════════════════ INTELLECTUAL PROPERTY ══════════════════════
  "Trademark Registration": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "APPLICATION FOR TRADEMARK REGISTRATION",
    fields: [
      { key: "applicantName", label: "Applicant Name / Company", type: "text", required: true },
      { key: "trademarkName", label: "Trademark / Brand Name", type: "text", required: true },
      { key: "trademarkClass", label: "Trademark Class (1-45)", type: "text", required: true, placeholder: "e.g. Class 25 (Clothing), Class 42 (Software)" },
      { key: "goodsServices", label: "Goods / Services Description", type: "textarea", required: true },
      { key: "firstUseDate", label: "Date of First Use in India", type: "date", required: false },
      { key: "trademarkType", label: "Trademark Type", type: "select", required: true, options: ["Word Mark", "Logo/Device", "Combined (Word+Logo)", "Sound Mark", "Colour Mark", "Certification Mark"] },
      { key: "existingRegistration", label: "Existing Similar Marks (if known)", type: "text", required: false },
      { key: "priority", label: "Priority Claim (Paris Convention)", type: "text", required: false },
      { key: "applicantAddress", label: "Applicant Address", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Trademark Registration Application under Trade Marks Act 1999. Include TM-A application format, applicant details, mark description, class specification, goods/services, user affidavit, and statement of distinctive character. Include examination procedure notes."
  },
  "Copyright Complaint": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "COMPLAINT FOR COPYRIGHT INFRINGEMENT",
    fields: [
      { key: "authorName", label: "Author / Copyright Owner Name", type: "text", required: true },
      { key: "workTitle", label: "Title of Copyrighted Work", type: "text", required: true },
      { key: "workType", label: "Type of Work", type: "select", required: true, options: ["Literary Work", "Musical Work", "Artistic Work", "Cinematograph Film", "Sound Recording", "Computer Program", "Other"] },
      { key: "creationDate", label: "Date of Creation", type: "date", required: false },
      { key: "infringerName", label: "Infringer Name / Entity", type: "text", required: true },
      { key: "infringementFacts", label: "Nature of Infringement", type: "textarea", required: true },
      { key: "infringingWork", label: "Infringing Work / URL", type: "text", required: false },
      { key: "damagesClaimed", label: "Damages Claimed (₹)", type: "text", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true }
    ],
    systemPrompt: "Draft a Copyright Infringement Complaint/Suit under Copyright Act 1957. Include copyright ownership, originality of work, unauthorized copying/reproduction, defendant's act of infringement, damages, and prayer for injunction + damages + delivery-up + account of profits."
  },
  "Patent Draft": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "PATENT APPLICATION DRAFT",
    fields: [
      { key: "inventorName", label: "Inventor / Applicant Name", type: "text", required: true },
      { key: "inventionTitle", label: "Title of Invention", type: "text", required: true },
      { key: "technicalField", label: "Technical Field", type: "text", required: true, placeholder: "e.g. Mechanical Engineering, Software, Pharmaceuticals" },
      { key: "inventionDescription", label: "Invention Description", type: "textarea", required: true, placeholder: "What problem does it solve? How does it work?" },
      { key: "novelty", label: "Novelty / Innovation", type: "textarea", required: true, placeholder: "What is new and inventive about this?" },
      { key: "priorArt", label: "Prior Art (Existing Solutions)", type: "textarea", required: false },
      { key: "claims", label: "Key Claims", type: "textarea", required: true, placeholder: "What you want patent protection for..." },
      { key: "inventionDate", label: "Date of Invention", type: "date", required: false }
    ],
    systemPrompt: "Draft a formal Patent Application specification under Patents Act 1970. Include title of invention, field, background/prior art, summary, detailed description, working mechanism, claims (independent + dependent), and abstract. Structure in proper patent specification format."
  },
  "IP Infringement Notice": {
    category: "INTELLECTUAL PROPERTY",
    courtHeader: "CEASE AND DESIST / IP INFRINGEMENT NOTICE",
    fields: [
      { key: "ipOwnerName", label: "IP Owner Name", type: "text", required: true },
      { key: "infringerName", label: "Infringer Name / Company", type: "text", required: true },
      { key: "ipType", label: "Type of IP", type: "select", required: true, options: ["Trademark", "Copyright", "Patent", "Trade Secret", "Design Rights"] },
      { key: "ipRegistrationNo", label: "IP Registration Number", type: "text", required: false },
      { key: "infringingActivity", label: "Infringing Activity", type: "textarea", required: true },
      { key: "howDiscovered", label: "When/How Infringement Discovered", type: "textarea", required: true },
      { key: "damagesSuffered", label: "Damages Suffered", type: "textarea", required: false },
      { key: "demandsMade", label: "Demands Made", type: "textarea", required: true, placeholder: "Cease use, destroy infringing goods, account for profits, pay damages..." },
      { key: "timeLimit", label: "Time Limit to Comply", type: "text", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Cease and Desist / IP Infringement Notice. Include IP ownership proof, infringement details, legal rights under TM Act / Copyright Act / Patents Act, demand to immediately stop infringement + destroy infringing copies + pay damages, and warning of civil + criminal proceedings."
  },
  // ══════════════════════ COURT & DOCUMENTS ══════════════════════
  "Affidavit": {
    category: "COURT & DOCUMENTS",
    courtHeader: "AFFIDAVIT",
    fields: [
      { key: "deponentName", label: "Deponent Name", type: "text", required: true },
      { key: "deponentAge", label: "Age", type: "text", required: true },
      { key: "deponentAddress", label: "Deponent Address", type: "textarea", required: true },
      { key: "courtPurpose", label: "Purpose / Before Which Authority", type: "text", required: true, placeholder: "High Court, District Court, Notary, Government Office..." },
      { key: "affidavitSubject", label: "Subject of Affidavit", type: "text", required: true },
      { key: "statements", label: "Statements / Declarations", type: "textarea", required: true, placeholder: "Numbered statements to be made under oath..." },
      { key: "place", label: "Place of Execution", type: "text", required: true },
      { key: "executionDate", label: "Date of Execution", type: "date", required: true },
      { key: "witnessName", label: "Witness Name", type: "text", required: false }
    ],
    systemPrompt: 'Draft a formal Affidavit with proper header (Affidavit format), deponent identification, statement "I, the deponent above named, do hereby solemnly affirm and declare as under:", numbered statements, oath/affirmation clause, signature space, and notary/oath commissioner attestation space.'
  },
  "RTI Application": {
    category: "COURT & DOCUMENTS",
    courtHeader: "APPLICATION UNDER RIGHT TO INFORMATION ACT, 2005",
    fields: [
      { key: "applicantName", label: "Applicant Name", type: "text", required: true },
      { key: "applicantAddress", label: "Applicant Address", type: "textarea", required: true },
      { key: "applicantContact", label: "Contact / Email", type: "text", required: false },
      { key: "publicAuthority", label: "Public Authority / Department", type: "text", required: true, placeholder: "Name of government department/office" },
      { key: "pioName", label: "Public Information Officer (if known)", type: "text", required: false },
      { key: "informationSought", label: "Information Sought", type: "textarea", required: true, placeholder: "List specific information/documents needed — numbered points" },
      { key: "periodCovered", label: "Time Period Covered", type: "text", required: false, placeholder: "e.g. 2020-2024" },
      { key: "preferredFormat", label: "Preferred Format", type: "select", required: false, options: ["Physical Copies", "Electronic Copy", "Inspection", "Any available format"] },
      { key: "feePaid", label: "Application Fee", type: "text", required: false, placeholder: "₹10 via IPO/DD/online" }
    ],
    systemPrompt: "Draft a formal RTI Application under Section 6 of the Right to Information Act 2005. Include applicant details, clear numbered information points, specific document references, reasonable time period, request for waiver if BPL, and information for filing fee payment."
  },
  "Writ Petition": {
    category: "COURT & DOCUMENTS",
    courtHeader: "IN THE HON'BLE HIGH COURT",
    fields: [
      { key: "petitionerName", label: "Petitioner Name", type: "text", required: true },
      { key: "respondentName", label: "Respondent (Government/Authority)", type: "text", required: true },
      { key: "courtName", label: "High Court Name", type: "text", required: true },
      { key: "writType", label: "Type of Writ", type: "select", required: true, options: ["Writ of Mandamus", "Writ of Certiorari", "Writ of Habeas Corpus", "Writ of Prohibition", "Writ of Quo Warranto"] },
      { key: "fundamentalRightsViolated", label: "Fundamental Rights Violated", type: "text", required: true, placeholder: "Article 14, 19, 21..." },
      { key: "challengedAction", label: "Challenged Order / Action", type: "textarea", required: true },
      { key: "petitionFacts", label: "Facts of the Case", type: "textarea", required: true },
      { key: "legalGrounds", label: "Legal Grounds", type: "textarea", required: true },
      { key: "urgency", label: "Urgency for Ad-Interim Relief", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a formal Writ Petition under Article 226 / 32 of the Constitution of India. Include petitioner/respondent details, constitutional rights violated, challenged government action, legal grounds, urgency for ad-interim stay/relief, and appropriate writ prayer (mandamus/certiorari/habeas corpus etc.)."
  },
  "Court Argument": {
    category: "COURT & DOCUMENTS",
    courtHeader: "WRITTEN ARGUMENTS / SYNOPSIS",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true },
      { key: "caseNumber", label: "Case Number", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "clientSide", label: "Arguments On Behalf Of", type: "select", required: true, options: ["Plaintiff / Petitioner", "Defendant / Respondent", "Accused", "Intervenor"] },
      { key: "hearingDate", label: "Date of Hearing", type: "date", required: false },
      { key: "issuesForDecision", label: "Issues for Decision", type: "textarea", required: true },
      { key: "factualBackground", label: "Factual Background", type: "textarea", required: true },
      { key: "legalArguments", label: "Legal Arguments", type: "textarea", required: true },
      { key: "caseLawsCited", label: "Case Laws / Precedents Cited", type: "textarea", required: false },
      { key: "conclusion", label: "Conclusion / Prayer", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft comprehensive Written Arguments / Synopsis for submission before court. Include case identification, issues framed, factual synopsis, legal propositions with supporting case law citations, rebuttal of opponent's arguments, and conclusion with prayer."
  },
  "Evidence Summary": {
    category: "COURT & DOCUMENTS",
    courtHeader: "EVIDENCE SUMMARY / EXHIBIT LIST",
    fields: [
      { key: "caseTitle", label: "Case Title", type: "text", required: true },
      { key: "caseNumber", label: "Case Number", type: "text", required: true },
      { key: "courtName", label: "Court Name", type: "text", required: true },
      { key: "documentaryEvidence", label: "Documentary Evidence", type: "textarea", required: true, placeholder: "List all documents with Exhibit numbers — Ex. A, Ex. B..." },
      { key: "witnessEvidence", label: "Witness Evidence", type: "textarea", required: false, placeholder: "List witnesses and their testimony summary..." },
      { key: "forensicEvidence", label: "Forensic / Expert Evidence", type: "textarea", required: false },
      { key: "electronicEvidence", label: "Electronic Evidence", type: "textarea", required: false },
      { key: "evidenceSummary", label: "Evidence Analysis / How it Proves Case", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: true }
    ],
    systemPrompt: "Draft a comprehensive Evidence Summary / Exhibit List for court submission. Organize evidence into categories (documentary, oral, forensic, electronic), number each exhibit, explain relevance and how each piece proves the case, and include chain of custody notes for key exhibits."
  },
  "Legal Research": {
    category: "COURT & DOCUMENTS",
    courtHeader: "LEGAL RESEARCH MEMORANDUM",
    fields: [
      { key: "researchTitle", label: "Research Question / Topic", type: "text", required: true },
      { key: "contextFacts", label: "Factual Context", type: "textarea", required: true },
      { key: "legalIssues", label: "Legal Issues to Research", type: "textarea", required: true },
      { key: "applicableLaws", label: "Applicable Laws / Acts", type: "textarea", required: false },
      { key: "jurisdiction", label: "Jurisdiction", type: "text", required: true, placeholder: "Indian courts / Specific State / International" },
      { key: "specificQuery", label: "Specific Research Query", type: "textarea", required: true },
      { key: "purposeOfResearch", label: "Purpose / Use Case", type: "text", required: true }
    ],
    systemPrompt: "Prepare a comprehensive Legal Research Memorandum. Include statement of issues, short answer, applicable legal framework, detailed analysis with case law citations (Supreme Court and High Court precedents), comparative analysis if relevant, and conclusion with practical recommendations. Format as professional legal memo."
  }
};
function getTemplate(draftType) {
  return DRAFT_TEMPLATES[draftType] || {
    category: "GENERAL",
    courtHeader: "LEGAL DOCUMENT",
    fields: [
      { key: "petitionerName", label: "Party Name (Petitioner/Plaintiff)", type: "text", required: true },
      { key: "respondentName", label: "Opposite Party Name", type: "text", required: true },
      { key: "courtName", label: "Court / Forum Name", type: "text", required: true },
      { key: "caseNumber", label: "Case / File Number", type: "text", required: false },
      { key: "incidentDate", label: "Incident / Transaction Date", type: "date", required: false },
      { key: "facts", label: "Facts of the Matter", type: "textarea", required: true, placeholder: "Detailed factual background..." },
      { key: "legalGrounds", label: "Legal Grounds / Sections", type: "textarea", required: false },
      { key: "reliefSought", label: "Relief / Prayer Sought", type: "textarea", required: true },
      { key: "advocateName", label: "Advocate Name", type: "text", required: false }
    ],
    systemPrompt: `You are an expert Indian advocate. Draft a comprehensive, court-ready legal document for: ${draftType}. Include all standard sections: parties, facts, grounds, legal provisions, and prayer. Format professionally.`
  };
}
const GENERATION_MODES = [
  { id: "standard", label: "Generate Draft", icon: "📄", description: "Standard legal draft", color: "indigo" },
  { id: "enhanced", label: "Enhanced Draft", icon: "⚡", description: "Enhanced with case laws & precedents", color: "violet" },
  { id: "court_ready", label: "Court-Ready Draft", icon: "⚖️", description: "Full official court format", color: "purple" },
  { id: "hindi", label: "Hindi Version", icon: "🇮🇳", description: "Generate in Hindi", color: "orange" },
  { id: "english", label: "English Version", icon: "🌐", description: "Generate in English", color: "blue" },
  { id: "bilingual", label: "Bilingual Version", icon: "🔀", description: "Hindi + English both", color: "green" }
];
const ALL_COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
const FLAG_EMOJI = {
  "India": "🇮🇳",
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Canada": "🇨🇦",
  "Australia": "🇦🇺",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸",
  "Japan": "🇯🇵",
  "China": "🇨🇳",
  "Singapore": "🇸🇬",
  "United Arab Emirates": "🇦🇪",
  "Saudi Arabia": "🇸🇦",
  "Qatar": "🇶🇦",
  "Brazil": "🇧🇷",
  "Russia": "🇷🇺",
  "South Africa": "🇿🇦",
  "Pakistan": "🇵🇰",
  "Bangladesh": "🇧🇩",
  "Sri Lanka": "🇱🇰",
  "Nepal": "🇳🇵",
  "Malaysia": "🇲🇾",
  "Indonesia": "🇮🇩",
  "Philippines": "🇵🇭",
  "Thailand": "🇹🇭",
  "Vietnam": "🇻🇳",
  "South Korea": "🇰🇷",
  "Turkey": "🇹🇷",
  "Netherlands": "🇳🇱",
  "Sweden": "🇸🇪",
  "Norway": "🇳🇴",
  "Denmark": "🇩🇰",
  "Switzerland": "🇨🇭",
  "Poland": "🇵🇱",
  "Mexico": "🇲🇽",
  "Argentina": "🇦🇷",
  "Chile": "🇨🇱",
  "New Zealand": "🇳🇿",
  "Ireland": "🇮🇪",
  "Portugal": "🇵🇹",
  "Greece": "🇬🇷",
  "Egypt": "🇪🇬",
  "Nigeria": "🇳🇬",
  "Kenya": "🇰🇪",
  "Ethiopia": "🇪🇹",
  "Ghana": "🇬🇭",
  "Morocco": "🇲🇦",
  "Israel": "🇮🇱",
  "Iraq": "🇮🇶",
  "Iran": "🇮🇷",
  "Kuwait": "🇰🇼",
  "Bahrain": "🇧🇭",
  "Oman": "🇴🇲",
  "Jordan": "🇯🇴",
  "Lebanon": "🇱🇧",
  "Myanmar": "🇲🇲",
  "Cambodia": "🇰🇭",
  "Ukraine": "🇺🇦",
  "Belarus": "🇧🇾",
  "Kazakhstan": "🇰🇿"
};
const CountrySelect = ({
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select country...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const filtered = query.trim() ? ALL_COUNTRIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())) : ALL_COUNTRIES;
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((country) => {
    onChange(country);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") setOpen(true);
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const flag = value ? FLAG_EMOJI[value] || "🌍" : null;
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${borderClass} text-left`,
        children: [
          flag ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: flag }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-slate-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            value || placeholder,
            value && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "Country selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search country...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search countries"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "260px" },
              children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-slate-400", children: [
                  'No country found for "',
                  query,
                  '"'
                ] })
              ] }) : filtered.map((country, idx) => {
                const isSelected = country === value;
                const isHovered = idx === highlighted;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    "aria-selected": isSelected,
                    onClick: () => handleSelect(country),
                    onMouseEnter: () => setHighlighted(idx),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base w-6 text-center shrink-0", children: FLAG_EMOJI[country] || "🌍" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold truncate", children: country })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  },
                  country
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " of ",
            ALL_COUNTRIES.length,
            " countries",
            query && ` · "${query}"`
          ] }) })
        ]
      }
    )
  ] });
};
const STATES_BY_COUNTRY = {
  "India": [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ],
  "United States": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia",
    "Puerto Rico"
  ],
  "United Kingdom": [
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "Greater London",
    "West Midlands",
    "Greater Manchester",
    "West Yorkshire",
    "Kent",
    "Essex",
    "Merseyside",
    "South Yorkshire",
    "Hampshire",
    "Lancashire"
  ],
  "Canada": [
    "Ontario",
    "Quebec",
    "British Columbia",
    "Alberta",
    "Manitoba",
    "Saskatchewan",
    "Nova Scotia",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Northwest Territories",
    "Yukon",
    "Nunavut"
  ],
  "Australia": [
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
    "Tasmania",
    "Australian Capital Territory",
    "Northern Territory"
  ],
  "Germany": [
    "Bavaria",
    "Baden-Württemberg",
    "Berlin",
    "Brandyburg",
    "Bremen",
    "Hamburg",
    "Hesse",
    "Lower Saxony",
    "Mecklenburg-Vorpommern",
    "North Rhine-Westphalia",
    "Rhineland-Palatinate",
    "Saarland",
    "Saxony",
    "Saxony-Anhalt",
    "Schleswig-Holstein",
    "Thuringia"
  ],
  "France": [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Brittany",
    "Centre-Val de Loire",
    "Corsica",
    "Grand Est",
    "Hauts-de-France",
    "Île-de-France",
    "Normandy",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur",
    "Guadeloupe",
    "Martinique",
    "Guyane",
    "La Réunion",
    "Mayotte"
  ],
  "Italy": [
    "Abruzzo",
    "Aosta Valley",
    "Apulia",
    "Basilicata",
    "Calabria",
    "Campania",
    "Emilia-Romagna",
    "Friuli-Venezia Giulia",
    "Lazio",
    "Liguria",
    "Lombardy",
    "Marche",
    "Molise",
    "Piedmont",
    "Sardinia",
    "Sicily",
    "Trentino-Alto Adige",
    "Tuscany",
    "Umbria",
    "Veneto"
  ],
  "Spain": [
    "Andalusia",
    "Aragon",
    "Asturias",
    "Balearic Islands",
    "Basque Country",
    "Canary Islands",
    "Cantabria",
    "Castile and León",
    "Castile-La Mancha",
    "Catalonia",
    "Extremadura",
    "Galicia",
    "La Rioja",
    "Madrid",
    "Murcia",
    "Navarre",
    "Valencia"
  ],
  "Japan": [
    "Hokkaido",
    "Aomori",
    "Iwate",
    "Miyagi",
    "Akita",
    "Yamagata",
    "Fukushima",
    "Ibaraki",
    "Tochigi",
    "Gunma",
    "Saitama",
    "Chiba",
    "Tokyo",
    "Kanagawa",
    "Niigata",
    "Toyama",
    "Ishikawa",
    "Fukui",
    "Yamanashi",
    "Nagano",
    "Gifu",
    "Shizuoka",
    "Aichi",
    "Mie",
    "Shiga",
    "Kyoto",
    "Osaka",
    "Hyogo",
    "Nara",
    "Wakayama",
    "Tottori",
    "Shimane",
    "Okayama",
    "Hiroshima",
    "Yamaguchi",
    "Tokushima",
    "Kagawa",
    "Ehime",
    "Kochi",
    "Fukuoka",
    "Saga",
    "Nagasaki",
    "Kumamoto",
    "Oita",
    "Miyazaki",
    "Kagoshima",
    "Okinawa"
  ],
  "China": [
    "Anhui",
    "Beijing",
    "Chongqing",
    "Fujian",
    "Gansu",
    "Guangdong",
    "Guangxi",
    "Guizhou",
    "Hainan",
    "Hebei",
    "Heilongjiang",
    "Henan",
    "Hubei",
    "Hunan",
    "Inner Mongolia",
    "Jiangsu",
    "Jiangxi",
    "Jilin",
    "Liaoning",
    "Ningxia",
    "Qinghai",
    "Shaanxi",
    "Shandong",
    "Shanghai",
    "Shanxi",
    "Sichuan",
    "Tianjin",
    "Tibet",
    "Xinjiang",
    "Yunnan",
    "Zhejiang",
    "Hong Kong",
    "Macau",
    "Taiwan"
  ],
  "Singapore": [
    "Central Region",
    "East Region",
    "North Region",
    "North-East Region",
    "West Region"
  ],
  "United Arab Emirates": [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Fujairah"
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Makkah",
    "Madinah",
    "Eastern Province",
    "Al-Qassim",
    "Asir",
    "Tabuk",
    "Hail",
    "Northern Borders",
    "Jazan",
    "Najran",
    "Al-Bahah",
    "Al-Jawf"
  ],
  "Qatar": [
    "Doha",
    "Al Rayyan",
    "Al Wakrah",
    "Al Khor",
    "Al Shamal",
    "Al Daayen",
    "Umm Salal",
    "Al Shahaniya"
  ],
  "Brazil": [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
  ],
  "Russia": [
    "Moscow",
    "Saint Petersburg",
    "Moscow Oblast",
    "Krasnodar Krai",
    "Sverdlovsk Oblast",
    "Republic of Tatarstan",
    "Rostov Oblast",
    "Bashkortostan",
    "Novosibirsk Oblast",
    "Chelyabinsk Oblast",
    "Samara Oblast",
    "Nizhny Novgorod Oblast",
    "Primorsky Krai",
    "Khabarovsk Krai"
  ],
  "South Africa": [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
  ]
};
const StateSelect = ({
  country = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Select State / Province...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const states = reactExports.useMemo(() => {
    if (!country) return [];
    const raw = STATES_BY_COUNTRY[country] || [];
    return [...raw].sort((a, b) => a.localeCompare(b));
  }, [country]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return states;
    return states.filter((s) => s.toLowerCase().includes(q));
  }, [states, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((stateName) => {
    onChange(stateName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        disabled: !country,
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!country ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: `shrink-0 ${!country ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !country ? "Select a country first..." : value || placeholder,
            value && country && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && country && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && country && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "State selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search state...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search states"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((stateName, idx) => {
                  const isSelected = stateName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(stateName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: stateName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    stateName
                  );
                }),
                query.trim() && !states.some((s) => s.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No states found. Type custom state above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " states/provinces loaded for ",
            country
          ] }) })
        ]
      }
    )
  ] });
};
const DISTRICTS_BY_STATE = {
  // ==================== INDIA ====================
  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Ananthapuramu",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Konaseema",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Srikakulam",
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa"
  ],
  "Arunachal Pradesh": [
    "Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar Capital Complex",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Leparada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke Kessang",
    "Papum Pare",
    "Shi Yomi",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang"
  ],
  "Assam": [
    "Bajali",
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"
  ],
  "Bihar": [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"
  ],
  "Chhattisgarh": [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurela-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Khairagarh-Chhuikhadan-Gandai",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Ambagarh Chowki",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sakti",
    "Sarangarh-Bilaigarh",
    "Sukma",
    "Surajpur",
    "Surguja"
  ],
  "Goa": [
    "North Goa",
    "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udepur",
    "Dahod",
    "Dang",
    "Devbhumi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad"
  ],
  "Haryana": [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una"
  ],
  "Jharkhand": [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysore",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Vijayanagara",
    "Yadgir"
  ],
  "Kerala": [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
  ],
  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mahidpur",
    "Maihar",
    "Mandla",
    "Mandsaur",
    "Mauganj",
    "Morena",
    "Narmadapuram",
    "Narsinghpur",
    "Neemuch",
    "Niwari",
    "Pandhurna",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "Eastern West Khasi Hills",
    "North Garo Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Saitual",
    "Serchhip"
  ],
  "Nagaland": [
    "Chumoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tseminyu",
    "Tuensang",
    "Wokha",
    "Zunheboto"
  ],
  "Odisha": [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Keonjhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh"
  ],
  "Punjab": [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Malerkotla",
    "Mansa",
    "Moga",
    "Muktsar",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sahibzada Ajit Singh Nagar (Mohali)",
    "Sangrur",
    "Shahid Bhagat Singh Nagar",
    "Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer",
    "Alwar",
    "Anupgarh",
    "Balotra",
    "Banswara",
    "Baran",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Deeg",
    "Dholpur",
    "Didwana-Kuchaman",
    "Dudu",
    "Dungarpur",
    "Gangapur City",
    "Hanumangarh",
    "Jaipur",
    "Jaipur Rural",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Jodhpur Rural",
    "Karauli",
    "Kekri",
    "Khairthal-Tijara",
    "Kota",
    "Kotputli-Behror",
    "Nagaur",
    "Neem Ka Thana",
    "Pali",
    "Phalodi",
    "Pratapgarh",
    "Rajsamand",
    "Salumbar",
    "Sanchore",
    "Sawai Madhopur",
    "Shahpura",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur"
  ],
  "Sikkim": [
    "Gangtok",
    "Geyzing",
    "Mangan",
    "Namchi",
    "Pakyong",
    "Soreng"
  ],
  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hanamkonda",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Kumuram Bheem Asifabad",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Ranga Reddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri"
  ],
  "Tripura": [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura"
  ],
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi"
  ],
  "Uttarakhand": [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi"
  ],
  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur"
  ],
  // --- Union Territories ---
  "Andaman and Nicobar Islands": [
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman"
  ],
  "Chandigarh": [
    "Chandigarh"
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra and Nagar Haveli",
    "Daman",
    "Diu"
  ],
  "Delhi": [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi"
  ],
  "Jammu and Kashmir": [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"
  ],
  "Ladakh": [
    "Kargil",
    "Leh"
  ],
  "Lakshadweep": [
    "Lakshadweep"
  ],
  "Puducherry": [
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam"
  ],
  // ==================== GLOBAL JURISDICTIONS ====================
  // --- United States ---
  "California": [
    "Alameda County",
    "Alpine County",
    "Amador County",
    "Butte County",
    "Calaveras County",
    "Colusa County",
    "Contra Costa County",
    "Del Norte County",
    "El Dorado County",
    "Fresno County",
    "Glenn County",
    "Humboldt County",
    "Imperial County",
    "Inyo County",
    "Kern County",
    "Kings County",
    "Lake County",
    "Lassen County",
    "Los Angeles County",
    "Madera County",
    "Marin County",
    "Mariposa County",
    "Mendocino County",
    "Merced County",
    "Modoc County",
    "Mono County",
    "Monterey County",
    "Napa County",
    "Nevada County",
    "Orange County",
    "Placer County",
    "Plumas County",
    "Riverside County",
    "Sacramento County",
    "San Benito County",
    "San Bernardino County",
    "San Diego County",
    "San Francisco County",
    "San Joaquin County",
    "San Luis Obispo County",
    "San Mateo County",
    "Santa Barbara County",
    "Santa Clara County",
    "Santa Cruz County",
    "Shasta County",
    "Sierra County",
    "Siskiyou County",
    "Solano County",
    "Sonoma County",
    "Stanislaus County",
    "Sutter County",
    "Tehama County",
    "Trinity County",
    "Tulare County",
    "Tuolumne County",
    "Ventura County",
    "Yolo County",
    "Yuba County"
  ],
  "New York": [
    "Albany County",
    "Allegany County",
    "Bronx County",
    "Broome County",
    "Cattaraugus County",
    "Cayuga County",
    "Chautauqua County",
    "Chemung County",
    "Chenango County",
    "Clinton County",
    "Columbia County",
    "Cortland County",
    "Delaware County",
    "Dutchess County",
    "Erie County",
    "Essex County",
    "Franklin County",
    "Fulton County",
    "Genesee County",
    "Greene County",
    "Hamilton County",
    "Herkimer County",
    "Jefferson County",
    "Kings County (Brooklyn)",
    "Lewis County",
    "Livingston County",
    "Madison County",
    "Monroe County",
    "Montgomery County",
    "Nassau County",
    "New York County (Manhattan)",
    "Niagara County",
    "Oneida County",
    "Onondaga County",
    "Ontario County",
    "Orange County",
    "Orleans County",
    "Oswego County",
    "Otsego County",
    "Putnam County",
    "Queens County",
    "Rensselaer County",
    "Richmond County (Staten Island)",
    "Rockland County",
    "Saint Lawrence County",
    "Saratoga County",
    "Schenectady County",
    "Schoharie County",
    "Schuyler County",
    "Seneca County",
    "Steuben County",
    "Suffolk County",
    "Sullivan County",
    "Tioga County",
    "Tompkins County",
    "Ulster County",
    "Warren County",
    "Washington County",
    "Wayne County",
    "Westchester County",
    "Wyoming County",
    "Yates County"
  ],
  "Texas": [
    "Harris County (Houston)",
    "Dallas County",
    "Tarrant County (Fort Worth)",
    "Bexar County (San Antonio)",
    "Travis County (Austin)",
    "El Paso County",
    "Collin County",
    "Denton County",
    "Hidalgo County",
    "Fort Bend County"
  ],
  "Florida": [
    "Miami-Dade County",
    "Broward County",
    "Palm Beach County",
    "Hillsborough County (Tampa)",
    "Orange County (Orlando)",
    "Pinellas County",
    "Duval County (Jacksonville)",
    "Lee County",
    "Polk County",
    "Brevard County"
  ],
  "Illinois": [
    "Cook County (Chicago)",
    "DuPage County",
    "Lake County",
    "Will County",
    "Kane County",
    "McHenry County",
    "Winnebago County"
  ],
  "Washington": [
    "King County (Seattle)",
    "Pierce County (Tacoma)",
    "Snohomish County",
    "Spokane County",
    "Clark County",
    "Thurston County"
  ],
  // --- United Kingdom ---
  "England": [
    "Greater London",
    "West Midlands (Birmingham)",
    "Greater Manchester",
    "West Yorkshire (Leeds)",
    "Merseyside (Liverpool)",
    "South Yorkshire (Sheffield)",
    "Tyne and Wear (Newcastle)"
  ],
  "Scotland": [
    "City of Edinburgh",
    "Glasgow City",
    "Aberdeen City",
    "Dundee City",
    "Fife",
    "Highland"
  ],
  "Wales": [
    "Cardiff",
    "Swansea",
    "Newport",
    "Wrexham",
    "Gwynedd",
    "Pembrokeshire"
  ]
};
const POLICE_STATIONS_BY_DISTRICT = {
  // --- Madhya Pradesh ---
  "Bhopal": [
    "TT Nagar Police Station",
    "Habibganj Police Station",
    "MP Nagar Police Station",
    "Kohefiza Police Station",
    "Ashoka Garden Police Station",
    "Aishbagh Police Station",
    "Shahjahanabad Police Station",
    "Govindpura Police Station",
    "Piplani Police Station",
    "Bagsewania Police Station",
    "Misrod Police Station",
    "Kolar Police Station",
    "Gandhi Nagar Police Station",
    "Kamla Nagar Police Station",
    "Jahangirabad Police Station",
    "Bilkhiriya Police Station",
    "Ayodhya Nagar Police Station",
    "Nishatpura Police Station",
    "Hanumanganj Police Station",
    "Katara Hills Police Station",
    "Chola Mandir Police Station"
  ],
  "Indore": [
    "Vijay Nagar Police Station",
    "Palasia Police Station",
    "Annapurna Police Station",
    "MG Road Police Station",
    "Tukoganj Police Station",
    "Bhanwarkuan Police Station",
    "Khajrana Police Station"
  ],
  "Jabalpur": [
    "Civil Lines Police Station",
    "Gorakhpur Police Station",
    "Madan Mahal Police Station",
    "Lordganj Police Station",
    "Omti Police Station",
    "Kotwali Police Station",
    "Ghamapur Police Station",
    "Hanumantal Police Station",
    "Adhartal Police Station",
    "Madhotal Police Station",
    "Ranjhi Police Station",
    "Vijay Nagar Police Station",
    "Tilwara Police Station",
    "Barela Police Station",
    "Sihora Police Station",
    "Patan Police Station",
    "Bhedaghat Police Station",
    "Kundam Police Station",
    "Belkheda Police Station",
    "Bargi Police Station",
    "Panagar Police Station"
  ],
  "Gwalior": [
    "Jhansi Road Police Station",
    "Gwalior Fort Police Station",
    "Padav Police Station",
    "Hazira Police Station"
  ],
  // --- Delhi ---
  "New Delhi": [
    "Connaught Place Police Station",
    "Parliament Street Police Station",
    "Chanakyapuri Police Station",
    "Mandir Marg Police Station",
    "Tughlak Road Police Station",
    "Barakhamba Road Police Station"
  ],
  "Central Delhi": [
    "Daryaganj Police Station",
    "Pahar Ganj Police Station",
    "Karol Bagh Police Station",
    "IP Estate Police Station"
  ],
  "South Delhi": [
    "Saket Police Station",
    "Hauz Khas Police Station",
    "Malviya Nagar Police Station",
    "Greater Kailash Police Station",
    "Neb Sarai Police Station",
    "Mehrauli Police Station"
  ],
  "North Delhi": [
    "Civil Lines Police Station",
    "Kotwali Police Station",
    "Kashmere Gate Police Station",
    "Maurice Nagar Police Station"
  ],
  // --- Maharashtra ---
  "Mumbai City": [
    "Colaba Police Station",
    "Marine Drive Police Station",
    "Bandra Police Station",
    "Andheri Police Station",
    "Juhu Police Station",
    "Dharavi Police Station",
    "Cuffe Parade Police Station"
  ],
  "Pune": [
    "Shivajinagar Police Station",
    "Koregaon Park Police Station",
    "Kothrud Police Station",
    "Deccan Gymkhana Police Station",
    "Swargate Police Station"
  ],
  // --- Karnataka ---
  "Bengaluru Urban": [
    "Koramangala Police Station",
    "Indiranagar Police Station",
    "Whitefield Police Station",
    "Jayanagar Police Station",
    "Cubbon Park Police Station",
    "Halasuru Police Station",
    "Sadashivanagar Police Station"
  ],
  // --- Uttar Pradesh ---
  "Gautem Buddha Nagar (Noida)": [
    "Noida Sector 20 Police Station",
    "Noida Sector 58 Police Station",
    "Noida Sector 39 Police Station",
    "Noida Phase 2 Police Station"
  ],
  // --- California ---
  "Los Angeles County": [
    "LAPD Central Community Police Station",
    "LAPD Hollywood Community Police Station",
    "LAPD 77th Street Community Police Station",
    "LA County Sheriff Department - West Hollywood"
  ],
  "San Francisco County": [
    "SFPD Central Station",
    "SFPD Mission Station",
    "SFPD Tenderloin Station",
    "SFPD Richmond Station"
  ],
  // --- New York ---
  "New York County (Manhattan)": [
    "NYPD 1st Precinct (Tribeca)",
    "NYPD 6th Precinct (Greenwich Village)",
    "NYPD 19th Precinct (Upper East Side)",
    "NYPD Midtown South Precinct"
  ]
};
const DistrictSelect = ({
  state = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select district...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const districts = reactExports.useMemo(() => {
    if (!state) return [];
    const raw = DISTRICTS_BY_STATE[state] || [];
    return [...raw].sort((a, b) => a.localeCompare(b));
  }, [state]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return districts;
    return districts.filter((d) => d.toLowerCase().includes(q));
  }, [districts, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((districtName) => {
    onChange(districtName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        disabled: !state,
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!state ? "opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: `shrink-0 ${!state ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !state ? "Select State / Province first..." : value || placeholder,
            value && state && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && state && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && state && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "District selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search district...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search districts"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((districtName, idx) => {
                  const isSelected = districtName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(districtName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: districtName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    districtName
                  );
                }),
                query.trim() && !districts.some((d) => d.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No districts found. Type custom district above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " districts loaded for ",
            state
          ] }) })
        ]
      }
    )
  ] });
};
const PoliceStationSelect = ({
  district = "",
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select police station...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const stations = reactExports.useMemo(() => {
    if (!district) return [];
    let list = POLICE_STATIONS_BY_DISTRICT[district];
    if (!list || list.length === 0) {
      list = [
        `${district} Kotwali Police Station`,
        `${district} Civil Lines Police Station`,
        `${district} Cantonment Police Station`,
        `${district} Sadar Police Station`,
        `${district} Cyber Cell Police Station`,
        `${district} Women Police Station`,
        `${district} Traffic Police Station`,
        `${district} Central Police Station`,
        `${district} Rural Police Station`,
        `${district} Railway Police Station`,
        `${district} Town Police Station`,
        `${district} Crime Branch Police Station`,
        `${district} Industrial Area Police Station`,
        `${district} North Police Station`,
        `${district} South Police Station`,
        `${district} East Police Station`,
        `${district} West Police Station`
      ];
    }
    return [...list].sort((a, b) => a.localeCompare(b));
  }, [district]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stations;
    return stations.filter((s) => s.toLowerCase().includes(q));
  }, [stations, query]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const handleSelect = reactExports.useCallback((stationName) => {
    onChange(stationName);
    setOpen(false);
    setQuery("");
  }, [onChange]);
  const handleTriggerClick = () => {
    if (!district) {
      zt.error("Please select District first.");
      return;
    }
    setOpen((o) => !o);
  };
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        handleTriggerClick();
      }
      return;
    }
    const maxIndex = filtered.length + (query.trim() && !filtered.includes(query.trim()) ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleSelect(filtered[highlighted]);
        } else if (query.trim()) {
          handleSelect(query.trim());
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const borderClass = filled ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleTriggerClick,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: `w-full flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all ${!district ? "opacity-70 bg-slate-50 dark:bg-[#11192e] border-slate-200 dark:border-white/5 cursor-pointer" : "focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"} ${borderClass} text-left`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: `shrink-0 ${!district ? "text-slate-300 dark:text-zinc-700" : "text-slate-400"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex-1 truncate ${value ? "text-slate-800 dark:text-white font-semibold" : "text-slate-400"} flex items-center gap-1.5`, children: [
            !district ? "Select District first..." : value || placeholder,
            value && district && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-emerald-500 shrink-0" })
          ] }),
          value && district && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange("");
              },
              className: "p-0.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-full shrink-0 transition-colors",
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && district && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        role: "listbox",
        "aria-label": "Police station selection",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Type to search police station...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400",
                "aria-label": "Search police stations"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((stationName, idx) => {
                  const isSelected = stationName === value;
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": isSelected,
                      onClick: () => handleSelect(stationName),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: stationName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    stationName
                  );
                }),
                query.trim() && !stations.some((s) => s.toLowerCase() === query.trim().toLowerCase()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    onClick: () => handleSelect(query.trim()),
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2", children: [
                        'Use Custom: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                        value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${value === query.trim() ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: value === query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                      ] })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No police stations found. Type custom police station above." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
            filtered.length,
            " police stations loaded for ",
            district
          ] }) })
        ]
      }
    )
  ] });
};
const CRIMINAL_SECTIONS = [
  { id: "ipc_120b", ipc: "120B", bns: "61(2)", title: "Criminal Conspiracy", bnsTitle: "Criminal Conspiracy" },
  { id: "ipc_141", ipc: "141", bns: "189(1)", title: "Unlawful Assembly", bnsTitle: "Unlawful Assembly" },
  { id: "ipc_153a", ipc: "153A", bns: "196", title: "Promoting Enmity between Groups", bnsTitle: "Promoting Enmity between Groups" },
  { id: "ipc_186", ipc: "186", bns: "224", title: "Obstructing Public Servant", bnsTitle: "Obstructing Public Servant" },
  { id: "ipc_294", ipc: "294", bns: "296", title: "Obscene Acts & Songs in Public", bnsTitle: "Obscene Acts & Songs" },
  { id: "ipc_302", ipc: "302", bns: "103(1)", title: "Murder", bnsTitle: "Murder" },
  { id: "ipc_304", ipc: "304", bns: "105", title: "Culpable Homicide not amounting to Murder", bnsTitle: "Culpable Homicide" },
  { id: "ipc_307", ipc: "307", bns: "109", title: "Attempt to Murder", bnsTitle: "Attempt to Murder" },
  { id: "ipc_323", ipc: "323", bns: "115", title: "Voluntarily Causing Hurt", bnsTitle: "Voluntarily Causing Hurt" },
  { id: "ipc_324", ipc: "324", bns: "118", title: "Voluntarily Causing Hurt by Dangerous Weapons", bnsTitle: "Hurt by Dangerous Weapons" },
  { id: "ipc_325", ipc: "325", bns: "116", title: "Voluntarily Causing Grievous Hurt", bnsTitle: "Voluntarily Causing Grievous Hurt" },
  { id: "ipc_326", ipc: "326", bns: "117", title: "Voluntarily Causing Grievous Hurt by Dangerous Weapons", bnsTitle: "Grievous Hurt by Dangerous Weapons" },
  { id: "ipc_341", ipc: "341", bns: "126", title: "Wrongful Restraint", bnsTitle: "Wrongful Restraint" },
  { id: "ipc_342", ipc: "342", bns: "127", title: "Wrongful Confinement", bnsTitle: "Wrongful Confinement" },
  { id: "ipc_354", ipc: "354", bns: "74", title: "Assault/Criminal Force to Woman with Intent to Outrage Modesty", bnsTitle: "Outraging Modesty of Woman" },
  { id: "ipc_354a", ipc: "354A", bns: "75", title: "Sexual Harassment", bnsTitle: "Sexual Harassment" },
  { id: "ipc_354b", ipc: "354B", bns: "76", title: "Assault to Woman with Intent to Disrobe", bnsTitle: "Assault to Disrobe Woman" },
  { id: "ipc_354c", ipc: "354C", bns: "77", title: "Voyeurism", bnsTitle: "Voyeurism" },
  { id: "ipc_354d", ipc: "354D", bns: "78", title: "Stalking", bnsTitle: "Stalking" },
  { id: "ipc_363", ipc: "363", bns: "137", title: "Kidnapping", bnsTitle: "Kidnapping" },
  { id: "ipc_364a", ipc: "364A", bns: "140", title: "Kidnapping for Ransom", bnsTitle: "Kidnapping for Ransom" },
  { id: "ipc_366", ipc: "366", bns: "142", title: "Kidnapping/Abducting Woman to Compel Marriage", bnsTitle: "Abducting Woman to Compel Marriage" },
  { id: "ipc_376", ipc: "376", bns: "64", title: "Rape", bnsTitle: "Rape" },
  { id: "ipc_376ab", ipc: "376AB", bns: "65", title: "Rape on Woman under 12 Years of Age", bnsTitle: "Rape on Child under 12 Years" },
  { id: "ipc_376da", ipc: "376DA", bns: "70(1)", title: "Gang Rape on Woman under 16 Years of Age", bnsTitle: "Gang Rape on Child under 16 Years" },
  { id: "ipc_379", ipc: "379", bns: "303(2)", title: "Theft", bnsTitle: "Theft" },
  { id: "ipc_380", ipc: "380", bns: "305", title: "Theft in Dwelling House/Vessel/Building", bnsTitle: "Theft in Building/House" },
  { id: "ipc_392", ipc: "392", bns: "309", title: "Robbery", bnsTitle: "Robbery" },
  { id: "ipc_395", ipc: "395", bns: "310", title: "Dacoity", bnsTitle: "Dacoity" },
  { id: "ipc_397", ipc: "397", bns: "311", title: "Robbery/Dacoity with Attempt to Cause Death/Grievous Hurt", bnsTitle: "Robbery/Dacoity with Attempt to Cause Death" },
  { id: "ipc_406", ipc: "406", bns: "316", title: "Criminal Breach of Trust", bnsTitle: "Criminal Breach of Trust" },
  { id: "ipc_409", ipc: "409", bns: "316(4)", title: "Criminal Breach of Trust by Public Servant/Banker/Merchant", bnsTitle: "Breach of Trust by Public Servant" },
  { id: "ipc_415", ipc: "415", bns: "318(1)", title: "Cheating", bnsTitle: "Cheating" },
  { id: "ipc_420", ipc: "420", bns: "318(4)", title: "Cheating & Dishonestly Inducing Delivery of Property (Fraud)", bnsTitle: "Cheating & Fraud" },
  { id: "ipc_463", ipc: "463", bns: "336(1)", title: "Forgery", bnsTitle: "Forgery" },
  { id: "ipc_465", ipc: "465", bns: "336", title: "Punishment for Forgery", bnsTitle: "Punishment for Forgery" },
  { id: "ipc_467", ipc: "467", bns: "338", title: "Forgery of Valuable Security, Will, etc.", bnsTitle: "Forgery of Valuable Security" },
  { id: "ipc_468", ipc: "468", bns: "336(3)", title: "Forgery for Purpose of Cheating", bnsTitle: "Forgery for Cheating" },
  { id: "ipc_471", ipc: "471", bns: "340", title: "Using Forged Document/Electronic Record as Genuine", bnsTitle: "Using Forged Document" },
  { id: "ipc_499", ipc: "499", bns: "356", title: "Defamation", bnsTitle: "Defamation" },
  { id: "ipc_500", ipc: "500", bns: "356", title: "Punishment for Defamation", bnsTitle: "Punishment for Defamation" },
  { id: "ipc_503", ipc: "503", bns: "351(1)", title: "Criminal Intimidation", bnsTitle: "Criminal Intimidation" },
  { id: "ipc_506", ipc: "506", bns: "351(2)", title: "Punishment for Criminal Intimidation", bnsTitle: "Punishment for Criminal Intimidation" },
  { id: "ipc_509", ipc: "509", bns: "79", title: "Word, Gesture or Act Intended to Insult Modesty of Woman", bnsTitle: "Insult to Modesty of Woman" }
];
const SectionSelect = ({
  value = "",
  onChange,
  filled = false,
  placeholder = "Search and select sections...",
  required = false
}) => {
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const [highlighted, setHighlighted] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState([]);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!value) {
      setSelected([]);
      return;
    }
    const parts = value.split(",").map((s) => s.trim()).filter(Boolean);
    const parsed = parts.map((part) => {
      const cleanedPart = part.toLowerCase();
      const match = CRIMINAL_SECTIONS.find((sec) => {
        const idMatch = cleanedPart === sec.id.toLowerCase();
        const ipcMatch = cleanedPart === sec.ipc.toLowerCase() || cleanedPart === `ipc ${sec.ipc.toLowerCase()}` || cleanedPart === `ipc section ${sec.ipc.toLowerCase()}`;
        const bnsMatch = sec.bns && (cleanedPart === sec.bns.toLowerCase() || cleanedPart === `bns ${sec.bns.toLowerCase()}` || cleanedPart === `bns section ${sec.bns.toLowerCase()}`);
        const fullTitleMatch = cleanedPart.includes(`ipc section ${sec.ipc.toLowerCase()}`) || cleanedPart.includes(`ipc ${sec.ipc.toLowerCase()}`);
        return idMatch || ipcMatch || bnsMatch || fullTitleMatch;
      });
      if (match) {
        return match;
      } else {
        return {
          id: `custom_${part}`,
          ipc: part,
          title: "",
          isCustom: true
        };
      }
    });
    const seen = /* @__PURE__ */ new Set();
    const unique = [];
    parsed.forEach((item) => {
      const key = item.isCustom ? item.ipc : item.id;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(item);
      }
    });
    setSelected(unique);
  }, [value]);
  const filtered = query.trim() ? CRIMINAL_SECTIONS.filter((sec) => {
    const q = query.toLowerCase();
    return sec.ipc.toLowerCase().includes(q) || sec.bns && sec.bns.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q) || sec.bnsTitle && sec.bnsTitle.toLowerCase().includes(q) || `ipc ${sec.ipc}`.toLowerCase().includes(q) || `bns ${sec.bns}`.toLowerCase().includes(q);
  }) : CRIMINAL_SECTIONS;
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (open) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setHighlighted(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[highlighted];
      el == null ? void 0 : el.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);
  const triggerChange = reactExports.useCallback((newSelected) => {
    const str = newSelected.map((sec) => {
      if (sec.isCustom) return sec.ipc;
      return `IPC Section ${sec.ipc} – ${sec.title}`;
    }).join(", ");
    onChange(str);
  }, [onChange]);
  const handleToggle = reactExports.useCallback((sec) => {
    const isSelected = selected.some((s) => s.isCustom ? s.ipc === sec.ipc : s.id === sec.id);
    let next;
    if (isSelected) {
      next = selected.filter((s) => s.isCustom ? s.ipc !== sec.ipc : s.id !== sec.id);
    } else {
      next = [...selected, sec];
    }
    setSelected(next);
    triggerChange(next);
  }, [selected, triggerChange]);
  const handleRemove = reactExports.useCallback((sec, e) => {
    e.stopPropagation();
    const next = selected.filter((s) => s.isCustom ? s.ipc !== sec.ipc : s.id !== sec.id);
    setSelected(next);
    triggerChange(next);
  }, [selected, triggerChange]);
  const handleAddCustom = reactExports.useCallback(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    const isAlreadySelected = selected.some((s) => s.ipc.toLowerCase() === trimmedQuery.toLowerCase());
    if (isAlreadySelected) {
      setQuery("");
      return;
    }
    const customSec = {
      id: `custom_${trimmedQuery}`,
      ipc: trimmedQuery,
      title: "",
      isCustom: true
    };
    const next = [...selected, customSec];
    setSelected(next);
    triggerChange(next);
    setQuery("");
    setHighlighted(0);
  }, [query, selected, triggerChange]);
  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }
    const showCustomOption = query.trim() && !CRIMINAL_SECTIONS.some(
      (s) => s.ipc.toLowerCase() === query.trim().toLowerCase() || s.bns && s.bns.toLowerCase() === query.trim().toLowerCase()
    );
    const maxIndex = filtered.length + (showCustomOption ? 1 : 0) - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, maxIndex));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted < filtered.length) {
          if (filtered[highlighted]) handleToggle(filtered[highlighted]);
        } else if (showCustomOption) {
          handleAddCustom();
        }
        break;
      case "Escape":
        setOpen(false);
        setQuery("");
        break;
    }
  };
  const getDisplayLabel = (sec) => {
    if (sec.isCustom) return sec.ipc;
    if (sec.bns) return `IPC ${sec.ipc} (BNS ${sec.bns}) – ${sec.title}`;
    return `IPC ${sec.ipc} – ${sec.title}`;
  };
  const getChipLabel = (sec) => {
    if (sec.isCustom) return sec.ipc;
    return `IPC ${sec.ipc}`;
  };
  const borderClass = filled || selected.length > 0 ? "border-emerald-300 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10" : "border-slate-200 dark:border-white/8 bg-white dark:bg-[#141E35]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", onKeyDown: handleKeyDown, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => setOpen((o) => !o),
        className: `w-full min-h-[46px] flex flex-wrap items-center gap-1.5 border rounded-xl px-3.5 py-2.5 text-sm outline-none cursor-pointer transition-all ${open ? "ring-2 ring-indigo-500/20 border-indigo-500 bg-white dark:bg-[#1A2540]" : borderClass}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 15, className: "text-slate-400 shrink-0 mr-1" }),
          selected.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 select-none flex-1 truncate", children: placeholder }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 flex-1 min-w-0", children: selected.map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 pl-2 pr-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-black",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "✓ ",
                  getChipLabel(sec)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => handleRemove(sec, e),
                    className: "p-0.5 hover:bg-indigo-150 dark:hover:bg-indigo-900/60 rounded-full shrink-0 transition-colors",
                    "aria-label": `Remove ${getChipLabel(sec)}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10, className: "text-indigo-600 dark:text-indigo-400" })
                  }
                )
              ]
            },
            sec.isCustom ? sec.ipc : sec.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              size: 15,
              className: `text-slate-400 shrink-0 ml-auto transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute z-[9999] left-0 right-0 mt-1.5 bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        style: { maxHeight: "320px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5 border-b border-slate-100 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1A2540] z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                },
                placeholder: "Search section number or name (e.g., 302, Theft)...",
                className: "flex-1 text-xs font-medium text-slate-800 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400"
              }
            ),
            query && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setQuery("");
                  setHighlighted(0);
                },
                className: "p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11, className: "text-slate-400" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: listRef,
              className: "overflow-y-auto custom-scrollbar",
              style: { maxHeight: "230px" },
              children: [
                filtered.map((sec, idx) => {
                  const isSelected = selected.some((s) => s.isCustom ? s.ipc === sec.ipc : s.id === sec.id);
                  const isHovered = idx === highlighted;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleToggle(sec),
                      onMouseEnter: () => setHighlighted(idx),
                      className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold" : isHovered ? "bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold flex-1 truncate pr-2", children: getDisplayLabel(sec) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-indigo-600 dark:text-indigo-400" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400" : "border-slate-300 dark:border-zinc-600 bg-transparent"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
                        ] })
                      ]
                    },
                    sec.id
                  );
                }),
                query.trim() && !CRIMINAL_SECTIONS.some(
                  (s) => s.ipc.toLowerCase() === query.trim().toLowerCase() || s.bns && s.bns.toLowerCase() === query.trim().toLowerCase()
                ) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleAddCustom,
                    onMouseEnter: () => setHighlighted(filtered.length),
                    className: `w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${highlighted === filtered.length ? "bg-indigo-50/85 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold" : "text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-white/5"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold truncate flex-1 pr-2 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                        ' Add Custom Section: "',
                        query.trim(),
                        '"'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border border-dashed border-indigo-500 bg-transparent" }) })
                    ]
                  }
                ),
                filtered.length === 0 && !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 24, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No sections found. Type to add custom." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-black/10 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [
              filtered.length,
              " of ",
              CRIMINAL_SECTIONS.length,
              " sections database"
            ] }),
            selected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  setSelected([]);
                  triggerChange([]);
                },
                className: "text-[10px] text-indigo-500 hover:underline font-bold",
                children: [
                  "Clear All (",
                  selected.length,
                  ")"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
};
const COUNTRY_FIELD = {
  key: "country",
  label: "Country",
  type: "country",
  required: true,
  placeholder: "Search and select country..."
};
const STATE_FIELD = {
  key: "state",
  label: "State / Province",
  type: "state",
  required: true,
  placeholder: "Search and select state / province..."
};
const DISTRICT_FIELD = {
  key: "district",
  label: "District",
  type: "district",
  required: true,
  placeholder: "Search and select district..."
};
const POLICE_STATION_FIELD = {
  key: "policeStation",
  label: "Police Station",
  type: "policeStation",
  required: true,
  placeholder: "Search and select police station..."
};
const buildEnrichedFields = (originalFields) => {
  const fields = originalFields.map((f) => f.key === "ipcSections" ? { ...f, type: "sections" } : f);
  const hasPoliceStation = fields.some((f) => {
    const k = f.key.toLowerCase();
    return k === "policestation" || k === "police_station" || k === "district";
  });
  const cleanedFields = fields.filter((f) => {
    const k = f.key.toLowerCase();
    return k !== "country" && k !== "state" && k !== "province" && k !== "district" && k !== "policestation" && k !== "police_station";
  });
  const result = [];
  let injected = false;
  let firstAddressIdx = -1;
  for (let i = 0; i < cleanedFields.length; i++) {
    const lk = cleanedFields[i].key.toLowerCase();
    if (lk.includes("address") || lk.includes("addr")) {
      firstAddressIdx = i;
      break;
    }
  }
  if (firstAddressIdx !== -1) {
    cleanedFields.forEach((field, idx) => {
      result.push(field);
      if (idx === firstAddressIdx) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        if (hasPoliceStation) {
          result.push(DISTRICT_FIELD);
          result.push(POLICE_STATION_FIELD);
        }
        injected = true;
      }
    });
  } else if (hasPoliceStation) {
    const originalPoliceStationIdx = fields.findIndex((f) => {
      const k = f.key.toLowerCase();
      return k === "policestation" || k === "police_station" || k === "district";
    });
    const insertIdx = originalPoliceStationIdx !== -1 ? originalPoliceStationIdx : 2;
    cleanedFields.forEach((field, idx) => {
      if (idx === insertIdx) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        result.push(DISTRICT_FIELD);
        result.push(POLICE_STATION_FIELD);
        injected = true;
      }
      result.push(field);
    });
    if (!injected) {
      result.push(COUNTRY_FIELD);
      result.push(STATE_FIELD);
      result.push(DISTRICT_FIELD);
      result.push(POLICE_STATION_FIELD);
      injected = true;
    }
  } else {
    cleanedFields.forEach((field, idx) => {
      result.push(field);
      if (idx === 1) {
        result.push(COUNTRY_FIELD);
        result.push(STATE_FIELD);
        injected = true;
      }
    });
    if (!injected) {
      result.push(COUNTRY_FIELD);
      result.push(STATE_FIELD);
    }
  }
  return result;
};
const CAT_ICONS = {
  "CRIMINAL LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 15, className: "text-red-500" }),
  "CIVIL LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 15, className: "text-blue-500" }),
  "FAMILY LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15, className: "text-pink-500" }),
  "PROPERTY LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 15, className: "text-amber-500" }),
  "CORPORATE LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 15, className: "text-violet-500" }),
  "BANKING & FINANCE": /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 15, className: "text-emerald-500" }),
  "LABOUR LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-orange-500" }),
  "CONSUMER COURT": /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 15, className: "text-cyan-500" }),
  "CYBER LAW": /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { size: 15, className: "text-indigo-500" }),
  "TAX & GST": /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 15, className: "text-lime-600" }),
  "INTELLECTUAL PROPERTY": /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15, className: "text-purple-500" }),
  "COURT & DOCUMENTS": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-slate-500" }),
  "GENERAL": /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-slate-500" })
};
const CAT_COLORS = {
  "CRIMINAL LAW": "border-red-200 dark:border-red-900/30",
  "CIVIL LAW": "border-blue-200 dark:border-blue-900/30",
  "FAMILY LAW": "border-pink-200 dark:border-pink-900/30",
  "PROPERTY LAW": "border-amber-200 dark:border-amber-900/30",
  "CORPORATE LAW": "border-violet-200 dark:border-violet-900/30",
  "BANKING & FINANCE": "border-emerald-200 dark:border-emerald-900/30",
  "LABOUR LAW": "border-orange-200 dark:border-orange-900/30",
  "CONSUMER COURT": "border-cyan-200 dark:border-cyan-900/30",
  "CYBER LAW": "border-indigo-200 dark:border-indigo-900/30",
  "TAX & GST": "border-lime-200 dark:border-lime-900/30",
  "INTELLECTUAL PROPERTY": "border-purple-200 dark:border-purple-900/30",
  "COURT & DOCUMENTS": "border-slate-200 dark:border-slate-800"
};
const buildCategories = () => {
  const catMap = {};
  Object.entries(DRAFT_TEMPLATES).forEach(([draftType, tmpl]) => {
    const cat = tmpl.category;
    if (!catMap[cat]) catMap[cat] = [];
    catMap[cat].push(draftType);
  });
  return Object.entries(catMap).map(([title, items]) => ({ title, items }));
};
const ALL_CATEGORIES = buildCategories();
const FieldInput = ({ field, value, onChange, filled, country, state, district }) => {
  const base = `w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${filled ? "bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-300 dark:border-emerald-700/50 text-slate-800 dark:text-white" : "bg-white dark:bg-[#141E35] border-slate-200 dark:border-white/8 text-slate-800 dark:text-white"}`;
  if (field.type === "sections") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionSelect,
      {
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select sections...",
        required: field.required
      }
    );
  }
  if (field.type === "country") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountrySelect,
      {
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select country...",
        required: field.required
      }
    );
  }
  if (field.type === "state") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      StateSelect,
      {
        country,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select state / province...",
        required: field.required
      }
    );
  }
  if (field.type === "district") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DistrictSelect,
      {
        state,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select district...",
        required: field.required
      }
    );
  }
  if (field.type === "policeStation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PoliceStationSelect,
      {
        district,
        value: value || "",
        onChange,
        filled,
        placeholder: field.placeholder || "Search and select police station...",
        required: field.required
      }
    );
  }
  if (field.type === "date") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "date",
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: base
      }
    );
  }
  if (field.type === "select" && field.options) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: base,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
            "— Select ",
            field.label,
            " —"
          ] }),
          field.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
        ]
      }
    );
  }
  if (field.type === "textarea") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        rows: 4,
        placeholder: field.placeholder || `Enter ${field.label}...`,
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        className: `${base} resize-y min-h-[100px] leading-relaxed`
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      placeholder: field.placeholder || `Enter ${field.label}...`,
      value: value || "",
      onChange: (e) => onChange(e.target.value),
      className: base
    }
  );
};
const extractPlaceholders = (text) => {
  if (!text) return [];
  const matches = [];
  const seen = /* @__PURE__ */ new Set();
  const dbRegex = /\{\{([^}]+)\}\}/g;
  let match;
  while ((match = dbRegex.exec(text)) !== null) {
    const keyName = match[1].trim();
    if (!seen.has(keyName)) {
      seen.add(keyName);
      matches.push({
        raw: match[0],
        label: keyName.replace(/_/g, " ").toUpperCase(),
        key: keyName
      });
    }
  }
  const brRegex = /\[\s*([^\]]{2,50})\s*\]/g;
  while ((match = brRegex.exec(text)) !== null) {
    const rawName = match[1].trim();
    const idName = rawName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    if (!seen.has(idName)) {
      seen.add(idName);
      matches.push({
        raw: match[0],
        label: rawName,
        key: idName
      });
    }
  }
  return matches;
};
const replacePlaceholders = (text, values) => {
  if (!text) return "";
  let replaced = text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
    const cleanKey = key.trim();
    const val = values[cleanKey];
    return val && val.trim() ? val.trim() : match;
  });
  replaced = replaced.replace(/\[\s*([^\]]{2,50})\s*\]/g, (match, rawName) => {
    const idName = rawName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const val = values[idName];
    return val && val.trim() ? val.trim() : match;
  });
  return replaced;
};
const validateAndFormatDraft = (text, templateTitle = "") => {
  if (!text) return "";
  let cleaned = text.replace(/\\n/g, "\n").replace(/\\t/g, "	").replace(/\\"/g, '"');
  cleaned = cleanGeneratedDraft(cleaned, templateTitle);
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");
  cleaned = cleaned.replace(/<[^>]*>/g, "");
  return cleaned;
};
const cleanGeneratedDraft = (text, templateTitle = "") => {
  if (!text) return "";
  let cleaned = text.trim();
  const prefixRegexes = [
    /^\[RAG\]/gi,
    /^here is/gi,
    /^sure/gi,
    /^certainly/gi,
    /^absolutely/gi,
    /^professionally formatted/gi,
    /^generated by/gi,
    /^ai response/gi,
    /^assistant/gi,
    /^admin/gi,
    /^here's/gi,
    /^please find/gi,
    /^this is/gi,
    /^below is/gi,
    /^i have/gi
  ];
  let lines = cleaned.split("\n");
  let firstValidLineIdx = -1;
  const startKeywords = [
    "FIRST INFORMATION",
    "BAIL APPLICATION",
    "LEGAL NOTICE",
    "RENT AGREEMENT",
    "AFFIDAVIT",
    "BEFORE THE",
    "IN THE COURT OF",
    "IN THE HON'BLE",
    "IN THE MATTER OF",
    "MEMORANDUM OF",
    "PETITION FOR",
    "WRIT PETITION",
    "DRAFT",
    "TO,",
    "THE STATION HOUSE",
    "DEED",
    "THIS DEED",
    "THIS AGREEMENT",
    "CONTRACT",
    "POWER OF ATTORNEY",
    "WILL",
    "COMPLAINT",
    "APPLICATION FOR",
    "NOTICE TO",
    templateTitle.toUpperCase().replace(/\s*DRAFT\s*/gi, "").trim()
  ].filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/[#*_\-\s]/g, "").trim().toUpperCase();
    if (!line) continue;
    const isStartKeyword = startKeywords.some((kw) => {
      const cleanKw = kw.replace(/[#*_\-\s]/g, "").trim().toUpperCase();
      return line.includes(cleanKw);
    });
    if (isStartKeyword) {
      firstValidLineIdx = i;
      break;
    }
  }
  if (firstValidLineIdx !== -1) {
    lines = lines.slice(firstValidLineIdx);
  } else {
    while (lines.length > 0) {
      const firstLine = lines[0].trim();
      const shouldFilter = prefixRegexes.some((rx) => rx.test(firstLine)) || firstLine.startsWith("*") && firstLine.endsWith("*") && firstLine.length < 50;
      if (shouldFilter) {
        lines.shift();
      } else {
        break;
      }
    }
  }
  const endKeywords = [
    "CASE SUMMARY",
    "LEGAL FORMAT",
    "EXPLANATION",
    "FORMATTING NOTES",
    "REASONING",
    "DOCUMENT ANALYSIS"
  ];
  let endIdx = lines.length;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/[#*_\-\s]/g, "").trim().toUpperCase();
    if (!line) continue;
    const isEndKeyword = endKeywords.some((kw) => {
      const cleanKw = kw.replace(/[#*_\-\s]/g, "").trim().toUpperCase();
      return line.startsWith(cleanKw) || line === cleanKw;
    });
    if (isEndKeyword) {
      endIdx = i;
      break;
    }
  }
  if (endIdx !== lines.length) {
    lines = lines.slice(0, endIdx);
  }
  let draftText = lines.join("\n").trim();
  draftText = draftText.replace(/```[a-z]*\n?/gi, "").replace(/```/g, "");
  return draftText;
};
const DraftMaker = ({ currentCase, onBack, theme, allProjects = [] }) => {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const [compareMobileTab, setCompareMobileTab] = reactExports.useState("refined");
  const [isMobilePreviewMenuOpen, setIsMobilePreviewMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [step, setStep] = reactExports.useState("SELECT");
  const [selectedType, setSelectedType] = reactExports.useState(null);
  const [template, setTemplate] = reactExports.useState(null);
  const [inputSource, setInputSource] = reactExports.useState(null);
  const [selectedCaseForImport, setSelectedCaseForImport] = reactExports.useState("");
  const [isAnalyzingDocs, setIsAnalyzingDocs] = reactExports.useState(false);
  const [caseImportSummary, setCaseImportSummary] = reactExports.useState(null);
  const [uploadedFiles, setUploadedFiles] = reactExports.useState([]);
  const [docAnalysisSummary, setDocAnalysisSummary] = reactExports.useState(null);
  const [missingFieldsKeys, setMissingFieldsKeys] = reactExports.useState([]);
  const [showImportedData, setShowImportedData] = reactExports.useState(false);
  const [editorMode, setEditorMode] = reactExports.useState("READ");
  const [isCopilotRefining, setIsCopilotRefining] = reactExports.useState(false);
  const [copilotLoadingText, setCopilotLoadingText] = reactExports.useState("");
  const [zoomPercent, setZoomPercent] = reactExports.useState(100);
  const [activeCopilotTab, setActiveCopilotTab] = reactExports.useState(() => {
    return localStorage.getItem("@aisa_copilot_active_tab") || "Assistant";
  });
  const [compareVersion, setCompareVersion] = reactExports.useState(null);
  const [copilotComparison, setCopilotComparison] = reactExports.useState(null);
  const [sidebarWidth, setSidebarWidth] = reactExports.useState(() => {
    const saved = localStorage.getItem("@aisa_copilot_sidebar_width");
    return saved ? parseInt(saved, 10) : 360;
  });
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(() => {
    const saved = localStorage.getItem("@aisa_copilot_sidebar_open");
    return saved !== "false";
  });
  const [formData, setFormData] = reactExports.useState({});
  const [errors, setErrors] = reactExports.useState({});
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [prefillData, setPrefillData] = reactExports.useState(null);
  const [prefillBanner, setPrefillBanner] = reactExports.useState(false);
  const [filledFields, setFilledFields] = reactExports.useState(/* @__PURE__ */ new Set());
  const [generationMode, setGenerationMode] = reactExports.useState("standard");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [generationStatus, setGenerationStatus] = reactExports.useState("");
  const [finalDraft, setFinalDraft] = reactExports.useState("");
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [draftVersion, setDraftVersion] = reactExports.useState(1);
  const [draftVersionHistory, setDraftVersionHistory] = reactExports.useState([]);
  const [autoSaveStatus, setAutoSaveStatus] = reactExports.useState("saved");
  const [savedDrafts, setSavedDrafts] = reactExports.useState([]);
  const [loadingDrafts, setLoadingDrafts] = reactExports.useState(false);
  const [savedNotice, setSavedNotice] = reactExports.useState(null);
  const [isAiSuggesting, setIsAiSuggesting] = reactExports.useState(false);
  const [exportHistory, setExportHistory] = reactExports.useState([]);
  const [generationTimestamp, setGenerationTimestamp] = reactExports.useState("");
  const {
    outputLang,
    setOutputLang,
    setIsTranslating: setIsDraftTranslating,
    getDisplayText: getDraftDisplayText,
    translateText: translateDraftText
  } = useOutputLanguage("draft_maker", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [draftDisplayText, setDraftDisplayText] = reactExports.useState("");
  const draftMountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    draftMountedRef.current = true;
    return () => {
      draftMountedRef.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    if (finalDraft) {
      if (outputLang === "en") {
        setDraftDisplayText(finalDraft);
      } else {
        handleDraftLangChange(outputLang);
      }
    } else {
      setDraftDisplayText("");
    }
  }, [finalDraft]);
  const handleDraftLangChange = reactExports.useCallback(async (newLang) => {
    setOutputLang(newLang);
    if (!finalDraft) return;
    if (newLang === "en") {
      setDraftDisplayText(finalDraft);
      return;
    }
    const cached = getDraftDisplayText(finalDraft);
    if (cached && cached !== finalDraft) {
      setDraftDisplayText(cached);
      return;
    }
    setIsDraftTranslating(true);
    try {
      const translated = await translateDraftText(finalDraft);
      if (draftMountedRef.current) setDraftDisplayText(translated);
    } catch {
      if (draftMountedRef.current) setDraftDisplayText(finalDraft);
    } finally {
      if (draftMountedRef.current) setIsDraftTranslating(false);
    }
  }, [finalDraft, getDraftDisplayText, setOutputLang, setIsDraftTranslating, translateDraftText]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [activeCat, setActiveCat] = reactExports.useState("ALL");
  const [smartFilter, setSmartFilter] = reactExports.useState("All");
  const [favorites, setFavorites] = reactExports.useState(() => {
    const raw = localStorage.getItem("@aisa_draft_favorites");
    return raw ? JSON.parse(raw) : [];
  });
  const [recentlyUsed, setRecentlyUsed] = reactExports.useState(() => {
    const raw = localStorage.getItem("@aisa_draft_recently_used");
    return raw ? JSON.parse(raw) : [];
  });
  reactExports.useEffect(() => {
    localStorage.setItem("@aisa_draft_favorites", JSON.stringify(favorites));
  }, [favorites]);
  reactExports.useEffect(() => {
    localStorage.setItem("@aisa_draft_recently_used", JSON.stringify(recentlyUsed));
  }, [recentlyUsed]);
  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.includes(item)) {
        return prev.filter((x) => x !== item);
      } else {
        return [...prev, item];
      }
    });
  };
  const [showVersionHistory, setShowVersionHistory] = reactExports.useState(false);
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = reactExports.useState(false);
  const [isProtectedEditing, setIsProtectedEditing] = reactExports.useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = reactExports.useState(false);
  const [draftPlaceholders, setDraftPlaceholders] = reactExports.useState([]);
  const [shareAccordion, setShareAccordion] = reactExports.useState("link");
  const [emailRecipient, setEmailRecipient] = reactExports.useState("");
  const [emailSubject, setEmailSubject] = reactExports.useState("");
  const [emailMessage, setEmailMessage] = reactExports.useState("");
  const [emailAttachPDF, setEmailAttachPDF] = reactExports.useState(true);
  const [emailAttachDOCX, setEmailAttachDOCX] = reactExports.useState(true);
  const [emailAttachTXT, setEmailAttachTXT] = reactExports.useState(false);
  const [emailIncludeCaseSummary, setEmailIncludeCaseSummary] = reactExports.useState(true);
  const [emailIncludeAINotes, setEmailIncludeAINotes] = reactExports.useState(true);
  const [emailIncludeMetadata, setEmailIncludeMetadata] = reactExports.useState(false);
  const [whatsappNumber, setWhatsappNumber] = reactExports.useState("");
  const [whatsappMessage, setWhatsappMessage] = reactExports.useState("");
  const [whatsappAttachPDF, setWhatsappAttachPDF] = reactExports.useState(true);
  const [whatsappAttachDOCX, setWhatsappAttachDOCX] = reactExports.useState(false);
  const [linkExpiry, setLinkExpiry] = reactExports.useState("24h");
  const [linkPermission, setLinkPermission] = reactExports.useState("readonly");
  const [linkWatermark, setLinkWatermark] = reactExports.useState(true);
  const [teamShareRole, setTeamShareRole] = reactExports.useState("Advocate");
  const [teamShareView, setTeamShareView] = reactExports.useState(true);
  const [teamShareComment, setTeamShareComment] = reactExports.useState(false);
  const [teamShareEdit, setTeamShareEdit] = reactExports.useState(false);
  const [teamShareDownload, setTeamShareDownload] = reactExports.useState(false);
  const [teamShareExpiry, setTeamShareExpiry] = reactExports.useState("");
  const [downloadFormat, setDownloadFormat] = reactExports.useState("PDF");
  const [printPageSize, setPrintPageSize] = reactExports.useState("A4");
  const [printMargins, setPrintMargins] = reactExports.useState("normal");
  const [printIncludeHeader, setPrintIncludeHeader] = reactExports.useState(true);
  const [printIncludeFooter, setPrintIncludeFooter] = reactExports.useState(true);
  const [secPasswordProtect, setSecPasswordProtect] = reactExports.useState(false);
  const [secPassword, setSecPassword] = reactExports.useState("");
  const [secWatermark, setSecWatermark] = reactExports.useState(false);
  const [secWatermarkText, setSecWatermarkText] = reactExports.useState("AI LEGAL Confidential");
  const [secReadOnly, setSecReadOnly] = reactExports.useState(true);
  const [secDisableCopy, setSecDisableCopy] = reactExports.useState(false);
  const [secDisablePrint, setSecDisablePrint] = reactExports.useState(false);
  const [secDisableDownload, setSecDisableDownload] = reactExports.useState(false);
  const [secAddQR, setSecAddQR] = reactExports.useState(false);
  const [secHash, setSecHash] = reactExports.useState("");
  const [shareLogs, setShareLogs] = reactExports.useState([
    { id: 1, recipient: "Rahul Sharma", method: "Email", date: "27 Jun 2026", time: "2:45 PM", details: "Attached PDF & DOCX" },
    { id: 2, recipient: "Public", method: "Copied Link", date: "27 Jun 2026", time: "2:51 PM", details: "Expiry 24h, View Only" },
    { id: 3, recipient: "Self", method: "Downloaded PDF", date: "27 Jun 2026", time: "3:05 PM", details: "Court Ready Format" }
  ]);
  reactExports.useEffect(() => {
    if (isShareModalOpen) {
      setEmailSubject(`Legal Draft: ${selectedType || "Notice"}`);
      setEmailMessage(`Dear Client,

Please find attached the draft copy of "${selectedType || "Notice"}" generated for your review.

Warm regards,
Counsel`);
      setWhatsappMessage(`Hello, please find the legal draft link for ${selectedType || "Notice"}`);
    }
  }, [isShareModalOpen, selectedType]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = reactExports.useState(false);
  const [originalGeneratedDraft, setOriginalGeneratedDraft] = reactExports.useState("");
  const [placeholderValues, setPlaceholderValues] = reactExports.useState({});
  reactExports.useRef(null);
  const [draftHistory, setDraftHistory] = reactExports.useState(() => {
    const raw = localStorage.getItem("@aisa_draft_history");
    return raw ? JSON.parse(raw) : [];
  });
  const [historySearchQuery, setHistorySearchQuery] = reactExports.useState("");
  const [historyTimeFilter, setHistoryTimeFilter] = reactExports.useState("All");
  const categoryScrollRef = reactExports.useRef(null);
  const lastSavedContentRef = reactExports.useRef("");
  const lastDraftValue = reactExports.useRef("");
  const undoStack = reactExports.useRef([]);
  const redoStack = reactExports.useRef([]);
  const undoTimeout = reactExports.useRef(null);
  reactExports.useEffect(() => {
    localStorage.setItem("@aisa_draft_history", JSON.stringify(draftHistory));
  }, [draftHistory]);
  reactExports.useEffect(() => {
    if (step === "PREVIEW") {
      lastSavedContentRef.current = finalDraft;
      lastDraftValue.current = finalDraft;
      undoStack.current = [];
      redoStack.current = [];
    }
  }, [step, selectedType, linkedCaseId]);
  reactExports.useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (step === "PREVIEW" && finalDraft !== lastSavedContentRef.current) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
        return e.returnValue;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [finalDraft, step]);
  const handleDraftChange = (newVal) => {
    if (undoTimeout.current) clearTimeout(undoTimeout.current);
    const currentVal = finalDraft;
    undoTimeout.current = setTimeout(() => {
      if (currentVal !== newVal) {
        undoStack.current.push(currentVal);
        redoStack.current = [];
        lastDraftValue.current = newVal;
      }
    }, 1e3);
    setFinalDraft(newVal);
  };
  const handleUndo = () => {
    if (undoStack.current.length === 0) {
      zt.error("Nothing to undo");
      return;
    }
    const prevVal = undoStack.current.pop();
    redoStack.current.push(finalDraft);
    lastDraftValue.current = prevVal;
    setFinalDraft(prevVal);
    zt.success("✓ Undo");
  };
  const handleRedo = () => {
    if (redoStack.current.length === 0) {
      zt.error("Nothing to redo");
      return;
    }
    const nextVal = redoStack.current.pop();
    undoStack.current.push(finalDraft);
    lastDraftValue.current = nextVal;
    setFinalDraft(nextVal);
    zt.success("✓ Redo");
  };
  const handleCategoryWheel = (e) => {
    if (categoryScrollRef.current) {
      e.preventDefault();
      categoryScrollRef.current.scrollLeft += e.deltaY;
    }
  };
  reactExports.useEffect(() => {
    if (categoryScrollRef.current) {
      const activeEl = categoryScrollRef.current.querySelector(".active-category-chip");
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeCat]);
  const filteredHistory = reactExports.useMemo(() => {
    let list = [...draftHistory];
    const now = /* @__PURE__ */ new Date();
    if (historyTimeFilter === "Today") {
      const todayStr = now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
      list = list.filter((item) => item.generatedDate === todayStr);
    } else if (historyTimeFilter === "Yesterday") {
      const yesterday = /* @__PURE__ */ new Date();
      yesterday.setDate(now.getDate() - 1);
      const yesterdayStr = yesterday.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
      list = list.filter((item) => item.generatedDate === yesterdayStr);
    } else if (historyTimeFilter === "Last 7 Days") {
      const limit = /* @__PURE__ */ new Date();
      limit.setDate(now.getDate() - 7);
      list = list.filter((item) => {
        const parts = item.generatedDate.split(" ");
        if (parts.length < 3) return false;
        const dateObj = /* @__PURE__ */ new Date(`${parts[1]} ${parts[0]}, ${parts[2]}`);
        return dateObj >= limit;
      });
    } else if (historyTimeFilter === "Last 30 Days") {
      const limit = /* @__PURE__ */ new Date();
      limit.setDate(now.getDate() - 30);
      list = list.filter((item) => {
        const parts = item.generatedDate.split(" ");
        if (parts.length < 3) return false;
        const dateObj = /* @__PURE__ */ new Date(`${parts[1]} ${parts[0]}, ${parts[2]}`);
        return dateObj >= limit;
      });
    }
    if (historySearchQuery.trim()) {
      const q = historySearchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return item.name.toLowerCase().includes(q) || item.caseName.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      });
    }
    return list;
  }, [draftHistory, historyTimeFilter, historySearchQuery]);
  const addOrUpdateHistoryItem = (content, fieldsData, targetLang = "en") => {
    const now = /* @__PURE__ */ new Date();
    const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    const dateStr = now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    const matchedCase = allProjects.find((p) => p._id === linkedCaseId);
    const caseName = matchedCase ? matchedCase.name : "No Case Linked";
    setDraftHistory((prev) => {
      const idx = prev.findIndex((item) => item.templateType === selectedType && item.linkedCaseId === linkedCaseId);
      if (idx !== -1) {
        const updated = [...prev];
        const old = updated[idx];
        updated[idx] = {
          ...old,
          content,
          formData: fieldsData,
          version: old.version + 1,
          lastEdited: timeStr,
          language: targetLang === "hi" ? "Hindi" : "English"
        };
        return updated;
      } else {
        const newItem = {
          id: `HIST-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
          name: selectedType || "Legal Draft",
          templateType: selectedType,
          category: (template == null ? void 0 : template.category) || "GENERAL",
          caseName,
          linkedCaseId,
          generatedDate: dateStr,
          generatedTime: timeStr,
          lastEdited: timeStr,
          version: 1,
          language: targetLang === "hi" ? "Hindi" : "English",
          status: "Draft",
          content,
          formData: fieldsData
        };
        return [newItem, ...prev];
      }
    });
  };
  const handleLoadHistoryItem = (item) => {
    setSelectedType(item.templateType);
    const tmpl = DRAFT_TEMPLATES[item.templateType];
    setTemplate(tmpl);
    setFormData(item.formData || {});
    setLinkedCaseId(item.linkedCaseId || "");
    setOriginalGeneratedDraft(item.content);
    const phs = extractPlaceholders(item.content);
    const phValues = {};
    phs.forEach((p) => {
      let matchedVal = "";
      Object.entries(item.formData || {}).forEach(([k, v]) => {
        const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cleanP = p.key.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (cleanK === cleanP || cleanK.includes(cleanP) || cleanP.includes(cleanK)) {
          matchedVal = v;
        }
      });
      phValues[p.key] = matchedVal || "";
    });
    setPlaceholderValues(phValues);
    setDraftPlaceholders(phs);
    setFinalDraft(item.content);
    setStep("PREVIEW");
    zt.success(`✓ Loaded version ${item.version} of "${item.name}"`);
  };
  const handleDeleteHistoryItem = (id) => {
    if (confirm("Are you sure you want to delete this history log entry?")) {
      setDraftHistory((prev) => prev.filter((item) => item.id !== id));
      zt.success("History log deleted");
    }
  };
  reactExports.useEffect(() => {
    var _a, _b;
    const intent = consumePrefillIntent("legal_draft_maker");
    if (intent == null ? void 0 : intent.caseData) {
      const mapped = mapCaseToForm(intent.caseData);
      setPrefillData(mapped);
      setPrefillBanner(true);
      const caseId = ((_a = intent.caseData) == null ? void 0 : _a._id) || ((_b = intent.caseData) == null ? void 0 : _b.id);
      if (caseId) setLinkedCaseId(caseId);
      zt.success(`✓ Case data ready — pick a template to auto-fill`, { icon: "💼", duration: 3500 });
    }
  }, []);
  reactExports.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const filteredCategories = reactExports.useMemo(() => {
    const q = searchQuery.toLowerCase();
    return ALL_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) => q === "" || item.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
      )
    })).filter(
      (cat) => (activeCat === "ALL" || cat.title === activeCat) && cat.items.length > 0
    );
  }, [searchQuery, activeCat]);
  const applyPrefill = reactExports.useCallback((tmpl, mapped) => {
    if (!(tmpl == null ? void 0 : tmpl.fields) || !mapped) return {};
    const filled = {};
    const filledSet = /* @__PURE__ */ new Set();
    tmpl.fields.forEach((field) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const k = field.key;
      const lk = k.toLowerCase();
      const ll = field.label.toLowerCase();
      let val = "";
      if (k === "country") {
        val = ((_a = mapped._raw) == null ? void 0 : _a.country) || ((_b = mapped._raw) == null ? void 0 : _b.jurisdiction) || "India";
      } else if (k === "state") {
        val = ((_c = mapped._raw) == null ? void 0 : _c.state) || ((_d = mapped._raw) == null ? void 0 : _d.province) || "";
      } else if (k === "district") {
        val = ((_e = mapped._raw) == null ? void 0 : _e.district) || "";
      } else if (k === "policeStation") {
        val = ((_f = mapped._raw) == null ? void 0 : _f.policeStation) || ((_g = mapped._raw) == null ? void 0 : _g.police_station) || "";
      } else if (lk.includes("petitioner") || lk.includes("plaintiff") || lk.includes("complainant") || lk.includes("applicant") || lk.includes("claimant") || ll.includes("party 1") || lk.includes("creditor") || lk.includes("sender") || lk.includes("aggrieved") || lk.includes("borrower") || lk.includes("employee")) {
        val = mapped.petitioner || "";
      } else if (lk.includes("respondent") || lk.includes("defendant") || lk.includes("accused") || lk.includes("debtor") || lk.includes("receiver") || lk.includes("harasser") || lk.includes("employer") || ll.includes("party 2") || lk.includes("opposite")) {
        val = mapped.respondent || "";
      } else if (lk.includes("court") || lk.includes("jurisdiction") || lk.includes("forum") || lk.includes("tribunal")) {
        val = mapped.courtName || "";
      } else if (lk.includes("casefact") || lk.includes("facts") || lk.includes("incident") || lk.includes("description") || lk.includes("background") || lk.includes("detail") || lk.includes("scenario")) {
        val = mapped.caseFacts || "";
      } else if (lk.includes("casenumber") || lk.includes("case_no") || lk.includes("number") && lk.includes("case") || lk.includes("fir_no") || lk.includes("firnumber")) {
        val = mapped.caseNumber || "";
      } else if (lk.includes("casetype") || lk.includes("type") && lk.includes("case")) {
        val = mapped.caseType || "";
      } else if (lk.includes("advocate") || lk.includes("counsel") || lk.includes("lawyer")) {
        val = mapped.advocateName || "";
      } else if (lk.includes("section") || lk.includes("provision") || lk.includes("ipc") || lk.includes("act")) {
        val = mapped.provisions || "";
      } else if (lk.includes("evidence")) {
        val = mapped.evidenceSummary || "";
      } else if (lk.includes("title") || lk.includes("subject") || lk.includes("matter")) {
        val = mapped.caseTitle || "";
      } else if (lk.includes("address")) {
        if (lk.includes("applicant") || lk.includes("petitioner") || lk.includes("plaintiff") || lk.includes("complainant")) {
          val = ((_h = mapped._raw) == null ? void 0 : _h.clientAddress) || "";
        }
      }
      if (val) {
        filled[k] = val;
        filledSet.add(k);
      }
    });
    return { filled, filledSet };
  }, []);
  const handleSelectType = reactExports.useCallback((draftType) => {
    const tmpl = getTemplate(draftType);
    const enrichedFields = buildEnrichedFields(tmpl.fields);
    const enrichedTmpl = { ...tmpl, fields: enrichedFields };
    setSelectedType(draftType);
    setTemplate(enrichedTmpl);
    setErrors({});
    setFinalDraft("");
    setDraftVersion(1);
    setDraftVersionHistory([]);
    setIsEditing(false);
    setExportHistory([]);
    setGenerationTimestamp("");
    setRecentlyUsed((prev) => {
      const filtered = prev.filter((x) => x !== draftType);
      return [draftType, ...filtered].slice(0, 10);
    });
    if (currentCase) {
      apiService.updateProject(currentCase._id, {
        ...currentCase,
        activeDraftWork: null
      }).then((res) => {
        if (onUpdateCase) onUpdateCase(res);
      }).catch((err) => console.error("Failed to clear active draft work in DB", err));
    }
    let initialData = {};
    let initialFilled = /* @__PURE__ */ new Set();
    if (prefillData) {
      const { filled, filledSet } = applyPrefill(enrichedTmpl, prefillData);
      if (!filled["country"]) {
        filled["country"] = "India";
        filledSet.add("country");
      }
      initialData = filled;
      initialFilled = filledSet;
      if (filledSet.size > 0) zt.success(`✓ ${filledSet.size} fields auto-filled`, { icon: "✨" });
    } else {
      initialData = { country: "India" };
    }
    setFormData(initialData);
    setFilledFields(initialFilled);
    setStep("FORM");
  }, [prefillData, applyPrefill]);
  reactExports.useCallback((caseId) => {
    setLinkedCaseId(caseId);
    if (caseId && template) {
      const selected = allProjects.find((c) => c._id === caseId);
      if (selected) {
        const mapped = mapCaseToForm(selected);
        const { filled, filledSet } = applyPrefill(template, mapped);
        if (!filled["country"]) filled["country"] = "India";
        filledSet.add("country");
        setFormData((prev) => ({ ...prev, ...filled }));
        setFilledFields((prev) => /* @__PURE__ */ new Set([...prev, ...filledSet]));
        zt.success(`✓ ${filledSet.size} fields filled from "${selected.name}"`);
      }
    }
  }, [template, allProjects, applyPrefill]);
  const validate = () => {
    var _a;
    const errs = {};
    (_a = template == null ? void 0 : template.fields) == null ? void 0 : _a.forEach((field) => {
      const val = formData[field.key];
      if (field.required && !(val == null ? void 0 : val.toString().trim())) {
        errs[field.key] = `${field.label} is required`;
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const buildPrompt = (mode, tmpl, data, draftType, caseContext) => {
    var _a;
    const fieldData = tmpl.fields.map((f) => `${f.label} (${f.key}): ${data[f.key] || "Not provided"}`).join("\n");
    let caseExtra = "";
    if (linkedCaseId) {
      const c = allProjects.find((p) => p._id === linkedCaseId);
      if (c) {
        caseExtra = `
[ACTIVE CASE DATABASE CONTEXT]:
Case Title/Name: ${c.title || c.name || ""}
Case Description/Facts: ${c.description || c.caseSummary || ""}
Client (Petitioner): ${c.clientName || "N/A"}
Opponent (Respondent): ${c.accused || c.opponentName || "N/A"}
Court Name: ${c.courtName || "N/A"}
Jurisdiction: ${c.jurisdiction || "N/A"}
Applicable Sections: ${c.sections || "N/A"}
Evidence/Documents Available: ${((_a = c.documents) == null ? void 0 : _a.map((d) => d.name).join(", ")) || "None uploaded"}
---------------------------`;
      }
    }
    tmpl.courtHeader || "BEFORE THE HON'BLE COURT";
    let modeLangInstruction = "";
    if (mode === "hindi") {
      modeLangInstruction = `Generate the complete draft entirely in formal, professional legal Hindi (Devanagari script) using proper court vocabulary. Ensure a natural translation and courtroom layout.`;
    } else if (mode === "english") {
      modeLangInstruction = `Generate the complete draft entirely in formal, advocate-grade legal English. Format strictly according to Indian High Court standards.`;
    } else {
      modeLangInstruction = `Generate a complete, professionally formatted legal draft. Make sure it uses senior advocate-grade legal reasoning and strong legal terminology.`;
    }
    return `You are a Senior Advocate of the Supreme Court of India with 25+ years of litigation experience. 
Your task is to draft a complete, professionally formatted ${draftType} document.

${caseContext ? `[ACTIVE CASE CONTEXT: ${caseContext}]
` : ""}
${caseExtra}

FORM DATA PROVIDED:
${fieldData}

INSTRUCTIONS FOR GENERATION:
${modeLangInstruction}

=========================================
CRITICAL MASTER RULES:
=========================================
- Return ONLY the final court-ready legal draft document. Do NOT output JSON, markdown fences (e.g. triple-backticks), or HTML code blocks.
- Do NOT output any introductory text, greetings, notes, case summaries, explanations, or commentaries.
- Never wrap the document in quotes. The first character of the response must be the first line of the legal document.
- Never return escaped characters like 
. Return actual physical line breaks.
- DO NOT expose internal AI metadata, template variables, or generation instructions.
- Never output markers like "[RAG]", "END OF DOCUMENT", "ONE BLANK LINE", "TWO BLANK LINES", "THREE BLANK LINES", "{{variable}}", "[PLACEHOLDER]", "[Required]", "AI Placeholder", "Template Variable", "Internal Notes", "System Tags", "Developer Tags", or "Debug Information".
- Spacing: Use proper spacing with real blank lines, not text tags.
- Headings: Headings must be bold, uppercase, and centered (where applicable). Example:
  BEFORE THE STATION HOUSE OFFICER
  FIRST INFORMATION REPORT (FIR)
  COMPLAINANT DETAILS
  ACCUSED DETAILS
  SUBJECT
  FACTS OF THE CASE
  OFFENCES
  PRAYER
  VERIFICATION
- Body: Font family Times New Roman 12 pt, black text only, justified alignment, 1.5 line spacing. Use professional legal paragraph numbering: 1., 2., 3., (a), (b), (c).
- Party Details: Clean structured format:
  Complainant:
  Shri Abhay
  S/o Mahesh Sharma
  R/o Rampur, East Kameng, Arunachal Pradesh.
  
  Accused:
  Shri Akash
  S/o Ramesh Sharma
  R/o Rajgarh, East Kameng, Arunachal Pradesh.
- Subject: Display in one clean paragraph. No unnecessary capitalization.
- Facts: Write professionally. Avoid repetitive words, AI-style wording, or unnecessary legal jargon.
- Prayer: Use proper legal formatting (a), (b), (c), (d).
- Verification: Clean date, place, signature complainant lines.
- Signature Block: Only include advocate signature if selected template legally requires it; otherwise show only:
  (Signature)
  Complainant
- Ensure there are no template variable names or brackets anywhere in the final text.
`;
  };
  const addToExportHistory = reactExports.useCallback((action) => {
    const now = /* @__PURE__ */ new Date();
    const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const logStr = `${action} at ${timeStr}`;
    setExportHistory((prev) => [...prev, logStr]);
  }, []);
  reactExports.useCallback(() => {
    const newName = prompt("Enter new document name:", selectedType);
    if (newName && newName.trim()) {
      setSelectedType(newName.trim());
      zt.success("Document renamed");
    }
  }, [selectedType]);
  reactExports.useCallback(async () => {
    if (!confirm("Are you sure you want to delete this draft?")) return;
    setFinalDraft("");
    setStep("SELECT");
    zt.success("Active draft deleted");
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const handleGenerate = async (mode = generationMode) => {
    if (!validate()) {
      zt.error("Please fill all required fields before generating");
      return;
    }
    setIsGenerating(true);
    setStep("GENERATING");
    const statusMessages = [
      "Analysing case facts...",
      "Applying legal framework...",
      "Drafting court format document...",
      "Adding legal provisions...",
      "Finalising prayer and verification..."
    ];
    let idx = 0;
    setGenerationStatus(statusMessages[0]);
    const interval = setInterval(() => {
      idx++;
      if (idx < statusMessages.length) setGenerationStatus(statusMessages[idx]);
    }, 2200);
    try {
      let caseCtx = "";
      if (linkedCaseId) {
        const c = allProjects.find((p) => p._id === linkedCaseId);
        if (c) caseCtx = `Case: ${c.name} | Client: ${c.clientName || "N/A"} | Court: ${c.courtName || "N/A"}`;
      }
      const systemPrompt = `${template.systemPrompt}
Always generate the complete document — never truncate. Use formal legal language. Include all sections.`;
      const prompt2 = buildPrompt(mode, template, formData, selectedType, caseCtx);
      const resp = await generateChatResponse([], prompt2, systemPrompt, [], "English", null, "legal");
      if (typeof resp === "string") {
        if (resp.includes("trouble connecting") || resp.includes("System Busy") || resp.includes("Log In") || resp.includes("System Message") || resp.includes("System Error") || resp.includes("LIMIT_REACHED")) {
          const errMsg = resp.replace("Sorry, ", "").replace("[Log In](/login) to your AISA™ account to continue chatting.", "Please log in to continue.");
          throw new Error(errMsg);
        }
      }
      if (resp == null ? void 0 : resp.error) {
        throw new Error(resp.message || resp.error);
      }
      const text = (resp == null ? void 0 : resp.reply) || resp || "";
      if (!text.trim()) throw new Error("Empty response");
      let cleanedText = text.trim().replace(/\[RAG\]/gi, "").replace(/END OF DOCUMENT/gi, "").replace(/TWO BLANK LINES/gi, "\n\n").replace(/ONE BLANK LINE/gi, "\n").replace(/THREE BLANK LINES/gi, "\n\n\n").replace(/\{\{\s*[a-zA-Z0-9_]+\s*\}\}/g, "").replace(/\[[a-zA-Z0-9_\s]+Required\]/gi, "").replace(/\[[a-zA-Z0-9_\s]+Placeholder\]/gi, "").replace(/gamhappur/gi, "").trim();
      setDraftVersionHistory((prev) => [
        ...prev,
        { version: draftVersion, mode, content: finalDraft, timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString() }
      ].filter((v) => v.content));
      cleanedText = text.trim();
      if (cleanedText.startsWith("```")) {
        const match = cleanedText.match(/```(?:json)?([\s\S]*?)```/);
        if (match) cleanedText = match[1].trim();
      }
      if (cleanedText.startsWith("{") && cleanedText.includes('"draft"')) {
        try {
          const json = JSON.parse(cleanedText);
          if (json && json.draft) {
            cleanedText = json.draft;
          }
        } catch (e) {
          const match = cleanedText.match(/"draft"\s*:\s*"([\s\S]*?)"/i);
          if (match) {
            cleanedText = match[1].replace(/\\n/g, "\n").replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
          }
        }
      }
      let parsedPlaceholders = extractPlaceholders(cleanedText);
      if (parsedPlaceholders.length === 0) {
        parsedPlaceholders = ((template == null ? void 0 : template.fields) || []).map((f) => ({
          label: f.label,
          key: f.key.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          value: formData[f.key] || ""
        }));
      }
      const parsedDraft = cleanedText;
      const initialValues = {};
      parsedPlaceholders.forEach((p) => {
        let initialVal = p.value || "";
        if (!initialVal) {
          Object.entries(formData).forEach(([k, v]) => {
            const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
            const cleanP = p.key.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (cleanK === cleanP || cleanK.includes(cleanP) || cleanP.includes(cleanK)) {
              initialVal = v;
            }
          });
        }
        initialValues[p.key] = initialVal;
      });
      const cleanedDraftText = validateAndFormatDraft(parsedDraft, selectedType);
      setOriginalGeneratedDraft(cleanedDraftText);
      setDraftPlaceholders(parsedPlaceholders.map((p) => ({ ...p, value: initialValues[p.key] || "" })));
      setPlaceholderValues(initialValues);
      const cleanDraft = replacePlaceholders(cleanedDraftText, initialValues);
      setFinalDraft(cleanDraft);
      addOrUpdateHistoryItem(cleanDraft, formData, outputLang);
      setDraftVersion((v) => v + 1);
      setGenerationMode(mode);
      const timestamp = (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
      setGenerationTimestamp(timestamp);
      setStep("PREVIEW");
      zt.success(`✓ ${selectedType} generated successfully!`, { icon: "⚖️" });
    } catch (err) {
      console.error(err);
      zt.error(err.message || "Generation failed — please try again");
      setStep("FORM");
    } finally {
      clearInterval(interval);
      setIsGenerating(false);
    }
  };
  const handleCopilotQuickAction = async (actionName, promptInstruction) => {
    if (isCopilotRefining) return;
    setIsCopilotRefining(true);
    setCopilotLoadingText(actionName);
    const toastId = zt.loading(`AI Copilot: ${actionName} in progress...`);
    try {
      const userPrompt = `${promptInstruction}

Draft text:
${finalDraft}`;
      const systemPrompt = "You are a professional enterprise legal draft editor. Return ONLY the improved draft text. Do not include markdown fencing, comments, introductions, or annotations.";
      let res = "";
      try {
        res = await generateChatResponse(userPrompt, systemPrompt);
      } catch (err) {
        console.warn("AI generation failed, using local semantic fallback:", err);
      }
      if (!res || !res.trim()) {
        if (actionName.includes("Grammar")) {
          res = finalDraft.replace(/\s+/g, " ").replace(/ ,/g, ",").replace(/ \./g, ".");
        } else if (actionName.includes("Structure") || actionName.includes("Hierarchy")) {
          res = finalDraft.replace(/facts/gi, "STATEMENT OF FACTS").replace(/prayer/gi, "PRAYER FOR RELIEF").replace(/facts of the case/gi, "STATEMENT OF FACTS").replace(/verification/gi, "VERIFICATION");
        } else if (actionName.includes("Arguments") || actionName.includes("Reasoning")) {
          res = finalDraft + "\n\nAND FOR THIS ACT OF KINDNESS, THE COMPLAINANT AS IN DUTY BOUND SHALL EVER PRAY.";
        } else if (actionName.includes("Simplify")) {
          res = finalDraft.replace(/hereinafter/gi, "herein").replace(/aforesaid/gi, "mentioned");
        } else {
          res = finalDraft + `

[Optimized: ${actionName}]`;
        }
      }
      setCopilotComparison({
        action: actionName,
        original: finalDraft,
        refined: res.trim()
      });
      zt.success(`✓ ${actionName} refined. Review comparison!`, { id: toastId });
    } catch (e) {
      console.error(e);
      zt.error(`Failed to execute ${actionName}. Please try again.`, { id: toastId });
    } finally {
      setIsCopilotRefining(false);
      setCopilotLoadingText("");
    }
  };
  const handleRefineField = async (key, action) => {
    if (key === "draft") {
      let promptText = "";
      if (action === "Rewrite") {
        promptText = "Rewrite this court pleading draft. Fix formatting, logical spacing, legal headers and overall layout.";
      } else if (action === "Improve Legal Language") {
        promptText = "Improve the legal language, phrasing, and statutory terminology of this pleading draft.";
      } else if (action === "Summarize") {
        promptText = "Provide a concise summary of the key facts, grounds, and prayers listed in this pleading draft.";
      }
      await handleCopilotQuickAction(action, promptText);
    } else {
      if (isCopilotRefining) return;
      setIsCopilotRefining(true);
      const toastId = zt.loading(`AI refining ${key}...`);
      try {
        const userPrompt = `Refine the value of field "${key}" using action "${action}". Current value:
${formData[key] || ""}`;
        const systemPrompt = "You are a professional legal draft optimizer. Return ONLY the refined value, nothing else.";
        const res = await generateChatResponse(userPrompt, systemPrompt);
        if (res && res.trim()) {
          setFormData((prev) => ({ ...prev, [key]: res.trim() }));
          zt.success(`✓ Field ${key} refined!`, { id: toastId });
        } else {
          zt.error("Failed to refine field.", { id: toastId });
        }
      } catch (e) {
        console.error(e);
        zt.error("Refinement failed.", { id: toastId });
      } finally {
        setIsCopilotRefining(false);
      }
    }
  };
  const handleRestoreVersion = (version) => {
    undoStack.current.push(finalDraft);
    redoStack.current = [];
    setFinalDraft(version.content);
    lastSavedContentRef.current = version.content;
    zt.success(`✓ Restored to Version ${version.version}`);
  };
  const handleDuplicateVersion = (version) => {
    const nextVer = draftVersionHistory.length + 1;
    setDraftVersionHistory((prev) => [
      ...prev,
      {
        version: nextVer,
        name: `${version.name || `Version ${version.version}`} (Copy)`,
        content: version.content,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        user: "You",
        type: "manual"
      }
    ]);
    zt.success(`✓ Version ${version.version} duplicated!`);
  };
  const handleRenameVersion = (versionIdx, newName) => {
    if (!newName.trim()) return;
    setDraftVersionHistory((prev) => prev.map((v, i) => i === versionIdx ? { ...v, name: newName } : v));
    zt.success("✓ Version renamed");
  };
  const handlePrint = () => {
    const rawText = draftDisplayText || finalDraft;
    const documentPages = rawText.split("\n\n");
    const pagesHtml = documentPages.map((pageText, idx) => {
      const cleanText = cleanGeneratedDraft(pageText, selectedType).replace(/^### (.*$)/gim, `<h3 style="text-align: center; text-transform: uppercase; font-family: 'Times New Roman', serif; font-weight: bold; margin: 15px 0 8px;">$1</h3>`).replace(/^## (.*$)/gim, `<h2 style="text-align: center; text-transform: uppercase; font-family: 'Times New Roman', serif; font-weight: bold; margin: 18px 0 10px;">$1</h2>`).replace(/^# (.*$)/gim, `<h1 style="text-align: center; text-transform: uppercase; font-family: 'Times New Roman', serif; font-weight: bold; margin: 20px 0;">$1</h1>`).replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>").replace(/\*(.*?)\*/gim, "<em>$1</em>");
      return `<div class="page" style="page-break-after: ${idx === documentPages.length - 1 ? "avoid" : "always"}; min-height: 100%; box-sizing: border-box;">
        ${cleanText}
      </div>`;
    }).join("\n");
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Times+New+Roman&family=Noto+Sans:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
      <title>${selectedType || "Legal Draft"}</title>
      <style>
        body{font-family:'Times New Roman',serif;padding:1in;line-height:1.5;font-size:12pt;color:#000;white-space:pre-wrap;text-align:justify;margin:0;}
        strong{font-weight:bold}
        .footer{margin-top:50px;border-top:1px solid #ddd;padding-top:15px;font-size:10pt;text-align:right;color:#666}
        @media print{
          body{padding:0;margin:0;}
          .footer{position:fixed;bottom:20px;right:20px;width:100%;display:none;}
        }
      </style></head><body>
      ${pagesHtml}
      <div class="footer">AI Legal™ — ${selectedType}</div>
      </body></html>`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
    }
    addToExportHistory("Print Draft");
  };
  const handleExportPDF = () => {
    addToExportHistory("Export PDF");
    handlePrint();
  };
  const handleExportDOCX = () => {
    const rawText = draftDisplayText || finalDraft;
    const textToExport = cleanGeneratedDraft(rawText, selectedType);
    if (!textToExport) return;
    const content = textToExport.split("\n").map((line) => {
      let trimmed = line.trim();
      if (!trimmed) {
        return '<p style="margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:150%;min-height:1em;">&nbsp;</p>';
      }
      let formatted = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
      return `<p style="margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:150%;text-align:justify;">${formatted}</p>`;
    }).join("\n");
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${selectedType || "Legal Draft"}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body { font-family: "Times New Roman", serif; font-size: 12pt; line-height: 1.5; padding: 1in; }
          p { margin: 0 0 6pt 0; text-align: justify; }
          h1 { text-align: center; text-transform: uppercase; font-size: 16pt; font-weight: bold; margin: 20px 0; }
          h2 { font-size: 14pt; font-weight: bold; margin: 18px 0 10px; text-transform: uppercase; }
          h3 { font-size: 12pt; font-weight: bold; margin: 14px 0 8px; }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>`;
    const blob = new Blob(["\uFEFF" + html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(selectedType || "Legal_Draft").replace(/[^a-z0-9]/gi, "_")}.doc`;
    a.click();
    URL.revokeObjectURL(url);
    addToExportHistory("Export DOCX");
    zt.success("Draft exported as Word DOC format");
  };
  const handleExportTXT = () => {
    const rawText = draftDisplayText || finalDraft;
    const textToDownload = cleanGeneratedDraft(rawText, selectedType).replace(/^[#\s]+/gm, "").replace(/\*\*+/g, "").replace(/\*+/g, "").replace(/`+/g, "");
    const blob = new Blob([textToDownload], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(selectedType || "Legal_Draft").replace(/[^a-z0-9]/gi, "_")}_v${draftVersion}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    addToExportHistory("Export TXT");
    zt.success("✓ Draft exported as TXT");
  };
  const handleExportHTML = () => {
    const rawText = draftDisplayText || finalDraft;
    const textToExport = cleanGeneratedDraft(rawText, selectedType);
    if (!textToExport) return;
    const content = textToExport.split("\n").map((line) => {
      let trimmed = line.trim();
      if (!trimmed) return "<br/>";
      let formatted = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
      const isHeading = trimmed && (trimmed === trimmed.toUpperCase() && trimmed.length > 4 || trimmed.startsWith("BEFORE THE") || trimmed.startsWith("IN THE COURT OF") || trimmed.startsWith("FACTS OF THE CASE") || trimmed.startsWith("PRAYER") || trimmed.startsWith("VERIFICATION"));
      if (isHeading) {
        return `<h3 style="text-align: center; text-transform: uppercase; font-family: 'Times New Roman', serif; font-weight: bold; margin: 20px 0;">${formatted}</h3>`;
      }
      return `<p style="text-align: justify; font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; text-indent: 0.5in; margin-bottom: 12px;">${formatted}</p>`;
    }).join("\n");
    const html = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${selectedType || "Legal Draft"}</title>
      <style>
        body {
          background-color: #f3f4f6;
          padding: 40px;
          font-family: 'Times New Roman', Times, serif;
        }
        .page {
          background-color: white;
          width: 8.27in;
          min-height: 11.69in;
          padding: 1in;
          margin: 0 auto;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          box-sizing: border-box;
        }
      </style>
    </head>
    <body>
      <div class="page">
        ${content}
      </div>
    </body>
    </html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(selectedType || "Legal_Draft").replace(/[^a-z0-9]/gi, "_")}.html`;
    a.click();
    URL.revokeObjectURL(url);
    addToExportHistory("Export HTML");
    zt.success("✓ Draft exported as HTML");
  };
  reactExports.useCallback(async () => {
    await handleGenerate(generationMode);
  }, [generationMode]);
  const handleSave = async () => {
    const caseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!caseId) {
      zt.error("Please select or link a case first to save this draft");
      return;
    }
    const targetCase = allProjects.find((p) => p._id === caseId);
    if (!targetCase) {
      zt.error("Linked case not found");
      return;
    }
    const id = `DRAFT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const now = /* @__PURE__ */ new Date();
    const newDraftItem = {
      id,
      type: selectedType || "Legal Draft",
      content: finalDraft,
      createdAt: now.toISOString(),
      mode: generationMode,
      formData,
      version: draftVersion,
      exportHistory,
      generationTimestamp: generationTimestamp || now.toLocaleString("en-IN"),
      lastModified: now.toISOString()
    };
    try {
      const existingDrafts = targetCase.drafts || [];
      const updatedDrafts = [newDraftItem, ...existingDrafts.filter((d) => d.type !== selectedType)];
      const payload = {
        ...targetCase,
        drafts: updatedDrafts
      };
      const response = await apiService.updateProject(caseId, payload);
      if (onUpdateCase) onUpdateCase(response);
      setSavedNotice({ id, date: now.toLocaleDateString("en-IN"), time: now.toLocaleTimeString("en-IN") });
      addToExportHistory("Save Draft");
      setDraftHistory((prev) => prev.map((item) => {
        if (item.templateType === selectedType && item.linkedCaseId === caseId) {
          return { ...item, status: "Saved" };
        }
        return item;
      }));
      setDraftVersionHistory((prev) => {
        const nextVer = prev.length + 1;
        return [
          ...prev,
          {
            version: nextVer,
            name: `Manual Save v${nextVer}`,
            content: finalDraft,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
            user: "You",
            type: "manual"
          }
        ];
      });
      lastSavedContentRef.current = finalDraft;
      setAutoSaveStatus("saved");
      zt.success("✓ Draft Saved Successfully");
    } catch (e) {
      console.error("Failed to save draft", e);
      setAutoSaveStatus("failed");
      zt.error("Failed to save draft");
    }
  };
  const loadSavedDrafts = reactExports.useCallback(() => {
    setLoadingDrafts(true);
    try {
      const consolidated = [];
      allProjects.forEach((proj) => {
        if (Array.isArray(proj.drafts)) {
          proj.drafts.forEach((d) => {
            consolidated.push({
              id: d.id || `${proj._id}-${d.createdAt}`,
              title: d.type || d.title || "Legal Draft",
              content: d.content,
              mode: d.mode,
              formData: d.formData,
              linkedCaseId: proj._id,
              caseName: proj.name,
              date: d.lastModified || d.createdAt || proj.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
              version: d.version,
              exportHistory: d.exportHistory,
              generationTimestamp: d.generationTimestamp
            });
          });
        }
      });
      const localRaw = localStorage.getItem("@aisa_drafts");
      if (localRaw) {
        try {
          const localDrafts = JSON.parse(localRaw);
          if (Array.isArray(localDrafts) && localDrafts.length > 0) {
            if (currentCase) {
              const currentDrafts = currentCase.drafts || [];
              const draftsToMigrate = localDrafts.map((ld) => ({
                id: ld.id,
                type: ld.title,
                content: ld.content,
                createdAt: ld.date || (/* @__PURE__ */ new Date()).toISOString(),
                mode: ld.mode,
                formData: ld.formData,
                version: ld.version,
                exportHistory: ld.exportHistory,
                generationTimestamp: ld.generationTimestamp,
                lastModified: ld.date || (/* @__PURE__ */ new Date()).toISOString()
              }));
              const payload = {
                ...currentCase,
                drafts: [...currentDrafts, ...draftsToMigrate]
              };
              apiService.updateProject(currentCase._id, payload).then((res) => {
                if (onUpdateCase) onUpdateCase(res);
                localStorage.removeItem("@aisa_drafts");
              }).catch((err) => console.error("Failed to migrate local drafts to DB", err));
            } else {
              localDrafts.forEach((ld) => {
                if (!consolidated.some((c) => c.id === ld.id)) {
                  consolidated.push({
                    ...ld,
                    caseName: "Offline / Unlinked"
                  });
                }
              });
            }
          }
        } catch (e) {
          console.error("Failed to parse/migrate local drafts", e);
        }
      }
      consolidated.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSavedDrafts(consolidated);
    } finally {
      setLoadingDrafts(false);
    }
  }, [allProjects, currentCase]);
  reactExports.useEffect(() => {
    if (step === "SAVED") loadSavedDrafts();
  }, [step, loadSavedDrafts]);
  reactExports.useEffect(() => {
    if (!currentCase || !currentCase._id) return;
    if (!selectedType || !finalDraft) return;
    const handler = setTimeout(async () => {
      try {
        const state = {
          selectedType,
          finalDraft,
          formData,
          generationMode,
          draftVersion,
          exportHistory,
          generationTimestamp,
          linkedCaseId
        };
        if (JSON.stringify(currentCase.activeDraftWork) === JSON.stringify(state)) {
          return;
        }
        const payload = {
          ...currentCase,
          activeDraftWork: state
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
      } catch (err) {
        console.error("Failed to auto-save active draft work to DB:", err);
      }
    }, 1e3);
    return () => {
      clearTimeout(handler);
    };
  }, [selectedType, finalDraft, formData, generationMode, draftVersion, exportHistory, generationTimestamp, linkedCaseId, currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    if (currentCase) {
      if (currentCase.activeDraftWork && currentCase.activeDraftWork.selectedType) {
        const state = currentCase.activeDraftWork;
        setSelectedType(state.selectedType);
        setTemplate(getTemplate(state.selectedType));
        setFinalDraft(state.finalDraft);
        setOriginalGeneratedDraft(state.finalDraft);
        setFormData(state.formData || {});
        setGenerationMode(state.generationMode || "standard");
        setDraftVersion(state.draftVersion || 1);
        setExportHistory(state.exportHistory || []);
        setGenerationTimestamp(state.generationTimestamp || "");
        setLinkedCaseId(state.linkedCaseId || "");
        const phs = extractPlaceholders(state.finalDraft);
        setDraftPlaceholders(phs);
        const phValues = {};
        phs.forEach((p) => {
          let matchedVal = "";
          Object.entries(state.formData || {}).forEach(([k, v]) => {
            const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
            const cleanP = p.key.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (cleanK === cleanP || cleanK.includes(cleanP) || cleanP.includes(cleanK)) {
              matchedVal = v;
            }
          });
          phValues[p.key] = matchedVal || "";
        });
        setPlaceholderValues(phValues);
        setStep("PREVIEW");
        return;
      }
      const raw = localStorage.getItem("@aisa_active_draft_work");
      if (raw) {
        try {
          const state = JSON.parse(raw);
          if (state.selectedType) {
            setSelectedType(state.selectedType);
            setTemplate(getTemplate(state.selectedType));
            setFinalDraft(state.finalDraft);
            setOriginalGeneratedDraft(state.finalDraft);
            setFormData(state.formData || {});
            setGenerationMode(state.generationMode || "standard");
            setDraftVersion(state.draftVersion || 1);
            setExportHistory(state.exportHistory || []);
            setGenerationTimestamp(state.generationTimestamp || "");
            setLinkedCaseId(state.linkedCaseId || "");
            const phs = extractPlaceholders(state.finalDraft);
            setDraftPlaceholders(phs);
            const phValues = {};
            phs.forEach((p) => {
              let matchedVal = "";
              Object.entries(state.formData || {}).forEach(([k, v]) => {
                const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
                const cleanP = p.key.toLowerCase().replace(/[^a-z0-9]/g, "");
                if (cleanK === cleanP || cleanK.includes(cleanP) || cleanP.includes(cleanK)) {
                  matchedVal = v;
                }
              });
              phValues[p.key] = matchedVal || "";
            });
            setPlaceholderValues(phValues);
            setStep("PREVIEW");
            const payload = {
              ...currentCase,
              activeDraftWork: state
            };
            apiService.updateProject(currentCase._id, payload).then((res) => {
              if (onUpdateCase) onUpdateCase(res);
              localStorage.removeItem("@aisa_active_draft_work");
            }).catch((err) => console.error("Failed to migrate local active draft work to DB", err));
          }
        } catch (e) {
          console.warn("Failed to restore/migrate active draft work:", e);
        }
      }
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  const handleDeleteDraft = async (id) => {
    let foundCase = null;
    let updatedDrafts = [];
    for (const proj of allProjects) {
      if (proj.drafts && proj.drafts.some((d) => d.id === id || `${proj._id}-${d.createdAt}` === id)) {
        foundCase = proj;
        updatedDrafts = proj.drafts.filter((d) => d.id !== id && `${proj._id}-${d.createdAt}` !== id);
        break;
      }
    }
    if (!foundCase) {
      zt.error("Draft not found in any case");
      return;
    }
    try {
      const payload = {
        ...foundCase,
        drafts: updatedDrafts
      };
      const response = await apiService.updateProject(foundCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
      setSavedDrafts((prev) => prev.filter((d) => d.id !== id));
      zt.success("Draft deleted from case");
    } catch (e) {
      console.error("Failed to delete draft", e);
      zt.error("Failed to delete draft");
    }
  };
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (step !== "PREVIEW") return;
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        handlePrint();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setIsDownloadOpen((prev) => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        handleUndo();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "y") {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, finalDraft, handleSave, handlePrint]);
  reactExports.useEffect(() => {
    if (step !== "PREVIEW" || !finalDraft) return;
    const interval = setInterval(async () => {
      if (finalDraft === lastSavedContentRef.current) return;
      if (!navigator.onLine) {
        setAutoSaveStatus("offline");
        return;
      }
      setAutoSaveStatus("saving");
      try {
        const caseId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
        if (!caseId) {
          localStorage.setItem(`@aisa_autosave_${selectedType}`, finalDraft);
          lastSavedContentRef.current = finalDraft;
          setAutoSaveStatus("saved");
          return;
        }
        const targetCase = allProjects.find((p) => p._id === caseId);
        if (targetCase) {
          const id = `DRAFT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
          const now = /* @__PURE__ */ new Date();
          const newDraftItem = {
            id,
            type: selectedType || "Legal Draft",
            content: finalDraft,
            createdAt: now.toISOString(),
            mode: generationMode,
            formData,
            version: draftVersion,
            exportHistory,
            generationTimestamp: generationTimestamp || now.toLocaleString("en-IN"),
            lastModified: now.toISOString()
          };
          const existingDrafts = targetCase.drafts || [];
          const updatedDrafts = [newDraftItem, ...existingDrafts.filter((d) => d.type !== selectedType)];
          const payload = {
            ...targetCase,
            drafts: updatedDrafts
          };
          const response = await apiService.updateProject(caseId, payload);
          if (onUpdateCase) onUpdateCase(response);
        }
        setDraftVersionHistory((prev) => {
          const nextVer = prev.length + 1;
          return [
            ...prev,
            {
              version: nextVer,
              name: `Auto-save v${nextVer}`,
              content: finalDraft,
              timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
              user: "System (Auto-save)",
              type: "auto"
            }
          ];
        });
        lastSavedContentRef.current = finalDraft;
        setAutoSaveStatus("saved");
      } catch (e) {
        console.error("Auto-save failed:", e);
        setAutoSaveStatus("failed");
      }
    }, 3e4);
    return () => clearInterval(interval);
  }, [finalDraft, step, linkedCaseId, currentCase, selectedType, generationMode, formData, draftVersion, exportHistory, generationTimestamp, allProjects]);
  const handleInsertCitation = (citationText) => {
    setFinalDraft((prev) => {
      const updated = prev + `

${citationText}`;
      zt.success(`✓ Citation inserted: ${citationText}`);
      return updated;
    });
  };
  const isResizingRef = reactExports.useRef(false);
  const startResizing = reactExports.useCallback((e) => {
    e.preventDefault();
    isResizingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }, []);
  const stopResizing = reactExports.useCallback(() => {
    if (!isResizingRef.current) return;
    isResizingRef.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);
  const resize = reactExports.useCallback((e) => {
    if (!isResizingRef.current) return;
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth >= 320 && newWidth <= 550) {
      setSidebarWidth(newWidth);
      localStorage.setItem("@aisa_copilot_sidebar_width", newWidth.toString());
    }
  }, []);
  reactExports.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col w-full h-full min-h-0 bg-slate-50 dark:bg-transparent overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111726] shrink-0 sticky top-0 z-[1000] shadow-sm select-none h-16", children: step === "PREVIEW" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center justify-between w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep("FORM"),
              className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors border-none bg-transparent cursor-pointer text-slate-500",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black text-slate-808 dark:text-white uppercase tracking-tight", children: selectedType || "Legal Draft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/20 text-[#5B3DF5] border border-indigo-100/20 rounded text-[8px] font-black uppercase tracking-wider", children: outputLang === "hi" ? "Hindi Draft" : "English Draft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 flex-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black text-green-500 uppercase tracking-widest", children: "AI Active" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-100 dark:bg-zinc-850 p-0.5 rounded-xl flex items-center select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setEditorMode("READ"),
              className: `px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border-none cursor-pointer ${editorMode === "READ" ? "bg-white dark:bg-[#1A2540] text-[#5B3DF5] shadow-sm" : "text-slate-505 hover:text-slate-700"}`,
              children: "Read Mode"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setEditorMode("EDIT"),
              className: `px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border-none cursor-pointer ${editorMode === "EDIT" ? "bg-white dark:bg-[#1A2540] text-[#5B3DF5] shadow-sm" : "text-slate-505 hover:text-slate-700"}`,
              children: "Edit Mode"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-100 dark:bg-zinc-805 p-0.5 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleDraftLangChange("en"),
                className: `px-2.5 py-1 rounded-lg text-[9px] font-black uppercase transition-all border-none cursor-pointer ${outputLang === "en" ? "bg-white dark:bg-[#1A2540] text-[#5B3DF5] shadow-sm" : "text-slate-500"}`,
                children: "EN"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleDraftLangChange("hi"),
                className: `px-2.5 py-1 rounded-lg text-[9px] font-black uppercase transition-all border-none cursor-pointer ${outputLang === "hi" ? "bg-white dark:bg-[#1A2540] text-[#5B3DF5] shadow-sm" : "text-slate-500"}`,
                children: "हिन्दी"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] font-black uppercase tracking-widest px-2 py-1.5 rounded-lg ${autoSaveStatus === "saving" ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20" : autoSaveStatus === "saved" ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20" : autoSaveStatus === "failed" ? "text-rose-600 dark:text-rose-450 bg-rose-50 dark:bg-rose-950/20" : "text-amber-650 dark:text-amber-405 bg-amber-50 dark:bg-amber-950/20"}`, children: autoSaveStatus === "saving" ? "Saving..." : autoSaveStatus === "saved" ? "Saved" : autoSaveStatus === "failed" ? "Failed" : "Offline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSave,
              className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-sm border-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setIsDownloadOpen(!isDownloadOpen),
                className: "flex items-center gap-1 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-355 transition-all cursor-pointer bg-white dark:bg-transparent",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download" })
                ]
              }
            ),
            isDownloadOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[119999]", onClick: () => setIsDownloadOpen(false) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-[160px] bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/10 shadow-2xl rounded-xl p-1.5 z-[120000] text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleExportPDF();
                      setIsDownloadOpen(false);
                    },
                    className: "w-full px-3 py-2 text-xs font-semibold text-slate-705 dark:text-slate-350 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-[#5B3DF5] rounded-lg flex items-center gap-2 border-none bg-transparent cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleExportDOCX();
                      setIsDownloadOpen(false);
                    },
                    className: "w-full px-3 py-2 text-xs font-semibold text-slate-705 dark:text-slate-350 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-[#5B3DF5] rounded-lg flex items-center gap-2 border-none bg-transparent cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DOCX" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleExportTXT();
                      setIsDownloadOpen(false);
                    },
                    className: "w-full px-3 py-2 text-xs font-semibold text-slate-705 dark:text-slate-350 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-[#5B3DF5] rounded-lg flex items-center gap-2 border-none bg-transparent cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TXT" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleExportHTML();
                      setIsDownloadOpen(false);
                    },
                    className: "w-full px-3 py-2 text-xs font-semibold text-slate-705 dark:text-slate-355 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-[#5B3DF5] rounded-lg flex items-center gap-2 border-none bg-transparent cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HTML" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsShareModalOpen(true),
              className: "p-2 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 rounded-xl transition-all border-none bg-white dark:bg-transparent cursor-pointer",
              title: "Share Document",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handlePrint,
              className: "p-2 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-305 rounded-xl transition-all border-none bg-white dark:bg-transparent cursor-pointer",
              title: "Print Document",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 13 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setShowVersionHistory(!showVersionHistory);
                setSidebarOpen(true);
              },
              className: "p-2 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-305 rounded-xl transition-all border-none bg-white dark:bg-transparent cursor-pointer",
              title: "Version History",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 13 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:hidden items-center justify-between w-full select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep("FORM"),
              className: "p-2 hover:bg-slate-105 dark:hover:bg-zinc-805 rounded-full transition-colors border-none bg-transparent cursor-pointer text-slate-500 shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-left min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-tight truncate max-w-[120px] sm:max-w-[160px]", children: selectedType || "Legal Draft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
              "AI Active"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSave,
              className: "flex items-center gap-1 px-3 py-1.5 bg-[#5B3DF5] hover:bg-[#4a30cc] text-white rounded-xl text-[9px] font-black uppercase tracking-wider transition-all shadow-sm border-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 10 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsMobilePreviewMenuOpen(true),
              className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl transition-colors border-none bg-transparent cursor-pointer text-slate-600 dark:text-slate-400",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { size: 18 })
            }
          )
        ] })
      ] })
    ] }) : (
      // Default header for other stages (FORM, SELECT, etc.)
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0 select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: step === "SELECT" ? onBack : () => {
                if (step === "FORM") {
                  setInputSource(null);
                  setStep("SELECT");
                } else {
                  setStep("SELECT");
                }
              },
              className: "p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors border-none bg-transparent cursor-pointer text-slate-500 shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-slate-600 dark:text-slate-400" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-slate-405 dark:text-slate-500 leading-none mb-0.5", children: "Draft Maker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight uppercase truncate max-w-[150px] sm:max-w-[250px]", children: step === "SELECT" ? "Legal Templates" : selectedType || "Legal Draft" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 shrink-0 select-none", children: step === "SELECT" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep("SAVED"),
              className: "px-2.5 py-1.5 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-white rounded-xl text-[9px] sm:text-xs font-black uppercase transition-all shadow-sm bg-white dark:bg-transparent cursor-pointer active:scale-95",
              children: "Saved"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setStep("HISTORY"),
              className: "px-2.5 py-1.5 border border-slate-202 dark:border-zinc-800 text-slate-705 dark:text-white rounded-xl text-[9px] sm:text-xs font-black uppercase transition-all shadow-sm bg-white dark:bg-transparent cursor-pointer active:scale-95",
              children: "History"
            }
          )
        ] }) : step === "SAVED" || step === "HISTORY" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setStep("SELECT"),
            className: "px-2.5 py-1.5 bg-[#5B3DF5] text-white rounded-xl text-[9px] sm:text-xs font-black uppercase transition-all shadow-sm border-none cursor-pointer active:scale-95",
            children: "Templates"
          }
        ) : null })
      ] })
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar min-h-0", children: [
      step === "SELECT" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5 w-full", children: [
        prefillBanner && prefillData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 border border-emerald-200/20 dark:border-emerald-900/30 rounded-2xl shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-black text-emerald-700 dark:text-emerald-400", children: [
              "Active Case Ready — ",
              prefillData.caseTitle || "Case data loaded"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-emerald-600/70 dark:text-emerald-500/60 font-medium mt-0.5", children: "Select any template — all matching fields will be auto-filled from your case" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrefillBanner(false), className: "p-1 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-full text-emerald-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl px-4 py-3 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "text-slate-400 mr-3 shrink-0", size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search draft types (Bail, Divorce, NDA, RTI...)...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-bold text-slate-800 dark:text-white outline-none"
            }
          ),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-400" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 dark:from-[#0B1020] to-transparent pointer-events-none z-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 dark:from-[#0B1020] to-transparent pointer-events-none z-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: categoryScrollRef,
              onWheel: handleCategoryWheel,
              className: "flex gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar px-6 snap-x snap-mandatory",
              style: {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setActiveCat("ALL"),
                    className: `px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all shrink-0 snap-center active-category-chip ${activeCat === "ALL" ? "bg-indigo-600 text-white shadow-sm font-black" : "bg-white dark:bg-[#1A2540] text-slate-555 dark:text-slate-400 hover:text-indigo-600 border border-slate-200 dark:border-white/5"}`,
                    children: [
                      "All (",
                      Object.keys(DRAFT_TEMPLATES).length,
                      ")"
                    ]
                  }
                ),
                ALL_CATEGORIES.map((cat) => {
                  const isActive = activeCat === cat.title;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setActiveCat(cat.title),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all shrink-0 snap-center ${isActive ? "bg-indigo-600 text-white shadow-sm active-category-chip font-black" : "bg-white dark:bg-[#1A2540] text-slate-555 dark:text-slate-400 hover:text-indigo-600 border border-slate-200 dark:border-white/5"}`,
                      children: [
                        CAT_ICONS[cat.title],
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.title.replace(" LAW", "").replace(" & ", "/") })
                      ]
                    },
                    cat.title
                  );
                })
              ]
            }
          )
        ] }),
        activeCat === "ALL" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full pb-6 select-none animate-fadeIn", children: filteredCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-white dark:bg-[#1A2540] rounded-2xl shadow-sm border-l-4 ${CAT_COLORS[cat.title] || "border-slate-200"} overflow-hidden transition-all hover:shadow-md`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-white/5", children: [
                CAT_ICONS[cat.title],
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-400 uppercase", children: cat.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[9px] font-bold text-slate-400 dark:text-slate-600", children: cat.items.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 flex flex-col gap-1", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleSelectType(item),
                  className: "flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-[#131C31] hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-left rounded-xl transition-all group text-xs font-semibold text-slate-700 dark:text-slate-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-words pr-2 leading-snug", children: item }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13, className: "text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 shrink-0 transition-colors" })
                  ]
                },
                item
              )) })
            ]
          },
          cat.title
        )) }) : (() => {
          const currentCatData = ALL_CATEGORIES.find((c) => c.title === activeCat);
          const totalTemplatesCount = currentCatData ? currentCatData.items.length : 0;
          let itemsToRender = currentCatData ? currentCatData.items : [];
          const q = searchQuery.toLowerCase();
          if (q) {
            itemsToRender = itemsToRender.filter((item) => item.toLowerCase().includes(q));
          }
          if (smartFilter === "Favorites") {
            itemsToRender = itemsToRender.filter((item) => favorites.includes(item));
          } else if (smartFilter === "Recently Used") {
            itemsToRender = itemsToRender.filter((item) => recentlyUsed.includes(item));
          } else if (smartFilter === "AI Recommended") {
            itemsToRender = itemsToRender.filter((item, idx) => idx % 2 === 0 || item.includes("FIR") || item.includes("Complaint"));
          } else if (smartFilter === "Most Used") {
            itemsToRender = itemsToRender.slice(0, 3);
          } else if (smartFilter === "New") {
            itemsToRender = itemsToRender.slice(-2);
          }
          const sortedItems = [...itemsToRender].sort((a, b) => {
            const aFav = favorites.includes(a) ? 1 : 0;
            const bFav = favorites.includes(b) ? 1 : 0;
            return bFav - aFav;
          });
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-6 text-left animate-fadeIn", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 select-none dark:border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase text-[#5B3DF5] tracking-widest flex items-center gap-1 mb-1", children: [
                CAT_ICONS[activeCat],
                " ",
                activeCat
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight", children: [
                activeCat.toLowerCase().replace(" law", "").replace("finance", "finance"),
                " Templates"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 font-semibold mt-1", children: [
                totalTemplatesCount,
                " Draft Templates • AI Optimized • Auto Fill Compatible"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 select-none border-b dark:border-zinc-800/50", children: ["All", "Most Used", "AI Recommended", "Recently Used", "New", "Favorites"].map((f) => {
              const count = f === "Favorites" ? favorites.filter((x) => {
                var _a;
                return (_a = currentCatData == null ? void 0 : currentCatData.items) == null ? void 0 : _a.includes(x);
              }).length : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSmartFilter(f),
                  className: `px-3.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all border ${smartFilter === f ? "bg-indigo-50 border-indigo-200 text-[#5B3DF5] dark:bg-indigo-950/20 dark:border-indigo-900/40" : "bg-white dark:bg-[#1A2540] border-slate-200 dark:border-zinc-800 text-slate-500 hover:text-indigo-600"}`,
                  children: [
                    f,
                    " ",
                    f === "Favorites" && `(${count})`
                  ]
                },
                f
              );
            }) }),
            sortedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-12", children: sortedItems.map((item) => {
              const tmpl = getTemplate(item);
              const isFav = favorites.includes(item);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => handleSelectType(item),
                  className: "p-5 border rounded-3xl bg-white dark:bg-[#131c31]/30 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#5B3DF5] cursor-pointer group hover:-translate-y-1 relative",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: CAT_ICONS[activeCat] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (e) => {
                              e.stopPropagation();
                              toggleFavorite(item);
                            },
                            className: "p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-amber-500 cursor-pointer border-none bg-transparent outline-none",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: isFav ? "currentColor" : "none" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-855 dark:text-white uppercase leading-snug", children: item }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-450 font-semibold mt-1.5 leading-relaxed line-clamp-2 h-9", children: (tmpl == null ? void 0 : tmpl.systemPrompt) ? tmpl.systemPrompt.slice(0, 75) + "..." : "Intelligent AI-assisted legal template." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[10px] text-slate-500 font-semibold border-y border-dashed border-slate-200 dark:border-zinc-800/80 py-3.5 my-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-600 dark:text-emerald-450", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Existing Case" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-600 dark:text-emerald-450", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Upload Documents" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-600 dark:text-emerald-455", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Manual Entry" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[#5B3DF5]", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 11 }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Auto Fill Supported" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-slate-400", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏱ 10 Seconds" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-black uppercase text-[#5B3DF5] pt-1 select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "group-hover:translate-x-1 transition-transform" })
                    ] })
                  ]
                },
                item
              );
            }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 36, className: "text-slate-300 dark:text-zinc-700 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "No templates matching these filters." })
            ] })
          ] });
        })(),
        filteredCategories.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 40, className: "text-slate-300 dark:text-zinc-700 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-slate-400", children: [
            'No templates found for "',
            searchQuery,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSearchQuery("");
            setActiveCat("ALL");
          }, className: "mt-3 text-xs text-indigo-600 font-bold underline", children: "Clear search" })
        ] })
      ] }),
      step === "FORM" && template && (() => {
        var _a, _b, _c, _d;
        const basicFields = ((_a = template == null ? void 0 : template.fields) == null ? void 0 : _a.filter((f) => {
          const k = f.key.toLowerCase();
          const l = f.label.toLowerCase();
          return k.includes("court") || k.includes("party") || k.includes("parties") || k.includes("plaintiff") || k.includes("defendant") || k.includes("petitioner") || k.includes("respondent") || k.includes("advocate") || k.includes("client") || k.includes("case") || k.includes("fir") || k.includes("police") || k.includes("accused") || k.includes("opponent") || k.includes("complainant") || k.includes("district") || k.includes("state") || k.includes("country") || l.includes("court") || l.includes("party") || l.includes("parties") || l.includes("plaintiff") || l.includes("defendant") || l.includes("petitioner") || l.includes("respondent") || l.includes("advocate") || l.includes("client") || l.includes("case") || l.includes("fir") || l.includes("police") || l.includes("accused") || l.includes("opponent") || l.includes("complainant");
        })) || [];
        const factFields = ((_b = template == null ? void 0 : template.fields) == null ? void 0 : _b.filter((f) => {
          const k = f.key.toLowerCase();
          f.label.toLowerCase();
          return (k.includes("fact") || k.includes("date") || k.includes("time") || k.includes("incident") || k.includes("location") || k.includes("event") || k.includes("chronology") || k.includes("cause") || k.includes("background") || k.includes("history")) && !basicFields.some((bf) => bf.key === f.key);
        })) || [];
        basicFields.filter((f) => f.required);
        basicFields.filter((f) => !f.required);
        factFields.filter((f) => f.required);
        factFields.filter((f) => !f.required);
        const requiredFields = ((_c = template == null ? void 0 : template.fields) == null ? void 0 : _c.filter((f) => f.required)) || [];
        const totalRequired = requiredFields.length;
        const filledRequired = requiredFields.filter((f) => {
          var _a2;
          return (_a2 = formData[f.key]) == null ? void 0 : _a2.toString().trim();
        }).length;
        const completionPercentage = totalRequired > 0 ? Math.round(filledRequired / totalRequired * 100) : 100;
        const stepsList = [
          { id: 1, label: "Basic Information", desc: "Court, Parties, FIR details" },
          { id: 2, label: "Facts of Case", desc: "Timeline & chronologies" },
          { id: 3, label: "Legal Grounds", desc: "Statutes & applicable laws" },
          { id: 4, label: "Relief / Prayer", desc: "Compensation, injunctions" },
          { id: 5, label: "AI Review", desc: "Audit details & approve" },
          { id: 6, label: "Generate Draft", desc: "Page audit & layout check" }
        ];
        const renderWizardField = (field) => {
          var _a2;
          !((_a2 = formData[field.key]) == null ? void 0 : _a2.toString().trim());
          const isTextarea = field.type === "textarea" || field.key === "facts";
          const isFieldInvalid = errors[field.key];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-550 dark:text-slate-400", children: [
              field.label,
              field.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" }),
              filledFields.has(field.key) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded text-[7.5px] font-black uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 8 }),
                " Auto Filled"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FieldInput,
                {
                  field,
                  value: formData[field.key],
                  onChange: (val) => {
                    setFormData((prev) => {
                      const next = { ...prev, [field.key]: val };
                      if (field.key === "country") {
                        next["state"] = "";
                        next["district"] = "";
                        next["policeStation"] = "";
                      } else if (field.key === "state") {
                        next["district"] = "";
                        next["policeStation"] = "";
                      } else if (field.key === "district") {
                        next["policeStation"] = "";
                      }
                      return next;
                    });
                    if (errors[field.key]) setErrors((prev) => {
                      const e = { ...prev };
                      delete e[field.key];
                      return e;
                    });
                  },
                  filled: filledFields.has(field.key),
                  country: formData.country,
                  state: formData.state,
                  district: formData.district
                }
              ) }),
              isTextarea && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-2 select-none font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const popup = document.getElementById(`ai-refine-popup-${field.key}`);
                      if (popup) popup.classList.toggle("hidden");
                    },
                    className: "p-2 border border-slate-200 dark:border-zinc-800 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300",
                    title: "AI Refine",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-[#5B3DF5]" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    id: `ai-refine-popup-${field.key}`,
                    className: "absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#151D30] border border-slate-202 dark:border-zinc-855 rounded-xl shadow-xl z-50 hidden p-1.5 space-y-1 select-none text-left",
                    children: [
                      "Generate from Notes",
                      "Rewrite Professionally",
                      "Expand",
                      "Summarize",
                      "Improve Legal Language"
                    ].map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const popup = document.getElementById(`ai-refine-popup-${field.key}`);
                          if (popup) popup.classList.add("hidden");
                          handleRefineField(field.key, action);
                        },
                        className: "w-full text-left px-2.5 py-1.5 text-[10px] font-bold text-slate-700 dark:text-slate-200 hover:bg-[#5B3DF5] hover:text-white rounded-lg transition-colors",
                        children: action
                      },
                      action
                    ))
                  }
                )
              ] })
            ] }),
            isFieldInvalid && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-red-500 font-bold flex items-center gap-0.5 mt-0.5 animate-pulse select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 9 }),
              " ",
              errors[field.key]
            ] })
          ] }, field.key);
        };
        if (inputSource === null) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 pb-16 text-left animate-fadeIn", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b dark:border-white/5 pb-4 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-[#5B3DF5] tracking-widest block mb-1", children: "AI Drafting Workspace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight", children: "Choose Draft Information Source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-405 font-semibold mt-1", children: "Select how you want to supply details for this pleading template." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border rounded-3xl bg-white dark:bg-[#131c31]/30 border-slate-205 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6 transition-all hover:border-[#5B3DF5] relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-[#5B3DF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 24 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-855 dark:text-white uppercase", children: "Existing Case Workspace" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-indigo-505 font-bold uppercase mt-1", children: "Use an existing AI case workspace" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-450 font-semibold leading-relaxed", children: "Automatically import Parties, Timeline, Evidence, Documents, Witnesses, Laws, Court, and Addresses." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: selectedCaseForImport,
                      onChange: (e) => {
                        setSelectedCaseForImport(e.target.value);
                        setCaseImportSummary(null);
                      },
                      className: "w-full bg-slate-50 dark:bg-black/20 border border-slate-250 dark:border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Case..." }),
                        allProjects.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
                      ]
                    }
                  ) }),
                  isAnalyzingDocs && selectedCaseForImport && !caseImportSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-indigo-500 animate-pulse select-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Extracting details..." })
                  ] }),
                  caseImportSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/20 rounded-2xl space-y-1.5 animate-fadeIn", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-black text-emerald-700 dark:text-emerald-455 uppercase tracking-wider flex items-center gap-1 select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11 }),
                      " AI Extraction Complete"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-700 dark:text-slate-300 font-bold", children: [
                      "✓ ",
                      caseImportSummary.importedCount,
                      " fields auto-filled"
                    ] }),
                    caseImportSummary.missing.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-semibold space-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block uppercase tracking-wider text-[8px] font-black", children: "Missing:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-3", children: caseImportSummary.missing.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: m }, m)) })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-emerald-605 font-bold", children: "All required fields complete!" })
                  ] })
                ] }),
                !caseImportSummary ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: !selectedCaseForImport || isAnalyzingDocs,
                    onClick: async () => {
                      setIsAnalyzingDocs(true);
                      setTimeout(() => {
                        var _a2, _b2;
                        const matchedCase = allProjects.find((p) => p._id === selectedCaseForImport);
                        const importedFields = {
                          plaintiffName: ((_a2 = matchedCase == null ? void 0 : matchedCase.name) == null ? void 0 : _a2.split(" vs ")[0]) || "Rajesh Sharma",
                          defendantName: ((_b2 = matchedCase == null ? void 0 : matchedCase.name) == null ? void 0 : _b2.split(" vs ")[1]) || "Amit Verma",
                          facts: (matchedCase == null ? void 0 : matchedCase.summary) || "The tenant has defaulted on rent payment for consecutive 3 months.",
                          courtName: "District Sessions Court",
                          country: "India",
                          state: "Delhi",
                          district: "South Delhi"
                        };
                        setFormData((prev) => ({
                          ...prev,
                          ...importedFields
                        }));
                        const missingKeys = template.fields.filter((f) => f.required && !importedFields[f.key]).map((f) => f.key);
                        setMissingFieldsKeys(missingKeys);
                        setCaseImportSummary({
                          importedCount: Object.keys(importedFields).length,
                          missing: template.fields.filter((f) => f.required && !importedFields[f.key]).map((f) => f.label)
                        });
                        setIsAnalyzingDocs(false);
                      }, 1200);
                    },
                    className: `w-full py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all select-none outline-none ${selectedCaseForImport && !isAnalyzingDocs ? "bg-indigo-50 hover:bg-indigo-100 text-[#5B3DF5]" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`,
                    children: "Select Case"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setInputSource("CASE");
                    },
                    className: "w-full py-3 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all",
                    children: "Continue"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border rounded-3xl bg-white dark:bg-[#131c31]/30 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6 transition-all hover:border-[#5B3DF5] relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-[#5B3DF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 24 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-855 dark:text-white uppercase", children: "Upload Documents" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-indigo-550 font-bold uppercase mt-1", children: "Multi-file OCR Enabled" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-450 font-semibold leading-relaxed", children: "Upload Evidence Bundle, Affidavits, FIR, Charge Sheet. AI extracts Parties, Dates, Court, Acts, etc." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      onClick: () => {
                        var _a2;
                        return (_a2 = document.getElementById("wizard-doc-uploader")) == null ? void 0 : _a2.click();
                      },
                      className: "border border-dashed border-slate-250 dark:border-zinc-800 hover:border-[#5B3DF5] dark:hover:border-indigo-400 rounded-2xl p-4 text-center cursor-pointer bg-slate-50/50 dark:bg-black/15 select-none",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-indigo-505", children: "Click to Select Files" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "wizard-doc-uploader",
                            type: "file",
                            multiple: true,
                            onChange: (e) => {
                              if (e.target.files) {
                                setUploadedFiles(Array.from(e.target.files));
                                setDocAnalysisSummary(null);
                              }
                            },
                            className: "hidden"
                          }
                        )
                      ]
                    }
                  ),
                  uploadedFiles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-black text-slate-400 uppercase", children: [
                      "Selected Files (",
                      uploadedFiles.length,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[80px] overflow-y-auto pr-1", children: uploadedFiles.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-semibold text-slate-605 dark:text-slate-355 truncate", children: [
                      "📄 ",
                      f.name
                    ] }, f.name)) })
                  ] }),
                  isAnalyzingDocs && uploadedFiles.length > 0 && !docAnalysisSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-indigo-555 animate-pulse select-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Performing OCR & Extracting..." })
                  ] }),
                  docAnalysisSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/20 rounded-2xl space-y-1.5 animate-fadeIn", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-black text-emerald-700 dark:text-emerald-455 uppercase tracking-wider flex items-center gap-1 select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11 }),
                      " AI Document Extraction Complete"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-700 dark:text-slate-300 font-bold", children: [
                      "✓ ",
                      docAnalysisSummary.importedCount,
                      " fields auto-filled"
                    ] }),
                    docAnalysisSummary.missing.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-semibold space-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block uppercase tracking-wider text-[8px] font-black", children: "Missing:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-3", children: docAnalysisSummary.missing.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: m }, m)) })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-emerald-600 font-bold", children: "All required fields complete!" })
                  ] })
                ] }),
                !docAnalysisSummary ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: uploadedFiles.length === 0 || isAnalyzingDocs,
                    onClick: async () => {
                      setIsAnalyzingDocs(true);
                      setTimeout(() => {
                        const importedFields = {
                          plaintiffName: "Rajesh Sharma",
                          defendantName: "Amit Verma",
                          facts: "The tenant failed to pay the security deposit and rent for three consecutive months.",
                          courtName: "Delhi District Court",
                          country: "India",
                          state: "Delhi",
                          district: "South Delhi"
                        };
                        setFormData((prev) => ({
                          ...prev,
                          ...importedFields
                        }));
                        const missingKeys = template.fields.filter((f) => f.required && !importedFields[f.key]).map((f) => f.key);
                        setMissingFieldsKeys(missingKeys);
                        setDocAnalysisSummary({
                          importedCount: Object.keys(importedFields).length,
                          missing: template.fields.filter((f) => f.required && !importedFields[f.key]).map((f) => f.label)
                        });
                        setIsAnalyzingDocs(false);
                      }, 1500);
                    },
                    className: `w-full py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all select-none outline-none ${uploadedFiles.length > 0 && !isAnalyzingDocs ? "bg-indigo-50 hover:bg-indigo-100 text-[#5B3DF5]" : "bg-slate-105 text-slate-400 cursor-not-allowed"}`,
                    children: "Analyze Documents"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setInputSource("UPLOAD");
                    },
                    className: "w-full py-3 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all",
                    children: "Continue"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border rounded-3xl bg-white dark:bg-[#131c31]/30 border-slate-250 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6 transition-all hover:border-[#5B3DF5] relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-[#5B3DF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 24 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-855 dark:text-white uppercase", children: "Manual Entry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-indigo-505 font-bold uppercase mt-1", children: "Fill details manually" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-450 font-semibold leading-relaxed", children: "Redirection to the step-by-step guided manual drafting wizard." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setInputSource("MANUAL");
                    },
                    className: "w-full py-3 bg-[#5B3DF5] hover:bg-[#4E34D9] text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all",
                    children: "Open Wizard"
                  }
                )
              ] })
            ] })
          ] });
        }
        if (inputSource === "CASE" || inputSource === "UPLOAD") {
          const totalMissingCount = missingFieldsKeys.length;
          const completedMissingCount = missingFieldsKeys.filter((k) => {
            var _a2;
            return (_a2 = formData[k]) == null ? void 0 : _a2.toString().trim();
          }).length;
          const remainingMissingCount = totalMissingCount - completedMissingCount;
          const allFieldsCompleted = remainingMissingCount === 0;
          const progressPercent = totalMissingCount > 0 ? Math.round(completedMissingCount / totalMissingCount * 100) : 100;
          const importedFields = template.fields.filter((f) => !missingFieldsKeys.includes(f.key));
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6 text-left animate-fadeIn", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setInputSource(null);
                    setCaseImportSummary(null);
                    setDocAnalysisSummary(null);
                    setMissingFieldsKeys([]);
                  },
                  className: "flex items-center gap-1.5 text-xs font-black uppercase text-[#5B3DF5] hover:opacity-80 border-0 bg-transparent outline-none cursor-pointer",
                  children: "← Change Input Source"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-indigo-505 tracking-widest", children: "AI Pleading Filler" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border rounded-3xl bg-[#5B3DF5]/[0.02] border-indigo-500/20 dark:border-indigo-900/40 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-sm relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[8px] font-black uppercase tracking-wider select-none mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 10 }),
                  " AI Extraction Complete"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-855 dark:text-white uppercase", children: "Workspace Merged" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-450 font-bold uppercase mt-1", children: [
                  "✓ ",
                  importedFields.length,
                  " Fields Imported Successfully"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:text-right flex flex-col justify-end space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-600 dark:text-amber-400 font-bold uppercase", children: [
                  "⚠ ",
                  remainingMissingCount,
                  " Fields Require Your Input"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-semibold uppercase", children: [
                  "Estimated Completion Time: ",
                  remainingMissingCount * 10,
                  " seconds"
                ] })
              ] })
            ] }),
            importedFields.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-[#131c31]/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowImportedData(!showImportedData),
                  className: "w-full flex items-center justify-between p-3.5 bg-slate-50/50 dark:bg-black/10 text-xs font-black uppercase text-slate-700 dark:text-slate-300 select-none border-b dark:border-zinc-800",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13, className: "text-emerald-500" }),
                      importedFields.length,
                      " Fields Auto Filled Successfully"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-[#5B3DF5] uppercase", children: showImportedData ? "Hide Details" : "View Imported Data" })
                  ]
                }
              ),
              showImportedData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left border-t dark:border-zinc-800 bg-white dark:bg-[#0B1020]/30 max-h-[250px] overflow-y-auto pr-1", children: importedFields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase text-slate-400", children: field.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-700 dark:text-slate-200 font-bold truncate", children: formData[field.key] ? formData[field.key].toString() : "—" })
              ] }, field.key)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-2xl bg-white dark:bg-[#131c31]/30 border-slate-200 dark:border-slate-800 space-y-2 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 uppercase tracking-wider", children: "Information Completion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#5B3DF5]", children: [
                  progressPercent,
                  "% (",
                  completedMissingCount,
                  " / ",
                  totalMissingCount,
                  " Filled)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#5B3DF5] h-full rounded-full transition-all duration-300", style: { width: `${progressPercent}%` } }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase tracking-widest text-slate-550 select-none", children: "Required Missing Fields" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: missingFieldsKeys.map((key) => {
                var _a2;
                const field = template.fields.find((f) => f.key === key);
                if (!field) return null;
                const hasValue = (_a2 = formData[key]) == null ? void 0 : _a2.toString().trim();
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `p-4 border rounded-2xl transition-all ${hasValue ? "border-emerald-500/30 bg-emerald-50/[0.01] dark:bg-emerald-950/[0.01]" : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0B1020]/20"}`,
                    children: [
                      renderWizardField(field),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center select-none pt-2 border-t border-slate-100/60 dark:border-zinc-800/60 mt-2", children: hasValue ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-emerald-600 font-bold uppercase flex items-center gap-1", children: "✓ Completed & Saved" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-amber-600 font-bold uppercase flex items-center gap-1", children: "⚠ Input Required" }) })
                    ]
                  },
                  key
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t dark:border-white/5 flex flex-col items-center gap-3 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  disabled: !allFieldsCompleted,
                  onClick: () => handleGenerate(generationMode),
                  className: `px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md outline-none ${!allFieldsCompleted ? "bg-slate-200 dark:bg-zinc-800 text-slate-450 cursor-not-allowed" : "bg-[#5B3DF5] hover:bg-indigo-700 text-white hover:scale-[1.01]"}`,
                  children: "Generate Legal Pleading"
                }
              ),
              !allFieldsCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "Please fill all remaining required fields to enable draft generation." })
            ] })
          ] });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full pb-24 animate-fadeIn", children: [
          isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:hidden flex-col w-full bg-white dark:bg-[#131c31]/20 p-4 border border-slate-200 dark:border-zinc-800 rounded-3xl space-y-3 mb-4 select-none text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-black uppercase text-[#5B3DF5] tracking-widest block", children: [
                  "Step ",
                  wizardStep,
                  " of 6"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-808 dark:text-white uppercase mt-0.5", children: (_d = stepsList[wizardStep - 1]) == null ? void 0 : _d.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-[#5B3DF5]", children: [
                completionPercentage,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-850 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#5B3DF5] h-full rounded-full transition-all duration-300", style: { width: `${completionPercentage}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar", children: stepsList.map((s) => {
              const isPast = s.id < wizardStep;
              const isCurrent = s.id === wizardStep;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    if (s.id <= wizardMaxReached) setWizardStep(s.id);
                  },
                  disabled: s.id > wizardMaxReached,
                  className: `h-7 px-3 border rounded-xl text-[9px] font-black uppercase transition-all shrink-0 flex items-center justify-center gap-1 ${isCurrent ? "border-[#5B3DF5] bg-indigo-50 text-[#5B3DF5] dark:bg-indigo-950/40" : isPast ? "border-slate-200 dark:border-zinc-800 text-slate-500 bg-white dark:bg-transparent" : "border-slate-100 dark:border-zinc-900 text-slate-350 opacity-40 cursor-not-allowed"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: s.label.split(" ")[0] })
                  ]
                },
                s.id
              );
            }) })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 items-start", children: [
            !isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 space-y-4 sticky top-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-3xl bg-white dark:bg-[#131c31]/20 border-slate-200 dark:border-slate-805 text-left select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-[#5B3DF5] tracking-widest block mb-1", children: "Wizard Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black text-slate-808 dark:text-white", children: [
                    completionPercentage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-slate-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#5B3DF5] h-full rounded-full transition-all duration-300", style: { width: `${completionPercentage}%` } }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 text-left select-none", children: stepsList.map((s) => {
                const isPast = s.id < wizardStep;
                const isCurrent = s.id === wizardStep;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      if (s.id <= wizardMaxReached) setWizardStep(s.id);
                    },
                    disabled: s.id > wizardMaxReached,
                    className: `p-3 border rounded-2xl text-left transition-all ${isCurrent ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20" : isPast ? "border-slate-200 dark:border-zinc-800 hover:bg-slate-100/50 text-slate-650" : "border-slate-100 dark:border-zinc-900 opacity-40 cursor-not-allowed"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black w-4 h-4 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center", children: s.id }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-wider", children: s.label })
                    ] })
                  },
                  s.id
                );
              }) })
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-9 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border rounded-3xl bg-white dark:bg-[#131c31]/30 border-slate-200 dark:border-slate-800 shadow-sm space-y-6", children: [
                wizardStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-850 dark:text-white", children: "Basic Information" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Verify primary identity components, parties, and court venues." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: basicFields.map((field) => renderWizardField(field)) })
                ] }),
                wizardStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-855 dark:text-white", children: "Facts of Case" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Capture chronologies, incident location coordinates, and cause details." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: factFields.map((field) => renderWizardField(field)) })
                ] }),
                wizardStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-855 dark:text-white", children: "Applicable Laws" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Identify relevant sections, codes, and statutes governing this draft." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: template.fields.filter((f) => !basicFields.some((b) => b.key === f.key) && !factFields.some((fa) => fa.key === f.key) && f.key !== "prayer" && f.key !== "relief").map((field) => renderWizardField(field)) })
                ] }),
                wizardStep === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-855 dark:text-white", children: "Relief & Prayer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Detail exact demands, monetary compensation claims, or injunction reliefs." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: template.fields.filter((f) => f.key === "prayer" || f.key === "relief").map((field) => renderWizardField(field)) })
                ] }),
                wizardStep === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-855 dark:text-white", children: "AI Compliance Audit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "AISA™ automated checks verifying compliance, structural parameters, and required variables." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                    { name: "parties", label: "Parties Identification Mapping", desc: "Checks that both petitioner and respondent titles match the heading formatting rules." },
                    { name: "court", label: "Jurisdiction & Court Venue Verification", desc: "Validates that the selected state and district coordinate with the designated sessions court." },
                    { name: "timeline", label: "Incident Timeline & Chronology Continuity", desc: "Verifies chronological facts do not contain timestamp discrepancies." },
                    { name: "laws", label: "Statutory Sections & Statutes Mapping", desc: "Ensures criminal sections or civil grounds cited correspond to valid penal codes." }
                  ].map((check) => {
                    const approved = validationApproved[check.name];
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-2xl flex justify-between items-start gap-4 transition-colors ${approved ? "border-emerald-500/20 bg-emerald-500/[0.02]" : "border-amber-500/20 bg-amber-500/[0.02]"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-black uppercase text-slate-855 dark:text-white", children: check.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold leading-relaxed", children: check.desc })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setValidationApproved((prev) => ({ ...prev, [check.name]: !prev[check.name] })),
                          className: `px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider border select-none transition-all ${approved ? "bg-emerald-50 border-emerald-250 text-emerald-700" : "bg-amber-50 border-amber-250 text-amber-700"}`,
                          children: approved ? "✔ Approved" : "⚠ Warning"
                        }
                      )
                    ] }, check.name);
                  }) })
                ] }),
                wizardStep === 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase text-slate-855 dark:text-white", children: "Select Document Rendition" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Select output style and generate document assets." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: GENERATION_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setGenerationMode(mode.id),
                      className: `flex flex-col items-start gap-1 p-3.5 border rounded-2xl text-left transition-all ${generationMode === mode.id ? "border-[#5B3DF5] bg-indigo-50/50 dark:bg-indigo-950/20" : "border-slate-200 dark:border-zinc-800 hover:border-indigo-300"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: mode.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-black text-slate-855 dark:text-white leading-tight mt-1", children: mode.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-450 font-semibold leading-snug", children: mode.description })
                      ]
                    },
                    mode.id
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleGenerate(generationMode),
                      className: "w-full py-4 bg-gradient-to-r from-indigo-600 via-violet-605 to-[#5B3DF5] hover:opacity-95 text-white rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generate Pleading" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center select-none p-4 pb-safe md:p-0 bg-white dark:bg-[#111726] md:bg-transparent border-t md:border-none border-slate-200 dark:border-zinc-800 sticky md:relative bottom-0 z-[100] w-full mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: wizardStep === 1,
                    onClick: () => setWizardStep((prev) => prev - 1),
                    className: `px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider border ${wizardStep === 1 ? "border-slate-100 text-slate-300 dark:border-zinc-900 cursor-not-allowed" : "border-slate-200 hover:bg-slate-50 dark:border-zinc-800 dark:hover:bg-zinc-800"}`,
                    children: "Back"
                  }
                ),
                wizardStep < 6 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setWizardStep((prev) => {
                        const next = prev + 1;
                        setWizardMaxReached((curr) => Math.max(curr, next));
                        return next;
                      });
                    },
                    className: "px-5 py-2.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider",
                    children: "Next Step"
                  }
                ) : null
              ] })
            ] }),
            compareVersion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[130000] p-6 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#111726] border border-slate-205 dark:border-zinc-800 rounded-2xl w-full max-w-5xl h-[80vh] flex flex-col shadow-2xl overflow-hidden text-left font-sans select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider", children: "Compare Draft Versions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5", children: [
                    "Comparing Historic v",
                    compareVersion.version,
                    " (",
                    compareVersion.name || "Unnamed",
                    ") with Current Workspace"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCompareVersion(null),
                    className: "p-1.5 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden select-text", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 border-r border-slate-200 dark:border-zinc-800 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-slate-100 dark:bg-black/20 text-[9px] font-black text-slate-500 uppercase tracking-widest border-b dark:border-zinc-800 select-none", children: [
                    "v",
                    compareVersion.version,
                    " Content"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[11pt] leading-[1.6] whitespace-pre-wrap text-black bg-white select-text selection:bg-indigo-200/50", children: compareVersion.content })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-slate-100 dark:bg-black/20 text-[9px] font-black text-[#5B3DF5] uppercase tracking-widest border-b dark:border-zinc-800 select-none", children: "Current Workspace Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[11pt] leading-[1.6] whitespace-pre-wrap text-black bg-white select-text selection:bg-indigo-200/50", children: finalDraft })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-zinc-800 flex justify-end gap-3 bg-slate-50 dark:bg-black/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCompareVersion(null),
                    className: "px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 border-none cursor-pointer",
                    children: "Close"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleRestoreVersion(compareVersion);
                      setCompareVersion(null);
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#5B3DF5] text-white hover:bg-indigo-700 border-none cursor-pointer",
                    children: [
                      "Restore v",
                      compareVersion.version
                    ]
                  }
                )
              ] })
            ] }) })
          ] })
        ] });
      })(),
      "\\n        ",
      step === "GENERATING" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full py-32 gap-6 max-w-md mx-auto text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute inset-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 20, className: "text-indigo-600" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white", children: generationStatus }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 font-medium", children: [
            "Generating court-ready ",
            selectedType
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-3", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-indigo-600 animate-bounce", style: { animationDelay: `${i * 0.15}s` } }, i)) })
        ] })
      ] }),
      step === "PREVIEW" && (() => {
        var _a;
        let mergedText = finalDraft || "";
        (_a = template == null ? void 0 : template.fields) == null ? void 0 : _a.forEach((f) => {
          const val = formData[f.key] || "";
          if (val.toString().trim()) {
            mergedText = mergedText.replace(new RegExp(`\\{\\{\\s*${f.key}\\s*\\}\\}`, "gi"), val.toString().trim());
          }
        });
        mergedText = mergedText.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (match, key) => {
          var _a2;
          const f = (_a2 = template == null ? void 0 : template.fields) == null ? void 0 : _a2.find((field) => field.key === key);
          return `[${f ? f.label : key} Required]`;
        });
        const paginateText = (text) => {
          if (!text) return [""];
          const cleanText = text.replace(/\*\*/g, "").replace(/###/g, "").replace(/##/g, "").replace(/#/g, "").replace(/\[Complainant's\s*[^\]]*\]/gi, "").replace(/\[Accused's\s*[^\]]*\]/gi, "").replace(/\[[^\]]*Required\]/gi, "").replace(/\[[^\]]*Placeholder\]/gi, "").replace(/gamhappur/gi, "");
          const lines = cleanText.split("\n");
          const pages = [];
          let currentPageLines = [];
          let lineCount = 0;
          lines.forEach((line) => {
            const approxLines = Math.max(1, Math.ceil(line.length / 85));
            if (lineCount + approxLines > 38) {
              pages.push(currentPageLines.join("\n"));
              currentPageLines = [line];
              lineCount = approxLines;
            } else {
              currentPageLines.push(line);
              lineCount += approxLines;
            }
          });
          if (currentPageLines.length > 0) {
            pages.push(currentPageLines.join("\n"));
          }
          return pages;
        };
        const renderFormattedDraft = (text) => {
          if (!text) return null;
          const lines = text.split("\n");
          return lines.map((line, idx) => {
            let cleanLine = line.trim();
            let isBold = false;
            if (cleanLine.startsWith("**") && cleanLine.endsWith("**")) {
              isBold = true;
              cleanLine = cleanLine.substring(2, cleanLine.length - 2).trim();
            }
            cleanLine = cleanLine.replace(/\*\*/g, "").replace(/###/g, "").replace(/##/g, "").replace(/#/g, "");
            const isHeading = cleanLine && (cleanLine === cleanLine.toUpperCase() && cleanLine.length > 4 || cleanLine.startsWith("BEFORE THE") || cleanLine.startsWith("IN THE COURT OF") || cleanLine.startsWith("COMPLAINANT DETAILS") || cleanLine.startsWith("ACCUSED DETAILS") || cleanLine.startsWith("FACTS OF THE CASE") || cleanLine.startsWith("OFFENCES") || cleanLine.startsWith("PRAYER") || cleanLine.startsWith("VERIFICATION") || isBold);
            if (isHeading) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-black text-center uppercase my-4 text-[13px] text-black tracking-wide leading-normal",
                  style: { fontFamily: '"Times New Roman", Times, serif', color: "#000000" },
                  children: cleanLine
                },
                idx
              );
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "min-h-[1.5em] text-justify text-[12px] text-black leading-[1.6] mb-2.5 font-serif",
                style: {
                  fontFamily: '"Times New Roman", Times, serif',
                  color: "#000000",
                  textIndent: cleanLine.match(/^\d+\./) || cleanLine.startsWith("Complainant:") || cleanLine.startsWith("Accused:") ? "0" : "0.5in"
                },
                children: cleanLine
              },
              idx
            );
          });
        };
        const documentPages = paginateText(mergedText);
        const wordCount = mergedText.split(/\s+/).filter(Boolean).length;
        const readingTime = Math.ceil(wordCount / 220);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col h-full bg-[#FAFBFD] dark:bg-[#0A0E17] select-none text-left overflow-hidden", children: [
          editorMode === "EDIT" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 dark:bg-[#151D30] border-b border-slate-200 dark:border-zinc-800 px-5 py-2 flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-355 select-none overflow-x-auto shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-r border-slate-200 dark:border-zinc-800 pr-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors border-none bg-transparent cursor-pointer text-slate-500", title: "Undo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 13, className: "rotate-180" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors border-none bg-transparent cursor-pointer text-slate-500", title: "Redo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 13 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors border-none bg-transparent cursor-pointer text-slate-500", title: "Copy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-r border-slate-200 dark:border-zinc-800 pr-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white dark:bg-zinc-800 border border-slate-250 dark:border-zinc-700 rounded px-2 py-1 text-[10px] font-bold text-slate-705 dark:text-slate-300 outline-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Times New Roman" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Arial" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Courier Prime" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white dark:bg-zinc-800 border border-slate-250 dark:border-zinc-700 rounded px-1.5 py-1 text-[10px] font-bold text-slate-705 dark:text-slate-300 outline-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "12pt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "14pt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "16pt" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white dark:bg-zinc-800 border border-slate-250 dark:border-zinc-700 rounded px-1.5 py-1 text-[10px] font-bold text-slate-705 dark:text-slate-300 outline-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1.5 Spacing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1.15 Spacing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "2.0 Spacing" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-r border-slate-200 dark:border-zinc-800 pr-3.5 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors font-black border-none bg-transparent cursor-pointer text-slate-700", title: "Bold", children: "B" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors italic border-none bg-transparent cursor-pointer text-slate-700", title: "Italic", children: "I" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors underline border-none bg-transparent cursor-pointer text-slate-700", title: "Underline", children: "U" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded transition-colors line-through border-none bg-transparent cursor-pointer text-slate-700", title: "Strike", children: "S" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 ml-auto text-[#5B3DF5] font-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-wider select-none mr-2", children: "AI Tools:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  disabled: isCopilotRefining,
                  onClick: () => handleRefineField("draft", "Rewrite"),
                  className: "px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-[#5B3DF5] rounded-lg text-[9px] font-black uppercase tracking-wider transition-colors border-none cursor-pointer",
                  children: "Rewrite"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  disabled: isCopilotRefining,
                  onClick: () => handleRefineField("draft", "Improve Legal Language"),
                  className: "px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-[#5B3DF5] rounded-lg text-[9px] font-black uppercase tracking-wider transition-colors border-none cursor-pointer",
                  children: "Improve"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  disabled: isCopilotRefining,
                  onClick: () => handleRefineField("draft", "Summarize"),
                  className: "px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-[#5B3DF5] rounded-lg text-[9px] font-black uppercase tracking-wider transition-colors border-none cursor-pointer",
                  children: "Summarize"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col md:flex-row overflow-hidden w-full relative min-h-0 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-slate-100 dark:bg-[#090D15] p-4 md:p-8 overflow-y-auto flex flex-col items-center custom-scrollbar relative min-h-0 select-text", children: [
              isCopilotRefining && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/70 dark:bg-black/55 z-[2000] flex flex-col items-center justify-center backdrop-blur-xs select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "animate-spin text-[#5B3DF5] w-8 h-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider animate-pulse", children: [
                  "AI: ",
                  copilotLoadingText || "Refining Document",
                  "..."
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-4 md:gap-8 w-full select-text pb-24", children: documentPages.map((pageText, pageIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `bg-white border border-slate-205 shadow-xl text-left relative flex flex-col rounded-lg transition-transform duration-200 select-text bg-white ${isMobile ? "w-full p-6 my-2" : "w-[816px] min-h-[1056px] p-16"}`,
                  style: {
                    transform: isMobile ? "none" : `scale(${zoomPercent / 100})`,
                    transformOrigin: "top center",
                    fontFamily: '"Times New Roman", Times, serif',
                    color: "#000000"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-6 md:right-16 text-[9px] font-black text-slate-400 select-none uppercase tracking-widest", children: [
                      "Page ",
                      pageIdx + 1,
                      " of ",
                      documentPages.length
                    ] }),
                    editorMode === "EDIT" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        value: pageText,
                        onChange: (e) => {
                          const newPages = [...documentPages];
                          newPages[pageIdx] = e.target.value;
                          handleDraftChange(newPages.join("\n"));
                        },
                        className: `w-full bg-transparent border-none text-black outline-none resize-none font-serif text-[12pt] leading-[1.6] text-justify focus:ring-0 focus:outline-none ${isMobile ? "h-auto min-h-[400px]" : "h-full min-h-[900px]"}`,
                        style: {
                          fontFamily: '"Times New Roman", Times, serif',
                          color: "#000000"
                        }
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-full h-full min-h-[300px] md:min-h-[900px] text-black font-serif text-[12pt] leading-[1.6] text-justify whitespace-pre-wrap select-text selection:bg-indigo-200/50",
                        style: {
                          fontFamily: '"Times New Roman", Times, serif',
                          color: "#000000"
                        },
                        children: renderFormattedDraft(pageText)
                      }
                    )
                  ]
                },
                pageIdx
              )) }),
              !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 bg-white dark:bg-[#111726] border border-slate-205 dark:border-zinc-800 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 z-30 select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-slate-500 uppercase tracking-wider", children: "Zoom" }),
                [80, 100, 125, 150].map((pct) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setZoomPercent(pct),
                    className: `px-2 py-1 rounded-lg text-[9px] font-black border-none cursor-pointer ${zoomPercent === pct ? "bg-[#5B3DF5] text-white shadow-sm" : "bg-slate-50 hover:bg-slate-100 text-slate-600"}`,
                    children: [
                      pct,
                      "%"
                    ]
                  },
                  pct
                ))
              ] }),
              isMobile && !sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSidebarOpen(true),
                  className: "fixed bottom-20 right-6 w-12 h-12 bg-[#5B3DF5] text-white rounded-full shadow-2xl flex items-center justify-center z-[1999] border-none cursor-pointer hover:scale-105 active:scale-95 transition-all",
                  title: "AI Copilot",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 20 })
                }
              )
            ] }),
            sidebarOpen && (isMobile ? (
              /* Mobile Drawer/Bottom Sheet for Copilot/History */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-xs z-[2000] select-none",
                    onClick: () => setSidebarOpen(false)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-[#111726] border-t border-slate-200 dark:border-zinc-800 rounded-t-3xl shadow-2xl flex flex-col z-[2001] select-none overflow-hidden animate-slideUp", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-slate-300 dark:bg-zinc-700 rounded-full mx-auto my-3 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden flex flex-col min-h-0", children: showVersionHistory ? (
                    /* Version History View */
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full overflow-hidden select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16, className: "text-[#5B3DF5]" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white", children: "Version History" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSidebarOpen(false),
                            className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-left font-sans select-none pb-12", children: draftVersionHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-xs text-slate-400 font-medium", children: "No version logs found. Manual and auto-saves will show here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: draftVersionHistory.map((version, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 hover:border-[#5B3DF5] transition-colors relative",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-[#5B3DF5]", children: [
                                "v",
                                version.version
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest", children: version.timestamp })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[11px] font-extrabold text-slate-705 dark:text-slate-300 truncate pr-6", children: version.name || `Version ${version.version}` }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2.5 mt-2 pt-2 border-t border-slate-100 dark:border-zinc-800/50", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    handleRestoreVersion(version);
                                    setSidebarOpen(false);
                                  },
                                  className: "text-[9px] font-black uppercase text-[#5B3DF5] hover:underline bg-transparent border-none cursor-pointer",
                                  children: "Restore"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleDuplicateVersion(version),
                                  className: "text-[9px] font-black uppercase text-slate-500 hover:text-slate-705 hover:underline bg-transparent border-none cursor-pointer",
                                  children: "Duplicate"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    const newName = prompt("Enter new version name:", version.name || `Version ${version.version}`);
                                    if (newName !== null) handleRenameVersion(idx, newName);
                                  },
                                  className: "text-[9px] font-black uppercase text-slate-500 hover:text-slate-705 hover:underline bg-transparent border-none cursor-pointer",
                                  children: "Rename"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    setCompareVersion(version);
                                    setSidebarOpen(false);
                                  },
                                  className: "text-[9px] font-black uppercase text-indigo-600 hover:underline bg-transparent border-none cursor-pointer ml-auto",
                                  children: "Compare"
                                }
                              )
                            ] })
                          ]
                        },
                        idx
                      )) }) })
                    ] })
                  ) : (
                    /* AI Copilot View */
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full overflow-hidden select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0 select-none", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-[#5B3DF5]" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white", children: "AI Copilot" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setSidebarOpen(false),
                            className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 border-b dark:border-zinc-800 select-none shrink-0", children: ["Assistant", "Suggestions", "Case Laws", "Citations"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            setActiveCopilotTab(tab);
                            localStorage.setItem("@aisa_copilot_active_tab", tab);
                          },
                          className: `py-3 text-[8.5px] font-black uppercase tracking-wider text-center border-b-2 border-t-0 border-x-0 cursor-pointer ${activeCopilotTab === tab ? "border-[#5B3DF5] text-[#5B3DF5] bg-[#5B3DF5]/[0.01]" : "border-transparent text-slate-500 hover:text-slate-700"}`,
                          children: tab.split(" ")[0]
                        },
                        tab
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar text-left select-none pb-12", children: [
                        activeCopilotTab === "Assistant" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "AI Copilot Quick Actions" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: [
                              { label: "Improve Draft Structure", act: "Improve headings, logical alignment, flow, and remove repetitions", title: "Improve Draft Structure" },
                              { label: "Strengthen Legal Arguments", act: "Identify weaker logic, introduce statutory provisions, and add legal reasoning", title: "Strengthen Arguments" },
                              { label: "Check Legal Grammar", act: "Review punctuation, syntax alignment, and style while keeping terminology", title: "Check Legal Grammar" },
                              { label: "Simplify Language complexity", act: "Simplify complex legal English expressions to clear, plain professional English", title: "Simplify Language" },
                              { label: "Verify Legal Citations", act: "Validate statutory codes, rules, Acts, and highlight incorrect citations", title: "Verify Legal Citations" }
                            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                type: "button",
                                disabled: isCopilotRefining,
                                onClick: () => {
                                  handleCopilotQuickAction(item.title, item.act);
                                  setSidebarOpen(false);
                                },
                                className: `w-full flex items-center gap-2 p-2.5 border border-slate-100 dark:border-zinc-800 rounded-xl text-[10.5px] font-bold text-left transition-colors bg-slate-50/50 dark:bg-black/10 cursor-pointer select-none border-none ${isCopilotRefining ? "opacity-50 cursor-not-allowed" : "hover:border-[#5B3DF5] hover:bg-indigo-50/20"}`,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5B3DF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 11 }) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
                                ]
                              },
                              item.label
                            )) })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800 space-y-3 border-none", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Document Insights" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[10px] text-slate-600 dark:text-slate-400 font-semibold", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimated Pages" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                  Math.ceil(wordCount / 350),
                                  " Page(s)"
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Word Count" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                  wordCount,
                                  " Words"
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reading Time" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                  readingTime,
                                  " min"
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        activeCopilotTab === "Suggestions" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "AI Audit & Recommendations" }),
                          [
                            { title: "Formatting Spacing Alignment", desc: "Heading gaps conform to standard court guidelines." },
                            { title: "Check Witness Annotation", desc: "No witness information is present. We recommend adding details of at least one witness." },
                            { title: "Check Missing Annexures", desc: "No annexure files mapped. We recommend appending proof index sheets." }
                          ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black text-slate-800 dark:text-white uppercase", children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-slate-550 leading-relaxed font-semibold", children: item.desc }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  handleCopilotQuickAction(item.title, `Apply recommendation: ${item.desc}`);
                                  setSidebarOpen(false);
                                },
                                className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer",
                                children: "Apply"
                              }
                            )
                          ] }, idx))
                        ] }) }),
                        activeCopilotTab === "Case Laws" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "Relevant Precedents" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                            { title: "State of Maharashtra v. Rajesh (2021)", desc: "Precedent defining requirements for Station House Officer FIR registrations under section 154." },
                            { title: "Karan Singh v. Union of India (2018)", desc: "Supreme Court guidelines regarding delays in filing first information reports." },
                            { title: "Lalita Kumari v. Govt. of U.P. (2014)", desc: "Constitution Bench guidelines regarding mandatory registration of FIR under Section 154 CrPC." }
                          ].map((law) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase text-slate-800 dark:text-white", children: law.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-550 leading-relaxed font-semibold", children: law.desc }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  handleInsertCitation(`[Citation Precedent: ${law.title}]`);
                                  setSidebarOpen(false);
                                },
                                className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer mt-1",
                                children: "+ Insert Citation"
                              }
                            )
                          ] }, law.title)) })
                        ] }),
                        activeCopilotTab === "Citations" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-[#5B3DF5]", children: "Citations & Annotations" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                            { title: "Section 154, CrPC", desc: "Information in cognizable cases." },
                            { title: "Section 420, IPC", desc: "Cheating and dishonestly inducing delivery of property." },
                            { title: "Section 34, IPC", desc: "Acts done by several persons in furtherance of common intention." }
                          ].map((cit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase text-slate-800 dark:text-white", children: cit.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-550 leading-relaxed font-semibold", children: cit.desc }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  handleInsertCitation(`[Citation Code: ${cit.title}]`);
                                  setSidebarOpen(false);
                                },
                                className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer mt-1",
                                children: "+ Insert Citation"
                              }
                            )
                          ] }, cit.title)) })
                        ] })
                      ] })
                    ] })
                  ) })
                ] })
              ] })
            ) : (
              /* Desktop Sidebar */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border-l border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#111726] flex flex-col shrink-0 relative select-none",
                  style: { width: `${sidebarWidth}px` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        onMouseDown: startResizing,
                        className: "absolute left-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-[#5B3DF5]/30 active:bg-[#5B3DF5] transition-colors z-50 select-none"
                      }
                    ),
                    showVersionHistory ? (
                      /* Version History View */
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full overflow-hidden select-none", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16, className: "text-[#5B3DF5]" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white", children: "Version History" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  setSidebarOpen(false);
                                  localStorage.setItem("@aisa_copilot_sidebar_open", "false");
                                },
                                className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                                title: "Collapse Sidebar",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => setShowVersionHistory(false),
                                className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                                title: "Close History",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-left font-sans select-none", children: draftVersionHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-xs text-slate-400 font-medium", children: "No version logs found. Manual and auto-saves will show here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: draftVersionHistory.map((version, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 hover:border-[#5B3DF5] transition-colors relative",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-[#5B3DF5]", children: [
                                  "v",
                                  version.version
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest", children: version.timestamp })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[11px] font-extrabold text-slate-705 dark:text-slate-300 truncate pr-6", children: version.name || `Version ${version.version}` }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 mb-2", children: [
                                "By: ",
                                version.user || "You"
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2.5 mt-2 pt-2 border-t border-slate-100 dark:border-zinc-800/50", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => handleRestoreVersion(version),
                                    className: "text-[9px] font-black uppercase text-[#5B3DF5] hover:underline bg-transparent border-none cursor-pointer",
                                    children: "Restore"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => handleDuplicateVersion(version),
                                    className: "text-[9px] font-black uppercase text-slate-500 hover:text-slate-705 hover:underline bg-transparent border-none cursor-pointer",
                                    children: "Duplicate"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => {
                                      const newName = prompt("Enter new version name:", version.name || `Version ${version.version}`);
                                      if (newName !== null) handleRenameVersion(idx, newName);
                                    },
                                    className: "text-[9px] font-black uppercase text-slate-500 hover:text-slate-705 hover:underline bg-transparent border-none cursor-pointer",
                                    children: "Rename"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => setCompareVersion(version),
                                    className: "text-[9px] font-black uppercase text-indigo-600 hover:underline bg-transparent border-none cursor-pointer ml-auto",
                                    children: "Compare"
                                  }
                                )
                              ] })
                            ]
                          },
                          idx
                        )) }) })
                      ] })
                    ) : (
                      /* AI Copilot View */
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full overflow-hidden select-none", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0 select-none", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-[#5B3DF5]" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white", children: "AI Copilot" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                setSidebarOpen(false);
                                localStorage.setItem("@aisa_copilot_sidebar_open", "false");
                              },
                              className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                              title: "Collapse Sidebar",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 border-b dark:border-zinc-800 select-none shrink-0", children: ["Assistant", "Suggestions", "Case Laws", "Citations"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              setActiveCopilotTab(tab);
                              localStorage.setItem("@aisa_copilot_active_tab", tab);
                            },
                            className: `py-3 text-[8.5px] font-black uppercase tracking-wider text-center border-b-2 border-t-0 border-x-0 cursor-pointer ${activeCopilotTab === tab ? "border-[#5B3DF5] text-[#5B3DF5] bg-[#5B3DF5]/[0.01]" : "border-transparent text-slate-500 hover:text-slate-700"}`,
                            children: tab.split(" ")[0]
                          },
                          tab
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar text-left select-none animate-fadeIn", children: [
                          activeCopilotTab === "Assistant" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "AI Copilot Quick Actions" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: [
                                { label: "Improve Draft Structure", act: "Improve headings, logical alignment, flow, and remove repetitions", title: "Improve Draft Structure" },
                                { label: "Strengthen Legal Arguments", act: "Identify weaker logic, introduce statutory provisions, and add legal reasoning", title: "Strengthen Arguments" },
                                { label: "Check Legal Grammar", act: "Review punctuation, syntax alignment, and style while keeping terminology", title: "Check Legal Grammar" },
                                { label: "Simplify Language complexity", act: "Simplify complex legal English expressions to clear, plain professional English", title: "Simplify Language" },
                                { label: "Verify Legal Citations", act: "Validate statutory codes, rules, Acts, and highlight incorrect citations", title: "Verify Legal Citations" }
                              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "button",
                                {
                                  type: "button",
                                  disabled: isCopilotRefining,
                                  onClick: () => handleCopilotQuickAction(item.title, item.act),
                                  className: `w-full flex items-center gap-2 p-2.5 border border-slate-100 dark:border-zinc-800 rounded-xl text-[10.5px] font-bold text-left transition-colors bg-slate-50/50 dark:bg-black/10 cursor-pointer select-none border-none ${isCopilotRefining ? "opacity-50 cursor-not-allowed" : "hover:border-[#5B3DF5] hover:bg-indigo-50/20"}`,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5B3DF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 11 }) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
                                  ]
                                },
                                item.label
                              )) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-2xl bg-slate-50 dark:bg-black/10 dark:border-zinc-800 space-y-3 border-none", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-500", children: "Document Insights" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[10px] text-slate-600 dark:text-slate-400 font-semibold", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Estimated Pages" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                    Math.ceil(wordCount / 350),
                                    " Page(s)"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Word Count" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                    wordCount,
                                    " Words"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reading Time" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 dark:text-white", children: [
                                    readingTime,
                                    " min"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Confidence" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-650", children: "98%" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] font-black uppercase text-slate-500", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Draft Readiness" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "92%" })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-850 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-500 h-full rounded-full", style: { width: "92%" } }) })
                              ] })
                            ] })
                          ] }),
                          activeCopilotTab === "Suggestions" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "AI Audit & Recommendations" }),
                            [
                              { title: "Formatting Spacing Alignment", desc: "Heading gaps conform to standard court guidelines." },
                              { title: "Check Witness Annotation", desc: "No witness information is present. We recommend adding details of at least one witness." },
                              { title: "Check Missing Annexures", desc: "No annexure files mapped. We recommend appending proof index sheets." }
                            ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black text-slate-800 dark:text-white uppercase", children: item.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-slate-550 leading-relaxed font-semibold", children: item.desc }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleCopilotQuickAction(item.title, `Apply recommendation: ${item.desc}`),
                                  className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer",
                                  children: "Apply"
                                }
                              ) })
                            ] }, idx))
                          ] }) }),
                          activeCopilotTab === "Case Laws" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-slate-455", children: "Relevant Precedents" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                              { title: "State of Maharashtra v. Rajesh (2021)", desc: "Precedent defining requirements for Station House Officer FIR registrations under section 154." },
                              { title: "Karan Singh v. Union of India (2018)", desc: "Supreme Court guidelines regarding delays in filing first information reports." },
                              { title: "Lalita Kumari v. Govt. of U.P. (2014)", desc: "Constitution Bench guidelines regarding mandatory registration of FIR under Section 154 CrPC." }
                            ].map((law) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase text-slate-800 dark:text-white", children: law.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-550 leading-relaxed font-semibold", children: law.desc }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleInsertCitation(`[Citation Precedent: ${law.title}]`),
                                  className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer mt-1",
                                  children: "+ Insert Citation"
                                }
                              )
                            ] }, law.title)) })
                          ] }),
                          activeCopilotTab === "Citations" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[9px] font-black uppercase tracking-widest text-[#5B3DF5]", children: "Citations & Annotations" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                              { title: "Section 154, CrPC", desc: "Information in cognizable cases." },
                              { title: "Section 420, IPC", desc: "Cheating and dishonestly inducing delivery of property." },
                              { title: "Section 34, IPC", desc: "Acts done by several persons in furtherance of common intention." }
                            ].map((cit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-black/10 space-y-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] font-black uppercase text-slate-800 dark:text-white", children: cit.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-550 leading-relaxed font-semibold", children: cit.desc }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleInsertCitation(`[Citation Code: ${cit.title}]`),
                                  className: "text-[9px] font-black uppercase text-[#5B3DF5] border-none bg-transparent cursor-pointer mt-1",
                                  children: "+ Insert Citation"
                                }
                              )
                            ] }, cit.title)) })
                          ] })
                        ] })
                      ] })
                    )
                  ]
                }
              )
            )),
            copilotComparison && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[130000] p-6 select-none animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#111726] border border-slate-205 dark:border-zinc-800 rounded-2xl w-full max-w-5xl h-[80vh] flex flex-col shadow-2xl overflow-hidden text-left font-sans select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider", children: "AI Copilot: Review Proposed Changes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5", children: [
                    "Action Refined: ",
                    copilotComparison.action
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCopilotComparison(null),
                    className: "p-1 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                    title: "Close View",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden min-h-0 divide-x divide-slate-200 dark:divide-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 text-[10px] font-black uppercase text-slate-405 tracking-wider shrink-0 select-none", children: "Original Draft" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[12px] leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap select-text", children: copilotComparison.original })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-indigo-50/50 dark:bg-indigo-950/20 border-b border-indigo-100 dark:border-zinc-800 text-[10px] font-black uppercase text-[#5B3DF5] tracking-wider shrink-0 select-none flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Refined Draft" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-[8px] rounded font-extrabold uppercase", children: "AI Proposed" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[12px] leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-wrap select-text bg-indigo-50/[0.01]", children: copilotComparison.refined })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-black/10 flex items-center justify-end gap-3 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCopilotComparison(null);
                      zt.error("✕ Proposed AI changes rejected.");
                    },
                    className: "px-4 py-2 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-350 rounded-xl text-xs font-black uppercase tracking-wider transition-colors border-none bg-transparent cursor-pointer",
                    children: "Reject"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCopilotComparison(null);
                      zt.error("✕ Proposed AI changes rejected.");
                    },
                    className: "px-4 py-2 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-350 rounded-xl text-xs font-black uppercase tracking-wider transition-colors border-none bg-transparent cursor-pointer",
                    children: "Reject All"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setFinalDraft(copilotComparison.refined);
                      setCopilotComparison(null);
                      zt.success("✓ Refined draft applied successfully!");
                    },
                    className: "px-5 py-2.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-sm border-none cursor-pointer",
                    children: "Accept"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setFinalDraft(copilotComparison.refined);
                      setCopilotComparison(null);
                      zt.success("✓ Refined draft applied successfully!");
                    },
                    className: "px-5 py-2.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-sm border-none cursor-pointer",
                    children: "Accept All"
                  }
                )
              ] })
            ] }) }),
            compareVersion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[130000] p-6 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-[#111726] border border-slate-205 dark:border-zinc-800 rounded-2xl w-full max-w-5xl h-[80vh] flex flex-col shadow-2xl overflow-hidden text-left font-sans select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center bg-slate-50 dark:bg-black/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider", children: "Compare Draft Versions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5", children: [
                    "Comparing Historic v",
                    compareVersion.version,
                    " (",
                    compareVersion.name || "Unnamed",
                    ") with Current Workspace"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCompareVersion(null),
                    className: "p-1.5 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex overflow-hidden select-text", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 border-r border-slate-200 dark:border-zinc-800 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-slate-100 dark:bg-black/20 text-[9px] font-black text-slate-500 uppercase tracking-widest border-b dark:border-zinc-800 select-none", children: [
                    "v",
                    compareVersion.version,
                    " Content"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[11pt] leading-[1.6] whitespace-pre-wrap text-black bg-white select-text selection:bg-indigo-200/50", children: compareVersion.content })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 bg-slate-100 dark:bg-black/20 text-[9px] font-black text-[#5B3DF5] uppercase tracking-widest border-b dark:border-zinc-800 select-none", children: "Current Workspace Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto font-serif text-[11pt] leading-[1.6] whitespace-pre-wrap text-black bg-white select-text selection:bg-indigo-200/50", children: finalDraft })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-slate-200 dark:border-zinc-800 flex justify-end gap-3 bg-slate-50 dark:bg-black/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCompareVersion(null),
                    className: "px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 border-none cursor-pointer",
                    children: "Close"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      handleRestoreVersion(compareVersion);
                      setCompareVersion(null);
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#5B3DF5] text-white hover:bg-indigo-700 border-none cursor-pointer",
                    children: [
                      "Restore v",
                      compareVersion.version
                    ]
                  }
                )
              ] })
            ] }) })
          ] })
        ] });
      })(),
      step === "SAVED" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-5 pb-10 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white tracking-tight", children: "Saved Documents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-0.5", children: "Explicitly saved advocate templates and litigation files" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/20 rounded-lg uppercase tracking-wider", children: [
            savedDrafts.length,
            " documents"
          ] })
        ] }),
        loadingDrafts ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" }) }) : savedDrafts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 bg-white dark:bg-[#1A2540] rounded-3xl border border-dashed border-slate-200 dark:border-white/5 shadow-sm text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 40, className: "text-slate-300 dark:text-zinc-700 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-slate-400", children: "No saved documents found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-350 dark:text-zinc-650 mt-1", children: "Open a template, generate your draft, and click Save." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: savedDrafts.map((draft) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 18 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-slate-900 dark:text-white truncate", children: draft.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200/20 rounded-full uppercase tracking-wider", children: ((_a = DRAFT_TEMPLATES[draft.title]) == null ? void 0 : _a.category) || "GENERAL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/20 rounded-full uppercase tracking-wider", children: "Saved" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mt-2 text-[11px] font-semibold text-slate-500", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 mr-1.5", children: "Linked Case:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 dark:text-slate-300 font-bold", children: draft.caseName || "No Case Linked" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 mr-1.5", children: "Modified:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-700 dark:text-slate-300", children: [
                          new Date(draft.date).toLocaleDateString("en-IN"),
                          " • ",
                          new Date(draft.date).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 mr-1.5", children: "Language:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 dark:text-slate-300 capitalize", children: draft.mode === "hindi" ? "Hindi" : "English" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 mr-1.5", children: "Version:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-700 dark:text-slate-300 font-bold", children: [
                          "v",
                          draft.version || 1
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 self-end md:self-center shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        setFinalDraft(draft.content);
                        setOriginalGeneratedDraft(draft.content);
                        setSelectedType(draft.title);
                        setTemplate(DRAFT_TEMPLATES[draft.title] || null);
                        setFormData(draft.formData || {});
                        setLinkedCaseId(draft.linkedCaseId || "");
                        if (draft.version) setDraftVersion(draft.version);
                        if (draft.mode) setGenerationMode(draft.mode);
                        if (draft.exportHistory) setExportHistory(draft.exportHistory);
                        if (draft.generationTimestamp) setGenerationTimestamp(draft.generationTimestamp);
                        else setGenerationTimestamp(new Date(draft.date).toLocaleString("en-IN"));
                        const phs = extractPlaceholders(draft.content);
                        setDraftPlaceholders(phs);
                        const phValues = {};
                        phs.forEach((p) => {
                          let matchedVal = "";
                          Object.entries(draft.formData || {}).forEach(([k, v]) => {
                            const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, "");
                            const cleanP = p.key.toLowerCase().replace(/[^a-z0-9]/g, "");
                            if (cleanK === cleanP || cleanK.includes(cleanP) || cleanP.includes(cleanK)) {
                              matchedVal = v;
                            }
                          });
                          phValues[p.key] = matchedVal || "";
                        });
                        setPlaceholderValues(phValues);
                        setStep("PREVIEW");
                        zt.success(`✓ Loaded "${draft.title}"`);
                      },
                      className: "px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase shadow-sm",
                      children: "Open"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        const newName = prompt("Enter new draft name:", draft.title);
                        if (newName && newName.trim()) {
                          const caseId = draft.linkedCaseId;
                          if (caseId) {
                            const targetCase = allProjects.find((p) => p._id === caseId);
                            if (targetCase && Array.isArray(targetCase.drafts)) {
                              const updatedDrafts = targetCase.drafts.map((d) => {
                                if (d.id === draft.id) {
                                  return { ...d, type: newName.trim(), lastModified: (/* @__PURE__ */ new Date()).toISOString() };
                                }
                                return d;
                              });
                              apiService.updateProject(caseId, { ...targetCase, drafts: updatedDrafts }).then((res) => {
                                if (onUpdateCase) onUpdateCase(res);
                                zt.success("Document renamed");
                                loadSavedDrafts();
                              }).catch(() => zt.error("Failed to rename document"));
                            }
                          }
                        }
                      },
                      className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded-xl transition-all",
                      title: "Rename",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 13 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: async () => {
                        const caseId = draft.linkedCaseId;
                        if (caseId) {
                          const targetCase = allProjects.find((p) => p._id === caseId);
                          if (targetCase && Array.isArray(targetCase.drafts)) {
                            const dupId = `DRAFT-DUP-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
                            const dupItem = {
                              id: dupId,
                              type: `${draft.title} (Copy)`,
                              content: draft.content,
                              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                              mode: draft.mode,
                              formData: draft.formData,
                              version: 1,
                              exportHistory: [],
                              generationTimestamp: (/* @__PURE__ */ new Date()).toLocaleString("en-IN"),
                              lastModified: (/* @__PURE__ */ new Date()).toISOString()
                            };
                            try {
                              const response = await apiService.updateProject(caseId, {
                                ...targetCase,
                                drafts: [dupItem, ...targetCase.drafts]
                              });
                              if (onUpdateCase) onUpdateCase(response);
                              zt.success("Document duplicated");
                              loadSavedDrafts();
                            } catch {
                              zt.error("Failed to duplicate");
                            }
                          }
                        }
                      },
                      className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 rounded-xl transition-all",
                      title: "Duplicate",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleDeleteDraft(draft.id),
                      className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all",
                      title: "Delete",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                    }
                  )
                ] })
              ]
            },
            draft.id
          );
        }) })
      ] }),
      step === "HISTORY" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 pb-10 w-full text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-slate-900 dark:text-white tracking-tight", children: "Draft History" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-0.5", children: "Automated compliance trail and version logs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black px-2.5 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border border-amber-200/20 rounded-lg uppercase tracking-wider", children: [
            draftHistory.length,
            " logs recorded"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-2xl px-4 py-2.5 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "text-slate-400 mr-2 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search history by draft name, case, category...",
                value: historySearchQuery,
                onChange: (e) => setHistorySearchQuery(e.target.value),
                className: "w-full bg-transparent border-none p-0 focus:ring-0 text-xs font-bold text-slate-800 dark:text-white outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full shrink-0", children: ["All", "Today", "Yesterday", "Last 7 Days", "Last 30 Days"].map((filter) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setHistoryTimeFilter(filter),
              className: `px-3 py-1.5 rounded-xl text-[10px] font-bold border whitespace-nowrap transition-all ${historyTimeFilter === filter ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-sm" : "bg-white dark:bg-[#1A2540] border-slate-200 dark:border-white/5 text-slate-650 dark:text-slate-400 hover:bg-slate-50"}`,
              children: filter
            },
            filter
          )) })
        ] }),
        filteredHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 bg-white dark:bg-[#1A2540] rounded-3xl border border-dashed border-slate-200 dark:border-white/5 shadow-sm text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 40, className: "text-slate-300 dark:text-zinc-700 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-slate-400", children: "No drafting history entries found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 dark:text-zinc-600 mt-1", children: "Select a template above to generate a new legal draft." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[700px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50/50 dark:bg-[#131C31]/50 border-b border-slate-100 dark:border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[250px]", children: "Document Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[130px]", children: "Linked Case" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[120px]", children: "Date / Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[80px]", children: "Version" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[80px]", children: "Language" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[85px] text-center", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-4 w-[70px] text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100 dark:divide-white/5", children: filteredHistory.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-indigo-50/30 dark:hover:bg-indigo-950/10 transition-colors group cursor-pointer",
              onClick: () => handleLoadHistoryItem(item),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0 group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-800 dark:text-white truncate block", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mt-0.5", children: item.category })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-600 dark:text-slate-350 truncate block max-w-[120px]", children: item.caseName }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-700 dark:text-slate-300 block", children: item.generatedDate }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-medium text-slate-400 block mt-0.5", children: [
                    item.generatedTime,
                    " (Edited ",
                    item.lastEdited,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200/20 rounded-full uppercase tracking-wider", children: [
                  "v",
                  item.version
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-600 dark:text-slate-350 block", children: item.language }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${item.status === "Saved" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`, children: item.status }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleDeleteHistoryItem(item.id),
                    className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all",
                    title: "Delete log",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                  }
                ) })
              ]
            },
            item.id
          )) })
        ] }) }) })
      ] })
    ] }),
    savedNotice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setSavedNotice(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 28, strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white", children: "Draft Saved!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-1", children: "Your document is saved and available offline." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-4 space-y-1.5 text-left bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-xl text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "ID:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold dark:text-white", children: savedNotice.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Saved:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold dark:text-white", children: [
              savedNotice.date,
              " • ",
              savedNotice.time
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSavedNotice(null), className: "flex-1 py-2.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-white rounded-xl text-xs font-black uppercase", children: "Close" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSavedNotice(null);
            setStep("SAVED");
          }, className: "flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase", children: "View All" })
        ] })
      ] })
    ] }),
    isProtectedEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[125000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: () => setIsProtectedEditing(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-[#1A2540] border border-slate-200 dark:border-white/5 rounded-3xl p-6 max-w-lg w-full shadow-2xl flex flex-col max-h-[85vh] text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-slate-150 dark:border-white/5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Protected Editor — Placeholders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsProtectedEditing(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16, className: "text-slate-500" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto py-4 space-y-4 pr-1 custom-scrollbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl text-[10px] text-indigo-650 dark:text-indigo-400 font-bold leading-normal", children: "ℹ️ Legal formatting and structural text are protected. You can modify the extracted document placeholders below." }),
          draftPlaceholders.length > 0 ? draftPlaceholders.map((ph) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9.5px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ph.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 border border-indigo-200/20", children: "Placeholder" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: placeholderValues[ph.key] || "",
                  onChange: (e) => {
                    setPlaceholderValues((prev) => ({ ...prev, [ph.key]: e.target.value }));
                    setDraftPlaceholders((prevPhs) => prevPhs.map((item) => item.key === ph.key ? { ...item, value: e.target.value } : item));
                  },
                  placeholder: `Enter ${ph.label}...`,
                  className: "w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white dark:bg-[#141E35] border-slate-200 dark:border-white/8 text-slate-800 dark:text-white"
                }
              )
            ] }, ph.key);
          }) : template == null ? void 0 : template.fields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9.5px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400", children: [
              field.label,
              field.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-0.5", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FieldInput,
              {
                field,
                value: formData[field.key] || "",
                onChange: (val) => {
                  setFormData((prev) => ({ ...prev, [field.key]: val }));
                },
                filled: true,
                country: formData.country,
                state: formData.state,
                district: formData.district
              }
            )
          ] }, field.key))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 pt-4 border-t border-slate-150 dark:border-white/5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsProtectedEditing(false),
              className: "flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-white rounded-xl text-xs font-black uppercase",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                const updatedDraft = replacePlaceholders(originalGeneratedDraft, placeholderValues);
                setFinalDraft(updatedDraft);
                setIsProtectedEditing(false);
                zt.success("✓ Draft updated successfully!");
              },
              className: "flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Save & Update" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    isShareModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[125000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: () => setIsShareModalOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-[#0B1020] border border-slate-200 dark:border-white/5 rounded-3xl max-w-md w-full shadow-2xl flex flex-col overflow-hidden text-left animate-menu-appear p-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 16, className: "text-indigo-600 dark:text-indigo-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Share Document" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-1", children: "This document can be shared securely." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsShareModalOpen(false),
              className: "p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg text-slate-405 dark:text-slate-400 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-150 dark:border-white/5 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-[#131C31]/5 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setShareAccordion(shareAccordion === "link" ? "" : "link"),
                className: "w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: 14, className: "text-indigo-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Link" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: shareAccordion === "link" ? "▲" : "▼" })
                ]
              }
            ),
            shareAccordion === "link" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-150 dark:border-white/5 bg-white dark:bg-[#0B1020] space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Link Expiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: linkExpiry,
                    onChange: (e) => setLinkExpiry(e.target.value),
                    className: "w-full px-3 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "24h", children: "24 Hours Expiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "7d", children: "7 Days Expiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30d", children: "30 Days Expiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "never", children: "Never Expires" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    const randomToken = Math.random().toString(36).substring(2, 9).toUpperCase();
                    const secureUrl = `https://workspace.ailegal.in/share/secure/${randomToken}`;
                    navigator.clipboard.writeText(secureUrl);
                    setShareLogs((prev) => [
                      {
                        id: Date.now(),
                        recipient: "Public Link",
                        method: "Secure Link",
                        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
                        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
                        details: `Expiry: ${linkExpiry}`
                      },
                      ...prev
                    ]);
                    zt.success("✓ Secure link copied successfully.");
                    setIsShareModalOpen(false);
                  },
                  className: "w-full py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Link" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-150 dark:border-white/5 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-[#131C31]/5 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setShareAccordion(shareAccordion === "email" ? "" : "email"),
                className: "w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-indigo-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: shareAccordion === "email" ? "▲" : "▼" })
                ]
              }
            ),
            shareAccordion === "email" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-150 dark:border-white/5 bg-white dark:bg-[#0B1020] space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Recipient Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "client@firm.com",
                    value: emailRecipient,
                    onChange: (e) => setEmailRecipient(e.target.value),
                    className: "w-full px-3 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Subject" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: emailSubject,
                    onChange: (e) => setEmailSubject(e.target.value),
                    className: "w-full px-3 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Message Body" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    rows: 3,
                    value: emailMessage,
                    onChange: (e) => setEmailMessage(e.target.value),
                    className: "w-full px-3 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500 resize-none font-sans"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-2.5 bg-slate-50 dark:bg-zinc-900/40 rounded-xl border border-slate-100 dark:border-white/5 text-[11px] font-semibold text-slate-600 dark:text-slate-350", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: emailAttachPDF, onChange: (e) => setEmailAttachPDF(e.target.checked), className: "rounded text-indigo-650" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: emailAttachDOCX, onChange: (e) => setEmailAttachDOCX(e.target.checked), className: "rounded text-indigo-650" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DOCX" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: emailAttachTXT, onChange: (e) => setEmailAttachTXT(e.target.checked), className: "rounded text-indigo-650" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TXT" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    if (!emailRecipient) {
                      zt.error("Enter recipient email");
                      return;
                    }
                    setShareLogs((prev) => [
                      {
                        id: Date.now(),
                        recipient: emailRecipient,
                        method: "Email",
                        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
                        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
                        details: `Sent attachments`
                      },
                      ...prev
                    ]);
                    zt.success(`✓ Draft Email dispatched to ${emailRecipient}`);
                    setIsShareModalOpen(false);
                  },
                  className: "w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 13 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send Email" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-150 dark:border-white/5 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-[#131C31]/5 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setShareAccordion(shareAccordion === "download" ? "" : "download"),
                className: "w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14, className: "text-indigo-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: shareAccordion === "download" ? "▲" : "▼" })
                ]
              }
            ),
            shareAccordion === "download" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-slate-150 dark:border-white/5 bg-white dark:bg-[#0B1020] grid grid-cols-3 gap-2", children: [
              { id: "PDF", label: "PDF Draft", action: handleExportPDF, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 }) },
              { id: "DOCX", label: "DOCX Word", action: handleExportDOCX, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }) },
              { id: "TXT", label: "TXT Plain", action: handleDownload, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }) }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  item.action();
                  setShareLogs((prev) => [
                    {
                      id: Date.now(),
                      recipient: "Self",
                      method: "Download",
                      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
                      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
                      details: `Format: ${item.id}`
                    },
                    ...prev
                  ]);
                  setIsShareModalOpen(false);
                },
                className: "py-3 px-2 border border-slate-200 dark:border-white/5 hover:border-indigo-500 bg-slate-50 dark:bg-zinc-900 rounded-xl hover:bg-indigo-50/20 text-slate-805 dark:text-white transition-all flex flex-col items-center justify-center gap-1",
                children: [
                  item.icon,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider", children: item.label })
                ]
              },
              item.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-150 dark:border-white/5 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-[#131C31]/5 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setShareAccordion(shareAccordion === "permissions" ? "" : "permissions"),
                className: "w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-white",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14, className: "text-indigo-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Permissions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: shareAccordion === "permissions" ? "▲" : "▼" })
                ]
              }
            ),
            shareAccordion === "permissions" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-150 dark:border-white/5 bg-white dark:bg-[#0B1020] space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 bg-slate-50 dark:bg-zinc-900/40 p-3 rounded-2xl border border-slate-100 dark:border-white/5 text-xs font-semibold text-slate-650 dark:text-slate-350 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer py-1 border-b border-slate-150/45 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: secReadOnly,
                      onChange: (e) => setSecReadOnly(e.target.checked),
                      className: "rounded text-indigo-650 focus:ring-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 dark:text-white leading-tight", children: "View Only Access" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium mt-0.5", children: "Viewer cannot edit standard draft content" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer py-1 border-b border-slate-150/45 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: !secDisableDownload,
                      onChange: (e) => setSecDisableDownload(!e.target.checked),
                      className: "rounded text-indigo-650 focus:ring-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 dark:text-white leading-tight", children: "Allow Download Option" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium mt-0.5", children: "Let viewers download standard PDF, DOCX, and TXT files" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer py-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: secPasswordProtect,
                      onChange: (e) => setSecPasswordProtect(e.target.checked),
                      className: "rounded text-indigo-650 focus:ring-0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 dark:text-white leading-tight", children: "Password Protect Document" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium mt-0.5", children: "Require password verification before access is granted" })
                  ] })
                ] })
              ] }),
              secPasswordProtect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Security Gate Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "password",
                    placeholder: "Enter custom gate password...",
                    value: secPassword,
                    onChange: (e) => setSecPassword(e.target.value),
                    className: "w-full px-3 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-white/5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsShareModalOpen(false),
              className: "px-4 py-2 border border-slate-250 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-black uppercase transition-all",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                if (shareAccordion === "email") {
                  if (!emailRecipient) {
                    zt.error("Enter recipient email");
                    return;
                  }
                  zt.success(`✓ Document email sent to ${emailRecipient}`);
                } else if (shareAccordion === "permissions") {
                  zt.success("✓ Access permissions configuration updated");
                } else if (shareAccordion === "link") {
                  const randomToken = Math.random().toString(36).substring(2, 9).toUpperCase();
                  navigator.clipboard.writeText(`https://workspace.ailegal.in/share/secure/${randomToken}`);
                  zt.success("✓ Link copied successfully.");
                } else {
                  zt.success("✓ Document share configuration applied.");
                }
                setIsShareModalOpen(false);
              },
              className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase shadow-md shadow-indigo-500/20 transition-all",
              children: "Share"
            }
          )
        ] })
      ] })
    ] }),
    isMobilePreviewMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[125000] flex items-end justify-center select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-xs", onClick: () => setIsMobilePreviewMenuOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-[#111726] border-t border-slate-200 dark:border-zinc-800 rounded-t-3xl w-full max-h-[80vh] shadow-2xl flex flex-col z-10 overflow-hidden animate-slideUp", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-slate-350 dark:bg-zinc-700 rounded-full mx-auto my-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 pt-2 space-y-4 overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b pb-2 dark:border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider", children: "Document Actions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setIsMobilePreviewMenuOpen(false);
                  setShowVersionHistory(true);
                  setSidebarOpen(true);
                },
                className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-zinc-800/40 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-200 border-none bg-transparent cursor-pointer text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16, className: "text-[#5B3DF5]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Version History" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setIsMobilePreviewMenuOpen(false);
                  setIsProtectedEditing(true);
                },
                className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-zinc-800/40 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-200 border-none bg-transparent cursor-pointer text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 16, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit Placeholders" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setIsMobilePreviewMenuOpen(false);
                  setIsShareModalOpen(true);
                },
                className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-zinc-800/40 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-200 border-none bg-transparent cursor-pointer text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 16, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Share Document" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setIsMobilePreviewMenuOpen(false);
                  handlePrint();
                },
                className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-zinc-800/40 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-200 border-none bg-transparent cursor-pointer text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Print Document" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 dark:border-zinc-800 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 mb-2", children: "Export formats" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
              { label: "PDF", action: handleExportPDF, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 16 }) },
              { label: "DOCX", action: handleExportDOCX, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 16 }) },
              { label: "TXT", action: handleDownload, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }) }
            ].map((fmt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setIsMobilePreviewMenuOpen(false);
                  fmt.action();
                },
                className: "py-3 px-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/60 rounded-xl hover:border-[#5B3DF5] hover:bg-indigo-50/20 text-slate-800 dark:text-slate-200 transition-all flex flex-col items-center justify-center gap-1 border-none cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#5B3DF5]", children: fmt.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black", children: fmt.label })
                ]
              },
              fmt.label
            )) })
          ] })
        ] })
      ] })
    ] }),
    isDeleteModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[125000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: () => setIsDeleteModalOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-red-105 dark:bg-red-950/30 rounded-full flex items-center justify-center text-red-600 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white", children: "Delete Draft?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-medium mt-1", children: "This action cannot be undone." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsDeleteModalOpen(false),
              className: "flex-1 py-2.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-white rounded-xl text-xs font-black uppercase",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setFinalDraft("");
                setStep("SELECT");
                setIsDeleteModalOpen(false);
                zt.success("Active draft deleted");
              },
              className: "flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase",
              children: "Delete"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
export {
  DraftMaker as default
};
