const express = require("express");
var router=express.Router();
var pool = require("../pool");
router.get("/",(req,res)=>{
    var sql = `select * from News`
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:result})
    })
})
module.exports=router;