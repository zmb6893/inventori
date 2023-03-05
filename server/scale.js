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

var latestRead = 0;

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
            console.log("Lastest value: " + latestRead);
            if (latestRead != 0){
                resolve(latestRead);
            }else{
                reject("failed");
            }
        })}, 10000);

    });

}

function onData(data){
    latestRead += 1;
    console.log(latestRead);
    // console.log('Data:', data);
}

// application displays the scale amount while weighing
// button to confirm the weight
// that is the value that is added

module.exports = { getRead }