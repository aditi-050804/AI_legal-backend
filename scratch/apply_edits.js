import fs from 'fs';

const targetPath = 'H:\\aisa_app\\AISA_New\\src\\pages\\AdminDashboard.jsx';

function run() {
    console.log("Reading AdminDashboard.jsx...");
    let lines = fs.readFileSync(targetPath, 'utf8').split('\n');
    console.log(`File loaded. Total lines: ${lines.length}`);

    // Find the Send Email Modal block boundaries
    let modalStart = -1, modalEnd = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('{/* Send Email Modal */}') && modalStart === -1) {
            modalStart = i;
        }
        if (modalStart !== -1 && i > modalStart && lines[i].trimEnd() === '            </AnimatePresence>') {
            modalEnd = i;
            break;
        }
    }

    console.log(`Modal block: lines ${modalStart + 1} to ${modalEnd + 1}`);
    if (modalStart === -1 || modalEnd === -1) {
        console.error("❌ Could not find modal block!");
        return;
    }

    // Extract the modal block
    const modalBlock = lines.slice(modalStart, modalEnd + 1);
    console.log("Modal block extracted.");

    // Find ChatSessionsTab component closing "</AnimatePresence>"
    // We know ChatSessionsTab starts around line 1629 (1-indexed)
    // The last </AnimatePresence> before "const AdminDashboard" is the one we want
    let chatTabEnd = -1;
    let adminDashboardLine = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('const AdminDashboard') && adminDashboardLine === -1) {
            adminDashboardLine = i;
        }
        if (adminDashboardLine !== -1 && i < adminDashboardLine && lines[i].trimEnd() === '            </AnimatePresence>') {
            chatTabEnd = i;
            break;
        }
    }

    console.log(`ChatSessionsTab closing </AnimatePresence>: line ${chatTabEnd + 1}`);
    console.log(`AdminDashboard const: line ${adminDashboardLine + 1}`);

    if (chatTabEnd === -1) {
        console.error("❌ Could not find ChatSessionsTab closing AnimatePresence!");
        return;
    }

    // Make sure modal is NOT already in ChatSessionsTab
    if (modalStart > chatTabEnd) {
        console.log("✅ Modal is already in ChatSessionsTab (after line " + (chatTabEnd + 1) + "). No action needed.");
        return;
    }

    // Remove modal from current location
    lines.splice(modalStart, modalEnd - modalStart + 1);
    console.log(`✅ Removed modal block from lines ${modalStart + 1}-${modalEnd + 1}`);

    // Recalculate chatTabEnd after removal
    chatTabEnd = -1;
    adminDashboardLine = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('const AdminDashboard') && adminDashboardLine === -1) {
            adminDashboardLine = i;
        }
        if (adminDashboardLine !== -1 && i < adminDashboardLine && lines[i].trimEnd() === '            </AnimatePresence>') {
            chatTabEnd = i;
            break;
        }
    }
    console.log(`New ChatSessionsTab closing </AnimatePresence>: line ${chatTabEnd + 1}`);

    // Insert modal block after chatTabEnd
    const insertAt = chatTabEnd + 1;
    const emptyLine = '';
    lines.splice(insertAt, 0, emptyLine, ...modalBlock);
    console.log(`✅ Inserted modal block after line ${chatTabEnd + 1}`);

    // Write the file
    const result = lines.join('\n');
    fs.writeFileSync(targetPath, result, 'utf8');
    console.log(`\n✅ Done! Final file size: ${result.length} bytes`);
    console.log(`Total lines: ${lines.length}`);
}

run();
