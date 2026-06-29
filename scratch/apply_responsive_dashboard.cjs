const fs = require('fs');

const filePath = 'H:\\aisa_app\\AISA_New\\src\\pages\\AdminDashboard.jsx';

function apply() {
    console.log("Reading file...");
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Container padding and space
    content = content.replace(
        '            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">',
        '            <div className="max-w-7xl mx-auto p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-6">'
    );

    // 2. Header wrap and gap
    content = content.replace(
        '                <div className="flex items-center justify-between flex-wrap gap-4">',
        '                <div className="flex items-center justify-between flex-wrap gap-3">'
    );

    // 3. Logo container size
    content = content.replace(
        '                        <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden">',
        '                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden shrink-0">'
    );

    // 4. Logo image size
    content = content.replace(
        '                            <img src={logo} alt="AISA" className="w-9 h-9 object-contain" />',
        '                            <img src={logo} alt="AISA" className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />'
    );

    // 5. Header title and subtext sizes
    content = content.replace(
        '                            <h1 className="text-2xl font-black text-maintext tracking-tight">{t(\'adminDashboard\')}</h1>',
        '                            <h1 className="text-xl sm:text-2xl font-black text-maintext tracking-tight">{t(\'adminDashboard\')}</h1>'
    );
    content = content.replace(
        '                            <p className="text-xs text-subtext font-semibold uppercase tracking-wider">{t(\'platformManagementConsole\')}</p>',
        '                            <p className="text-[10px] sm:text-xs text-subtext font-semibold uppercase tracking-wider hidden sm:block">{t(\'platformManagementConsole\')}</p>'
    );

    // 6. Back button responsiveness
    content = content.replace(
        `                    <button
                        onClick={() => navigate('/dashboard/chat')}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/20 dark:border-white/10"
                    >
                        <ArrowLeft className="w-4 h-4" /> {t('backToChat')}
                    </button>`,
        `                    <button
                        onClick={() => navigate('/dashboard/chat')}
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/20 dark:border-white/10 shrink-0"
                    >
                        <ArrowLeft className="w-4 h-4" /> <span className="hidden xs:inline sm:inline">{t('backToChat')}</span>
                    </button>`
    );

    // 7. Tab container responsiveness
    content = content.replace(
        '                <div className="flex items-center gap-2 overflow-x-auto pb-2 admin-horizontal-scrollbar">',
        '                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 admin-horizontal-scrollbar scrollbar-hide">'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Responsive layout styles successfully updated!");
}

apply();
