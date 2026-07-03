import fs from 'fs';
import path from 'path';

const searchDirs = [
  'C:/Users/USER/Desktop/aisa/AISA_New/src/Tools/AI_Legal'
];

const corruptions = [
  'âœ“', 'âš–', 'ðŸ‘‹', 'â€¢', 'Ã©', 'â€“', 'â€™', 'âœ…', 'Ãš', 'âš–ï¸ ', 'Ã¢', 'Ãœ', 'Ã–', 'â€™'
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          for (const corr of corruptions) {
            if (line.includes(corr)) {
              console.log(`${file}:${index + 1}: found "${corr}" inside line: ${line.trim()}`);
            }
          }
        });
      }
    }
  }
}

for (const dir of searchDirs) {
  scanDir(dir);
}
