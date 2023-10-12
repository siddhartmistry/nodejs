const multer = require("multer");
const storage =multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"files/");
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname)
  }
})
const upload = multer({ storage : storage});

module.exports = upload;

/*const multer = require("multer");
const storage = multer.diskStorage(
  {
    destination : (req,file,cb)=>{
      cb(null,'files/');
    } ,
    filename : (req,file,cb)=>{
      cb(null,file.originalname)
    }
  }
)
const upload = multer({storage : storage});
module.exports = upload;

/*const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;*/


