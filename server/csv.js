const fs = require("fs");
const csvToJson = require('convert-csv-to-json');

const filename = '../data.csv';

function getAllRows(){
    return csvToJson.fieldDelimiter(',').getJsonFromCsv(filename);
}

function addRow(data){
    console.log(data);
    let csvString = getLastId + "," + data["productName"] + "," +  data["currentQuantity"] + "," + data["initialQuantity"] + "," + data["limit"];
    fs.appendFile(filename, '\n' + csvString, function(err) {
        if (err){
            console.error(err);
        }else{
            console.log("Added new item: " + csvString);
        }
    });
}

function updateRow(id, quantity){
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err){
            console.log(err);
        }else{
            let lines = data.trim().split("\n");
            let oldLine = lines.slice[id];

            console.log(oldLine);
            // let olf = oldLine.split(',');

            // let nlf = [olf[0], olf[1], olf[2], (parseInt(olf[3]) + quantity), olf[4], olf[5]];
            // let formatted = data.replace(oldLine, nlf.join(","));

            // fs.writeFile(filename, formatted, 'utf-8', function(err) {
            //     console.log(err);
            // } );
        }
    });
}

function getLastId(){
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err){
            console.log(err);
        }else{
            let lines = data.trim().split("\n");
            let lastLine = lines.slice(-1)[0];
            let fields = lastLine.split(',');
            
            nextId = parseInt(fields[0]) + 1;
        }
    });
}


module.exports = { getAllRows, addRow, updateRow };
