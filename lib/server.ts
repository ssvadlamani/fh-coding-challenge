import ShipmentUpdateListener from './controllers/ShipmentUpdateListener';
const express = require('express')
const app = express()
const port = 3000
const shipmentUpdateListener = new ShipmentUpdateListener() 

app.get('/:id/:shipmentData', (req, res) => {

shipmentUpdateListener.receiveUpdate(req.params.id,req.params.shipmentData)
res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))