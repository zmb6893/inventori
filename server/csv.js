const fs = require("fs");
const {parse} = require("csv-parse");

const csvToJson = require('convert-csv-to-json');

function getAllRows(){
    return csvToJson.fieldDelimiter(',').getJsonFromCsv("../data.csv");
}


// fs.createReadStream("../data.csv")
    // .pipe(parse({ delimiter: ",", from_line: 2}))
    // .on("data", function(row){
        
    // });
console.log(getAllRows());

module.exports = { getAllRows };
