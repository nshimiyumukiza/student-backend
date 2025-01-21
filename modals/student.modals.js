const mongoose = require("mongoose")

const studentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required :true
        },
        age:{
            type:Number,
            required:true,
            default:0
        },
        combination:{
            type:String,
            required:false
        },
        school:{
            type:String,
            required:true
        }
    },{timestamps:true}

   
)
const Student = mongoose.model("Student",studentSchema)
module.exports = Student