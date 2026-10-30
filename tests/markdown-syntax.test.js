const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllMarkdownFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'TEST_AUDIT_REPORT.md') continue;
    if (entry.isDirectory()) {
      getAllMarkdownFiles(fullPath, fileList);
    } else if (entry.name.endsWith('.md')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

describe('Markdown Syntax & Heading Formatting', () => {
  const mdFiles = getAllMarkdownFiles(ROOT_DIR);

  for (const filePath of mdFiles) {
    const relFile = path.relative(ROOT_DIR, filePath);
    test(`headings formatting in ${relFile}`, () => {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split(/\r?\n/);
      const invalidHeadings = [];

      let inCodeBlock = false;
      lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          return;
        }
        if (inCodeBlock) return;

        // Check if line starts with '#' but is followed directly by an alphanumeric char instead of a space
        if (/^#{1,6}[A-Za-z0-9]/.test(trimmed)) {
          invalidHeadings.push({ line: index + 1, content: trimmed });
        }
      });

      assert.deepEqual(
        invalidHeadings,
        [],
        `Invalid heading syntax (missing space after #) in ${relFile}: ${JSON.stringify(invalidHeadings, null, 2)}`
      );
    });
  }
});
