import fs from 'fs';

const content = fs.readFileSync('h:/aisa_app/AISA_New/src/pages/Chat.jsx', 'utf8');

// Let's extract the block we are interested in.
// We can locate it by finding unique markers.
const startIndex = content.indexOf('msg-text-');
if (startIndex === -1) {
  console.log("Could not find msg-text-");
  process.exit(1);
}

// Let's run a state-based XML parser/tokenizer to track divs and tags.
let pos = startIndex;
let stack = [];
let lineNum = content.substring(0, pos).split('\n').length;

while (pos < content.length) {
  const char = content[pos];
  if (char === '\n') {
    lineNum++;
  }
  
  if (char === '<') {
    // Check if comment
    if (content.startsWith('<!--', pos)) {
      pos = content.indexOf('-->', pos) + 3;
      continue;
    }
    // Check if javascript comment or expression in JSX
    // (We just want simple HTML tag parsing)
    const nextChar = content[pos + 1];
    if (/[a-zA-Z/]/.test(nextChar)) {
      // Find end of tag
      let endPos = pos;
      let inQuote = false;
      let quoteChar = null;
      while (endPos < content.length) {
        const c = content[endPos];
        if (c === '"' || c === "'") {
          if (!inQuote) {
            inQuote = true;
            quoteChar = c;
          } else if (c === quoteChar) {
            inQuote = false;
          }
        }
        if (!inQuote && c === '>') {
          break;
        }
        endPos++;
      }
      
      const tagContent = content.substring(pos, endPos + 1);
      pos = endPos;
      
      // Is it a closing tag?
      if (tagContent.startsWith('</')) {
        const tagName = tagContent.replace(/[<\/>]/g, '').trim().split(/\s+/)[0];
        if (stack.length > 0) {
          const top = stack.pop();
          if (top.name !== tagName) {
            console.log(`[Line ${lineNum}] Error: Closed </${tagName}> but expected </${top.name}> (opened on line ${top.line})`);
          }
        } else {
          console.log(`[Line ${lineNum}] Error: Closed </${tagName}> but stack is empty`);
        }
      } else if (tagContent.endsWith('/>')) {
        // Self closing, do nothing
      } else {
        const tagName = tagContent.replace(/[<>]/g, '').trim().split(/\s+/)[0];
        // Ignore standard self-closing tags like input, img, br, hr
        if (!['img', 'input', 'br', 'hr', 'link'].includes(tagName.toLowerCase())) {
          stack.push({ name: tagName, line: lineNum });
        }
      }
    }
  }
  pos++;
}

console.log("Remaining stack:", stack);
