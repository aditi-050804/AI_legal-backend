import fs from 'fs';

const content = fs.readFileSync('h:/aisa_app/AISA_New/src/pages/Chat.jsx', 'utf8');
const lines = content.split('\n');
let openDivs = [];

for (let i = 7153; i < 7751; i++) {
  const line = lines[i];
  const matches = line.match(/<\/?div\b[^>]*>/g) || [];
  matches.forEach(match => {
    if (match.startsWith('</')) {
      if (openDivs.length > 0) {
        openDivs.pop();
      } else {
        console.log(`Extra close div at line ${i+1}`);
      }
    } else if (!match.endsWith('/>')) {
      openDivs.push({ line: i+1, tag: match });
    }
  });
  if (i + 1 >= 7420 && i + 1 <= 7450) {
    console.log(`${i+1}: open divs count = ${openDivs.length}. Stack lines: [${openDivs.map(d => d.line).join(', ')}]  // ${line.trim().substring(0, 35)}`);
  }
}
