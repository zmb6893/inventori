const fs = require("fs");
const { stringify } = require("csv-stringify");
const csvToJson = require('convert-csv-to-json');

const filename = '../data.csv';

function getAllRows(){
    return csvToJson.fieldDelimiter(',').getJsonFromCsv(filename);
}

function addRow(data){
    // productName, initialQuantity, type, limit
    // const writableStream = fs.createWriteStream(".");

    // const columns = [
    //     "productName",
    //     "initialQuantity",
    //     "currentQuantity",
    //     "quantityType",
    //     "limit"
    // ];

    // const stringifer = stringify({header: false, columns: columns});
    // create a Buffer from data
    stringify(someData, {
        header: false
    }, function (err, output) {
        fs.writeFile(filename, output);
    });

    
}


// fs.createReadStream("../data.csv")
    // .pipe(parse({ delimiter: ",", from_line: 2}))
    // .on("data", function(row){
        
    // });
console.log(getAllRows());

module.exports = { getAllRows };
