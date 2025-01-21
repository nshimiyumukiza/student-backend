const express = require("express")
const  mongoose  = require("mongoose")
const Student = require("./modals/student.modals")
const app =express()
app.use(express.json())

app.post("/student",async(req,res)=>{
try{
    const student = await Student.create(req.body)
    res.status(200).json(student)
}catch(err){
res.status(500).json({message:err.message})
}
})

app.get("/",(req,res)=>{
    res.send("hi every one")
})

mongoose.connect("mongodb+srv://nshimiyumukizaerneste99:QzLfjPMnWI0yeSDH@cluster0.4g5kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection to database")
    app.listen(3400,()=>{
        console.log("port run on 3400")
    })
})
.catch((err)=>{
    console.log("connection failed")
})