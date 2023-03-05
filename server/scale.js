const { SerialPort } = require("serialport");
const { ReadlineParser } = require('@serialport/parser-readline')

const portName = "COM4";

const port = new SerialPort({
    path: portName,
    baudRate: 9600,
    autoOpen: false,
});
const parser = new ReadlineParser({delimiter: "\r\n"});
port.pipe(parser);

var latestWeight = 0;

function getRead(){

    return new Promise((resolve, reject) => {
        port.open(function (err) {
            console.log("Port " + portName + " is open");
            if (err) {
                return console.log("Error opening port: ", err.message);
            }
        });
        
        port.on("data", onData);
    
        setTimeout(() => { port.close(function(){
            console.log("Port " + portName + "is close");
            console.log("Latest value: " + latestWeight);
            if (latestWeight != 0){
                resolve(latestWeight);
            }else{
                reject("failed");
            }
        })}, 3000);

    });

}

function onData(data){
    try{
        //console.log(JSON.stringify(data, null, 4));
        let value = Buffer.from(data)[0];
        console.log(value);
        latestWeight = value;
    }catch(error){
        console.error("Error: " + error);
    }
    
}

// application displays the scale amount while weighing
// button to confirm the weight
// that is the value that is added

module.exports = { getRead, latestWeight }