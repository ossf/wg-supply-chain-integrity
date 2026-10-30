const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT_DIR = path.resolve(__dirname, '..');

describe('OpenSSF Governance & Required Files', () => {
  const requiredFiles = [
    'README.md',
    'LICENSE',
    'CODEOWNERS',
    'code-of-conduct.md',
    'SECURITY.md',
    'slsa-tooling.md',
    'threat_models.md',
    'governance/CHARTER.md',
    'governance/chair-onboarding.md',
    'governance/README.md',
    'positioning-sig/README.md',
    'positioning-sig/positioning-CHARTER.md',
    '.github/settings.yml'
  ];

  for (const relativePath of requiredFiles) {
    test(`file should exist and not be empty: ${relativePath}`, () => {
      const fullPath = path.join(ROOT_DIR, relativePath);
      assert.ok(fs.existsSync(fullPath), `Missing required file: ${relativePath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `File is empty: ${relativePath}`);
    });
  }

  test('LICENSE should specify Apache License 2.0', () => {
    const licenseContent = fs.readFileSync(path.join(ROOT_DIR, 'LICENSE'), 'utf8');
    assert.match(licenseContent, /Apache License/i);
    assert.match(licenseContent, /Version 2\.0/i);
  });

  test('CODEOWNERS should define WG admin owners', () => {
    const codeowners = fs.readFileSync(path.join(ROOT_DIR, 'CODEOWNERS'), 'utf8');
    assert.match(codeowners, /\* @ossf\//);
  });
});
