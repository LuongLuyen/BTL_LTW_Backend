const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    maSinhVien:{
        type:String,
        required:true
    },
    maMonHoc:{
        type:String,
        required:true
    },
    nhomHocPhan:{
        type:String,
        required:true
    },
    diemBaiTapLon:{
        type:String,
        required:true
    },
    diemThiGiuaKy:{
        type:String,
        required:true
    },
    diemThucHanh:{
        type:String,
        required:true
    },
    diemChuyenCan:{
        type:String,
        required:true
    },
    diemThiCuoiKy:{
        type:String,
        required:true
    },
    diemTongKetHe10:{
        type:String,
        required:true
    },
    diemBangChu:{
        type:String,
        required:true
    }
},{timestamps:true}

)

module.exports= mongoose.model("Point", Schema)