const {yamlToJson, extractJson} = require('./yamlToFeatureConverter');

const inputFilePath = './input/example.yml';
// const outputFilePath = './output/example.feature';
const outputFilePath = './output/example.json';


const jsonObject = yamlToJson(inputFilePath);
extractJson(jsonObject, outputFilePath);