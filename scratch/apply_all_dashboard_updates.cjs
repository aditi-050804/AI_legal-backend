const fs = require('fs');

const filePath = 'H:\\aisa_app\\AISA_New\\src\\pages\\AdminDashboard.jsx';

function applyAll() {
    console.log("Reading AdminDashboard.jsx...");
    let content = fs.readFileSync(filePath, 'utf8');
    // Normalize line endings to LF for clean processing
    content = content.replace(/\r\n/g, '\n');
    let lines = content.split('\n');
    console.log(`Loaded file: ${lines.length} lines.`);

    // 1. Add Mail to lucide-react imports
    console.log("Applying Lucide React import update...");
    let importLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('User as UserIcon') && lines[i].includes('Bot') && lines[i].includes('Calendar')) {
            importLineIdx = i;
            break;
        }
    }
    if (importLineIdx !== -1) {
        if (!lines[importLineIdx].includes('Mail')) {
            // Check if there is trailing comma or not
            if (lines[importLineIdx].trim().endsWith(',')) {
                lines[importLineIdx] = lines[importLineIdx].replace('Calendar,', 'Calendar, Mail,');
            } else {
                lines[importLineIdx] = lines[importLineIdx].replace('Calendar', 'Calendar, Mail');
            }
            console.log("-> Success at line", importLineIdx + 1);
        } else {
            console.log("-> Mail already in imports");
        }
    } else {
        console.error("-> Lucide import line not found!");
    }

    // 2. Add TabButton responsiveness
    console.log("Applying TabButton responsiveness changes...");
    let tabButtonStart = -1;
    let tabButtonEnd = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const TabButton =')) {
            tabButtonStart = i;
        }
        if (tabButtonStart !== -1 && i > tabButtonStart && lines[i].trim() === ');') {
            tabButtonEnd = i;
            break;
        }
    }
    if (tabButtonStart !== -1 && tabButtonEnd !== -1) {
        const tabButtonReplacement = [
            `const TabButton = ({ active, icon: Icon, label, onClick }) => (`,
            `    <button`,
            `        onClick={onClick}`,
            `        title={label}`,
            `        className={\`flex items-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap \${active`,
            `            ? 'bg-primary text-white shadow-lg shadow-primary/30'`,
            `            : 'text-subtext hover:bg-white/20 dark:hover:bg-white/10 hover:text-maintext'`,
            `            }\`}`,
            `    >`,
            `        <Icon className="w-4 h-4 shrink-0" />`,
            `        <span className="hidden sm:inline">{label}</span>`,
            `    </button>`,
            `);`
        ];
        lines.splice(tabButtonStart, tabButtonEnd - tabButtonStart + 1, ...tabButtonReplacement);
        console.log(`-> Success. Replaced lines ${tabButtonStart + 1} to ${tabButtonEnd + 1}`);
    } else {
        console.error("-> TabButton component bounds not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 3. Add mailModal state and handlers inside ChatSessionsTab
    console.log("Applying ChatSessionsTab states and handlers...");
    let chatTabStateIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const ChatSessionsTab =') || lines[i].includes('const ChatSessionsTab = () => {')) {
            // Find the state variables block
            for (let j = i; j < i + 30; j++) {
                if (lines[j].includes('const [detailLoading, setDetailLoading]')) {
                    chatTabStateIdx = j;
                    break;
                }
            }
            break;
        }
    }
    if (chatTabStateIdx !== -1) {
        const handlerBlock = [
            `    const [mailModal, setMailModal] = useState({ isOpen: false, email: '', subject: '', message: '', sending: false });`,
            ``,
            `    const handleOpenMailModal = (email) => {`,
            `        setMailModal({`,
            `            isOpen: true,`,
            `            email: email || '',`,
            `            subject: 'Notification from AISA Admin',`,
            `            message: '',`,
            `            sending: false`,
            `        });`,
            `    };`,
            ``,
            `    const handleSendMail = async (e) => {`,
            `        e.preventDefault();`,
            `        if (!mailModal.email || !mailModal.message) {`,
            `            toast.error('Recipient email and message are required.');`,
            `            return;`,
            `        }`,
            `        setMailModal(prev => ({ ...prev, sending: true }));`,
            `        try {`,
            `            const res = await apiService.sendEmailToUser({`,
            `                toEmail: mailModal.email,`,
            `                subject: mailModal.subject || 'Message from AISA Admin',`,
            `                message: mailModal.message`,
            `            });`,
            `            if (res.success) {`,
            `                toast.success('Email sent successfully!');`,
            `                setMailModal({ isOpen: false, email: '', subject: '', message: '', sending: false });`,
            `            } else {`,
            `                toast.error(res.message || 'Failed to send email.');`,
            `            }`,
            `        } catch (err) {`,
            `            toast.error(err.response?.data?.message || 'Failed to send email.');`,
            `        } finally {`,
            `            setMailModal(prev => ({ ...prev, sending: false }));`,
            `        }`,
            `    };`
        ];
        lines.splice(chatTabStateIdx + 1, 0, ...handlerBlock);
        console.log("-> Success at line", chatTabStateIdx + 2);
    } else {
        console.error("-> ChatSessionsTab state block not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 4. Hover email button inside sessions table row
    console.log("Applying hover email button to table row...");
    let emailCellIdx = -1;
    // We want the td that displays s.userEmail
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('{s.userEmail ||') && lines[i].includes('whitespace-nowrap')) {
            // Find the opening td above it
            if (lines[i - 1].includes('<td className="px-4 py-3">')) {
                emailCellIdx = i - 1;
                break;
            }
        }
    }
    if (emailCellIdx !== -1) {
        const replacement = [
            `                                        <td className="px-4 py-3">`,
            `                                            <div className="flex items-center gap-2">`,
            `                                                <span className="text-subtext text-xs whitespace-nowrap">{s.userEmail || '—'}</span>`,
            `                                                {s.userEmail && s.userEmail !== '—' && (`,
            `                                                    <button`,
            `                                                        onClick={(e) => {`,
            `                                                            e.stopPropagation();`,
            `                                                            handleOpenMailModal(s.userEmail);`,
            `                                                        }}`,
            `                                                        className="p-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"`,
            `                                                        title="Send Email to User"`,
            `                                                    >`,
            `                                                        <Mail className="w-3 h-3" />`,
            `                                                    </button>`,
            `                                                )}`,
            `                                            </div>`,
            `                                        </td>`
        ];
        lines.splice(emailCellIdx, 3, ...replacement);
        console.log("-> Success at line", emailCellIdx + 1);
    } else {
        console.error("-> Table email cell not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 5. Send Email Modal and detail drawer wrapper in ChatSessionsTab
    console.log("Applying Send Email Modal...");
    let chatTabEndIdx = -1;
    let adminDashboardStartIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const AdminDashboard =') || lines[i].includes('const AdminDashboard = () => {')) {
            adminDashboardStartIdx = i;
            break;
        }
    }
    if (adminDashboardStartIdx !== -1) {
        // Search backwards to find the last </AnimatePresence> before AdminDashboard
        for (let j = adminDashboardStartIdx - 1; j >= adminDashboardStartIdx - 30; j--) {
            if (lines[j].includes('</AnimatePresence>')) {
                chatTabEndIdx = j;
                break;
            }
        }
    }
    if (chatTabEndIdx !== -1) {
        const modalBlock = [
            `            </AnimatePresence>`,
            ``,
            `            {/* Send Email Modal */}`,
            `            <AnimatePresence>`,
            `                {mailModal.isOpen && (`,
            `                    <motion.div`,
            `                        initial={{ opacity: 0 }}`,
            `                        animate={{ opacity: 1 }}`,
            `                        exit={{ opacity: 0 }}`,
            `                        className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"`,
            `                        onClick={() => setMailModal(prev => ({ ...prev, isOpen: false }))}`,
            `                    >`,
            `                        <motion.div`,
            `                            initial={{ opacity: 0, scale: 0.95, y: 20 }}`,
            `                            animate={{ opacity: 1, scale: 1, y: 0 }}`,
            `                            exit={{ opacity: 0, scale: 0.95, y: 20 }}`,
            `                            className="bg-white dark:bg-[#12141a] border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-lg p-6 relative overflow-hidden"`,
            `                            onClick={e => e.stopPropagation()}`,
            `                        >`,
            `                            <div className="flex items-center justify-between mb-6">`,
            `                                <div className="flex items-center gap-3">`,
            `                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">`,
            `                                        <Mail className="w-5 h-5 text-primary" />`,
            `                                    </div>`,
            `                                    <div>`,
            `                                        <h3 className="font-bold text-maintext text-lg font-bold">Send Email to User</h3>`,
            `                                        <p className="text-xs text-subtext">Direct communication from AISA™ Admin</p>`,
            `                                    </div>`,
            `                                </div>`,
            `                                <button`,
            `                                    onClick={() => setMailModal(prev => ({ ...prev, isOpen: false }))}`,
            `                                    className="p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all"`,
            `                                >`,
            `                                    <X className="w-4 h-4" />`,
            `                                </button>`,
            `                            </div>`,
            ``,
            `                            <form onSubmit={handleSendMail} className="space-y-4">`,
            `                                <div className="flex flex-col gap-1.5">`,
            `                                    <label className="text-[10px] font-bold text-subtext uppercase tracking-wider">To</label>`,
            `                                    <input`,
            `                                        type="email"`,
            `                                        readOnly`,
            `                                        disabled`,
            `                                        value={mailModal.email}`,
            `                                        className="w-full bg-white/20 dark:bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-subtext outline-none cursor-not-allowed"`,
            `                                    />`,
            `                                </div>`,
            ``,
            `                                <div className="flex flex-col gap-1.5">`,
            `                                    <label className="text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold">Subject</label>`,
            `                                    <input`,
            `                                        type="text"`,
            `                                        required`,
            `                                        value={mailModal.subject}`,
            `                                        onChange={e => setMailModal(prev => ({ ...prev, subject: e.target.value }))}`,
            `                                        className="w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all"`,
            `                                        placeholder="Enter email subject..."`,
            `                                    />`,
            `                                </div>`,
            ``,
            `                                <div className="flex flex-col gap-1.5">`,
            `                                    <label className="text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold font-bold">Message</label>`,
            `                                    <textarea`,
            `                                        required`,
            `                                        rows={6}`,
            `                                        value={mailModal.message}`,
            `                                        onChange={e => setMailModal(prev => ({ ...prev, message: e.target.value }))}`,
            `                                        className="w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all resize-none"`,
            `                                        placeholder="Write your email message here..."`,
            `                                    />`,
            `                                </div>`,
            ``,
            `                                <div className="flex justify-end gap-3 pt-4 border-t border-white/10 mt-6">`,
            `                                    <button`,
            `                                        type="button"`,
            `                                        onClick={() => setMailModal(prev => ({ ...prev, isOpen: false }))}`,
            `                                        className="px-5 py-2.5 rounded-xl text-sm font-bold text-subtext hover:text-maintext transition-all hover:bg-white/5"`,
            `                                    >`,
            `                                        Cancel`,
            `                                    </button>`,
            `                                    <button`,
            `                                        type="submit"`,
            `                                        disabled={mailModal.sending}`,
            `                                        className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"`,
            `                                    >`,
            `                                        {mailModal.sending ? (`,
            `                                            <>`,
            `                                                <RefreshCw className="w-4 h-4 animate-spin" />`,
            `                                                Sending...`,
            `                                            </>`,
            `                                        ) : (`,
            `                                            <>`,
            `                                                <Mail className="w-4 h-4" />`,
            `                                                Send Email`,
            `                                            </>`,
            `                                        )}`,
            `                                    </button>`,
            `                                </div>`,
            `                            </form>`,
            `                        </motion.div>`,
            `                    </motion.div>`,
            `                )}`
        ];
        lines.splice(chatTabEndIdx, 1, ...modalBlock);
        console.log("-> Success at line", chatTabEndIdx + 1);
    } else {
        console.error("-> ChatSessionsTab closing tag for modal insertion not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 6. UsersTab manual upgrade section responsiveness
    console.log("Applying UsersTab manual upgrade section responsiveness...");
    let upgradeDivIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('value={upgradeData.planName}') && lines[i].includes('<select')) {
            // Find the opening <div className="flex items-center gap-2"> above it
            for (let j = i - 1; j >= i - 5; j--) {
                if (lines[j].includes('className="flex items-center gap-2"')) {
                    upgradeDivIdx = j;
                    break;
                }
            }
            break;
        }
    }
    if (upgradeDivIdx !== -1) {
        lines[upgradeDivIdx] = lines[upgradeDivIdx].replace('className="flex items-center gap-2"', 'className="flex flex-wrap items-center gap-2"');
        // Now find the select and inputs inside it and add flex-1 min-w-[120px]
        for (let k = upgradeDivIdx + 1; k < upgradeDivIdx + 20; k++) {
            if (lines[k].includes('<select')) {
                lines[k] = lines[k].replace('className="', 'className="flex-1 min-w-[120px] ');
            }
            if (lines[k].includes('<input')) {
                lines[k] = lines[k].replace('className="', 'className="flex-1 min-w-[120px] ');
            }
            if (lines[k].includes('className="px-3 py-1.5 bg-primary')) {
                lines[k] = lines[k].replace('className="', 'className="whitespace-nowrap ');
            }
            if (lines[k].includes('</div>') && lines[k].trim() === '</div>') {
                break;
            }
        }
        console.log("-> Success at line", upgradeDivIdx + 1);
    } else {
        console.error("-> UsersTab manual upgrade container not found!");
    }

    // 7. ChatSessionsTab filters container layout responsiveness
    console.log("Applying ChatSessionsTab filters container responsiveness...");
    let filterParentIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('placeholder="Search by name, email or session ID…"')) {
            // Trace back to find parent div with p-4
            for (let j = i - 1; j >= i - 10; j--) {
                if (lines[j].includes('className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-4"')) {
                    filterParentIdx = j;
                    break;
                }
            }
            break;
        }
    }
    if (filterParentIdx !== -1) {
        lines[filterParentIdx] = lines[filterParentIdx].replace('p-4"', 'p-3 sm:p-4"');
        lines[filterParentIdx + 1] = lines[filterParentIdx + 1].replace('flex flex-wrap gap-3 items-end', 'flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-stretch sm:items-end');
        lines[filterParentIdx + 3] = lines[filterParentIdx + 3].replace('className="relative flex-1 min-w-48"', 'className="relative w-full sm:flex-1 sm:min-w-48"');
        console.log("-> Success at line", filterParentIdx + 1);

        // Now wrap the rest of the status, mode, from, to filters inside a flex flex-wrap container
        // We will find the closing tag of the Search filter, and insert:
        // `                    <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto items-end">`
        let searchClosingIdx = -1;
        for (let k = filterParentIdx + 4; k < filterParentIdx + 20; k++) {
            if (lines[k].trim() === '</div>' && lines[k - 1].includes('/>')) {
                searchClosingIdx = k;
                break;
            }
        }
        if (searchClosingIdx !== -1) {
            lines.splice(searchClosingIdx + 1, 0, `                    {/* Filters row - wraps on mobile */}`, `                    <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto items-end">`);
            
            // Adjust all filter wrappers inside it: add flex-1 min-w-[120px] or min-w-[110px]
            // And then close the wrapper before the outer filter div closing tag
            // Let's find where the outer filters div ends: it has a closing </div> right before the <table> container or similarly
            // We want to close our new div right before the clear button or the closing </div> of the main filter row
            // Let's locate the main filters row closing </div>. We know it starts at filterParentIdx.
            // In the clean file, there are 4 filters (Status, Mode, From, To) and then the Clear button.
            // Each filter is wrapped in <div className="flex flex-col gap-1">.
            // Let's modify those wrappers to: <div className="flex flex-col gap-1 flex-1 min-w-[120px]"> (Status & Mode)
            // and min-w-[110px] for From & To inputs.
            let outerClosingIdx = -1;
            let currentFilterCount = 0;
            for (let m = searchClosingIdx + 2; m < lines.length; m++) {
                if (lines[m].includes('className="flex flex-col gap-1"')) {
                    currentFilterCount++;
                    if (currentFilterCount <= 2) {
                        lines[m] = lines[m].replace('className="flex flex-col gap-1"', 'className="flex flex-col gap-1 flex-1 min-w-[120px]"');
                    } else {
                        lines[m] = lines[m].replace('className="flex flex-col gap-1"', 'className="flex flex-col gap-1 flex-1 min-w-[110px]"');
                    }
                    // Also adjust select and input sizes inside them to text-xs sm:text-sm and px-2 sm:px-3
                    for (let n = m + 1; n < m + 15; n++) {
                        if (lines[n].includes('<select') || lines[n].includes('<input')) {
                            lines[n] = lines[n].replace('text-sm', 'text-xs sm:text-sm px-2 sm:px-3');
                            break;
                        }
                    }
                }
                
                // Clear button parent div is not there, it's just self-contained.
                // We want to insert the closing tag `                    </div>` right before the Clear button check:
                // `                    {(search || filterStatus || filterMode || dateFrom || dateTo) && (`
                if (lines[m].includes('{(search || filterStatus || filterMode || dateFrom || dateTo) && (')) {
                    outerClosingIdx = m;
                    break;
                }
            }
            if (outerClosingIdx !== -1) {
                lines.splice(outerClosingIdx, 0, `                    </div>`);
                console.log("-> Success wrapping filter items at line", outerClosingIdx + 1);
            }
        }
    } else {
        console.error("-> ChatSessionsTab filters container not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 8. ChatSessionsTab table min-width scroll container responsiveness
    console.log("Applying ChatSessionsTab table min-width responsiveness...");
    let tableDivIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<table') && lines[i].includes('className="w-full text-sm"')) {
            if (lines[i - 1].includes('className="overflow-x-auto"')) {
                tableDivIdx = i - 1;
                break;
            }
        }
    }
    if (tableDivIdx !== -1) {
        lines[tableDivIdx] = lines[tableDivIdx].replace('className="overflow-x-auto"', 'className="overflow-x-auto -mx-px"');
        lines[tableDivIdx + 1] = lines[tableDivIdx + 1].replace('className="w-full text-sm"', 'className="w-full min-w-[720px] text-sm"');
        console.log("-> Success at line", tableDivIdx + 1);
    } else {
        console.error("-> ChatSessionsTab table container not found!");
    }

    // Recalculate line offsets
    content = lines.join('\n');
    lines = content.split('\n');

    // 9. Back to Chat button responsiveness inside AdminDashboard
    console.log("Applying Back to Chat button responsiveness...");
    let backBtnIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('onClick={() => navigate(\'/dashboard/chat\')}') && lines[i].includes('className="flex items-center gap-2')) {
            backBtnIdx = i;
            break;
        }
    }
    if (backBtnIdx !== -1) {
        lines[backBtnIdx] = lines[backBtnIdx].replace('className="flex items-center gap-2 px-4 py-2', 'className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 shrink-0 text-xs sm:text-sm');
        // Replace the content inside button
        if (lines[backBtnIdx + 1].includes('<ArrowLeft') && lines[backBtnIdx + 2].includes('{t(\'backToChat\')}')) {
            lines[backBtnIdx + 2] = `                        <span className="hidden xs:inline sm:inline">{t('backToChat')}</span>`;
            console.log("-> Success at line", backBtnIdx + 1);
        }
    } else {
        console.error("-> Back to Chat button not found!");
    }

    console.log("Writing final file...");
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done updating AdminDashboard.jsx!");
}

applyAll();
