const { readYAMLFile } = require('./utils/file');
const { convertJSONToFeature, writeFeatureFile } = require('./utils/yamlToFeature');

const processJSON = (jsonObject) => {
  // Puedes agregar aquí la lógica de procesamiento adicional.
  // Por ejemplo, modificar el objeto JSON según tus necesidades.
  return jsonObject;
};

const yamlToFeatureConverter = (inputFilePath, outputFilePath) => {
  const yamlObject = readYAMLFile(inputFilePath);

  if (yamlObject) {
    const jsonObject = processJSON(yamlObject);
    const featureText = convertJSONToFeature(jsonObject);
    writeFeatureFile(outputFilePath, featureText);
  }
};

module.exports = yamlToFeatureConverter;
