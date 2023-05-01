const fs = require('fs');

const convertJSONToFeature = (jsonObject) => {
  let featureText = '';

  if (jsonObject.Feature) {
    featureText += `Feature: ${jsonObject.Feature}\n`;
  }

  if (jsonObject.Scenarios) {
    jsonObject.Scenarios.forEach((scenario) => {
      featureText += `\n  Scenario: ${scenario.title}\n`;

      if (scenario.given) {
        featureText += `    Given ${scenario.given}\n`;
      }

      if (scenario.when) {
        featureText += `    When ${scenario.when}\n`;
      }

      if (scenario.then) {
        featureText += `    Then ${scenario.then}\n`;
      }
    });
  }

  return featureText;
};

const writeFeatureFile = (filePath, content) => {
  // ... (mismo código que antes)
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Archivo .feature creado correctamente en: ${filePath}`);
  } catch (e) {
    console.error('Error al escribir el archivo .feature:', e);
  }
};

module.exports = {
  convertJSONToFeature,
  writeFeatureFile,
};
