const router = require('express').Router();
const helper = require("./helper");


router.post('/', (req,res) =>{
    console.log(req.body);
    const record={
        userId:req.body.userId,
        Date:new Date().toLocaleString(),
        Bt:req.body.Bt,
        Bp:req.body.Bp,
        Rp:req.body.Rp,
        Gs:req.body.Gs,
        Os:req.body.Os,
        Cl:req.body.Cl,
        Hr:req.body.Hr
    }
    helper.createRecord(record)
    .then(r =>{
        res.status(201).json({"status":true,"data":r})
    })
    .catch(err => {
        
            res.status(500).json({"status":false,"message":err.message})

    })
})

router.get("/latest/allrecord/", (req,res)=>{
    helper.viewAllRecord()
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})


router.post('/createRecordUser', (req,res) =>{
    console.log(req.body);
    const record={
        userId:req.body.userId,
    }
    helper.createRecordUser(record)
    .then(r =>{
        res.status(201).json({"status":true,"data":r})
    })
    .catch(err => {
        
            res.status(500).json({"status":false,"message":err.message})

    })
})

router.get("/:userId", (req,res)=>{
    helper.viewRecored(req.params.userId)
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})

router.get("/latestRecord/:userId", (req,res)=>{
    helper.viewLatestRecord(req.params.userId)
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})

router.get("/averageRecord/:emailId", (req,res)=>{
    helper.averageRecord(req.params.emailId)
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})






module.exports = router;