const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllYamlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    if (entry.isDirectory()) {
      getAllYamlFiles(fullPath, fileList);
    } else if (entry.name.endsWith('.yml') || entry.name.endsWith('.yaml')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

describe('YAML Configuration Validation', () => {
  const yamlFiles = getAllYamlFiles(ROOT_DIR);

  test('should find YAML configuration files to validate', () => {
    assert.ok(yamlFiles.length > 0, 'No YAML files found in repository');
  });

  for (const filePath of yamlFiles) {
    const relFile = path.relative(ROOT_DIR, filePath);
    test(`parse and validate syntax of ${relFile}`, () => {
      const content = fs.readFileSync(filePath, 'utf8');
      assert.doesNotThrow(() => {
        YAML.parse(content);
      }, `Syntax error in YAML file: ${relFile}`);
    });
  }

  test('validate settings.yml structure', () => {
    const settingsPath = path.join(ROOT_DIR, '.github', 'settings.yml');
    assert.ok(fs.existsSync(settingsPath), 'settings.yml should exist');
    const content = fs.readFileSync(settingsPath, 'utf8');
    const parsed = YAML.parse(content);
    assert.ok(parsed.repository, 'settings.yml should contain repository configuration');
    assert.equal(parsed.repository.name, 'wg-supply-chain-integrity');
    assert.ok(Array.isArray(parsed.collaborators), 'settings.yml should have collaborators array');
  });
});
