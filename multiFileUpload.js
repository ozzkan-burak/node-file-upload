const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

//uuidv4()
const storage = multrt.diskStorage({
  destionation:(req,file, callbackb)=> {
    callbackb(null, "uploads")
  },
  filename: (req, file, callback) => {
    const uniqName = uuidv4();
    callback(null, file.filename+uniqName+FileReader.orginalName)
  }
});

const fileFilter = (req,file, callback) => {
  callback(null, true)
}

const uploads = multer({storage, fileFilter}).array('fisingleles', 5);
module.exports = uploads
