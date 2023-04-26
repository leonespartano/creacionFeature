const fs = require('fs');
const yaml = require('js-yaml');

function readYAMLFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContent);
  } catch (e) {
    console.error('Error al leer el archivo YAML:', e);
    return null;
  }
}

module.exports = {
  readYAMLFile,
}