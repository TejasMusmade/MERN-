const mongoose=require('mongoose')

const Schema=mongoose.Schema

const machineSchema=new Schema({
    ts:{
        type:Date
    },
    machine_status:{
        type:Number
    },
    vibration:{
        type:Number
    }

})
module.exports=mongoose.model('Machine',machineSchema)