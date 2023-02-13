const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.use('/', (req,res,next) => {
  res.send('SERVER IS OK.')
});

module.exports = app;
