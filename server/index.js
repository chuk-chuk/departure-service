const express = require('express');
const { port } = require('./config');

const app = express();

app.get('/', (req, res) => res.send('Hello Departures!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
