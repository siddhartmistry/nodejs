const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}));

app.use("/fromhtml",express.static("./html"))

const router = require("./routes/routes");

app.use("/",router);

const upload = require('./routes/upload');
app.post('/multiplefile',upload.array('file'),(req,res)=>{
  res.json({ msg : "files are upload"})
})
app.post('/singlefile',upload.single('file'),
  (req,res)=>{
    res.json({message : 'file is uploaded '});
  }
);

// const upload = require('./routes/upload');

// app.post('/upload', upload.single('file'), (req, res) => {
//     // Handle the uploaded file
//     res.json({ message: 'File uploaded successfully!' });
//   });


app.listen(3242)