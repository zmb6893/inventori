const fs = require("fs");
const csvToJson = require('convert-csv-to-json');

const filename = '../data.csv';

function getAllRows(){
    return csvToJson.fieldDelimiter(',').getJsonFromCsv(filename);
}

function addRow(data){
    console.log(data);
    let csvString = data["productName"] + "," +  data["currentQuantity"] + "," + data["initialQuantity"] + "," + data["limit"];
    fs.appendFile(filename, '\n' + csvString, function(err) {
        if (err){
            console.error(err);
        }else{
            console.log("Added new item");
        }
    });
}

module.exports = { getAllRows, addRow };
