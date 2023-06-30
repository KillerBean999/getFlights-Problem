const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


const { getAllAdmins,
    getAdminById,
    addAdmin,
    updateAdmin,
    removeAdmin
} = require ('../model/adminsDB')

const getAllAdminsC =  async (req, res) => {
    //http://localhost:3000/api/getAllAdmins
    const result = await getAllAdmins()
    res.json(result[0])
}

const getAdminByIdC = async (req, res) => {
    //http://localhost:3000/api/getAdminById/:id
    const id = req.params.id
    try{
    const result = await getAdminById(id)
    res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

const addAdminC = async (req, res)=>{
  //http://localhost:3000/api/addAdmin
  try{
    const newAdmin = req.body
    const result = await addAdmin(newAdmin)
    res.json(result)
  } catch (err) {
    console.log("Error: "+err)
    res.status(500).send("Error: "+err)
  }
}

const updateAdminC = async (req, res) =>{
    //http://localhost:3000/api/updateAdmin/:id
    try{
    const id = req.params.id
    const updatedAdmin = req.body
    const result = await updateAdmin(updatedAdmin, id)
    res.json(result)
    } catch (err) {
        console.log("Error: "+err)
        res.status(500).send("Error: "+err)
    }
}

const removeAdminC = async (req,res) =>{
    //http://localhost:3000/api/removeAdmin/:id
    const id = req.params.id
    try{
        const result = await removeAdmin(id)
        res.json(result)
    } catch (err) {
        console.log("Error: "+err)
        res.status(500).send("Error: "+err)
    }
}
module.exports = {
    getAllAdminsC,
    getAdminByIdC,
    addAdminC,
    updateAdminC,
    removeAdminC
}