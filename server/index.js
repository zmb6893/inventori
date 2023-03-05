const express = require('express')
const app = express()
const portName = 3000

const scale = require('./scale');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-weight', (req, res) => {
    scale.getRead()
    .then((val) => {
        res.send("Done " + val);
    })
    .catch((error) => {
        res.send("does not work");
    });
});

app.listen(portName, () => {
  console.log(`Example app listening on port ${portName}`)
});