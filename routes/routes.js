const router = require("express").Router();
const tbl = require("../model/table");

router.get("/",(req,res)=>{
    tbl.find({}).then((data)=>{res.send(data)}).catch((err)=>{res.send(err)});
});

router.get("/:id",(req,res)=>{
    tbl.findById({"_id":req.params.id}).then((data)=>{res.send(data)}).catch((err)=>{res.send(err)});
});

router.post("/",(req,res)=>{
    var tbl1 = new tbl({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })

    tbl1.save().then((data)=>{res.send(data)}).catch((err)=>{res.send(err)});
})

router.put("/",(req,res)=>{
    tbl.findOneAndUpdate({"_id":req.body.id},req.body,{new : true}).then((data)=>{
        res.send(data)}).catch((err)=>{
            res.send(err)});
})

router.delete("/",(req,res)=>{
    tbl.findOneAndRemove({"_id":req.body.id}).then((data)=>{res.send(data)}).catch((err)=>{res.send(err)});
})

module.exports = router;