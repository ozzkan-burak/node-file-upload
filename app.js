const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const singleFileUpload = require('./single')


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.use('/', (req,res,next) => {
  res.send('SERVER IS OK.')
});

app.post('/singleFileUpload', (req, res, next) => {
  try {
    singleFileUpload(req, res, ()=> {
      if(err) {
        console.log("error", err)
      } else {
        res.json(req,file).status(200);
      }
    });
  } catch (error) {
    console.log('Bir hata oluştu');
  }
})

module.exports = app;
