const express=require('express')
const getMachine=require('../controllers/machineController')
const router=express.Router()

router.get('/',getMachine)

module.exports=router