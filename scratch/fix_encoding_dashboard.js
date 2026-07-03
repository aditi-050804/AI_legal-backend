import fs from 'fs';

const filePath = 'C:/Users/USER/Desktop/aisa/AISA_New/src/Tools/AI_Legal/components/LegalDashboard.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace ALL_MODULES
const oldAllModules = `const ALL_MODULES = [
  { id: 'legal_argument_builder', name: 'Argument Builder', desc: 'Draft courtroom strategies and arguments', icon: 'âš–ï¸ ' },
  { id: 'legal_precedents',       name: 'Legal Precedent',  desc: 'AI precedent and citation explorer',       icon: 'ðŸ ›ï¸ ' },
  { id: 'legal_draft_maker',      name: 'Draft Maker',      desc: 'Generate court-ready legal drafts',        icon: 'ðŸ“ ' },
  { id: 'legal_evidence_checker', name: 'Evidence Analysis',desc: 'Analyze legal documents and evidence',     icon: 'ðŸ” ' },
  { id: 'legal_case_predictor',   name: 'Case Predictor',   desc: 'Judicial scanner and forecast',            icon: 'ðŸŽ¯' },
  { id: 'legal_contract_analyzer',name: 'Contract Review',  desc: 'Agreement review and compliance',          icon: 'ðŸ“‹' },
  { id: 'legal_strategy_engine',  name: 'Strategy Engine',  desc: 'Litigation Roadmap & Tactical Suggestions',icon: 'ðŸ—ºï¸ ' },
];`;

const newAllModules = `const ALL_MODULES = [
  { id: 'legal_argument_builder', name: 'Argument Builder', desc: 'Draft courtroom strategies and arguments', icon: 'Scale' },
  { id: 'legal_precedents',       name: 'Legal Precedent',  desc: 'AI precedent and citation explorer',       icon: 'BookOpen' },
  { id: 'legal_draft_maker',      name: 'Draft Maker',      desc: 'Generate court-ready legal drafts',        icon: 'ScrollText' },
  { id: 'legal_evidence_checker', name: 'Evidence Analysis',desc: 'Analyze legal documents and evidence',     icon: 'FileSearch' },
  { id: 'legal_case_predictor',   name: 'Case Predictor',   desc: 'Judicial scanner and forecast',            icon: 'Target' },
  { id: 'legal_contract_analyzer',name: 'Contract Review',  desc: 'Agreement review and compliance',          icon: 'ClipboardList' },
  { id: 'legal_strategy_engine',  name: 'Strategy Engine',  desc: 'Litigation Roadmap & Tactical Suggestions',icon: 'Brain' },
];`;

content = content.replace(oldAllModules, newAllModules);

// 2. Replace ModuleCard icon rendering
const oldModuleIconSpan = `<span role="img" aria-hidden="true">{m.icon}</span>`;
const newModuleIconSpan = `{getModuleIcon(m.id)}`;
content = content.replace(oldModuleIconSpan, newModuleIconSpan);

// 2.5 Insert getModuleIcon helper inside ModuleCard definition
const oldModuleCardStart = `const ModuleCard = React.memo(({ module: m, isActive, onSelect }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(m.id);
  }, [m.id, onSelect]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(m.id);
    }
  }, [m.id, onSelect]);`;

const newModuleCardStart = `const ModuleCard = React.memo(({ module: m, isActive, onSelect }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(m.id);
  }, [m.id, onSelect]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(m.id);
    }
  }, [m.id, onSelect]);

  const getModuleIcon = (id) => {
    const iconClass = isActive ? 'text-white' : 'text-indigo-650 dark:text-indigo-400';
    switch (id) {
      case 'legal_argument_builder': return <Scale size={18} className={iconClass} />;
      case 'legal_precedents': return <BookOpen size={18} className={iconClass} />;
      case 'legal_draft_maker': return <ScrollText size={18} className={iconClass} />;
      case 'legal_evidence_checker': return <FileSearch size={18} className={iconClass} />;
      case 'legal_case_predictor': return <Target size={18} className={iconClass} />;
      case 'legal_contract_analyzer': return <ClipboardList size={18} className={iconClass} />;
      case 'legal_strategy_engine': return <Brain size={18} className={iconClass} />;
      default: return <Scale size={18} className={iconClass} />;
    }
  };`;

content = content.replace(oldModuleCardStart, newModuleCardStart);

// 3. Clean up checkmark symbols in spans (replace with Lucide Check component)
content = content.replace(/<span className="text-emerald-500 font-black">âœ“<\/span> /g, '<Check size={11} className="text-emerald-500 shrink-0" /> ');
content = content.replace(/<span className="text-emerald-500 font-black">âœ“<\/span>/g, '<Check size={11} className="text-emerald-500 shrink-0" />');

// 4. Clean up toast.success tick marks "âœ“ " or "âœ“"
content = content.replace(/toast\.success\("âœ“ /g, 'toast.success("');
content = content.replace(/toast\.success\(`âœ“ /g, 'toast.success(`');
content = content.replace(/toast\.success\("âœ“ citation/ig, 'toast.success("Citation');
content = content.replace(/toast\.success\("âœ“ Citation/g, 'toast.success("Citation');
content = content.replace(/toast\.success\("âœ“/g, 'toast.success("');
content = content.replace(/\"âœ“ /g, '"'); // Match quote-wrapped custom success messages
content = content.replace(/\`âœ“ /g, '`');

// 5. Waving hand emoji in welcomes "ðŸ‘‹ Hello!" -> "Welcome!"
content = content.replace(/ðŸ‘‹ Hello!/g, 'Welcome!');

// 6. Replace bullet points "â€¢" -> "•"
content = content.replace(/â€¢/g, '•');

// 7. Scales in loading toast
content = content.replace(/âš–ï¸ /g, '⚖️');
content = content.replace(/âš–/g, '⚖️');

// 8. Checks in success toast
content = content.replace(/âœ…/g, '✅');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully fixed all character encodings in LegalDashboard.jsx");
