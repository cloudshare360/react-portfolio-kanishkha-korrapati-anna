const fs = require('fs');
const zlib = require('zlib');

function decodeLiteral(value) {
  return value.replace(/\\([0-7]{1,3}|n|r|t|b|f|\\|\(|\))/g, (_, token) => {
    if (/^[0-7]/.test(token)) return String.fromCharCode(parseInt(token, 8));
    return { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', '\\': '\\', '(': '(', ')': ')' }[token];
  });
}

function stringsFromContent(content) {
  const blocks = content.match(/BT[\s\S]*?ET/g) || [];
  const lines = [];
  for (const block of blocks) {
    const chunks = [];
    const re = /\(((?:\\.|[^\\)])*)\)|<([0-9A-Fa-f]+)>/g;
    let match;
    while ((match = re.exec(block))) {
      if (match[1] !== undefined) chunks.push(decodeLiteral(match[1]));
      else {
        const hex = match[2];
        const bytes = Buffer.from(hex, 'hex');
        const utf16 = hex.length >= 4 && (hex.startsWith('FEFF') || bytes.every((b, i) => i % 2 || b === 0));
        chunks.push(utf16 ? bytes.subarray(hex.startsWith('FEFF') ? 2 : 0).swap16().toString('utf16le') : bytes.toString('latin1'));
      }
    }
    const text = chunks.join('').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim();
    if (text) lines.push(text);
  }
  return lines;
}

for (const filename of process.argv.slice(2)) {
  const source = fs.readFileSync(filename);
  const binary = source.toString('latin1');
  const output = [];
  const streamRe = /<<(.*?)>>\s*stream\r?\n/gms;
  let match;
  while ((match = streamRe.exec(binary))) {
    const start = match.index + match[0].length;
    const end = binary.indexOf('endstream', start);
    if (end < 0) break;
    let bytes = source.subarray(start, end).subarray(0, Math.max(0, end - start - (binary[end - 1] === '\n' ? 1 : 0)));
    try {
      if (/\/FlateDecode/.test(match[1])) bytes = zlib.inflateSync(bytes);
      output.push(...stringsFromContent(bytes.toString('latin1')));
    } catch (_) {}
    streamRe.lastIndex = end + 9;
  }
  console.log(`===== ${filename} =====`);
  console.log(output.join('\n'));
}
