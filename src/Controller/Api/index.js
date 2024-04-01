const ApiService = require('../../Service/serviceApi')
const findAllUser = async (req, res) => {
    const data = await ApiService.findAllUser()
    return res.json(data)
}
const cretaeUser = async (req, res) => {
    const data = await ApiService.createUser(req,res)
    return res.json(data)
}
const deleteUser = async (req, res) => {
    const data = await ApiService.deleteUser(req,res)
    return res.json(data)
}
const updateUser = async (req, res) => {
    const data = await ApiService.updateUser(req,res)
    return res.json(data)
}
const findOneUser = async (req, res) => {
    const data = await ApiService.findOneUser(req,res)
    return res.json(data)
}
const findByCodeUser = async (req, res) => {
    const data = await ApiService.findByCodeUser(req,res)
    return res.json(data)
}
const findPointUser = async (req, res) => {
    const data = await ApiService.findPointUser(req,res)
    return res.json(data)
}
const findDiemMon = async (req, res) => {
    const data = await ApiService.findDiemMon(req,res)
    return res.json(data)
}
const findUserLop = async (req, res) => {
    const data = await ApiService.findUserLop(req,res)
    return res.json(data)
}
module.exports = {
    findAllUser: findAllUser,
    cretaeUser: cretaeUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    findOneUser:findOneUser,
    findPointUser:findPointUser,
    findByCodeUser:findByCodeUser,
    findDiemMon:findDiemMon,
    findUserLop:findUserLop,
}