const fs = require('fs');

const { readYAMLFile } = require('./utils/file');
const { convertJSONToFeature, writeFeatureFile } = require('./utils/yamlToFeature');



// Lectura del contrato yaml
const yamlToJson = (inputFilePath) => {
  const jsonObject = readYAMLFile(inputFilePath);
  return jsonObject;

  // if (yamlObject) {
    // const jsonObject = processJSON(yamlObject);
    // const featureText = convertJSONToFeature(jsonObject);
    // writeFeatureFile(outputFilePath, featureText);
  // }
};

// Extraccion de los diferentes elementos
const extractJson = (jsonObject, filename) => {

  // Obtención del numero de Features a crear
  const numberOfElements = Object.keys(jsonObject.paths).length;
  console.log('Número de elementos en jsonData.paths:', numberOfElements);

  
  // Extraccion de los endpoints
  const endpointNames = Object.keys(jsonObject.paths);
  const endpoints = endpointNames.map((endpointName) => jsonObject.paths[endpointName]);

  const method = Object.keys(endpoints[3]);

  

  console.log({method});

  const jsonExport= {endpoints}; 
  // Convierte el objeto JSON a una cadena JSON con formato
  const jsonString = JSON.stringify(jsonExport, null, 2);

  

  // Escribe la cadena JSON en un archivo con extensión .json
  fs.writeFile(filename, jsonString, (err) => {
    if (err) {
      console.error('Error al guardar el archivo JSON:', err);
    } else {
      console.log(`Archivo JSON guardado exitosamente en ${filename}`);
    }
  });



  
}

module.exports = {
  yamlToJson,
  extractJson
};
