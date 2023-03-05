const express = require('express')
const app = express()
const portName = 3000

const cors = require('cors');
app.use(cors());
app.use(express.json());


const scale = require('./scale');
const csv = require('./csv');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-weight', (req, res) => {
    scale.getRead()
    .then((val) => {
        res.send({"value": val});
    })
    .catch((error) => {
        res.send("does not work");
    });
});

app.get('/product-list', (req, res) => {
  res.send(csv.getAllRows());
});

app.post('/add-product', async (req, res) => {
  csv.addRow(req.body);
});

app.put('/increase-product', async (req, res) => {
  console.log(req.body);
  csv.updateRow(req.body["id"], req.body["weight"]);
})

app.listen(portName, () => {
  console.log(`Example app listening on port ${portName}`)
});