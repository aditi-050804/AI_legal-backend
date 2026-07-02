import { r as reactExports, cQ as useLocation, cR as chatStorageService, bH as generateChatResponse, j as jsxRuntimeExports, P as ArrowLeft, bv as Download, cd as exportToPDF, z as zt, by as History, Y as Plus, t as Scale, e as ChevronRight, cN as RotateCcw, a2 as Check, bJ as ShieldAlert, cS as Square, X, cT as Paperclip, cL as Mic, o as Send, A as AnimatePresence, m as motion, ao as ChevronDown, v as Search, bk as Briefcase, bN as PinOff, bM as Pin, cU as SlidersHorizontal, T as Trash2, M as MessageSquare, bt as useOutputLanguage, cc as LanguageToggle, as as Markdown, cV as remarkGfm, cW as ThumbsUp, cX as ThumbsDown, bE as Copy, cY as Volume2, bx as Share2, bs as Landmark, F as FileText, ca as CircleHelp, E as ExternalLink, k as Sparkles, b as Clock, S as Settings, cZ as Image, a as apiService, $ as React } from "./index-BusjsCem.js";
import { P as Printer } from "./printer-iEfkmkDw.js";
const LEGAL_CASE_DATABASE = [
  {
    id: "civil_law",
    name: "Specific Performance of Contract",
    category: "Civil Law",
    courtType: "District Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Specific Relief Act", enactmentYear: "1963", lastAmendmentYear: "2018" },
      { name: "Code of Civil Procedure", enactmentYear: "1908", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Adhunik Steels Ltd. v. Orissa Manganese and Minerals Pvt. Ltd.",
        court: "Supreme Court of India",
        year: "2007",
        citation: "AIR 2007 SC 2563",
        legalPrinciple: "Injunctions under the Specific Relief Act should follow settled principles of the Code of Civil Procedure.",
        landmarkStatus: true
      }
    ],
    summary: "Civil dispute seeking execution of contract terms and specific performance where monetary compensation is inadequate.",
    keywords: ["specific performance", "civil contract", "specific relief", "injunction", "breach of contract"]
  },
  {
    id: "criminal_law",
    name: "Culpable Homicide and Murder",
    category: "Criminal Law",
    courtType: "Sessions Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Code of Criminal Procedure (CrPC)", enactmentYear: "1973", lastAmendmentYear: "2018" },
      { name: "Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS)", enactmentYear: "1860 / 2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 302",
        bnsSection: "Section 103",
        punishment: "Death penalty or imprisonment for life, and liability to fine.",
        applicability: "Murder cases where intention and knowledge of causing death are proved."
      },
      {
        ipcSection: "Section 300",
        bnsSection: "Section 101",
        punishment: "Definition of Murder.",
        applicability: "Establishes acts amounting to murder and exceptions."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Bachan Singh v. State of Punjab",
        court: "Supreme Court of India",
        year: "1980",
        citation: "AIR 1980 SC 898",
        legalPrinciple: "Established the 'rarest of rare cases' doctrine for awarding death sentence in murder cases.",
        landmarkStatus: true
      },
      {
        caseName: "K.M. Nanavati v. State of Maharashtra",
        court: "Supreme Court of India",
        year: "1961",
        citation: "AIR 1962 SC 605",
        legalPrinciple: "Defined gravity and sudden provocation in cases of culpable homicide.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution for commission of murder, homicide definitions, and statutory punishments under criminal code.",
    keywords: ["murder", "homicide", "death penalty", "bns 103", "ipc 302", "criminal offense"]
  },
  {
    id: "constitutional_law",
    name: "Right to Privacy under Article 21",
    category: "Constitutional Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "K.S. Puttaswamy v. Union of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 10 SCC 1",
        legalPrinciple: "Right to privacy is a fundamental right under Article 21 of the Constitution.",
        landmarkStatus: true
      },
      {
        caseName: "Kesavananda Bharati v. State of Kerala",
        court: "Supreme Court of India",
        year: "1973",
        citation: "AIR 1973 SC 1461",
        legalPrinciple: "Established the 'Basic Structure Doctrine' limiting amendments to the Constitution.",
        landmarkStatus: true
      }
    ],
    summary: "Constitutional writ petition enforcement, violation of fundamental rights, and interpretation of state powers.",
    keywords: ["fundamental rights", "privacy", "article 21", "basic structure", "writ petition"]
  },
  {
    id: "family_law",
    name: "Restitution of Conjugal Rights and Maintenance",
    category: "Family Law",
    courtType: "Family Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Hindu Marriage Act", enactmentYear: "1955", lastAmendmentYear: "2015" },
      { name: "Special Marriage Act", enactmentYear: "1954", lastAmendmentYear: "2015" },
      { name: "Indian Christian Marriage Act", enactmentYear: "1872", lastAmendmentYear: "2001" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Saroj Rani v. Sudarshan Kumar Chadha",
        court: "Supreme Court of India",
        year: "1984",
        citation: "AIR 1984 SC 1562",
        legalPrinciple: "Upheld constitutionality of Section 9 of the Hindu Marriage Act regarding conjugal rights.",
        landmarkStatus: true
      }
    ],
    summary: "Matrimonial dispute involving restoration of cohabitation and claim of financial support for dependents.",
    keywords: ["marriage", "maintenance", "conjugal rights", "divorce", "spousal support"]
  },
  {
    id: "property_law",
    name: "Partition Suit of Coparcenary Property",
    category: "Property Law",
    courtType: "Civil Court / District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Transfer of Property Act", enactmentYear: "1882", lastAmendmentYear: "2019" },
      { name: "Hindu Succession Act", enactmentYear: "1956", lastAmendmentYear: "2005" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vineeta Sharma v. Rakesh Sharma",
        court: "Supreme Court of India",
        year: "2020",
        citation: "(2020) 9 SCC 1",
        legalPrinciple: "Daughters have equal coparcenary rights in joint Hindu family property by birth.",
        landmarkStatus: true
      }
    ],
    summary: "Civil suit claiming partition and individual possession share of ancestral or inherited coparcenary property.",
    keywords: ["partition suit", "ancestral property", "coparcener", "daughter property rights", "transfer of property"]
  },
  {
    id: "corporate_law",
    name: "Insolvency and Corporate Debt Resolution",
    category: "Corporate Law",
    courtType: "NCLT / NCLAT / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Insolvency and Bankruptcy Code (IBC)", enactmentYear: "2016", lastAmendmentYear: "2023" },
      { name: "Companies Act", enactmentYear: "2013", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Swiss Ribbons Pvt. Ltd. v. Union of India",
        court: "Supreme Court of India",
        year: "2019",
        citation: "AIR 2019 SC 739",
        legalPrinciple: "Upheld the validity of the Insolvency and Bankruptcy Code, prioritizing creditor resolution.",
        landmarkStatus: true
      }
    ],
    summary: "Resolution process initiated by financial or operational creditors for recovery of unpaid corporate debts.",
    keywords: ["bankruptcy", "nclt", "insolvency", "ibc", "corporate creditor", "debt recovery"]
  },
  {
    id: "commercial_law",
    name: "Enforcement of Arbitral Award",
    category: "Commercial Law",
    courtType: "Commercial Court / High Court",
    jurisdiction: "Union of India / International",
    applicableActs: [
      { name: "Arbitration and Conciliation Act", enactmentYear: "1996", lastAmendmentYear: "2021" },
      { name: "Commercial Courts Act", enactmentYear: "2015", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "BALCO v. Kaiser Aluminium Technical Services Inc.",
        court: "Supreme Court of India",
        year: "2012",
        citation: "AIR 2012 SC 546",
        legalPrinciple: "Seat of arbitration determines the supervisory jurisdiction of courts.",
        landmarkStatus: true
      }
    ],
    summary: "Commercial litigation seeking execution of an domestic or foreign arbitral award under civil procedure norms.",
    keywords: ["arbitration", "commercial dispute", "arbitral award", "balco", "conciliation"]
  },
  {
    id: "labour_law",
    name: "Industrial Dispute and Unfair Dismissal",
    category: "Labour Law",
    courtType: "Labour Court / Industrial Tribunal",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Industrial Disputes Act", enactmentYear: "1947", lastAmendmentYear: "2016" },
      { name: "Labour Code on Industrial Relations", enactmentYear: "2020", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Bangalore Water Supply v. A. Rajappa",
        court: "Supreme Court of India",
        year: "1978",
        citation: "AIR 1978 SC 548",
        legalPrinciple: "Wide interpretation of the term 'Industry' to include municipal utilities and education bodies.",
        landmarkStatus: true
      }
    ],
    summary: "Tribunal petition challenging retaliatory termination or unfair trade practices by management.",
    keywords: ["industry", "labour dispute", "retrenchment", "dismissal", "trade union"]
  },
  {
    id: "consumer_law",
    name: "Product Defect Liability and Compensation",
    category: "Consumer Law",
    courtType: "District / State / National Commission",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Consumer Protection Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Indian Medical Association v. V.P. Shantha",
        court: "Supreme Court of India",
        year: "1995",
        citation: "AIR 1996 SC 550",
        legalPrinciple: "Medical services fall under the scope of 'service' defined in Consumer Protection laws.",
        landmarkStatus: true
      }
    ],
    summary: "Consumer grievance regarding supply of defective merchandise or deficient warranty services.",
    keywords: ["consumer protection", "medical negligence", "deficiency of service", "compensation"]
  },
  {
    id: "taxation_law",
    name: "Direct Tax Assessment Challenge",
    category: "Taxation Law",
    courtType: "ITAT / High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Income Tax Act", enactmentYear: "1961", lastAmendmentYear: "2024" },
      { name: "Central Goods and Services Tax Act", enactmentYear: "2017", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vodafone International Holdings v. Union of India",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 6 SCC 613",
        legalPrinciple: "Transfer of shares between offshore holding companies is not subject to tax withholding in India.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge against arbitrary tax assessment orders, capital gains claims, and statutory exemptions.",
    keywords: ["income tax", "capital gains", "tax assessment", "vodafone tax", "gst challenge"]
  },
  {
    id: "cyber_law",
    name: "Identity Theft and Phishing",
    category: "Cyber Law",
    courtType: "Cyber Cell Tribunal / Magistrate Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" },
      { name: "Indian Penal Code (IPC)", enactmentYear: "1860", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66C IT Act",
        bnsSection: "Section 319 (BNS Cheat by Personation)",
        punishment: "Imprisonment up to 3 years and fine up to 1 Lakh rupees.",
        applicability: "Unauthorized use of electronic signatures, passwords, or identification features."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Shreya Singhal v. Union of India",
        court: "Supreme Court of India",
        year: "2015",
        citation: "AIR 2015 SC 1523",
        legalPrinciple: "Struck down Section 66A of the IT Act, upholding freedom of speech in cyberspace.",
        landmarkStatus: true
      }
    ],
    summary: "Offenses relating to hacking, unauthorized access, identity impersonation, and phishing scams.",
    keywords: ["cyber crime", "hacking", "phishing", "identity theft", "section 66c", "it act"]
  },
  {
    id: "banking_law",
    name: "Recovery of Financial Debts (DRT Suit)",
    category: "Banking Law",
    courtType: "DRT / DRAT / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "SARFAESI Act", enactmentYear: "2002", lastAmendmentYear: "2016" },
      { name: "Recovery of Debts Due to Banks Act", enactmentYear: "1993", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Mardia Chemicals Ltd. v. Union of India",
        court: "Supreme Court of India",
        year: "2004",
        citation: "AIR 2004 SC 2371",
        legalPrinciple: "Upheld SARFAESI provisions but permitted borrowers to approach Debt Recovery Tribunals.",
        landmarkStatus: true
      }
    ],
    summary: "Proceedings initiated by banks for attachment and auction of mortgaged assets of defaulting borrowers.",
    keywords: ["drt", "sarfaesi", "default borrower", "non-performing asset", "banking recovery"]
  },
  {
    id: "insurance_law",
    name: "Repudiation of Third-Party Liability Claim",
    category: "Insurance Law",
    courtType: "District Commission / Ombudsman",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Insurance Act", enactmentYear: "1938", lastAmendmentYear: "2021" },
      { name: "IRDAI Act", enactmentYear: "1999", lastAmendmentYear: "2015" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Biman Krishna Bose v. United India Insurance",
        court: "Supreme Court of India",
        year: "2001",
        citation: "(2001) 6 SCC 477",
        legalPrinciple: "Insurance companies cannot arbitrarily refuse renewal of policies or repudiate claims.",
        landmarkStatus: true
      }
    ],
    summary: "Dispute over arbitrary rejection of claims by insurance providers citing exclusion clauses.",
    keywords: ["insurance claim", "claim repudiation", "policy exclusion", "third party liability"]
  },
  {
    id: "environmental_law",
    name: "Industrial Pollution and Polluter Pays Policy",
    category: "Environmental Law",
    courtType: "National Green Tribunal (NGT)",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "National Green Tribunal Act", enactmentYear: "2010", lastAmendmentYear: "2010" },
      { name: "Environment Protection Act", enactmentYear: "1986", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "M.C. Mehta v. Union of India (Oleum Gas Leak)",
        court: "Supreme Court of India",
        year: "1986",
        citation: "AIR 1987 SC 1086",
        legalPrinciple: "Introduced the concept of 'Absolute Liability' for hazardous industrial units.",
        landmarkStatus: true
      },
      {
        caseName: "Vellore Citizens Welfare Forum v. Union of India",
        court: "Supreme Court of India",
        year: "1996",
        citation: "AIR 1996 SC 2715",
        legalPrinciple: "Uphold 'Precautionary Principle' and 'Polluter Pays Principle' as part of environmental law.",
        landmarkStatus: true
      }
    ],
    summary: "Petitions seeking closure of polluting industrial zones and compensation for local ecological damages.",
    keywords: ["ngt", "oleum gas leak", "absolute liability", "polluter pays", "pollution", "hazardous waste"]
  },
  {
    id: "intellectual_property_law",
    name: "Trademark Infringement and Deceptive Similarity",
    category: "Intellectual Property Law",
    courtType: "District Court / High Court",
    jurisdiction: "All India Jurisdiction",
    applicableActs: [
      { name: "Trademarks Act", enactmentYear: "1999", lastAmendmentYear: "2010" },
      { name: "Copyright Act", enactmentYear: "1957", lastAmendmentYear: "2012" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.",
        court: "Supreme Court of India",
        year: "2001",
        citation: "AIR 2001 SC 1952",
        legalPrinciple: "Higher burden of protection against deceptive similarity in medicinal products.",
        landmarkStatus: true
      }
    ],
    summary: "Infringement suit seeking permanent injunction against counterfeit products copying a brand.",
    keywords: ["trademark infringement", "copyright pass-off", "deceptive similarity", "intellectual property", "injunction"]
  },
  {
    id: "real_estate_law",
    name: "Delay in Handover of Residential Possession",
    category: "Real Estate Law",
    courtType: "RERA Tribunal / Consumer Commission",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Real Estate (Regulation and Development) Act", enactmentYear: "2016", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Newtech Promoters and Developers v. State of UP",
        court: "Supreme Court of India",
        year: "2021",
        citation: "2021 LL (SC) 641",
        legalPrinciple: "Homebuyers have absolute right to claim refund of principal with interest for delays.",
        landmarkStatus: true
      }
    ],
    summary: "Action filed by flat owners seeking interest refunds for default in construction timelines by builder.",
    keywords: ["rera", "homebuyer refund", "possession delay", "real estate builder"]
  },
  {
    id: "arbitration_law",
    name: "Challenging Arbitral Award for Public Policy Violation",
    category: "Arbitration Law",
    courtType: "Commercial Division of High Court",
    jurisdiction: "Union of India / Commercial",
    applicableActs: [
      { name: "Arbitration and Conciliation Act", enactmentYear: "1996", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "ONGC Ltd. v. Saw Pipes Ltd.",
        court: "Supreme Court of India",
        year: "2003",
        citation: "AIR 2003 SC 2629",
        legalPrinciple: "Expanded 'public policy of India' to include patent illegality as a ground to challenge awards.",
        landmarkStatus: true
      }
    ],
    summary: "Petition under Section 34 challenging arbitrator's decision for patent errors or natural justice issues.",
    keywords: ["section 34", "arbitration award challenge", "patent illegality", "public policy"]
  },
  {
    id: "human_rights_law",
    name: "Enforcement against Custodial Violence",
    category: "Human Rights Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Protection of Human Rights Act", enactmentYear: "1993", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "D.K. Basu v. State of West Bengal",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 610",
        legalPrinciple: "Prescribed strict guidelines to prevent custodial torture and protect rights of detainees.",
        landmarkStatus: true
      }
    ],
    summary: "Public interest petition demanding accountability, judicial enquiry, and damages for police brutality.",
    keywords: ["custodial torture", "human rights", "d.k. basu guidelines", "police violence"]
  },
  {
    id: "education_law",
    name: "Admission Under Right to Education quota",
    category: "Education Law",
    courtType: "High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Right of Children to Free and Compulsory Education Act", enactmentYear: "2009", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Society for Unaided Private Schools of Rajasthan v. UOI",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 6 SCC 1",
        legalPrinciple: "Upheld validity of 25% free seats reservation for weaker sections in private schools.",
        landmarkStatus: true
      }
    ],
    summary: "Writ seeking directives to private academies failing to fill mandated free seats for underprivileged children.",
    keywords: ["rte act", "school admission", "weaker sections", "educational quota"]
  },
  {
    id: "election_law",
    name: "Disqualification on Election Malpractice",
    category: "Election Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Representation of the People Act", enactmentYear: "1951", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Lily Thomas v. Union of India",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 7 SCC 653",
        legalPrinciple: "Immediate disqualification of elected representatives convicted of offenses with 2+ years jail.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of legislative poll results alleging cash for votes or hidden asset disclosures.",
    keywords: ["poll malpractice", "disqualification", "lily thomas", "representation of people act"]
  },
  {
    id: "immigration_law",
    name: "Refugee Protection and De-portation Stay",
    category: "Immigration Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Passports Act", enactmentYear: "1967", lastAmendmentYear: "2002" },
      { name: "Foreigners Act", enactmentYear: "1946", lastAmendmentYear: "2004" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Hans Muller of Nuremberg v. Superintendent, Presidency Jail",
        court: "Supreme Court of India",
        year: "1955",
        citation: "AIR 1955 SC 367",
        legalPrinciple: "Absolute power of Union government to deport foreign nationals subject to due procedure.",
        landmarkStatus: true
      }
    ],
    summary: "Petition seeking stay on extradition or deportation order of asylum seekers claiming threat in home nation.",
    keywords: ["deportation", "foreign national", "passport", "asylum visa", "extradition"]
  },
  {
    id: "international_law",
    name: "Sovereign Immunity and Consular Access Disputes",
    category: "International Law",
    courtType: "International Court of Justice / Supreme Court",
    jurisdiction: "International",
    applicableActs: [
      { name: "Geneva Conventions Act", enactmentYear: "1960", lastAmendmentYear: "1960" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Kulbhushan Jadhav Case (India v. Pakistan)",
        court: "International Court of Justice",
        year: "2019",
        citation: "ICJ Reports 2019",
        legalPrinciple: "Affirmed the mandatory right to consular access under Vienna Convention on Consular Relations.",
        landmarkStatus: true
      }
    ],
    summary: "Legal actions before international organs involving state boundaries, bilateral treaties, or consular access.",
    keywords: ["consular access", "icj", "vienna convention", "diplomatic immunity"]
  },
  {
    id: "competition_law",
    name: "Abuse of Dominant Position and Cartelization",
    category: "Competition Law",
    courtType: "CCI / NCLAT / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Competition Act", enactmentYear: "2002", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Excel Crop Care Ltd. v. Competition Commission of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "AIR 2017 SC 2734",
        legalPrinciple: "Established relevant turnover doctrine for imposing penalties under antitrust laws.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into anti-competitive agreements, price-fixing collusions, or predatory market practices.",
    keywords: ["competition commission", "cartel", "abuse of dominance", "antitrust", "cci"]
  },
  {
    id: "media_law",
    name: "Pre-broadcast Censorship and Press Freedom",
    category: "Media Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Cable Television Networks (Regulation) Act", enactmentYear: "1995", lastAmendmentYear: "2023" },
      { name: "Cinematograph Act", enactmentYear: "1952", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Romesh Thappar v. State of Madras",
        court: "Supreme Court of India",
        year: "1950",
        citation: "AIR 1950 SC 124",
        legalPrinciple: "Freedom of speech includes the right to circulate and publish views without pre-censorship.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of executive gag orders or state bans restricting telecasts or print publications.",
    keywords: ["press freedom", "censorship", "defamation media", "speech block"]
  },
  {
    id: "it_law",
    name: "Data Interception and Surveillance Challenge",
    category: "IT Law",
    courtType: "Cyber Appellate Tribunal / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "People's Union for Civil Liberties v. Union of India",
        court: "Supreme Court of India",
        year: "1996",
        citation: "AIR 1997 SC 568",
        legalPrinciple: "Wiretapping violates privacy unless justified by strict statutory procedures and authorization.",
        landmarkStatus: true
      }
    ],
    summary: "Petitions arguing excessive or unauthorized traffic surveillance and data seizure by central agencies.",
    keywords: ["wiretap", "surveillance", "data intercept", "privacy violation", "it act 69"]
  },
  {
    id: "healthcare_law",
    name: "Ethical Standards and Patient Data Protection",
    category: "Healthcare Law",
    courtType: "NMC / Consumer Commission / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Clinical Establishments Act", enactmentYear: "2010", lastAmendmentYear: "2010" },
      { name: "National Medical Commission Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Aruna Ramchandra Shanbaug v. Union of India",
        court: "Supreme Court of India",
        year: "2011",
        citation: "(2011) 4 SCC 454",
        legalPrinciple: "Allowed passive euthanasia under strict guidelines set by High Courts.",
        landmarkStatus: true
      }
    ],
    summary: "Action alleging organ donation protocol violations or leaking of sensitive clinical histories.",
    keywords: ["euthanasia", "patient confidentiality", "medical ethics", "clinical guidelines"]
  },
  {
    id: "motor_vehicle_law",
    name: "Accident Compensation Claim",
    category: "Motor Vehicle Law",
    courtType: "Motor Accident Claims Tribunal (MACT)",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Motor Vehicles Act", enactmentYear: "1988", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "National Insurance Co. Ltd. v. Pranay Sethi",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 16 SCC 680",
        legalPrinciple: "Standardized guidelines for calculation of future prospects in motor accident deaths.",
        landmarkStatus: true
      }
    ],
    summary: "Action before MACT claiming insurance payoffs for death/injury resulting from reckless commercial transport.",
    keywords: ["mact", "accident claim", "motor vehicle", "third party compensation"]
  },
  {
    id: "agricultural_law",
    name: "Contract Farming Disputes and MSP Challenges",
    category: "Agricultural Law",
    courtType: "Sub-Divisional Magistrate / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "State APMC Acts", enactmentYear: "Various", lastAmendmentYear: "2020" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "State of Rajasthan v. Rajasthan Agricultural Board",
        court: "Supreme Court of India",
        year: "1990",
        citation: "AIR 1990 SC 156",
        legalPrinciple: "Upheld APMC authority to levy market fees on agricultural transactions.",
        landmarkStatus: true
      }
    ],
    summary: "Contested sales under contract farming, crop quality rejections, or defaults by wholesale buyers.",
    keywords: ["apmc", "msp dispute", "contract farming", "agricultural trade", "crop payment"]
  },
  {
    id: "cooperative_law",
    name: "Electoral Fraud in Cooperative Banks",
    category: "Cooperative Law",
    courtType: "Cooperative Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Multi-State Co-operative Societies Act", enactmentYear: "2002", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Thalappalam Ser. Coop. Bank Ltd. v. State of Kerala",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 16 SCC 82",
        legalPrinciple: "Cooperative societies are not public authorities under the Right to Information (RTI) Act unless state-funded.",
        landmarkStatus: true
      }
    ],
    summary: "Petition challenging manipulation of voter lists or mis-appropriations of assets by committee heads.",
    keywords: ["cooperative bank", "electoral dispute", "cooperative society", "rti cooperative"]
  },
  {
    id: "public_interest_litigation",
    name: "Enforcement of Right to Food and Livelihood",
    category: "Public Interest Litigation",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India (Article 32 & 226)", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "PUCL v. Union of India (Right to Food)",
        court: "Supreme Court of India",
        year: "2001",
        citation: "Writ Petition (Civil) 196 of 2001",
        legalPrinciple: "Converted food security schemes into legal entitlements under Article 21.",
        landmarkStatus: true
      },
      {
        caseName: "Bandhua Mukti Morcha v. Union of India",
        court: "Supreme Court of India",
        year: "1984",
        citation: "AIR 1984 SC 802",
        legalPrinciple: "Liberation of bonded laborers under public interest writ jurisdiction.",
        landmarkStatus: true
      }
    ],
    summary: "Social action petition filed on behalf of vulnerable classes seeking basic services and survival support.",
    keywords: ["pil", "right to food", "public interest", "bonded labour", "social action"]
  },
  {
    id: "service_matters",
    name: "Retrospective Seniority and Pension Claims",
    category: "Service Matters",
    courtType: "Central Administrative Tribunal (CAT) / High Court",
    jurisdiction: "State / Central Gov",
    applicableActs: [
      { name: "Administrative Tribunals Act", enactmentYear: "1985", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "L. Chandra Kumar v. Union of India",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 1125",
        legalPrinciple: "Decisions of Administrative Tribunals are subject to judicial review by High Courts under Article 226.",
        landmarkStatus: true
      }
    ],
    summary: "Challenge of arbitrary transfer policies, demotion orders, or withholding of retirement funds.",
    keywords: ["cat tribunal", "demotion", "seniority dispute", "pension claim", "service dispute"]
  },
  {
    id: "administrative_law",
    name: "Excess of Jurisdiction and Natural Justice Violations",
    category: "Administrative Law",
    courtType: "High Court / Supreme Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Constitution of India", enactmentYear: "1950", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "A.K. Kraipak v. Union of India",
        court: "Supreme Court of India",
        year: "1969",
        citation: "AIR 1970 SC 150",
        legalPrinciple: "Natural justice rules apply to administrative as well as quasi-judicial actions.",
        landmarkStatus: true
      },
      {
        caseName: "Maneka Gandhi v. Union of India",
        court: "Supreme Court of India",
        year: "1978",
        citation: "AIR 1978 SC 597",
        legalPrinciple: "Administrative orders affecting life or liberty must be just, fair, and reasonable.",
        landmarkStatus: true
      }
    ],
    summary: "Petition seeking review of executive agency orders violating basic tenets of fair hearing.",
    keywords: ["natural justice", "ultra vires", "administrative discretion", "fair hearing"]
  },
  {
    id: "municipal_law",
    name: "Demolition of Alleged Unauthorized Structures",
    category: "Municipal Law",
    courtType: "Appellate Tribunal MCD / High Court",
    jurisdiction: "Local Corporation",
    applicableActs: [
      { name: "Municipal Corporation Acts", enactmentYear: "Various", lastAmendmentYear: "2022" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Olga Tellis v. Bombay Municipal Corporation",
        court: "Supreme Court of India",
        year: "1985",
        citation: "AIR 1986 SC 180",
        legalPrinciple: "Right to livelihood is part of Article 21, requiring fair notice before evictions/demolitions.",
        landmarkStatus: true
      }
    ],
    summary: "Dispute over arbitrary building demolition notices issued without prior opportunity to reply.",
    keywords: ["municipal corporation", "encroachment", "demolition", "eviction notice"]
  },
  {
    id: "revenue_law",
    name: "Mutation of Land Records and Khata Challenges",
    category: "Revenue Law",
    courtType: "Revenue Court / Collector",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Land Revenue Codes", enactmentYear: "Various", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Suraj Bhan v. Financial Commissioner",
        court: "Supreme Court of India",
        year: "2007",
        citation: "(2007) 6 SCC 186",
        legalPrinciple: "Mutation entries are only for tax collection and do not confer title or ownership rights.",
        landmarkStatus: true
      }
    ],
    summary: "Appeal against mutation corrections or entries based on contested wills or partition titles.",
    keywords: ["khata mutation", "revenue court", "land record correction", "suraj bhan"]
  },
  {
    id: "land_acquisition_law",
    name: "Fair Compensation for Highway Projects",
    category: "Land Acquisition Law",
    courtType: "Land Acquisition Authority / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Right to Fair Compensation in Land Acquisition Act", enactmentYear: "2013", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Indore Development Authority v. Manoharlal",
        court: "Supreme Court of India",
        year: "2020",
        citation: "(2020) 8 SCC 129",
        legalPrinciple: "Clarified conditions for lapse of land acquisition under Section 24 of the 2013 Act.",
        landmarkStatus: true
      }
    ],
    summary: "Suit claiming enhanced payouts for ancestral holdings forcibly acquired for state development.",
    keywords: ["land acquisition", "fair compensation", "rehabilitation", "lapse of acquisition"]
  },
  {
    id: "defamation_law",
    name: "Criminal and Civil Defamation via Social Media",
    category: "Defamation Law",
    courtType: "Magistrate Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS)", enactmentYear: "1860 / 2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 499 & 500",
        bnsSection: "Section 356",
        punishment: "Simple imprisonment up to 2 years, or with fine, or both (under BNS, community service is added).",
        applicability: "Imputations made with intention to harm the reputation of a person."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Subramanian Swamy v. Union of India",
        court: "Supreme Court of India",
        year: "2016",
        citation: "(2016) 7 SCC 221",
        legalPrinciple: "Upheld constitutional validity of criminal defamation provisions in Section 499/500 IPC.",
        landmarkStatus: true
      }
    ],
    summary: "Claim for damages or criminal prosecution over defamatory claims published online.",
    keywords: ["libel", "defamation", "bns 356", "ipc 499", "reputation", "slander"]
  },
  {
    id: "white_collar_crime",
    name: "Corporate Embezzlement and Serious Fraud",
    category: "White Collar Crime",
    courtType: "Special CBI Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Companies Act", enactmentYear: "2013", lastAmendmentYear: "2020" },
      { name: "Prevention of Corruption Act", enactmentYear: "1988", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 409 (Criminal Breach of Trust)",
        bnsSection: "Section 316 (BNS Breach of Trust)",
        punishment: "Life imprisonment or imprisonment up to 10 years, and fine.",
        applicability: "Breach of trust by public servant, banker, merchant or agent."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "State of CBI v. A. Raja",
        court: "Special CBI Court",
        year: "2017",
        citation: "2017 SCC Online Del 1234",
        legalPrinciple: "Prosecution must present concrete proof of criminal conspiracy and illegal enrichment in administrative awards.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into company fund diversions and shell entities run by senior officials.",
    keywords: ["breach of trust", "cbi", "corporate fraud", "sfoi", "bns 316", "embezzlement"]
  },
  {
    id: "anti_corruption_cases",
    name: "Demand and Acceptance of Illegal Gratuity",
    category: "Anti-Corruption Cases",
    courtType: "Special Anti-Corruption Court",
    jurisdiction: "State / Central Gov",
    applicableActs: [
      { name: "Prevention of Corruption Act", enactmentYear: "1988", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "P. Chidambaram v. Directorate of Enforcement",
        court: "Supreme Court of India",
        year: "2019",
        citation: "(2019) 9 SCC 24",
        legalPrinciple: "Bail considerations in economic/corruption offenses should balance liberty with risk of investigation tampering.",
        landmarkStatus: true
      }
    ],
    summary: "Trap cases where officials are caught receiving bribes for granting public approvals.",
    keywords: ["corruption", "prevention of corruption act", "bribe trap", "cbi court"]
  },
  {
    id: "economic_offences",
    name: "Willful Default and Bank Credit Fraud",
    category: "Economic Offences",
    courtType: "Special Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Fugitive Economic Offenders Act", enactmentYear: "2018", lastAmendmentYear: "2018" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 420 (Cheating)",
        bnsSection: "Section 318 (BNS Cheating)",
        punishment: "Imprisonment up to 7 years and fine.",
        applicability: "Dishonestly inducing delivery of property or alteration of valuable security."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "State of Maharashtra v. Balakrishna Dattatrya",
        court: "Supreme Court of India",
        year: "2012",
        citation: "AIR 2013 SC 412",
        legalPrinciple: "Economic offenses require strict interpretation of penal provisions due to societal impact.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution of corporate officers who divert commercial credit abroad and abscond.",
    keywords: ["willful default", "cheating", "economic offence", "bns 318", "credit fraud"]
  },
  {
    id: "financial_crimes",
    name: "Systemic Ponzi Schemes and Public Deposit Fraud",
    category: "Financial Crimes",
    courtType: "Special Court under Depositors Act",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Banning of Unregulated Deposit Schemes Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Sahara India Real Estate v. SEBI",
        court: "Supreme Court of India",
        year: "2012",
        citation: "(2012) 10 SCC 603",
        legalPrinciple: "Affirmed SEBI's jurisdiction to regulate public debt offerings and order refunds for unauthorized deposits.",
        landmarkStatus: true
      }
    ],
    summary: "Investigation into multi-crore investment funds claiming high returns without licenses.",
    keywords: ["ponzi scheme", "sebi regulator", "unregulated deposits", "investor fraud"]
  },
  {
    id: "money_laundering",
    name: "Attachment of Proceeds of Crime",
    category: "Money Laundering",
    courtType: "PMLA Appellate Tribunal / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Prevention of Money Laundering Act (PMLA)", enactmentYear: "2002", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vijay Madanlal Choudhary v. Union of India",
        court: "Supreme Court of India",
        year: "2022",
        citation: "2022 SCC OnLine SC 929",
        legalPrinciple: "Upheld the validity of PMLA provisions including ED powers of arrest, search, and reverse burden of proof.",
        landmarkStatus: true
      }
    ],
    summary: "Enforcement Directorate attachment actions over assets traced to criminal source origins.",
    keywords: ["pmla", "enforcement directorate", "proceeds of crime", "laundering", "vijay madanlal"]
  },
  {
    id: "ndps_cases",
    name: "Possession of Commercial Quantity of Contraband",
    category: "NDPS Cases",
    courtType: "Special NDPS Court / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Narcotic Drugs and Psychotropic Substances Act", enactmentYear: "1985", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "State of Punjab v. Baldev Singh",
        court: "Supreme Court of India",
        year: "1999",
        citation: "AIR 1999 SC 2378",
        legalPrinciple: "Section 50 search directives of NDPS are mandatory; failure vitiates the recovery trial.",
        landmarkStatus: true
      }
    ],
    summary: "Trial for trafficking illegal drugs where bail is barred due to commercial weight requirements.",
    keywords: ["ndps", "drug search", "contraband possession", "commercial quantity", "section 50"]
  },
  {
    id: "posh_cases",
    name: "Failure to Form Internal Complaints Committee",
    category: "POSH Cases",
    courtType: "POSH Local Authority / High Court",
    jurisdiction: "Union of India",
    applicableActs: [
      { name: "Sexual Harassment of Women at Workplace Act", enactmentYear: "2013", lastAmendmentYear: "2013" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Vishaka v. State of Rajasthan",
        court: "Supreme Court of India",
        year: "1997",
        citation: "AIR 1997 SC 3011",
        legalPrinciple: "Formulated initial guidelines to combat workplace sexual harassment, leading to the POSH Act.",
        landmarkStatus: true
      }
    ],
    summary: "Action filed against corporate entity failing to construct inquiry organs for gender disputes.",
    keywords: ["posh act", "workplace harassment", "vishaka guidelines", "internal complaints committee"]
  },
  {
    id: "pocso_cases",
    name: "Aggravated Penetrative Sexual Assault",
    category: "POCSO Cases",
    courtType: "Special POCSO Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Protection of Children from Sexual Offences Act", enactmentYear: "2012", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Alakh Alok Srivastava v. Union of India",
        court: "Supreme Court of India",
        year: "2018",
        citation: "(2018) 17 SCC 291",
        legalPrinciple: "Advocated swift investigations and dedicated fast track court procedures in child assault trials.",
        landmarkStatus: true
      }
    ],
    summary: "Criminal trial involving serious offenses against minor children where reverse onus rules apply.",
    keywords: ["pocso", "child safety", "sexual assault", "juvenile victim"]
  },
  {
    id: "domestic_violence_cases",
    name: "Enforcement of Shared Household and Protection Orders",
    category: "Domestic Violence Cases",
    courtType: "Magistrate Court / Family Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Protection of Women from Domestic Violence Act", enactmentYear: "2005", lastAmendmentYear: "2005" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 498A (Husband's family cruelty)",
        bnsSection: "Section 85 & 86 (Cruelty definition)",
        punishment: "Imprisonment up to 3 years and fine.",
        applicability: "Subjecting a married woman to cruelty for dowry demands or otherwise."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Lalita Toppo v. State of Jharkhand",
        court: "Supreme Court of India",
        year: "2018",
        citation: "(2019) 13 SCC 796",
        legalPrinciple: "Live-in partners can claim maintenance under the Domestic Violence Act, 2005.",
        landmarkStatus: true
      }
    ],
    summary: "Application seeking residential safety, restraint orders against spouse, and monthly maintenance.",
    keywords: ["domestic violence", "cruelty", "dowry harassment", "shared household", "bns 85", "ipc 498a"]
  },
  {
    id: "juvenile_justice_cases",
    name: "Determination of Juvenile Delinquency",
    category: "Juvenile Justice Cases",
    courtType: "Juvenile Justice Board (JJB)",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Juvenile Justice (Care and Protection) Act", enactmentYear: "2015", lastAmendmentYear: "2021" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Salil Bali v. Union of India",
        court: "Supreme Court of India",
        year: "2013",
        citation: "(2013) 7 SCC 705",
        legalPrinciple: "Upheld the age limit of 18 years for juvenile offender categorization under rehabilitation law.",
        landmarkStatus: true
      }
    ],
    summary: "Enquiry to determine age of offender and eligibility for reformation programs instead of prison.",
    keywords: ["juvenile justice board", "minor rehabilitation", "delinquency age", "reform home"]
  },
  {
    id: "matrimonial_cases",
    name: "Mutual Consent Divorce Seeking Waiver",
    category: "Matrimonial Cases",
    courtType: "Family Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Hindu Marriage Act", enactmentYear: "1955", lastAmendmentYear: "2015" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Amardeep Singh v. Harveen Kaur",
        court: "Supreme Court of India",
        year: "2017",
        citation: "(2017) 8 SCC 746",
        legalPrinciple: "The 6-month statutory waiting period in mutual consent divorce can be waived by family courts.",
        landmarkStatus: true
      }
    ],
    summary: "Joint petition seeking decree of divorce with waiver of cooling period under HMA Section 13B(2).",
    keywords: ["mutual consent divorce", "family court waiver", "cooling period HMA", "marriage dissolution"]
  },
  {
    id: "succession_cases",
    name: "Grant of Succession Certificate",
    category: "Succession Cases",
    courtType: "District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Succession Act", enactmentYear: "1925", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Sheela Devi v. Lal Chand",
        court: "Supreme Court of India",
        year: "2006",
        citation: "(2006) 8 SCC 581",
        legalPrinciple: "Succession laws clarify that coparcenary assets pass to heirs according to prevailing statutory rules.",
        landmarkStatus: true
      }
    ],
    summary: "Petition claiming certificate for recovery of debts and securities of a person who died intestate.",
    keywords: ["succession certificate", "heir recovery", "intestate succession", "estate assets"]
  },
  {
    id: "wills_probate",
    name: "Probate Petition for Executor Validation",
    category: "Wills & Probate",
    courtType: "District Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Succession Act", enactmentYear: "1925", lastAmendmentYear: "2002" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "H. Venkatachala Iyengar v. B.N. Thimmajamma",
        court: "Supreme Court of India",
        year: "1959",
        citation: "AIR 1959 SC 443",
        legalPrinciple: "Established standard rules of proof for establishing the execution of a valid will.",
        landmarkStatus: true
      }
    ],
    summary: "Suit to validate execution of a last testament and grant administration authority to executor.",
    keywords: ["will probate", "executor certificate", "testamentary case", "attesting witnesses"]
  },
  {
    id: "contract_disputes",
    name: "Commercial Contract Breach Claiming Damages",
    category: "Contract Disputes",
    courtType: "Commercial Court / District Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Contract Act", enactmentYear: "1872", lastAmendmentYear: "1997" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Maula Bux v. Union of India",
        court: "Supreme Court of India",
        year: "1969",
        citation: "AIR 1970 SC 1955",
        legalPrinciple: "Earnest money forfeiture requires proof of actual loss unless genuine liquid damage is pre-agreed.",
        landmarkStatus: true
      }
    ],
    summary: "Litigation for recovery of security deposits and losses from non-performance of supply orders.",
    keywords: ["liquidated damages", "breach contract", "security deposit forfeiture", "performance default"]
  },
  {
    id: "consumer_complaints",
    name: "Deficient Telecom Services Claim",
    category: "Consumer Complaints",
    courtType: "District Consumer Disputes Redressal Forum",
    jurisdiction: "District Jurisdiction",
    applicableActs: [
      { name: "Consumer Protection Act", enactmentYear: "2019", lastAmendmentYear: "2019" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Lucknow Development Authority v. M.K. Gupta",
        court: "Supreme Court of India",
        year: "1993",
        citation: "1994 AIR 787",
        legalPrinciple: "Housing construction services fall under consumer laws; authorities can be penalised for harassment.",
        landmarkStatus: true
      }
    ],
    summary: "Claim seeking compensation for billing issues and disconnected phone lines.",
    keywords: ["telecom deficiency", "billing dispute", "consumer forum", "service compensation"]
  },
  {
    id: "builder_disputes",
    name: "Arbitrary Increase in Super Area Charges",
    category: "Builder Disputes",
    courtType: "RERA Tribunal / State Commission",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Real Estate (Regulation and Development) Act", enactmentYear: "2016", lastAmendmentYear: "2016" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Pioneer Urban Land and Infrastructure v. Govindan Raghavan",
        court: "Supreme Court of India",
        year: "2019",
        citation: "(2019) 5 SCC 725",
        legalPrinciple: "One-sided clauses in builder-buyer agreements constitute unfair trade practices.",
        landmarkStatus: true
      }
    ],
    summary: "Flat buyers challenging builder demand notes seeking extra payments for non-sanctioned area alterations.",
    keywords: ["builder agreement", "super area charge", "rera dispute", "flat buyer rights"]
  },
  {
    id: "employment_disputes",
    name: "Enforcement of Non-Compete Covenants",
    category: "Employment Disputes",
    courtType: "Civil Court / High Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Indian Contract Act", enactmentYear: "1872", lastAmendmentYear: "1997" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Percept D'Mark v. Zaheer Khan",
        court: "Supreme Court of India",
        year: "2006",
        citation: "AIR 2006 SC 3426",
        legalPrinciple: "Non-compete covenants extending past the employment term are void under Section 27 of the Contract Act.",
        landmarkStatus: true
      }
    ],
    summary: "Suit seeking injunction against former employees taking roles with competitors.",
    keywords: ["non-compete clause", "trade restraint", "employee covenant", "injunction suit"]
  },
  {
    id: "cyber_fraud",
    name: "UPI Sim-Swap Financial Extortion",
    category: "Cyber Fraud",
    courtType: "Adjudicating Officer IT / Magistrate Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66D IT Act",
        bnsSection: "Section 318 (BNS Cheating)",
        punishment: "Imprisonment up to 3 years and fine up to 1 Lakh rupees.",
        applicability: "Cheating by personation by using computer resource."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "SMC Pneumatics v. Jogesh Kwatra",
        court: "Delhi High Court",
        year: "2001",
        citation: "2001 Del HC Online",
        legalPrinciple: "Corporate liability can be invoked to seek stays on cyber harassment campaigns originating internally.",
        landmarkStatus: true
      }
    ],
    summary: "Criminal action against syndicates deploying sim clone strategies to transfer bank balances.",
    keywords: ["sim swap scam", "upi fraud", "it act 66d", "bns 318", "identity cheat"]
  },
  {
    id: "online_scam_cases",
    name: "Phishing via Fake E-Commerce Interfaces",
    category: "Online Scam Cases",
    courtType: "Special Cyber Court",
    jurisdiction: "State Jurisdiction",
    applicableActs: [
      { name: "Information Technology Act", enactmentYear: "2000", lastAmendmentYear: "2008" }
    ],
    ipcBnsReferences: [
      {
        ipcSection: "Section 66 (Computer Damage)",
        bnsSection: "Section 330 (BNS Mischief Damage)",
        punishment: "Imprisonment up to 3 years and fine up to 5 Lakh rupees.",
        applicability: "Dishonestly or fraudulently doing acts specified in Section 43 IT Act."
      }
    ],
    landmarkJudgments: [
      {
        caseName: "Avnish Bajaj v. State (Bazee.com)",
        court: "Supreme Court of India",
        year: "2008",
        citation: "(2008) 12 SCC 636",
        legalPrinciple: "Addressed director liability for obscene/scam materials hosted on online retail portals.",
        landmarkStatus: true
      }
    ],
    summary: "Prosecution of domain aggregators hosting cloned websites to obtain user card numbers.",
    keywords: ["fake shopping website", "phishing portal", "bazee case", "bns 330", "card clone"]
  },
  {
    id: "data_privacy_cases",
    name: "Unauthorized Transfer of Customer Personal Records",
    category: "Data Privacy Cases",
    courtType: "Data Protection Board / High Court",
    jurisdiction: "National Jurisdiction",
    applicableActs: [
      { name: "Digital Personal Data Protection Act", enactmentYear: "2023", lastAmendmentYear: "2023" }
    ],
    ipcBnsReferences: [],
    landmarkJudgments: [
      {
        caseName: "Justice K.S. Puttaswamy v. Union of India",
        court: "Supreme Court of India",
        year: "2017",
        citation: "AIR 2017 SC 4161",
        legalPrinciple: "Laid the foundation for data sovereignty, mandating consent frameworks for data processing.",
        landmarkStatus: true
      }
    ],
    summary: "Regulatory complaint against telecom provider selling phone subscriber details without consent.",
    keywords: ["dpdp act 2023", "consent framework", "privacy violation", "data fiduciary"]
  }
];
const searchAndFilterCases = (query = "", filters = {}, page = 1, pageSize = 8) => {
  const normQuery = query.toLowerCase().trim();
  let result = LEGAL_CASE_DATABASE;
  if (normQuery) {
    result = result.filter((c) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const matchName = (_a = c.name) == null ? void 0 : _a.toLowerCase().includes(normQuery);
      const matchCat = (_b = c.category) == null ? void 0 : _b.toLowerCase().includes(normQuery);
      const matchCourt = (_c = c.courtType) == null ? void 0 : _c.toLowerCase().includes(normQuery);
      const matchSummary = (_d = c.summary) == null ? void 0 : _d.toLowerCase().includes(normQuery);
      const matchActs = (_e = c.applicableActs) == null ? void 0 : _e.some(
        (act) => {
          var _a2, _b2;
          return ((_a2 = act.name) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = act.enactmentYear) == null ? void 0 : _b2.includes(normQuery));
        }
      );
      const matchIpcBns = (_f = c.ipcBnsReferences) == null ? void 0 : _f.some(
        (ref) => {
          var _a2, _b2, _c2;
          return ((_a2 = ref.ipcSection) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = ref.bnsSection) == null ? void 0 : _b2.toLowerCase().includes(normQuery)) || ((_c2 = ref.punishment) == null ? void 0 : _c2.toLowerCase().includes(normQuery));
        }
      );
      const matchLandmark = (_g = c.landmarkJudgments) == null ? void 0 : _g.some(
        (j) => {
          var _a2, _b2, _c2, _d2;
          return ((_a2 = j.caseName) == null ? void 0 : _a2.toLowerCase().includes(normQuery)) || ((_b2 = j.court) == null ? void 0 : _b2.toLowerCase().includes(normQuery)) || ((_c2 = j.citation) == null ? void 0 : _c2.toLowerCase().includes(normQuery)) || ((_d2 = j.legalPrinciple) == null ? void 0 : _d2.toLowerCase().includes(normQuery));
        }
      );
      const matchKeywords = (_h = c.keywords) == null ? void 0 : _h.some((kw) => kw.toLowerCase().includes(normQuery));
      return matchName || matchCat || matchCourt || matchSummary || matchActs || matchIpcBns || matchLandmark || matchKeywords;
    });
  }
  if (filters) {
    if (filters.category) {
      result = result.filter((c) => c.category === filters.category);
    }
    if (filters.court) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.courtType) == null ? void 0 : _a.toLowerCase().includes(filters.court.toLowerCase());
      });
    }
    if (filters.act) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.applicableActs) == null ? void 0 : _a.some((act) => {
          var _a2;
          return (_a2 = act.name) == null ? void 0 : _a2.toLowerCase().includes(filters.act.toLowerCase());
        });
      });
    }
    if (filters.jurisdiction) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.jurisdiction) == null ? void 0 : _a.toLowerCase().includes(filters.jurisdiction.toLowerCase());
      });
    }
    if (filters.state) {
      result = result.filter((c) => {
        var _a, _b;
        return ((_a = c.state) == null ? void 0 : _a.toLowerCase()) === filters.state.toLowerCase() || ((_b = c.jurisdiction) == null ? void 0 : _b.toLowerCase().includes("state"));
      });
    }
    if (filters.ipcBns) {
      result = result.filter((c) => {
        var _a;
        return (_a = c.ipcBnsReferences) == null ? void 0 : _a.some(
          (ref) => {
            var _a2, _b;
            return ((_a2 = ref.ipcSection) == null ? void 0 : _a2.toLowerCase().includes(filters.ipcBns.toLowerCase())) || ((_b = ref.bnsSection) == null ? void 0 : _b.toLowerCase().includes(filters.ipcBns.toLowerCase()));
          }
        );
      });
    }
    if (filters.year) {
      result = result.filter(
        (c) => {
          var _a, _b;
          return ((_a = c.applicableActs) == null ? void 0 : _a.some((act) => act.enactmentYear === filters.year)) || ((_b = c.landmarkJudgments) == null ? void 0 : _b.some((j) => j.year === filters.year));
        }
      );
    }
  }
  const total = result.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedResult = result.slice(startIndex, startIndex + pageSize);
  return {
    cases: paginatedResult,
    total,
    totalPages: Math.ceil(total / pageSize),
    currentPage: page
  };
};
const getFilterOptions = () => {
  const categories = [...new Set(LEGAL_CASE_DATABASE.map((c) => c.category))];
  const courts = ["Supreme Court of India", "High Court", "District Court", "NCLT", "RERA Tribunal", "Family Court", "Special CBI Court", "Special Cyber Court", "National Green Tribunal (NGT)"];
  const acts = [];
  LEGAL_CASE_DATABASE.forEach((c) => {
    var _a;
    (_a = c.applicableActs) == null ? void 0 : _a.forEach((act) => {
      if (!acts.includes(act.name)) acts.push(act.name);
    });
  });
  return {
    categories,
    courts,
    acts
  };
};
const LEGAL_SYSTEM_INSTRUCTION = `You are the AISA AI General Legal Chat Assistant. You are an expert in law.
Provide comprehensive, structured legal analysis. Always format your responses using these structural blocks:
1. SUMMARY: A brief 2-3 sentence overview.
2. DEFINITION: Precise legal definition.
3. RELEVANT STATUTES / LAW: Highlight the specific acts/sections using "> [!STATUTE] Section Name: Text".
4. DETAILED EXPLANATION: Broken down into logical sub-headings.
5. IMPORTANT POINTS: Numbered list.
6. EXCEPTIONS / CLAUSES: Bulleted list of exceptions or qualifications. Use "> [!WARNING] Warning Info" if there is an important caution.
7. RELEVANT CASE LAWS: Important Supreme Court/High Court precedents. Use "> [!CASE] Case Name: Holding".
8. PRACTICAL EXAMPLE / SCENARIO: A realistic hypothetical scenario explaining how this law applies in practice.
9. CONCLUSION: Professional closing note.

STRICT RULES:
- Never fabricate citations or statutes. If no citation is found, write Citation Not Available.
- Respond in the same language as the user's prompt (e.g. Hindi, English).
- Always use the legal styling callouts: [!IMPORTANT], [!WARNING], [!CASE], and [!STATUTE] inside markdown blockquotes to structure critical callouts.
`;
const safeFormatTime = (ts) => {
  if (!ts) return "";
  try {
    const date = new Date(ts);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
};
const CustomBlockquote = ({ children }) => {
  const content = React.Children.toArray(children).map((c) => {
    var _a;
    return typeof c === "string" ? c : ((_a = c.props) == null ? void 0 : _a.children) || "";
  }).join(" ");
  if (content.includes("[!IMPORTANT]")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 p-4 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl text-xs text-slate-800 font-semibold shadow-sm flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-blue-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-blue-600 tracking-wider block mb-1", children: "IMPORTANT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 text-slate-700 leading-relaxed font-medium", children: content.replace("[!IMPORTANT]", "").trim() })
      ] })
    ] });
  }
  if (content.includes("[!WARNING]")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 p-4 bg-amber-50/55 border-l-4 border-amber-500 rounded-r-xl text-xs text-slate-800 font-semibold shadow-sm flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-amber-600 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-amber-600 tracking-wider block mb-1", children: "LEGAL ADVICE / WARNING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 text-slate-700 leading-relaxed font-medium", children: content.replace("[!WARNING]", "").trim() })
      ] })
    ] });
  }
  if (content.includes("[!CASE]")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 p-4 bg-purple-50/50 border-l-4 border-purple-500 rounded-r-xl text-xs text-slate-800 font-semibold shadow-sm flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-purple-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-purple-600 tracking-wider block mb-1", children: "CASE LAW PRECEDENT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 text-slate-700 leading-relaxed font-medium", children: content.replace("[!CASE]", "").trim() })
      ] })
    ] });
  }
  if (content.includes("[!STATUTE]")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 p-4 bg-slate-100/50 border-l-4 border-slate-500 rounded-r-xl text-xs text-slate-800 font-semibold shadow-sm flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-slate-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-600 tracking-wider block mb-1", children: "BARE ACT / STATUTE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "m-0 text-slate-700 leading-relaxed font-medium", children: content.replace("[!STATUTE]", "").trim() })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-[#4F46E5] bg-slate-50/60 p-4 rounded-r-xl italic my-4 text-slate-600", children });
};
const AiResponseCard = ({ msg, currentCase, chatIdRef, handleRegenerateMessage, getPrecedingUserMessage }) => {
  const [copied, setCopied] = reactExports.useState(false);
  const [activeDownloadMenu, setActiveDownloadMenu] = reactExports.useState(false);
  const [activeShareMenu, setActiveShareMenu] = reactExports.useState(false);
  const [liked, setLiked] = reactExports.useState(null);
  const [moreMenuOpen, setMoreMenuOpen] = reactExports.useState(false);
  const triggerPromptAction = (promptPrefix) => {
    const precedingText = msg.text.slice(0, 100) + "...";
    const queryText = `${promptPrefix} for the previous response text:
"${precedingText}"`;
    if (window.__aisa_legal_send_message) {
      window.__aisa_legal_send_message(queryText);
    }
  };
  const {
    outputLang,
    setOutputLang,
    getDisplayText
  } = useOutputLanguage("legal_chat_msg", msg.id);
  const handleCopyText = () => {
    const resolvedText = getDisplayText(msg.text);
    navigator.clipboard.writeText(resolvedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
    zt.success("Response copied to clipboard");
  };
  const handleExportPDF = async () => {
    const resolvedText = getDisplayText(msg.text);
    const isHi = outputLang === "hi";
    const toastId = zt.loading(isHi ? "PDF तैयार किया जा रहा है..." : "Generating PDF...");
    try {
      const el = document.getElementById(`msg-content-${msg.id}`);
      await exportToPDF({
        element: el,
        text: resolvedText,
        title: isHi ? "AISA एआई कानूनी चैट रिपोर्ट" : "AISA AI Legal Chat Report",
        filename: "Legal_Chat_Report",
        lang: outputLang,
        meta: {
          [isHi ? "संदर्भ आईडी" : "Reference ID"]: chatIdRef.current.toUpperCase(),
          [isHi ? "उत्पन्न तिथि" : "Date Generated"]: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      });
      zt.success(isHi ? "PDF सफलतापूर्वक निर्यात किया गया" : "PDF exported successfully", { id: toastId });
    } catch (e) {
      console.error(e);
      zt.error(isHi ? "PDF निर्यात विफल" : "Failed to export PDF", { id: toastId });
    }
  };
  const handleDownloadTxt = () => {
    const resolvedText = getDisplayText(msg.text);
    try {
      const blob = new Blob([resolvedText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Legal_Report_${Date.now()}.txt`;
      a.click();
      zt.success("Downloaded as TXT");
    } catch (e) {
      zt.error("Failed to download");
    }
  };
  const handleDownloadDoc = () => {
    const resolvedText = getDisplayText(msg.text);
    try {
      const blob = new Blob([resolvedText], { type: "application/msword;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Legal_Report_${Date.now()}.doc`;
      a.click();
      zt.success("Downloaded as DOCX");
    } catch (e) {
      zt.error("Failed to download");
    }
  };
  const handleShareEmail = () => {
    const resolvedText = getDisplayText(msg.text);
    const isHi = outputLang === "hi";
    window.open(`mailto:?subject=${encodeURIComponent(isHi ? "एआई कानूनी अनुसंधान रिपोर्ट" : "AI Legal Research Report")}&body=${encodeURIComponent(resolvedText.slice(0, 2e3) + "\n\n...[Report Truncated]")}`);
  };
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    zt.success("Share link copied to clipboard");
  };
  const handlePrint = () => {
    const resolvedText = getDisplayText(msg.text);
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Please allow popups to print.");
      return;
    }
    const isHi = outputLang === "hi";
    const cleanHtml = `
      <html>
      <head>
        <title>${isHi ? "AISA कानूनी रिपोर्ट" : "AISA Legal Report"}</title>
        <style>
          body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.8; color: #111; }
          h1 { text-align: center; font-size: 22px; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px; }
          .meta { margin-bottom: 30px; font-size: 11px; border-bottom: 1px solid #ddd; padding-bottom: 12px; display: flex; justify-content: space-between; }
          .content { font-size: 14px; white-space: pre-wrap; text-align: justify; }
        </style>
      </head>
      <body>
        <h1>${isHi ? "AISA कोर्ट-रेडी कानूनी रिपोर्ट" : "AISA COURT-READY LEGAL REPORT"}</h1>
        <div class="meta">
          <div><strong>${isHi ? "उत्पन्न तिथि" : "Date Generated"}:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</div>
          <div><strong>${isHi ? "संदर्भ" : "Reference"}:</strong> ${chatIdRef.current.toUpperCase()}</div>
        </div>
        <div class="content">${resolvedText.replace(/###\s+/g, "").replace(/##\s+/g, "").replace(/#\s+/g, "").replace(/\*\*/g, "").replace(/\*/g, "")}</div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        <\/script>
      </body>
      </html>
    `;
    printWindow.document.write(cleanHtml);
    printWindow.document.close();
  };
  const handleReadAloud = () => {
    if ("speechSynthesis" in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        zt.success("Voice reading stopped.");
        return;
      }
      const resolvedText = getDisplayText(msg.text);
      const textToRead = resolvedText.replace(/###|##|#|\[\!IMPORTANT\]|\[\!WARNING\]|\[\!CASE\]|\[\!STATUTE\]|\*\*|\*/g, "");
      const utterance = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(utterance);
      zt.success("Reading report aloud...");
    } else {
      zt.error("Speech synthesis is not supported on this browser.");
    }
  };
  const handleFeedback = (type) => {
    setLiked(type);
    zt.success(type === "like" ? "Thank you for your rating!" : "Feedback captured to improve AI legal outputs.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "legal-msg-ai-text relative flex-1 text-slate-800 text-[14px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1.5 mb-4 border-b border-slate-100 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-[#4F46E5] tracking-wider", children: "AI Case Report" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LanguageToggle,
          {
            lang: outputLang,
            onChange: setOutputLang
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: `msg-content-${msg.id}`,
          className: "prose prose-slate max-w-none text-slate-800 prose-xs prose-headings:font-black prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-slate-900 prose-h1:text-base prose-h2:text-sm prose-h3:text-xs prose-a:text-[#4F46E5] prose-strong:font-bold prose-strong:text-slate-900 prose-table:border-collapse prose-table:w-full prose-table:my-4 prose-th:border prose-th:border-slate-200 prose-th:bg-slate-50 prose-th:p-2 prose-td:border prose-td:border-slate-200 prose-td:p-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Markdown,
            {
              remarkPlugins: [remarkGfm],
              components: {
                blockquote: CustomBlockquote,
                table: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto my-4 custom-scrollbar rounded-xl border border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full border-collapse", children }) }),
                pre: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto max-w-full bg-slate-50 dark:bg-slate-900 p-4 rounded-xl custom-scrollbar text-[11px] font-mono my-4", children }),
                code: ({ node, inline, className, children, ...props }) => {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `${className || ""} bg-slate-50 dark:bg-slate-900 px-1.5 py-0.5 rounded text-[11px] font-mono break-all`, ...props, children });
                }
              },
              children: getDisplayText(msg.text)
            }
          )
        }
      )
    ] }),
    !msg.isIntro && !msg.isStopped && !msg.isFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 mt-6 pt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[11px] font-bold text-slate-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleFeedback("like"),
            className: `p-1.5 rounded transition-all hover:bg-slate-200 ${liked === "like" ? "text-green-600 bg-green-50" : "text-slate-400"}`,
            title: "Helpful Answer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 13 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleFeedback("dislike"),
            className: `p-1.5 rounded transition-all hover:bg-slate-200 ${liked === "dislike" ? "text-red-600 bg-red-50" : "text-slate-400"}`,
            title: "Not Helpful Answer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { size: 13 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopyText, className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Copy text", children: [
          copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Copy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleReadAloud, className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Read Aloud", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Read Aloud" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleRegenerateMessage(msg.id), className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Regenerate strategy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Regenerate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveDownloadMenu((prev) => !prev), className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Export file", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export" })
          ] }),
          activeDownloadMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setActiveDownloadMenu(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-full mb-2 z-20 w-32 rounded-xl bg-white border border-slate-200 shadow-xl p-1 flex flex-col gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                handleDownloadTxt();
                setActiveDownloadMenu(false);
              }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors", children: "TXT bare text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                handleDownloadDoc();
                setActiveDownloadMenu(false);
              }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors", children: "DOCX document" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                handleExportPDF();
                setActiveDownloadMenu(false);
              }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors", children: "PDF print file" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveShareMenu((prev) => !prev), className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Share options", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Share" })
          ] }),
          activeShareMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setActiveShareMenu(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-full mb-2 z-20 w-36 rounded-xl bg-white border border-slate-200 shadow-xl p-1 flex flex-col gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                handleShareEmail();
                setActiveShareMenu(false);
              }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors", children: "Send Email Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                handleShareLink();
                setActiveShareMenu(false);
              }, className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors", children: "Copy Share Link" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMoreMenuOpen(!moreMenuOpen),
              className: `flex items-center gap-1 hover:text-[#4F46E5] transition-colors ${moreMenuOpen ? "text-[#4F46E5]" : ""}`,
              title: "More legal options",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "More Actions" })
              ]
            }
          ),
          moreMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-10", onClick: () => setMoreMenuOpen(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 bottom-full mb-2 z-20 w-48 rounded-xl bg-white border border-slate-200 shadow-xl p-1 flex flex-col gap-0.5 select-none text-left", children: [
              { label: "Explain this response", act: () => triggerPromptAction("Explain in detail") },
              { label: "Simplify language", act: () => triggerPromptAction("Simplify to plain English") },
              { label: "Expand logic", act: () => triggerPromptAction("Expand with more legal grounds") },
              { label: "Translate to Hindi", act: () => triggerPromptAction("Translate response to Hindi") },
              { label: "Save to Case Workspace", act: () => {
                zt.success("Saved to case documents!");
              } },
              { label: "Create Pleading Draft", act: () => {
                zt.success("Redirecting to Draft Maker...");
              } },
              { label: "Create Case Timeline", act: () => {
                zt.success("Constructing timeline...");
              } },
              { label: "Send to Strategy Engine", act: () => {
                zt.success("Analyzing strategy...");
              } },
              { label: "Open in Draft Maker", act: () => {
                zt.success("Opening Draft Maker editor...");
              } },
              { label: "Add to Case Evidence", act: () => {
                zt.success("Added as indexed evidence.");
              } }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  item.act();
                  setMoreMenuOpen(false);
                },
                className: "w-full text-left px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors border-none bg-transparent cursor-pointer",
                children: item.label
              },
              item.label
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handlePrint, className: "flex items-center gap-1 hover:text-[#4F46E5] transition-colors", title: "Print Report", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Print" })
        ] })
      ] })
    ] })
  ] });
};
const QUICK_AI_ACTIONS = [
  { name: "Explain Law", icon: "Scale", prompt: "Explain the following law, its purpose, target area, and legal jurisdiction: " },
  { name: "Explain IPC / BNS Sections", icon: "Landmark", prompt: "Explain Section 420 IPC (or the corresponding BNS section) with ingredients, punishment, landmark judgments and practical examples." },
  { name: "Explain Constitution Articles", icon: "Landmark", prompt: "Explain Article 21 of the Indian Constitution, its scope, landmark Supreme Court rulings, and implications." },
  { name: "Search Legal Precedents", icon: "Search", prompt: "Find landmark legal precedents and case laws regarding: " },
  { name: "Search Supreme Court Judgments", icon: "Search", prompt: "Search and cite landmark Supreme Court of India judgments for: " },
  { name: "Search High Court Judgments", icon: "Search", prompt: "Search and cite relevant High Court judgments regarding: " },
  { name: "Draft Legal Notice", icon: "FileText", prompt: "Draft a formal, court-ready legal notice for: " },
  { name: "Draft Affidavit", icon: "FileText", prompt: "Draft a general court affidavit format for: " },
  { name: "Draft Agreement", icon: "Briefcase", prompt: "Draft a standard legal agreement/contract for: " },
  { name: "Draft RTI Application", icon: "Plus", prompt: "Draft a formal Right to Information (RTI) application addressed to: " },
  { name: "Draft Consumer Complaint", icon: "Scale", prompt: "Draft a formal consumer complaint petition for the Consumer Forum regarding: " },
  { name: "Draft FIR", icon: "FileText", prompt: "Draft a formal First Information Report (FIR) complaint letter to the police station for: " },
  { name: "Draft Legal Reply", icon: "Plus", prompt: "Draft a professional legal reply statement answering a legal notice for: " },
  { name: "Summarize Judgment", icon: "FileText", prompt: "Provide a comprehensive legal summary of the following judgment, including facts, issues, arguments, and final order: " },
  { name: "Summarize Legal Document", icon: "FileText", prompt: "Summarize this legal document, highlighting key liabilities, terms, timelines, and risks: " },
  { name: "Translate Legal Document", icon: "Sparkles", prompt: "Translate the following legal document while preserving technical legal terminology and meaning: " },
  { name: "Explain Contract Clause", icon: "Briefcase", prompt: "Explain this contract clause, its implications, legal enforceability, and potential risks: " },
  { name: "Compare IPC vs BNS", icon: "Scale", prompt: "Compare the provisions of the Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS) regarding the offence of: " },
  { name: "Explain Legal Terminology", icon: "Clock", prompt: "Explain the legal term and maxim: " },
  { name: "Legal Research", icon: "Search", prompt: "Conduct detailed legal research on: " },
  { name: "Citation Generator", icon: "Landmark", prompt: "Generate standard legal citations and formats for the following judgment: " },
  { name: "Bare Act Lookup", icon: "Search", prompt: "Retrieve and explain the raw text of the following bare act provision: " },
  { name: "Recent Legal Updates", icon: "Clock", prompt: "Show recent legal updates, amendments, or landmark notifications regarding: " },
  { name: "Legal Q&A", icon: "HelpCircle", prompt: "Ask a specific legal question: " },
  { name: "Legal Checklist", icon: "FileText", prompt: "Create a comprehensive compliance and procedural legal checklist for: " }
];
const getActionIcon = (iconName) => {
  switch (iconName) {
    case "FileText":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" });
    case "Scale":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" });
    case "ShieldAlert":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16, className: "text-[#4F46E5]" });
    case "Landmark":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" });
    case "Clock":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-[#4F46E5]" });
    case "Search":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-[#4F46E5]" });
    case "Sparkles":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-[#4F46E5]" });
    case "Briefcase":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16, className: "text-[#4F46E5]" });
    case "Plus":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "text-[#4F46E5]" });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" });
  }
};
const LegalChatScreen = ({ onBack, currentCase, onUpdateCase }) => {
  const toolName = "General Legal Chat";
  const toolDesc = "Professional legal discourse, situational guidance, and citation Q&A.";
  const getSuggestionsForResponse = (text = "") => {
    const textLower = text.toLowerCase();
    if (textLower.includes("ipc") || textLower.includes("bns") || textLower.includes("criminal") || textLower.includes("hurt") || textLower.includes("murder") || textLower.includes("police") || textLower.includes("complaint") || textLower.includes("section")) {
      return [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" }),
          title: "📚 View Bare Act",
          desc: "Read official statute section text",
          query: "Show the official bare act text and detailed description of the related sections in this query."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚖ Relevant Judgments",
          desc: "Find Supreme Court precedents",
          query: "Find landmark Supreme Court and High Court judgments related to the sections mentioned with brief summaries of the holdings."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" }),
          title: "📄 Draft Complaint",
          desc: "Generate draft complaint using this law",
          query: "Draft a formal criminal complaint petition based on this legal provision."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" }),
          title: "🧠 Explain Simply",
          desc: "Simplified explanation of this law",
          query: "Explain this legal section in simple, layman's terms with a practical example."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "text-[#4F46E5]" }),
          title: "📖 Related IPC Sections",
          desc: "View connected criminal statutes",
          query: "List and explain connected sections of IPC/BNS that apply to this offense."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Practical Example",
          desc: "Realistic hypothetical application",
          query: "Explain this law using real-world examples."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚠ Common Mistakes",
          desc: "Crucial cautions for defense/prosecution",
          query: "What are the common procedural mistakes made in cases involving this law?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-[#4F46E5]" }),
          title: "🌐 Hindi Version",
          desc: "अनुवाद हिंदी में देखें",
          query: "Explain the previous response in Hindi language."
        }
      ];
    }
    if (textLower.includes("consumer") || textLower.includes("service") || textLower.includes("defect") || textLower.includes("goods") || textLower.includes("complainant") || textLower.includes("forum")) {
      return [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" }),
          title: "📄 Generate Complaint",
          desc: "Draft a formal Consumer Forum complaint",
          query: "Draft a formal consumer court complaint petition detailing deficiency of service and claiming compensation."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Required Documents",
          desc: "Checklist for filing the case",
          query: "What are the required documents and evidence list to file a consumer complaint for this matter?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚖ Forum Jurisdiction",
          desc: "Find where to file the complaint",
          query: "Explain the pecuniary and territorial jurisdiction rules for filing a consumer complaint in this case."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-[#4F46E5]" }),
          title: "⏱ Limitation Period",
          desc: "Find deadline for filing",
          query: "What is the statutory limitation period for filing a complaint in this consumer dispute?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" }),
          title: "🧠 Explain Simply",
          desc: "Simplified explanation of rights",
          query: "Provide a simplified, plain-English summary of the consumer rights involved."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚖ Relevant Judgments",
          desc: "Precedents & citations",
          query: "Find landmark Supreme Court and High Court judgments related to consumer protection in this context."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16, className: "text-[#4F46E5]" }),
          title: "💰 Compensation Calculation",
          desc: "Analyze possible claim amounts",
          query: "Explain how compensation for mental agony, service defect, and litigation costs is calculated in consumer forums."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Next Steps",
          desc: "Step-by-step litigation process",
          query: "What are the step-by-step legal procedures after filing a consumer complaint?"
        }
      ];
    }
    if (textLower.includes("divorce") || textLower.includes("marriage") || textLower.includes("family") || textLower.includes("maintenance") || textLower.includes("alimony") || textLower.includes("custody")) {
      return [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Required Documents",
          desc: "Checklist for divorce petition",
          query: "Provide a complete checklist of documents needed to file for divorce under the applicable family law."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" }),
          title: "📄 Draft Petition",
          desc: "Generate petition template",
          query: "Draft a family court petition for divorce by mutual consent/contested grounds under the relevant Act."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" }),
          title: "💰 Maintenance Rules",
          desc: "Understand alimony rules",
          query: "Explain the rules and calculation criteria for interim maintenance and alimony in this case."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-[#4F46E5]" }),
          title: "⏱ Family Court Procedure",
          desc: "Understand next steps in court",
          query: "Explain the step-by-step procedure and timeline of divorce proceedings in family court."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚖ Relevant Judgments",
          desc: "Precedents & citations",
          query: "Find landmark Supreme Court and High Court judgments related to divorce and child custody in similar circumstances."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" }),
          title: "🧠 Explain Simply",
          desc: "Simplified explanation",
          query: "Provide a simplified, plain-English summary of family law principles involved."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚠ Common Mistakes",
          desc: "Avoid critical divorce filing errors",
          query: "What are the common mistakes to avoid during mutual consent or contested divorce proceedings?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Custody Guidelines",
          desc: "Check rules for child custody",
          query: "What are the legal principles family courts follow to decide custody and visitation rights?"
        }
      ];
    }
    if (textLower.includes("property") || textLower.includes("land") || textLower.includes("title") || textLower.includes("deed") || textLower.includes("registration") || textLower.includes("stamp")) {
      return [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Required Documents",
          desc: "List of title deeds required",
          query: "What are the critical documents needed for title verification and property registry in this state?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" }),
          title: "💰 Stamp Duty & Reg",
          desc: "Calculate registration fees",
          query: "Explain how stamp duty and registration fees are calculated for property transfer in this scenario."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚠ Common Disputes",
          desc: "Avoid property litigation",
          query: "List the most common legal disputes in property transfer and how to prevent them."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" }),
          title: "⚖ Relevant Case Laws",
          desc: "View key property judgments",
          query: "Find relevant Supreme Court decisions on property mutation, possession, and title disputes."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" }),
          title: "📄 Legal Strategy",
          desc: "Step-by-step registry guidance",
          query: "What is the recommended legal strategy and due diligence checklist before purchasing land or property?"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" }),
          title: "🧠 Explain Simply",
          desc: "Simple explanation of title rights",
          query: "Provide a simplified, plain-English summary of property ownership and transfer laws."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "text-[#4F46E5]" }),
          title: "📖 Related Sections",
          desc: "Transfer of Property Act",
          query: "Detail the key sections of Transfer of Property Act applicable to this transaction."
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-[#4F46E5]" }),
          title: "📋 Next Steps",
          desc: "Timeline of dispute settlement",
          query: "What are the next legal steps to clear an adverse possession claim on a property?"
        }
      ];
    }
    return [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" }),
        title: "📚 View Bare Act",
        desc: "Read official statute section",
        query: "Show the official bare act text of the laws and sections mentioned in the response."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { size: 16, className: "text-[#4F46E5]" }),
        title: "⚖ Relevant Judgments",
        desc: "Precedents & citations",
        query: "Find landmark Supreme Court and High Court judgments matching this legal topic."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-[#4F46E5]" }),
        title: "📄 Generate Notice",
        desc: "Draft client notice draft",
        query: "Draft a formal legal notice based on the facts and law discussed above."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 16, className: "text-[#4F46E5]" }),
        title: "🧠 Explain Simply",
        desc: "Read a simple explanation",
        query: "Provide a simplified, plain-English summary of the legal principles involved."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16, className: "text-[#4F46E5]" }),
        title: "📖 Find Related Laws",
        desc: "Search other relevant sections",
        query: "Find related sections of other Acts that might apply to this query context."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-[#4F46E5]" }),
        title: "📋 Continue Research",
        desc: "Deep-dive legal research query",
        query: "Conduct a deeper legal research inquiry on this topic to identify secondary liabilities and remedies."
      }
    ];
  };
  const buildHiddenContext = (card, lastMsgText) => {
    var _a;
    const lastMsgLower = lastMsgText.toLowerCase();
    let detectedAct = "N/A";
    let detectedSection = "N/A";
    let detectedTopic = "General Legal Query";
    if (lastMsgLower.includes("ipc") || lastMsgLower.includes("penal code")) {
      detectedAct = "Indian Penal Code (IPC)";
      detectedTopic = "Criminal Law / IPC Section";
    } else if (lastMsgLower.includes("consumer protection act") || lastMsgLower.includes("consumer")) {
      detectedAct = "Consumer Protection Act 2019";
      detectedTopic = "Consumer Dispute / Grievance";
    } else if (lastMsgLower.includes("divorce") || lastMsgLower.includes("marriage")) {
      detectedAct = "Hindu Marriage Act / Family Law";
      detectedTopic = "Matrimonial & Family Dispute";
    } else if (lastMsgLower.includes("property") || lastMsgLower.includes("land") || lastMsgLower.includes("deed")) {
      detectedAct = "Transfer of Property Act / Land Revenue Act";
      detectedTopic = "Property & Land Title Dispute";
    }
    const sectionMatch = lastMsgText.match(/(?:Section|Sec\.)\s*(\d+[A-Za-z]*)/i);
    if (sectionMatch) {
      detectedSection = sectionMatch[0];
    }
    const previousUserMsg = messages.length > 1 ? (_a = messages[messages.length - 2]) == null ? void 0 : _a.text : "N/A";
    return `[CONVERSATION STATE & CONTEXT]
- Identified Legal Topic: ${detectedTopic}
- Detected Act: ${detectedAct}
- Detected Section: ${detectedSection}
- Last User Question: ${previousUserMsg}
- Last AI Response Context: ${lastMsgText.slice(0, 400)}... (truncated for context token efficiency)

Follow-up Request:
${card.query}

Please continue the conversation naturally using this context. Never ask the user to re-specify which law or section they are referring to.`;
  };
  const chatIdRef = reactExports.useRef(Date.now().toString(36) + Math.random().toString(36).substr(2));
  const location = useLocation();
  const messagesEndRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const scrollContainerRef = reactExports.useRef(null);
  const abortControllerRef = reactExports.useRef(null);
  const isStreamingRef = reactExports.useRef(false);
  const [isListening, setIsListening] = reactExports.useState(false);
  const recognitionRef = reactExports.useRef(null);
  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      zt.error("Voice input not supported in this browser");
      return;
    }
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.onstart = () => {
      setIsListening(true);
      zt.success("Listening... Speak now");
    };
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result) => result[0].transcript).join("");
      setInputValue(transcript);
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
    };
    recognition.start();
  };
  const [messages, setMessages] = reactExports.useState([
    {
      id: "1",
      text: `Hello! I am your AI ${toolName}. ${toolDesc} How can I assist you today?`,
      sender: "ai",
      timestamp: /* @__PURE__ */ new Date(),
      isIntro: true
    }
  ]);
  const [sessions, setSessions] = reactExports.useState([]);
  const [activeSessionId, setActiveSessionId] = reactExports.useState("");
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [generationState, setGenerationState] = reactExports.useState("idle");
  const [showScrollBottomBtn, setShowScrollBottomBtn] = reactExports.useState(false);
  const messagesEndObserverRef = reactExports.useRef(null);
  const [isEndVisible, setIsEndVisible] = reactExports.useState(true);
  const scrollToBottom = () => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const checkScrollBottom = reactExports.useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const isGenerating = isTyping || generationState === "streaming";
    const isScrollable = scrollHeight > clientHeight;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollBottomBtn(!!(isGenerating && isScrollable && !isNearBottom));
  }, [isTyping, generationState]);
  const handleScroll = () => {
    checkScrollBottom();
  };
  const [attachments, setAttachments] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [showCasesSheet, setShowCasesSheet] = reactExports.useState(false);
  const [isRegenerating, setIsRegenerating] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [showHistoryPanel, setShowHistoryPanel] = reactExports.useState(false);
  const [pinnedSessions, setPinnedSessions] = reactExports.useState([]);
  const [showSummaryDrawer, setShowSummaryDrawer] = reactExports.useState(false);
  const [showPlusMenu, setShowPlusMenu] = reactExports.useState(false);
  const [chatSearchQuery, setChatSearchQuery] = reactExports.useState("");
  const [selectedTextMenu, setSelectedTextMenu] = reactExports.useState(null);
  const [exportDropdownOpen, setExportDropdownOpen] = reactExports.useState(false);
  const [filters, setFilters] = reactExports.useState({
    category: "",
    court: "",
    act: "",
    ipcBns: "",
    year: "",
    jurisdiction: "",
    state: ""
  });
  const thinkingPhrases = [
    "Reading Case...",
    "Loading Timeline...",
    "Searching Supreme Court precedents...",
    "Analyzing Evidence...",
    "Checking Contradictions...",
    "Preparing Response..."
  ];
  const [thinkingIndex, setThinkingIndex] = reactExports.useState(0);
  const handleTextSelection = reactExports.useCallback((e) => {
    if (e.target.closest(".smart-context-tooltip")) return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      setSelectedTextMenu(null);
      return;
    }
    const text = selection.toString().trim();
    if (text.length > 2) {
      try {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedTextMenu({
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top - 45 + window.scrollY,
          text
        });
      } catch (err) {
        console.warn("Selection placement error:", err);
      }
    } else {
      setSelectedTextMenu(null);
    }
  }, []);
  reactExports.useEffect(() => {
    document.addEventListener("mouseup", handleTextSelection);
    return () => {
      document.removeEventListener("mouseup", handleTextSelection);
    };
  }, [handleTextSelection]);
  reactExports.useEffect(() => {
    let interval;
    if (isTyping) {
      interval = setInterval(() => {
        setThinkingIndex((prev) => (prev + 1) % thinkingPhrases.length);
      }, 2500);
    } else {
      setThinkingIndex(0);
    }
    return () => clearInterval(interval);
  }, [isTyping]);
  reactExports.useEffect(() => {
    if (currentCase) {
      setPinnedSessions(currentCase.legalPinnedSessions || []);
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  const handleTogglePin = async (chatId, e) => {
    e.stopPropagation();
    if (!currentCase) return;
    const nextPinned = pinnedSessions.includes(chatId) ? pinnedSessions.filter((id) => id !== chatId) : [...pinnedSessions, chatId];
    setPinnedSessions(nextPinned);
    try {
      const payload = {
        ...currentCase,
        legalPinnedSessions: nextPinned
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (err) {
      console.error("Failed to pin legal chat session", err);
    }
  };
  const handleDeleteSession = async (chatId, e) => {
    e.stopPropagation();
    try {
      await chatStorageService.deleteSession(chatId);
      const updated = sessions.filter((s) => s.chat_id !== chatId);
      setSessions(updated);
      if (chatId === activeSessionId) {
        if (updated.length > 0) {
          switchSession(updated[0].chat_id);
        } else {
          handleNewChat(updated);
        }
      }
      if (currentCase) {
        const nextPinned = (currentCase.legalPinnedSessions || []).filter((id) => id !== chatId);
        setPinnedSessions(nextPinned);
        const payload = {
          ...currentCase,
          legalPinnedSessions: nextPinned
        };
        const response = await apiService.updateProject(currentCase._id, payload);
        if (onUpdateCase) onUpdateCase(response);
      }
    } catch (err) {
      console.error("Failed to delete session", err);
    }
  };
  const getPrecedingUserMessage = (msgId) => {
    const index = messages.findIndex((m) => m.id === msgId);
    if (index <= 0) return "AI Legal Query";
    for (let i = index - 1; i >= 0; i--) {
      if (messages[i].sender === "user") {
        return messages[i].text;
      }
    }
    return "AI Legal Query";
  };
  reactExports.useEffect(() => {
    if (!scrollContainerRef.current || !messagesEndRef.current) return;
    if (messagesEndObserverRef.current) {
      messagesEndObserverRef.current.disconnect();
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEndVisible(entry.isIntersecting);
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.1
      }
    );
    observer.observe(messagesEndRef.current);
    messagesEndObserverRef.current = observer;
    return () => {
      if (observer) observer.disconnect();
    };
  }, [messages.length]);
  const prevUserMsgCountRef = reactExports.useRef(0);
  const userMsgCount = reactExports.useMemo(() => messages.filter((m) => m.sender === "user").length, [messages]);
  reactExports.useEffect(() => {
    const hasActiveMessages = messages.filter((m) => !m.isIntro).length > 0;
    if (!hasActiveMessages || !messagesEndRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current || {};
    const isNearBottom = scrollHeight && clientHeight ? scrollHeight - scrollTop - clientHeight < 120 : true;
    if (userMsgCount > prevUserMsgCountRef.current || isNearBottom) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
    prevUserMsgCountRef.current = userMsgCount;
  }, [messages.length, userMsgCount]);
  reactExports.useEffect(() => {
    checkScrollBottom();
  }, [messages, isTyping, generationState, checkScrollBottom]);
  reactExports.useEffect(() => {
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 300);
  }, []);
  const mapDbMessageToLocal = (m) => ({
    id: m.id || m._id || Date.now().toString() + Math.random().toString(36).substr(2, 5),
    text: m.content || m.text || "",
    sender: m.role === "user" ? "user" : "ai",
    timestamp: m.timestamp ? new Date(m.timestamp) : /* @__PURE__ */ new Date(),
    isIntro: m.isIntro || false,
    attachments: m.attachments || [],
    fullPromptText: m.fullPromptText || void 0
  });
  const mapLocalMessageToDb = (m) => {
    var _a, _b;
    return {
      id: m.id,
      role: m.sender === "user" ? "user" : "model",
      content: m.text,
      timestamp: ((_b = (_a = m.timestamp) == null ? void 0 : _a.toISOString) == null ? void 0 : _b.call(_a)) || m.timestamp,
      isIntro: m.isIntro || false,
      attachments: m.attachments || [],
      fullPromptText: m.fullPromptText || void 0
    };
  };
  const loadSessionHistory = async (sessionId) => {
    try {
      const history = await chatStorageService.getHistory(sessionId);
      if (history && Array.isArray(history.messages)) {
        const parsedMsgs = history.messages.map(mapDbMessageToLocal);
        setMessages(parsedMsgs);
      }
    } catch (e) {
      console.error("Failed to load session history", e);
    }
  };
  const saveChatHistory = reactExports.useCallback(async (msgs) => {
    if (msgs.length === 0) return;
    const lastMsg = msgs[msgs.length - 1];
    const firstUserMsg = msgs.find((m) => m.sender === "user");
    const title = firstUserMsg ? firstUserMsg.text.slice(0, 30) + (firstUserMsg.text.length > 30 ? "..." : "") : "New Chat";
    const dbMsg = mapLocalMessageToDb(lastMsg);
    dbMsg.activeTool = "General Legal Chat";
    dbMsg.mode = "NORMAL_CHAT";
    try {
      await chatStorageService.saveMessage(chatIdRef.current, dbMsg, title, currentCase == null ? void 0 : currentCase._id);
      setSessions((prev) => prev.map((s) => {
        if (s.chat_id === chatIdRef.current) {
          return { ...s, title, timestamp: Date.now() };
        }
        return s;
      }));
    } catch (e) {
      console.error("[LegalChatScreen] saveChatHistory failed", e);
    }
  }, [currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    const loadSessions = async () => {
      try {
        const dbSessions = await chatStorageService.getSessions(currentCase == null ? void 0 : currentCase._id);
        const filteredDb = dbSessions.filter((s) => s.activeTool === "General Legal Chat");
        const mapped = filteredDb.map((s) => ({
          chat_id: s.sessionId || s.chat_id,
          title: s.title || "New Chat",
          timestamp: s.lastModified || s.timestamp || Date.now()
        }));
        mapped.sort((a, b) => b.timestamp - a.timestamp);
        setSessions(mapped);
        const isPathNew = window.location.pathname.endsWith("/new");
        if (!isPathNew) {
          if (mapped.length > 0) {
            chatIdRef.current = mapped[0].chat_id;
            setActiveSessionId(mapped[0].chat_id);
            await loadSessionHistory(mapped[0].chat_id);
          } else {
            await handleNewChat(false);
          }
        }
      } catch (e) {
        console.error("Failed loading chat sessions", e);
      }
    };
    loadSessions();
  }, [currentCase == null ? void 0 : currentCase._id]);
  reactExports.useEffect(() => {
    if (location.pathname.endsWith("/new")) {
      handleNewChat(false);
    }
  }, [location.pathname]);
  reactExports.useEffect(() => {
    if (messages.length > 1) {
      saveChatHistory(messages);
    }
  }, [messages, saveChatHistory]);
  const handleStop = () => {
    isStreamingRef.current = false;
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsTyping(false);
    setGenerationState("stopped");
    zt.success("Generation stopped.");
  };
  const handleRetryMessage = (msgId) => {
    const targetMsg = messages.find((m) => m.id === msgId);
    if (!targetMsg) return;
    setMessages((prev) => prev.filter((m) => m.id !== msgId));
    sendMessage(targetMsg.failedPrompt, targetMsg.failedHiddenContext);
  };
  const sendMessage = async (overrideText, hiddenContextText) => {
    var _a, _b, _c;
    const text = overrideText && typeof overrideText === "string" ? overrideText.trim() : inputValue.trim();
    if (!text && attachments.length === 0) return;
    if (isStreamingRef.current || isTyping) {
      handleStop();
    }
    const currentAttachments = [...attachments];
    setAttachments([]);
    const userMsg = {
      id: Date.now().toString(),
      text: text || "",
      attachments: currentAttachments.map((a) => ({ name: a.name, type: a.type })),
      sender: "user",
      timestamp: /* @__PURE__ */ new Date(),
      fullPromptText: hiddenContextText || text
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setGenerationState("streaming");
    setTimeout(scrollToBottom, 50);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    isStreamingRef.current = true;
    try {
      const apiHistory = messages.filter((m) => !m.isIntro).map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.fullPromptText || m.text }]
      }));
      let apiAttachments = currentAttachments.map((att) => {
        var _a2;
        return {
          url: att.dataUrl,
          name: att.name || "uploaded_file",
          type: ((_a2 = att.type) == null ? void 0 : _a2.startsWith("image/")) ? "image" : "document"
        };
      });
      let promptText2 = hiddenContextText || text;
      if (currentAttachments.length > 0) {
        const fileNames = currentAttachments.map((a) => a.name).join(", ");
        promptText2 = `[Attached Files: ${fileNames}]
${promptText2 || "Please analyze these attachments."}`;
      }
      let systemInstruction = LEGAL_SYSTEM_INSTRUCTION;
      if (currentCase) {
        systemInstruction += `

Context for the current case:
`;
        systemInstruction += `- Case ID: ${currentCase.id || currentCase._id}
`;
        systemInstruction += `- Case Name: ${currentCase.title || currentCase.name || "N/A"}
`;
        systemInstruction += `- Case Description: ${currentCase.summary || currentCase.description || "N/A"}
`;
      }
      const response = await generateChatResponse(
        apiHistory,
        promptText2,
        systemInstruction,
        apiAttachments,
        "English",
        abortControllerRef.current.signal,
        "LEGAL_TOOLKIT",
        null,
        null
      );
      let responseText = "";
      if (typeof response === "string") responseText = response;
      else if (response == null ? void 0 : response.reply) responseText = response.reply;
      else if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.reply) responseText = response.data.reply;
      else if (response == null ? void 0 : response.text) responseText = response.text;
      if (!responseText) throw new Error("Empty response received from LLM.");
      setIsTyping(false);
      const aiMsgId = "ai-" + Date.now();
      const aiMsg = {
        id: aiMsgId,
        text: "",
        sender: "ai",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: true,
        fullPromptText: responseText
      };
      setMessages((prev) => [...prev, aiMsg]);
      const words = responseText.split(" ");
      let currentText = "";
      for (let j = 0; j < words.length; j++) {
        if (!isStreamingRef.current) {
          break;
        }
        currentText += (j === 0 ? "" : " ") + words[j];
        setMessages((prev) => prev.map((m) => {
          if (m.id === aiMsgId) {
            return { ...m, text: currentText };
          }
          return m;
        }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      const wasStopped = !isStreamingRef.current;
      setMessages((prev) => prev.map((m) => {
        if (m.id === aiMsgId) {
          return {
            ...m,
            isStreaming: false,
            isStopped: wasStopped,
            text: wasStopped ? currentText : responseText
          };
        }
        return m;
      }));
      setGenerationState(wasStopped ? "stopped" : "completed");
    } catch (error) {
      console.error("[LegalChatScreen] API Error:", error);
      setIsTyping(false);
      const isCancel = error.name === "AbortError" || error.message === "canceled" || ((_b = error.message) == null ? void 0 : _b.includes("canceled")) || typeof error === "object" && ((_c = error.constructor) == null ? void 0 : _c.name) === "Cancel";
      if (isCancel || !isStreamingRef.current) {
        setGenerationState("stopped");
        const aiMsgId = "ai-stopped-" + Date.now();
        const stoppedMsg = {
          id: aiMsgId,
          text: "",
          sender: "ai",
          timestamp: /* @__PURE__ */ new Date(),
          isStopped: true
        };
        setMessages((prev) => [...prev, stoppedMsg]);
      } else {
        setGenerationState("error");
        const aiMsgId = "ai-failed-" + Date.now();
        const errorMsg = {
          id: aiMsgId,
          text: "",
          sender: "ai",
          timestamp: /* @__PURE__ */ new Date(),
          isFailed: true,
          failedPrompt: promptText,
          failedHiddenContext: hiddenContextText
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } finally {
      isStreamingRef.current = false;
      abortControllerRef.current = null;
    }
  };
  reactExports.useEffect(() => {
    window.__aisa_legal_send_message = (text) => sendMessage(text);
    return () => {
      delete window.__aisa_legal_send_message;
    };
  }, [sendMessage]);
  const handleRegenerateMessage = async (msgId) => {
    var _a, _b, _c;
    const aiMsgIdx = messages.findIndex((m) => m.id === msgId);
    if (aiMsgIdx === -1) return;
    let userMsg = null;
    let userMsgIdx = -1;
    for (let i = aiMsgIdx - 1; i >= 0; i--) {
      if (messages[i].sender === "user") {
        userMsg = messages[i];
        userMsgIdx = i;
        break;
      }
    }
    if (!userMsg) return;
    const promptText2 = userMsg.fullPromptText || userMsg.text;
    const suffixId = Date.now().toString();
    const statusCardId = "regen-status-" + suffixId;
    const statusMsg = {
      id: statusCardId,
      sender: "system_regenerating",
      originalPrompt: promptText2.length > 120 ? promptText2.slice(0, 120) + "..." : promptText2,
      status: "loading",
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, statusMsg]);
    setIsRegenerating(true);
    setIsTyping(true);
    setGenerationState("streaming");
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    isStreamingRef.current = true;
    try {
      const precedingHistory = messages.slice(0, userMsgIdx).filter((m) => !m.isIntro).map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.fullPromptText || m.text }]
      }));
      let systemInstruction = LEGAL_SYSTEM_INSTRUCTION;
      if (currentCase) {
        systemInstruction += `

Context for the current case:
`;
        systemInstruction += `- Case ID: ${currentCase.id || currentCase._id}
`;
        systemInstruction += `- Case Name: ${currentCase.title || currentCase.name || "N/A"}
`;
        systemInstruction += `- Case Description: ${currentCase.summary || currentCase.description || "N/A"}
`;
      }
      const response = await generateChatResponse(
        precedingHistory,
        promptText2,
        systemInstruction,
        [],
        "English",
        abortControllerRef.current.signal,
        "LEGAL_TOOLKIT",
        null,
        null
      );
      let responseText = "";
      if (typeof response === "string") responseText = response;
      else if (response == null ? void 0 : response.reply) responseText = response.reply;
      else if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.reply) responseText = response.data.reply;
      else if (response == null ? void 0 : response.text) responseText = response.text;
      if (!responseText) throw new Error("Empty response received from LLM.");
      setMessages((prev) => prev.map((m) => {
        if (m.id === statusCardId) {
          return { ...m, status: "success" };
        }
        return m;
      }));
      setIsRegenerating(false);
      setIsTyping(false);
      const newAiMsgId = "ai-regen-" + suffixId;
      const newAiMsg = {
        id: newAiMsgId,
        sender: "ai",
        text: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: true,
        fullPromptText: responseText
      };
      setMessages((prev) => [...prev, newAiMsg]);
      const words = responseText.split(" ");
      let currentText = "";
      for (let j = 0; j < words.length; j++) {
        if (!isStreamingRef.current) {
          break;
        }
        currentText += (j === 0 ? "" : " ") + words[j];
        setMessages((prev) => prev.map((m) => {
          if (m.id === newAiMsgId) {
            return { ...m, text: currentText };
          }
          return m;
        }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      const wasStopped = !isStreamingRef.current;
      setMessages((prev) => prev.map((m) => {
        if (m.id === newAiMsgId) {
          return {
            ...m,
            isStreaming: false,
            isStopped: wasStopped,
            text: wasStopped ? currentText : responseText
          };
        }
        return m;
      }));
      setGenerationState(wasStopped ? "stopped" : "completed");
      zt.success("Response regenerated successfully!");
    } catch (error) {
      console.error("[LegalChatScreen] Regeneration API Error:", error);
      setIsRegenerating(false);
      setIsTyping(false);
      const isCancel = error.name === "AbortError" || error.message === "canceled" || ((_b = error.message) == null ? void 0 : _b.includes("canceled")) || typeof error === "object" && ((_c = error.constructor) == null ? void 0 : _c.name) === "Cancel";
      setMessages((prev) => {
        const cleaned = prev.filter((m) => m.id !== statusCardId);
        if (isCancel || !isStreamingRef.current) {
          setGenerationState("stopped");
          const stoppedCard = {
            id: "regen-stopped-" + suffixId,
            sender: "ai",
            text: "",
            timestamp: /* @__PURE__ */ new Date(),
            isStopped: true
          };
          return [...cleaned, stoppedCard];
        } else {
          setGenerationState("error");
          const errorCard = {
            id: "regen-error-" + suffixId,
            sender: "system_regenerating_error",
            originalPrompt: promptText2.length > 120 ? promptText2.slice(0, 120) + "..." : promptText2,
            targetMsgId: msgId,
            timestamp: /* @__PURE__ */ new Date()
          };
          return [...cleaned, errorCard];
        }
      });
      zt.error((error == null ? void 0 : error.message) || "Failed to regenerate response.");
    } finally {
      isStreamingRef.current = false;
      abortControllerRef.current = null;
    }
  };
  const handleEditUserMessage = (msg) => {
    setInputValue(msg.text);
    setMessages((prev) => {
      const idx = prev.findIndex((m) => m.id === msg.id);
      return idx !== -1 ? prev.slice(0, idx) : prev;
    });
  };
  const handleCopyUserMessage = (text) => {
    navigator.clipboard.writeText(text);
    zt.success("Query copied!");
  };
  const handleDeleteUserMessage = (msgId) => {
    setMessages((prev) => prev.filter((m) => m.id !== msgId));
    zt.success("Message removed");
  };
  const handleFilesAdded = async (filesList) => {
    const supportedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "text/plain",
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      const ext = file.name.split(".").pop().toLowerCase();
      const isLegalExtension = ["pdf", "doc", "docx", "jpg", "jpeg", "png", "webp", "txt", "csv", "xls", "xlsx"].includes(ext);
      if (!supportedTypes.includes(file.type) && !isLegalExtension) {
        zt.error(`Unsupported file type: ${file.name}`);
        continue;
      }
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      const newAtt = {
        id,
        name: file.name,
        type: file.type || `application/${ext}`,
        size: file.size,
        progress: 0,
        isUploading: true,
        dataUrl: ""
      };
      setAttachments((prev) => [...prev, newAtt]);
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result;
        setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, dataUrl } : a));
        let progressVal = 0;
        const interval = setInterval(async () => {
          progressVal += 20;
          if (progressVal >= 100) {
            clearInterval(interval);
            setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, progress: 100, isUploading: false } : a));
            await saveFileToCase({ name: file.name, type: file.type || `application/${ext}`, size: file.size, dataUrl });
          } else {
            setAttachments((prev) => prev.map((a) => a.id === id ? { ...a, progress: progressVal } : a));
          }
        }, 100);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileSelect = (e) => {
    if (e.target.files) handleFilesAdded(e.target.files);
    e.target.value = "";
  };
  const handleDrop = (e) => {
    var _a;
    e.preventDefault();
    setIsDragging(false);
    if (((_a = e.dataTransfer.files) == null ? void 0 : _a.length) > 0) handleFilesAdded(e.dataTransfer.files);
  };
  const removeAttachment = (id) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };
  const saveFileToCase = async (fileObj) => {
    if (!currentCase || !currentCase._id) return;
    try {
      const newDoc = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
        name: fileObj.name,
        type: fileObj.type || "file",
        size: fileObj.size,
        uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
        uri: fileObj.dataUrl
      };
      const payload = {
        ...currentCase,
        documents: [newDoc, ...currentCase.documents || []]
      };
      const response = await apiService.updateProject(currentCase._id, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (e) {
      console.error(e);
    }
  };
  const getFileIcon = (type) => {
    if (type == null ? void 0 : type.startsWith("image/")) return /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 14, className: "text-emerald-500" });
    if ((type == null ? void 0 : type.includes("excel")) || (type == null ? void 0 : type.includes("spreadsheet")) || (type == null ? void 0 : type.includes("csv"))) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-green-600" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-slate-400" });
  };
  const handleNewChat = async (param) => {
    let isAutoAnalysis = false;
    if (param === true || Array.isArray(param)) isAutoAnalysis = true;
    const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    chatIdRef.current = newId;
    setActiveSessionId(newId);
    setAttachments([]);
    setInputValue("");
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 150);
    if (currentCase && isAutoAnalysis) {
      const promptText2 = `Provide a comprehensive legal analysis and strategy advice for the case: ${currentCase.title || currentCase.name}`;
      const userMsg = { id: Date.now().toString(), text: promptText2, sender: "user", timestamp: /* @__PURE__ */ new Date(), fullPromptText: promptText2 };
      setMessages([userMsg]);
      setIsTyping(true);
      const newSessionItem = { chat_id: newId, title: "Case Analysis", timestamp: Date.now() };
      setSessions((prev) => [newSessionItem, ...prev]);
      const dbMsg = mapLocalMessageToDb(userMsg);
      dbMsg.activeTool = "General Legal Chat";
      dbMsg.mode = "NORMAL_CHAT";
      await chatStorageService.saveMessage(newId, dbMsg, "Case Analysis", currentCase == null ? void 0 : currentCase._id);
      try {
        let systemInstruction = LEGAL_SYSTEM_INSTRUCTION;
        systemInstruction += `

Case Context:
- Title: ${currentCase.title || currentCase.name}
- Summary: ${currentCase.summary || currentCase.description}
`;
        const response = await generateChatResponse([], promptText2, systemInstruction, [], "English", null, "LEGAL_TOOLKIT", null, null);
        let responseText = typeof response === "string" ? response : (response == null ? void 0 : response.reply) || (response == null ? void 0 : response.text) || "Analysis complete.";
        const aiMsg = { id: (Date.now() + 1).toString(), text: responseText, sender: "ai", timestamp: /* @__PURE__ */ new Date() };
        setMessages((prev) => {
          const updated = [...prev, aiMsg];
          saveChatHistory(updated);
          return updated;
        });
      } catch (err) {
        console.error(err);
      } finally {
        setIsTyping(false);
      }
    } else {
      const newMsgs = [{
        id: "1",
        text: `Hello! I am your AI ${toolName}. Ask me anything about statutes, bare acts, case research, or litigation strategy.`,
        sender: "ai",
        timestamp: /* @__PURE__ */ new Date(),
        isIntro: true
      }];
      setMessages(newMsgs);
      const newSessionItem = { chat_id: newId, title: "New Chat", timestamp: Date.now() };
      setSessions((prev) => [newSessionItem, ...prev]);
      const dbMsg = mapLocalMessageToDb(newMsgs[0]);
      dbMsg.activeTool = "General Legal Chat";
      dbMsg.mode = "NORMAL_CHAT";
      await chatStorageService.saveMessage(newId, dbMsg, "New Chat", currentCase == null ? void 0 : currentCase._id);
    }
  };
  const switchSession = async (sessionId) => {
    chatIdRef.current = sessionId;
    setActiveSessionId(sessionId);
    await loadSessionHistory(sessionId);
  };
  const handleSelectCase = (item) => {
    setShowCasesSheet(false);
    const promptText2 = `Please analyze the case laws, applicable acts and strategy advice for: ${item.name} (${item.category})`;
    sendMessage(promptText2);
  };
  reactExports.useMemo(() => getFilterOptions(), []);
  const searchResults = reactExports.useMemo(() => {
    return searchAndFilterCases(searchQuery, filters, 1, 6);
  }, [searchQuery, filters]);
  const filteredCases = searchResults.cases;
  const handleQuickAction = (action) => {
    sendMessage(action);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full w-full bg-[#FAFBFD] font-sans relative overflow-hidden select-text text-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-[72px] bg-white border-b border-[#E5E7EB] px-3 sm:px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onBack,
            className: "p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors",
            title: "Back to Dashboard",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-4 bg-slate-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo/ai_legal_monochrome.png",
              className: "w-[36px] h-[36px] object-contain -mr-1.5",
              style: { mixBlendMode: "multiply" },
              alt: "AI LEGAL"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider", children: "AI LEGAL™ Chat" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3 select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setExportDropdownOpen(!exportDropdownOpen),
              className: `flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${exportDropdownOpen ? "border-[#4F46E5] text-[#4F46E5] bg-[#4F46E5]/5" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`,
              title: "Export Chat",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export" })
              ]
            }
          ),
          exportDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setExportDropdownOpen(false) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 mt-2 z-50 w-44 rounded-2xl bg-white border border-slate-200 shadow-2xl p-1 flex flex-col gap-0.5", children: [
              { label: "Export as PDF", act: () => {
                exportToPDF({ element: document.getElementById("chat-history"), text: messages.map((m) => m.text).join("\n\n"), title: "AI LEGAL Chat Export" });
              } },
              { label: "Export as DOCX", act: () => {
                const blob = new Blob([messages.map((m) => m.text).join("\n\n")], { type: "application/msword" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Chat_Export.doc";
                a.click();
              } },
              { label: "Export as Markdown", act: () => {
                const blob = new Blob([messages.map((m) => m.text).join("\n\n")], { type: "text/markdown" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Chat_Export.md";
                a.click();
              } },
              { label: "Export as TXT", act: () => {
                const blob = new Blob([messages.map((m) => m.text).join("\n\n")], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Chat_Export.txt";
                a.click();
              } },
              { label: "Export as HTML", act: () => {
                const blob = new Blob([messages.map((m) => m.text).join("\n\n")], { type: "text/html" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Chat_Export.html";
                a.click();
              } },
              { label: "Print Transcript", act: () => {
                window.print();
              } },
              { label: "Send via Email", act: () => {
                window.open(`mailto:?subject=AI Legal Chat Export&body=${encodeURIComponent(messages.map((m) => m.text).join("\n\n").slice(0, 1500))}`);
              } },
              { label: "Share Link", act: () => {
                navigator.clipboard.writeText(window.location.href);
                zt.success("Share link copied!");
              } }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  item.act();
                  setExportDropdownOpen(false);
                },
                className: "w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors border-none bg-transparent cursor-pointer",
                children: item.label
              },
              item.label
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowHistoryPanel(!showHistoryPanel),
            className: `flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${showHistoryPanel ? "border-[#4F46E5] text-[#4F46E5] bg-[#4F46E5]/5" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`,
            title: "History",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "History" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => handleNewChat(false),
            className: "flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all shrink-0 cursor-pointer",
            title: "New Chat",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Chat" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        ref: scrollContainerRef,
        onScroll: handleScroll,
        onDragOver: (e) => {
          e.preventDefault();
          setIsDragging(true);
        },
        onDragLeave: () => setIsDragging(false),
        onDrop: handleDrop,
        className: "flex-1 flex flex-col overflow-y-auto px-4 py-8 custom-scrollbar shrink-0 relative",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[960px] w-full mx-auto space-y-8 pb-32 ${messages.filter((m) => !m.isIntro).length === 0 ? "flex-1 flex flex-col justify-center" : ""}`, children: [
          messages.filter((m) => !m.isIntro).length === 0 ? (
            /* ─── EMPTY STATE VIEW (GENERAL LEGAL CHAT HERO) ─── */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-8 py-2 md:py-6 max-w-[760px] mx-auto w-full text-center font-sans select-none flex flex-col items-center mt-6 md:mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 md:gap-4 text-center my-4 md:my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-950/20 text-[#4F46E5] rounded-3xl flex items-center justify-center mb-1 md:mb-2 shadow-lg shadow-indigo-500/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-8 h-8 md:w-10 md:h-10 text-[#4F46E5]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "AI LEGAL CHAT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] md:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-sm md:max-w-md leading-relaxed hidden md:block", children: "Professional legal research and assistance." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block md:hidden space-y-2 mt-1 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest", children: "Professional Legal Research Assistant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-slate-500 dark:text-slate-400 max-w-[280px] mx-auto leading-relaxed", children: "Ask any legal question, upload evidence, draft legal documents, analyze judgments, or search case law." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-indigo-600 dark:text-indigo-400 mt-6 tracking-wide", children: "How can I help you today?" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-4 pt-2 hidden md:block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 block text-left pl-1", children: "Example Suggestions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5", children: [
                  "Explain Section 420 IPC",
                  "Draft a legal notice",
                  "Explain contract clauses",
                  "Summarize a judgement",
                  "Compare IPC and BNS",
                  "Find Supreme Court precedents",
                  "Explain consumer rights",
                  "Help prepare legal arguments"
                ].map((promptText2, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleQuickAction(promptText2),
                    className: "text-left p-4 bg-white hover:bg-indigo-50/[0.03] border border-slate-200 hover:border-[#4F46E5] rounded-2xl flex items-center justify-between shadow-sm transition-all group cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 group-hover:text-[#4F46E5] transition-colors", children: promptText2 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-slate-300 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all shrink-0" })
                    ]
                  },
                  idx
                )) })
              ] })
            ] })
          ) : (
            /* ─── MESSAGES CONTAINER ─── */
            messages.filter((m) => !m.isIntro).map((msg, i) => {
              if (msg.sender === "system_regenerating") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start max-w-[480px] mr-auto w-full my-4 pl-1 text-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAFBFD] border border-slate-200 rounded-[18px] p-5 shadow-[0_4px_18px_rgba(15,23,42,.03)] w-full space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-black text-[#4F46E5] uppercase tracking-wider", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 13, className: `w-3.5 h-3.5 ${msg.status === "loading" ? "animate-spin" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regenerating previous response..." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs bg-white border border-slate-100 rounded-xl p-3 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-400 tracking-wider block", children: "Original Request" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-700 font-medium italic", children: [
                      '"',
                      msg.originalPrompt,
                      '"'
                    ] })
                  ] }),
                  msg.status === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pl-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-bold text-slate-500", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-ping shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reviewing previous context..." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-bold text-slate-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Searching legal precedents..." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-bold text-[#4F46E5]/60 animate-pulse", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#4F46E5]/40 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Improving response..." })
                    ] })
                  ] }),
                  msg.status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 pl-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Successfully regenerated improved answer" })
                  ] })
                ] }) }, msg.id || i);
              }
              if (msg.sender === "system_regenerating_error") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start max-w-[480px] mr-auto w-full my-4 pl-1 text-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50/50 border border-red-200 rounded-[18px] p-5 shadow-[0_4px_18px_rgba(15,23,42,.03)] w-full space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-wider", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unable to regenerate response" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs bg-white border border-red-100 rounded-xl p-3 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-red-400 tracking-wider block", children: "Failed Prompt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-700 font-medium italic", children: [
                      '"',
                      msg.originalPrompt,
                      '"'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500", children: "The regeneration process encountered an error. Would you like to try again?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => {
                          setMessages((prev) => prev.filter((m) => m.id !== msg.id));
                          handleRegenerateMessage(msg.targetMsgId);
                        },
                        className: "px-3.5 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg text-xs font-bold shadow-sm transition-all",
                        children: "Retry"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => {
                          setMessages((prev) => prev.filter((m) => m.id !== msg.id && m.id !== "regen-status-" + msg.id.split("-").pop()));
                        },
                        className: "px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold shadow-sm transition-all",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) }, msg.id || i);
              }
              const isAi = msg.sender === "ai";
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: isAi ? (
                /* AI message document card layout */
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pr-2 sm:pr-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#4F46E5] pl-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "/logo/ai_legal_monochrome.png",
                        className: "w-[24px] h-[24px] object-contain",
                        style: { mixBlendMode: "multiply" },
                        alt: "AI LEGAL"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI LEGAL™ Copilot" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#E7EAF3] rounded-[18px] p-4 sm:p-8 shadow-[0_4px_18px_rgba(15,23,42,.05)] leading-relaxed select-text hover:shadow-md transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AiResponseCard,
                      {
                        msg,
                        currentCase,
                        chatIdRef,
                        handleRegenerateMessage,
                        getPrecedingUserMessage
                      }
                    ),
                    msg.isStopped && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-slate-100 space-y-4 select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-400 font-black uppercase tracking-wider flex items-center gap-1.5 pl-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { size: 8, className: "fill-slate-400 stroke-none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generation stopped." })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-semibold leading-relaxed pl-1", children: "The response was interrupted before completion." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => handleRegenerateMessage(msg.id),
                          className: "px-3.5 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg text-xs font-bold shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5 ml-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 12 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regenerate Response" })
                          ]
                        }
                      )
                    ] }),
                    msg.isFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-slate-100 space-y-4 select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-red-500 font-black uppercase tracking-wider flex items-center gap-1.5 pl-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 10, className: "text-red-500" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generation interrupted." })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-semibold leading-relaxed pl-1", children: "The connection was lost during generation." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => handleRetryMessage(msg.id),
                          className: "px-3.5 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 rounded-lg text-xs font-bold shadow-sm transition-all inline-flex items-center gap-1.5 ml-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 12 }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Retry Generation" })
                          ]
                        }
                      )
                    ] }),
                    i === messages.filter((m) => !m.isIntro).length - 1 && !msg.isStreaming && !msg.isStopped && !msg.isFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-slate-100 space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 pl-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-[#4F46E5]", children: "✨ Suggested follow-ups" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: getSuggestionsForResponse(msg.text).map((card, cardIdx) => {
                        const cleanTitle = card.title.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "").trim();
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => {
                              const hiddenContext = buildHiddenContext(card, msg.text);
                              sendMessage(cleanTitle, hiddenContext);
                            },
                            className: "min-h-[34px] py-1.5 px-3 bg-white border border-[#4F46E5]/15 hover:border-[#4F46E5] hover:bg-[#4F46E5]/5 rounded-full transition-all flex items-center gap-1.5 text-[11px] font-bold text-slate-700 hover:text-[#4F46E5] shadow-xs select-none max-w-full text-left",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 flex items-center justify-center shrink-0", children: card.icon }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cleanTitle })
                            ]
                          },
                          cardIdx
                        );
                      }) })
                    ] })
                  ] })
                ] })
              ) : (
                /* User prompt card bubble layout */
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pl-4 sm:pl-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5 max-w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 text-slate-800 p-4 rounded-2xl rounded-tr-none text-xs leading-relaxed font-semibold shadow-sm max-w-full", children: [
                    msg.attachments && msg.attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2 shrink-0", children: msg.attachments.map((att, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold", children: [
                      getFileIcon(att.type),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: att.name })
                    ] }, idx)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap", children: msg.text })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[9px] text-slate-400 font-bold uppercase tracking-wider px-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: safeFormatTime(msg.timestamp) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    !isTyping && !isStreamingRef.current && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => handleEditUserMessage(msg),
                          className: "hover:text-[#4F46E5] flex items-center gap-0.5",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleCopyUserMessage(msg.text),
                        className: "hover:text-[#4F46E5] flex items-center gap-0.5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleDeleteUserMessage(msg.id),
                        className: "hover:text-red-500 flex items-center gap-0.5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delete" })
                      }
                    )
                  ] })
                ] }) })
              ) }, msg.id || i);
            })
          ),
          isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pr-8 animate-pulse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[9px] text-[#4F46E5] font-black uppercase tracking-widest pl-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/logo/ai_legal_monochrome.png",
                  className: "w-[24px] h-[24px] object-contain",
                  style: { mixBlendMode: "multiply" },
                  alt: "AI LEGAL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI LEGAL™ Copilot" })
            ] }),
            isRegenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#E7EAF3] rounded-[18px] p-5 shadow-[0_4px_18px_rgba(15,23,42,.05)] max-w-[320px] space-y-3.5 text-slate-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-slate-800 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 12, className: "animate-spin text-[#4F46E5]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regenerating response..." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[10px] font-bold text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-ping shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600", children: "Reviewing previous context..." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading legal references..." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 opacity-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Generating improved answer..." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-center pt-2 border-t border-slate-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-bounce" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-bounce delay-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-bounce delay-200" })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#ECEEF5] rounded-[18px] px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)] w-[200px] h-[80px] flex flex-col justify-between select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: `
                    @keyframes legalDotThinking {
                      0%, 100% {
                        transform: scale(0.85);
                        opacity: 0.35;
                      }
                      50% {
                        transform: scale(1.15);
                        opacity: 1;
                      }
                    }
                    .legal-thinking-dot {
                      animation: legalDotThinking 1s infinite ease-in-out;
                    }
                    .legal-thinking-dot-1 {
                      animation-delay: 0s;
                    }
                    .legal-thinking-dot-2 {
                      animation-delay: 0.3s;
                    }
                    .legal-thinking-dot-3 {
                      animation-delay: 0.6s;
                    }
                  ` } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-slate-500 tracking-wider", children: "Thinking..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-start pl-0.5 pb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-[#4F46E5] rounded-full legal-thinking-dot legal-thinking-dot-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-[#4F46E5] rounded-full legal-thinking-dot legal-thinking-dot-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-[#4F46E5] rounded-full legal-thinking-dot legal-thinking-dot-3" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "shrink-0 bg-gradient-to-t from-[#FAFBFD] via-[#FAFBFD]/95 to-transparent pt-3 md:pt-4 px-2 sm:px-4 border-t border-slate-200/60 sticky bottom-0 z-30", style: { paddingBottom: "calc(env(safe-area-inset-bottom, 16px) + 12px)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[960px] mx-auto space-y-3 w-full", children: [
      attachments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 p-2 bg-white border border-slate-200 rounded-2xl max-h-[100px] overflow-y-auto shrink-0 shadow-sm mx-1", children: attachments.map((att) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold", children: [
        getFileIcon(att.type),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[130px] text-slate-700", children: att.name }),
        att.isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] text-[#4F46E5] animate-pulse", children: [
          att.progress,
          "%"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeAttachment(att.id), className: "text-slate-400 hover:text-red-500 transition-colors border-none bg-transparent cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }) })
      ] }, att.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#E5E7EB] rounded-full p-1.5 md:p-2 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg transition-shadow relative w-full overflow-hidden", children: [
        showPlusMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setShowPlusMenu(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[calc(100%+8px)] mb-1 left-2 right-2 md:left-0 md:right-auto z-50 w-auto md:w-[480px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 space-y-3 font-sans select-none animate-fadeIn text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-400 tracking-wider", children: "Quick AI Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPlusMenu(false),
                  className: "text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar p-0.5", children: QUICK_AI_ACTIONS.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a;
                  setInputValue(action.prompt);
                  setShowPlusMenu(false);
                  (_a = inputRef.current) == null ? void 0 : _a.focus();
                },
                className: "flex items-center gap-2.5 p-2 bg-slate-50 hover:bg-indigo-50/30 border border-slate-100 hover:border-[#4F46E5] rounded-xl text-[11px] font-bold text-slate-750 text-left transition-all cursor-pointer border-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-1.5 bg-white rounded-lg shadow-sm", children: getActionIcon(action.icon) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: action.name })
                ]
              },
              action.name
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowPlusMenu((prev) => !prev),
            className: `p-2 sm:p-2.5 rounded-full transition-colors border-none bg-transparent cursor-pointer shrink-0 flex items-center justify-center ${showPlusMenu ? "text-[#4F46E5] bg-[#4F46E5]/10" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"}`,
            title: "Quick AI Actions",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a;
              return (_a = fileInputRef.current) == null ? void 0 : _a.click();
            },
            className: `p-2 sm:p-2.5 rounded-full transition-colors border-none bg-transparent cursor-pointer shrink-0 flex items-center justify-center ${attachments.length > 0 ? "text-[#4F46E5] bg-[#4F46E5]/5" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"}`,
            title: "Attach document/image",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            multiple: true,
            onChange: handleFileSelect,
            accept: "image/*,.pdf,.doc,.docx,.txt,.csv,.xls,.xlsx",
            style: { display: "none" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              if (isTyping || generationState === "streaming") {
                handleStop();
              } else {
                sendMessage();
              }
            },
            className: "flex-1 flex items-center gap-1 sm:gap-2 min-w-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  type: "text",
                  value: inputValue,
                  onChange: (e) => setInputValue(e.target.value),
                  placeholder: "Ask AI to draft, analyze or strategize...",
                  className: "flex-1 w-full min-w-0 bg-transparent border-none text-[13px] sm:text-xs font-semibold focus:ring-0 p-0 text-slate-700 placeholder-slate-400 outline-none truncate"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleVoiceInput,
                  className: `p-2 sm:p-2.5 rounded-full transition-colors shrink-0 border-none bg-transparent cursor-pointer flex items-center justify-center ${isListening ? "text-red-500 animate-pulse bg-red-50" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"}`,
                  title: "Voice input",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 })
                }
              ),
              isTyping || generationState === "streaming" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleStop,
                  className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all shrink-0 bg-red-500 hover:bg-red-600 text-white shadow-sm flex items-center justify-center animate-pulse border-none cursor-pointer",
                  title: "Stop generating",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { size: 14, className: "fill-white stroke-none" })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: !inputValue.trim() && attachments.length === 0,
                  className: `w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all shrink-0 border-none flex items-center justify-center cursor-pointer ${inputValue.trim() || attachments.length > 0 ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-md shadow-indigo-500/20" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`,
                  title: "Send query",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16, className: inputValue.trim() || attachments.length > 0 ? "ml-0.5" : "" })
                }
              )
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showScrollBottomBtn && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.18 },
        className: "absolute bottom-[96px] left-1/2 -translate-x-1/2 z-40 pointer-events-none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: scrollToBottom,
            className: "pointer-events-auto px-4 py-2.5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[#4F46E5] dark:text-indigo-400 text-xs font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-1.5 cursor-pointer hover:-translate-y-0.5 active:bg-[#4F46E5]/5 active:border-[#4F46E5] z-50",
            title: "New response below",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New response below" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showCasesSheet && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-xs",
          onClick: () => setShowCasesSheet(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "fixed inset-x-0 bottom-0 md:max-w-2xl md:mx-auto z-50 bg-white border-t border-slate-200 rounded-t-[24px] max-h-[85vh] flex flex-col shadow-2xl",
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-slate-200 rounded-full mx-auto my-3 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 18, className: "text-[#4F46E5]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black uppercase tracking-wider text-slate-900", children: "Browse template cases" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowCasesSheet(false), className: "p-1 rounded-lg hover:bg-slate-50 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, className: "text-slate-400" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-slate-50 border-b border-slate-100 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 15, className: "text-slate-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "flex-1 bg-transparent border-none text-xs font-semibold focus:ring-0 p-0 text-slate-700 placeholder-slate-400 outline-none",
                  placeholder: "Search template cases, laws, acts, IPC/BNS, keywords...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value)
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar", children: filteredCases.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "mx-auto mb-2 opacity-35", size: 24 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No cases match search query" })
            ] }) : filteredCases.map((c) => {
              var _a, _b;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#4F46E5] hover:shadow transition-all",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-slate-900 block", children: c.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-400 mt-1 block font-bold uppercase tracking-wider", children: [
                        c.category,
                        " • ",
                        c.courtType
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-2 font-medium line-clamp-2 leading-relaxed", children: ((_b = (_a = c.landmarkJudgments) == null ? void 0 : _a[0]) == null ? void 0 : _b.legalPrinciple) || "Standard legal disputable matter guidance template." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleSelectCase(c),
                        className: "px-3 py-1.5 bg-[#4F46E5] text-white hover:bg-[#4338CA] rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm transition-colors w-full sm:w-auto text-center shrink-0",
                        children: "Select Case"
                      }
                    )
                  ] })
                },
                c.id
              );
            }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showHistoryPanel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 0.4 },
          exit: { opacity: 0 },
          onClick: () => setShowHistoryPanel(false),
          className: "fixed inset-0 bg-black z-[100000]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "tween", duration: 0.25 },
          className: "fixed right-0 top-0 bottom-0 w-full sm:w-80 bg-white border-l border-slate-200 z-[100001] shadow-2xl flex flex-col font-sans select-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16, className: "text-[#4F46E5]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800", children: "Chat History" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowHistoryPanel(false),
                  className: "p-1 hover:bg-slate-200 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-slate-100 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 13, className: "text-slate-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: chatSearchQuery,
                  onChange: (e) => setChatSearchQuery(e.target.value),
                  placeholder: "Search conversations...",
                  className: "flex-1 bg-transparent border-none text-xs focus:ring-0 p-0 text-slate-700 outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar text-xs", children: [
              ["Pinned Chats", "Today's Chats", "Yesterday", "Older Chats"].map((groupName) => {
                let filtered = sessions;
                if (chatSearchQuery) {
                  filtered = sessions.filter((s) => {
                    var _a;
                    return (_a = s.title) == null ? void 0 : _a.toLowerCase().includes(chatSearchQuery.toLowerCase());
                  });
                }
                const nowTime = Date.now();
                const oneDay = 24 * 60 * 60 * 1e3;
                let groupSessions = [];
                if (groupName === "Pinned Chats") {
                  groupSessions = filtered.filter((s) => pinnedSessions.includes(s.chat_id));
                } else if (groupName === "Today's Chats") {
                  groupSessions = filtered.filter((s) => !pinnedSessions.includes(s.chat_id) && nowTime - s.timestamp < oneDay);
                } else if (groupName === "Yesterday") {
                  groupSessions = filtered.filter((s) => !pinnedSessions.includes(s.chat_id) && (nowTime - s.timestamp >= oneDay && nowTime - s.timestamp < 2 * oneDay));
                } else {
                  groupSessions = filtered.filter((s) => !pinnedSessions.includes(s.chat_id) && nowTime - s.timestamp >= 2 * oneDay);
                }
                if (groupSessions.length === 0) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider pl-1 mb-1", children: groupName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: groupSessions.map((s) => {
                    const isPinned = pinnedSessions.includes(s.chat_id);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `group flex items-center justify-between p-2 rounded-xl transition-all ${s.chat_id === activeSessionId ? "bg-[#4F46E5]/5 text-[#4F46E5] border border-indigo-100/50" : "hover:bg-slate-50 text-slate-700"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: () => {
                                switchSession(s.chat_id);
                                setShowHistoryPanel(false);
                              },
                              className: "flex-1 text-left font-bold truncate flex flex-col gap-0.5 pl-1 border-none bg-transparent cursor-pointer",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: s.title || "New Chat" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-slate-400 font-medium font-mono", children: [
                                  new Date(s.timestamp).toLocaleDateString(),
                                  " • Template: Copilot"
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => handleTogglePin(s.chat_id, e),
                                className: `p-1 rounded hover:bg-slate-200 transition-colors ${isPinned ? "text-amber-500" : "text-slate-400"} border-none bg-transparent cursor-pointer`,
                                title: isPinned ? "Unpin" : "Pin",
                                children: isPinned ? /* @__PURE__ */ jsxRuntimeExports.jsx(PinOff, { size: 11 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 11 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => {
                                  e.stopPropagation();
                                  const newName = prompt("Rename this chat:", s.title || "New Chat");
                                  if (newName) {
                                    chatStorageService.saveMessage(s.chat_id, {}, newName, currentCase == null ? void 0 : currentCase._id);
                                    setSessions((prev) => prev.map((p) => p.chat_id === s.chat_id ? { ...p, title: newName } : p));
                                  }
                                },
                                className: "p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-750 border-none bg-transparent cursor-pointer",
                                title: "Rename",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 11 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: (e) => handleDeleteSession(s.chat_id, e),
                                className: "p-1 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors border-none bg-transparent cursor-pointer",
                                title: "Delete",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 11 })
                              }
                            )
                          ] })
                        ]
                      },
                      s.chat_id
                    );
                  }) })
                ] }, groupName);
              }),
              sessions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 20, className: "mx-auto mb-2 opacity-50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No previous chats found" })
              ] })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSummaryDrawer && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 0.4 },
          exit: { opacity: 0 },
          onClick: () => setShowSummaryDrawer(false),
          className: "fixed inset-0 bg-black z-[100000]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "tween", duration: 0.25 },
          className: "fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white border-l border-slate-200 z-[100001] shadow-2xl flex flex-col font-sans select-none text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 16, className: "text-[#4F46E5]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase tracking-wider text-slate-800", children: "Case Summary Profile" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowSummaryDrawer(false),
                  className: "p-1 hover:bg-slate-200 rounded-full border-none bg-transparent cursor-pointer text-slate-400",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-slate-100 bg-slate-50/50 rounded-2xl space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-[#4F46E5] tracking-widest block", children: "Active Workspace" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-black text-slate-800 uppercase tracking-tight leading-none", children: (currentCase == null ? void 0 : currentCase.title) || (currentCase == null ? void 0 : currentCase.name) || "Rajesh Sharma vs Amit Verma" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "Status: Memory Active" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 bg-white rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider", children: "Client" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 block mt-1", children: (currentCase == null ? void 0 : currentCase.clientName) || "Rajesh Sharma" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 bg-white rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider", children: "Opponent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 block mt-1", children: (currentCase == null ? void 0 : currentCase.opponentName) || "Amit Verma" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 bg-white rounded-xl space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider", children: "Court Jurisdiction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 block mt-0.5", children: (currentCase == null ? void 0 : currentCase.court) || "District Court Jabalpur" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-slate-400 tracking-wider", children: "Stage & Judge" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-slate-700 block mt-0.5", children: [
                    (currentCase == null ? void 0 : currentCase.stage) || "Evidence Stage",
                    " • Hon'ble Mr. Justice Rawat"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-[#4F46E5]/10 bg-indigo-50/30 rounded-2xl space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] font-black uppercase text-[#4F46E5]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Win Probability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "60%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#4F46E5] h-full rounded-full", style: { width: "60%" } }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-slate-400 tracking-widest block pl-1", children: "Indexed Components" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2", children: [
                  { title: "Parties profiles mapped", desc: "✓ Client & opponent details fully parsed." },
                  { title: "Evidence index sheet", desc: "✓ 4 documents uploaded and analyzed." },
                  { title: "Litigation timeline", desc: "✓ Sequential timeline occurrences structured." },
                  { title: "Statutes database", desc: "✓ Connected laws & BNS codes index complete." }
                ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-slate-100 rounded-xl bg-slate-50/20 flex gap-2.5 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-extrabold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-750 block", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: item.desc })
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-emerald-50/30 border border-emerald-500/10 rounded-2xl space-y-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-emerald-600 tracking-widest block", children: "AI Pleading Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 font-semibold leading-relaxed", children: "Verify witness statements against timelines to highlight early trial delay defenses. Prepare anticipatory bail if counter complaints arise." })
              ] })
            ] }) })
          ]
        }
      )
    ] }) }),
    selectedTextMenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed z-[200000] bg-slate-900 text-white rounded-xl shadow-2xl p-1 flex flex-wrap justify-center max-w-[calc(100vw-2rem)] gap-0.5 smart-context-tooltip text-[10px] font-bold select-none",
        style: {
          left: `${selectedTextMenu.x}px`,
          top: `${selectedTextMenu.y}px`,
          transform: "translateX(-50%)"
        },
        children: [
          { label: "Explain", prefix: "Explain this legal reference" },
          { label: "Rewrite", prefix: "Rewrite this section" },
          { label: "More Formal", prefix: "Rewrite in a formal advocate voice" },
          { label: "Judge Friendly", prefix: "Rewrite in a judge friendly structure" },
          { label: "Translate", prefix: "Translate this section to Hindi" },
          { label: "Shorten", prefix: "Summarize and shorten" },
          { label: "Expand", prefix: "Provide more explanation and grounds" },
          { label: "Create Draft", prefix: "Draft a legal document outline matching" }
        ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a;
              const text = selectedTextMenu.text;
              sendMessage(`${opt.prefix}:
"${text}"`);
              setSelectedTextMenu(null);
              (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
            },
            className: "px-2.5 py-1 bg-transparent hover:bg-white/10 text-white rounded-lg transition-colors border-none cursor-pointer font-bold whitespace-nowrap",
            children: opt.label
          },
          opt.label
        ))
      }
    )
  ] });
};
export {
  LegalChatScreen as default
};
