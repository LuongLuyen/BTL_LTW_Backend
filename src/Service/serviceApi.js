const UserModel = require('../Model/modelUser')
const PointModel = require('../Model/modelPoint')
const SubjectModel = require('../Model/modelSubject')

const createUser = async(req,res) => {
    try {
        const { maSinhVien, maLop, ho,ten} = req.body
        const data = new UserModel({ maSinhVien, maLop, ho,ten})
        data.save(data)
        return data
    } catch (error) {
        return error
    }
}
const updateUser = async(req,res) => {
    try {
        await UserModel.updateOne({_id:req.params.id}, req.body)
        const data= await UserModel.findOne({_id:req.params.id})
        return data
    } catch (error) {
        return error
    }
}
const deleteUser = async(req,res) => {
    try {
        const id = req.params.id
        await UserModel.deleteOne({ _id:id })
        const data= await UserModel.find()
        return data
    } catch (error) {
        return error
    }
}
const findAllUser = async(req,res) => {
    try {
        const data= await UserModel.find()
        return data
    } catch (error) {
        return error
    }
}
const findOneUser = async(req,res) => {
    const {ho, ten, password} = req.body
    try {
        const data= await UserModel.findOne({ho:ho,ten:ten,maSinhVien:password})
        return data
    } catch (error) {
        return error
    }
}
const converDiem = (diemBangChu)=>{
    if(diemBangChu ==="A+"){
        return ["4.0", "Đạt"]
    }else if(diemBangChu ==="A"){
        return ["3.7", "Đạt"]
        
    }else if(diemBangChu ==="B+"){
        return ["3.5", "Đạt"]
        
    }else if(diemBangChu ==="B"){
        return ["3.0", "Đạt"]
        
    }else if(diemBangChu ==="C+"){
        return ["2.5", "Đạt"]
        
    }else if(diemBangChu ==="C"){
        return ["2.0", "Đạt"]
        
    }else if(diemBangChu ==="D+"){
        return ["1.5", "Đạt"]
        
    }else if(diemBangChu ==="D"){
        return ["1.0", "Đạt"]
        
    }else if(diemBangChu ==="F"){
        return ["0.0", "Chưa Đạt"]

    }
}
const findPointUser = async(req,res)=>{
    try {
        const p= await PointModel.find({maSinhVien:req.body.maSV})
        const s= await SubjectModel.find()
        const data = p.map(item => {
            const He4TrangThai ={}
            const [h4, tt] = converDiem(item.diemBangChu)
            He4TrangThai.diemTongKetHe4 = h4
            He4TrangThai.trangThai =tt
            const matchedItem = s.find(i => i.maMonHoc === item.maMonHoc)
            if (matchedItem) {
                return [item,matchedItem ,He4TrangThai]
            }
        })
        return data
    } catch (error) {
        return error
    }
}
const findByCodeUser = async(req,res) => {
    try {
        const data= await UserModel.findOne({maSinhVien:req.body.maSV})
        return data
    } catch (error) {
        return error
    }
}


module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    findAllUser: findAllUser,
    findOneUser: findOneUser,
    findPointUser: findPointUser,
    findByCodeUser:findByCodeUser,
}