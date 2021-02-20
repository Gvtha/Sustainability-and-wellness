const router = require('express').Router();
const helper = require("./helper");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.post('/forgotPassword', (req,res) =>{
    const user={
        emailId:req.body.emailId,
    }
    helper.forgotPassword(user)
    .then(r => res.status(200).json({"status":true,"data":r}))
    .catch(err => {
      res.status(500).json({"status":false,"message":err.message})
    })
})
router.post('/signUp', (req,res) =>{
    console.log(req.body);
    console.log('11');
    var pass=bcrypt.hashSync(req.body.password,saltRounds);
    const user={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:pass,
        emailId:req.body.emailId,
        id:req.body.id,
        age:req.body.age,
        gender:req.body.gender,
        height:req.body.height,
        weight:req.body.weight
    }
    //user.save()
    helper.createUser(user)
    .then(r =>{
        res.status(200).send({"status":true,"message":r})
    })
    .catch(err => {
        if(err.message==="user Already exist"){
            res.status(409).json({"status":false,"message":err.message})
        }
        else{
            res.status(500).json({"status":false,"message":err.message})
        }
    })
})

router.post('/', (req,res) =>{
    console.log(req.body);
    var pass=bcrypt.hashSync(req.body.password,saltRounds);
    const user={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:pass,
        emailId:req.body.emailId,
        id:req.body.id,
        age:req.body.age,
        gender:req.body.gender
    }
    //user.save()
    helper.createUser(user)
    .then(r =>{
        res.redirect('/login')
    })
    .catch(err => {
        if(err.message==="user Already exist"){
            res.status(409).json({"status":false,"message":err.message})
        }
        else{
            res.status(500).json({"status":false,"message":err.message})
        }
    })
})

router.put('/', (req,res) =>{
    const user={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailId:req.body.emailId,
        gender:req.body.gender,
        age:req.body.age
    }
    helper.updateUser(user)
    .then(r =>{
        if(r.nModified){
            res.status(200).json({"status":true})
        }else{
            res.status(304).json({"status":false,"message":"not modified"})
        } 
    })        
    .catch(err => {
        if(err.message==="user not found"){
            res.status(404).json({"status":false,"message":err.message})
        }
        else{
            res.status(500).json({"status":false,"message":err.message})
        }
    })
})


router.post('/changePassword', (req,res) =>{
    var pass=bcrypt.hashSync(req.body.password,saltRounds);
    const user={
        emailId:req.body.emailId,
        pass:pass
    }
    helper.changePassword(user)
    .then(r =>{
        if(r.nModified){
            res.status(200).json({"status":true})
        }else{
            res.status(304).json({"status":false,"message":"not modified"})
        } 
    })        
    .catch(err => {
        if(err.message==="user not found"){
            res.status(404).json({"status":false,"message":err.message})
        }
        else{
            res.status(500).json({"status":false,"message":err.message})
        }
    })
})


router.delete('/', (req,res)=>{
    helper.deleteUserById(req.body.id)
    .then(r =>{res.status(200).json({"status":true})})        
    .catch(err => {
        if(err.message==="user not found"){
            res.status(404).json({"status":false,"message":err.message})
        }
        else{
            res.status(500).json({"status":false,"message":err.message})
        }
    })
})

router.get("/", (req,res)=>{
    helper.viewUser()
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})

router.post('/login',(req,res)=>{
    let userData={"emailId":req.body.emailId,"password":req.body.password}
    helper.loginUser(userData)
    .then(r=>res.status(200).json({"status":true,"data":r}))
    .catch(err=>res.status(500).json({"status":false,"data":err.message}))
})



module.exports = router;