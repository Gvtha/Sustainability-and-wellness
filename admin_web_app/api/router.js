
const router = require('express').Router()

const user = require('./user')

router.use('/user',user)


const record = require('./record')

router.use('/record',record)

module.exports=router