const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());
app.use(cors());