const fs = require('fs');

const filePath = 'H:\\aisa_app\\AISA_New\\src\\pages\\AdminDashboard.jsx';

function fix() {
    console.log("Reading file...");
    let content = fs.readFileSync(filePath, 'utf8');
    console.log(`Loaded ${content.length} characters.`);

    // Find the marker:
    // </AnimatePresence>
    //                 <h1 className="text-2xl font-black text-maintext tracking-tight">{t('adminDashboard')}</h1>
    // Wait, let's check what exactly is there. We can use a regex to match it.
    
    const targetPattern = /<\/AnimatePresence>\s+<h1 className="text-2xl font-black text-maintext tracking-tight">\{t\('adminDashboard'\)\}<\/h1>\s+<p className="text-xs text-subtext font-semibold uppercase tracking-wider">\{t\('platformManagementConsole'\)\}<\/p>\s+<\/div>\s+<\/div>/;
    
    if (content.match(targetPattern)) {
        console.log("Found pattern using regex!");
    } else {
        console.log("Pattern not found with default regex. Let's do a search for lines.");
    }

    // Let's do split by line and find where '<h1 className="text-2xl font-black text-maintext tracking-tight">{t(\'adminDashboard\')}' is.
    const lines = content.split(/\r?\n/);
    let h1LineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("<h1 className=\"text-2xl font-black text-maintext tracking-tight\">{t('adminDashboard')}</h1>")) {
            h1LineIdx = i;
            break;
        }
    }

    if (h1LineIdx === -1) {
        console.error("Could not find the h1 tag for adminDashboard!");
        return;
    }

    console.log(`Found h1 tag at line index: ${h1LineIdx}`);
    // Check if the preceding line is AnimatePresence
    console.log(`Preceding lines:`);
    for (let i = Math.max(0, h1LineIdx - 5); i <= h1LineIdx; i++) {
        console.log(`${i}: ${lines[i]}`);
    }

    // Now, we want to replace the transition area.
    // Specifically, between the end of the ChatSessionsTab (which ends around the closing of the Send Email Modal)
    // and the start of AdminDashboard header.
    // The Send Email Modal has </AnimatePresence> around line 2146.
    // So lines[h1LineIdx - 1] is </AnimatePresence>.
    // Let's insert the missing closing of ChatSessionsTab and opening of AdminDashboard.
    
    const closingAndOpening = `            </AnimatePresence>
        </div>
    );
};

const AdminDashboard = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('overview');
    const navigate = useNavigate();

    // Verify admin access
    const user = getUserData();
    const isAdmin = user?.token && (user?.email === ADMIN_EMAIL || user?.role === 'admin');

    useEffect(() => {
        if (!isAdmin) {
            navigate('/dashboard/chat', { replace: true });
        }
    }, [isAdmin, navigate]);

    if (!isAdmin) return null;

    const tabs = [
        { id: 'overview', label: t('overview'), icon: BarChart3 },
        { id: 'users', label: t('users'), icon: Users },
        { id: 'chat-sessions', label: 'Chat Sessions', icon: MessageSquare },
        { id: 'plans', label: t('plans'), icon: CreditCard },
        { id: 'tool-limit', label: t('toolLimit') || 'Tool Limit', icon: Shield },
        { id: 'legal', label: t('legalPages'), icon: FileText },
        { id: 'helpdesk', label: t('helpDesk'), icon: Headphones },
        { id: 'knowledge', label: t('knowledge'), icon: BookOpen },
        { id: 'settings', label: t('settings'), icon: Settings },
    ];

    const renderTab = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'users': return <UsersTab />;
            case 'chat-sessions': return <ChatSessionsTab />;
            case 'plans': return <PlansTab />;
            case 'tool-limit': return <ToolLimitTab />;
            case 'legal': return <LegalPagesTab />;
            case 'helpdesk': return <AdminHelpDesk isOpen={true} isEmbedded={true} />;
            case 'knowledge': return <KnowledgeBaseTab />;
            case 'settings': return <SettingsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-7xl mx-auto p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden shrink-0">
                            <img src={logo} alt="AISA" className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
                        </div>
                        <div className="min-w-0">`;

    // We will replace from `            </AnimatePresence>` at lines[h1LineIdx - 1] (or lines[h1LineIdx - 2])
    // up to the start of the `h1` parent tags.
    // Let's print out exactly from h1LineIdx - 4 to h1LineIdx + 4 to be absolutely sure.
    
    // We want to delete:
    // lines[h1LineIdx - 1] (which is </AnimatePresence>)
    // And insert closingAndOpening, then keep the rest from h1LineIdx onwards.
    
    // Wait, let's verify if lines[h1LineIdx - 1] contains </AnimatePresence>
    if (lines[h1LineIdx - 1].includes("</AnimatePresence>")) {
        console.log("Replacing at lines[h1LineIdx - 1]");
        lines[h1LineIdx - 1] = closingAndOpening;
    } else if (lines[h1LineIdx - 2].includes("</AnimatePresence>")) {
        console.log("Replacing at lines[h1LineIdx - 2]");
        lines[h1LineIdx - 2] = closingAndOpening;
        lines[h1LineIdx - 1] = ""; // clear the line in between
    } else {
        console.error("Could not locate </AnimatePresence> preceding h1 tag!");
        return;
    }

    // Now let's join and save.
    const result = lines.filter(l => l !== null).join('\n');
    fs.writeFileSync(filePath, result, 'utf8');
    console.log("Successfully fixed component boundary!");
}

fix();
