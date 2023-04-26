const yamlToFeatureConverter = require('./yamlToFeatureConverter');

const inputFilePath = './input/example.yml';
const outputFilePath = './output/example.feature';

yamlToFeatureConverter(inputFilePath, outputFilePath);