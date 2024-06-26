require('dotenv').config()

const express= require('express')
const mongoose=require('mongoose')
const machineRoutes=require('./routes/machine') 

//express app
const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/machine',machineRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for request
app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000')
})
})
.catch((error)=>{
    console.log(error)
})

