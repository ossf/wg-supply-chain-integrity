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

function verifyCaseSensitivePathExists(root, targetRelPath) {
  // Normalize path segments
  const cleanPath = targetRelPath.replace(/^\/+/, '').split('#')[0].split('?')[0];
  if (!cleanPath) return true; // anchor-only link

  const segments = cleanPath.split(/[/\\]/);
  let current = root;

  for (const segment of segments) {
    if (!segment || segment === '.') continue;
    if (segment === '..') {
      current = path.dirname(current);
      continue;
    }

    if (!fs.existsSync(current)) return false;
    const entries = fs.readdirSync(current);
    // Strict exact case comparison
    if (!entries.includes(segment)) {
      return false;
    }
    current = path.join(current, segment);
  }

  return true;
}

describe('Markdown Link Integrity & Resolution', () => {
  const mdFiles = getAllMarkdownFiles(ROOT_DIR);

  for (const filePath of mdFiles) {
    const relFile = path.relative(ROOT_DIR, filePath);
    test(`check local/relative links in ${relFile}`, () => {
      // Strip code blocks and inline code snippets so documentation examples are not checked as real links
      const cleanContent = fs.readFileSync(filePath, 'utf8')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`\n]+`/g, '');

      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      const brokenLinks = [];

      while ((match = linkRegex.exec(cleanContent)) !== null) {
        const linkText = match[1];
        const rawUrl = match[2].trim();

        // Skip external URLs, file URIs, mailto, and in-page anchors
        if (/^(https?:\/\/|file:\/\/|mailto:|#)/i.test(rawUrl)) {
          continue;
        }

        // Check if rawUrl starts with root /
        let fileDir = path.dirname(filePath);
        let resolvedCheck;

        if (rawUrl.startsWith('/')) {
          // Repo-root relative link
          resolvedCheck = verifyCaseSensitivePathExists(ROOT_DIR, rawUrl.slice(1));
        } else {
          // Relative to current file
          resolvedCheck = verifyCaseSensitivePathExists(fileDir, rawUrl);
        }

        if (!resolvedCheck) {
          brokenLinks.push({ linkText, rawUrl });
        }
      }

      assert.deepEqual(
        brokenLinks,
        [],
        `Broken or case-mismatched links in ${relFile}: ${JSON.stringify(brokenLinks, null, 2)}`
      );
    });
  }
});
