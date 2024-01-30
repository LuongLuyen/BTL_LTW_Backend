const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    maMonHoc:{
        type:String,
        required:true
    },
    tenMonHoc:{
        type:String,
        required:true
    },
    soTin:{
        type:String,
        required:true
    }
},{timestamps:true}

)

module.exports= mongoose.model("Subject", Schema)