const fs = require("fs");
const { stringify } = require("csv-stringify");
const csvToJson = require('convert-csv-to-json');

const filename = '../data.csv';

function getAllRows(){
    return csvToJson.fieldDelimiter(',').getJsonFromCsv(filename);
}

console.log(getAllRows());

module.exports = { getAllRows };
