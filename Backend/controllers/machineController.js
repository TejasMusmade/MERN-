const machine=require('../models/MachineModel')


const getMachine=async(req,res)=>{
    const machines=await machine.find({})

    res.status(200).json(machines)
}
module.exports=getMachine