const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    maSinhVien:{
        type:String,
        required:true
    },
    maLop:{
        type:String,
        required:true
    },
    ho:{
        type:String,
        required:true
    },
    ten:{
        type:String,
        required:true
    }
},{timestamps:true}

)

module.exports= mongoose.model("User", Schema)