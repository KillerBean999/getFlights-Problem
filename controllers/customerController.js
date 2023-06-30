const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


const {getAllCustomers,
    getCustomerById,
    addCustomer, 
    updateCustomer, 
    removeCustomer 
} = require ('../model/customersDB')

const getAllCustomersC = async (req, res) => {
    //http://localhost:3000/api/getAllCustomers
    const result = await getAllCustomers()
    res.json(result[0])
}

const getCustomerByIdC = async (req, res) => {
    //http://localhost:3000/api/getCustomerById/:id
    const id = req.params.id
    try{
    const result = await getCustomerById(id)
    res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

const addCustomerC = async (req, res)=>{
  //http://localhost:3000/api/addCustomer
  try{
    const newCustomer = req.body
    const result = await addCustomer(newCustomer)
    res.json(result)
  } catch (err) {
    console.log("Error: "+err)
    res.status(500).send("Error: "+err)
  }
}

const updateCustomerC =  async (req, res) =>{
    //http://localhost:3000/api/updateCustomer/:id
    try{
    const IdAirline = req.params.id
    const updatedCustomer = req.body
    const result = await updateCustomer(updatedCustomer, IdAirline)
    res.json(result)
    } catch (err) {
        console.log("Error: "+err)
        res.status(500).send("Error: "+err)
    }
}

const removeCustomerC = async (req,res) =>{
    //http://localhost:3000/api/removeCustomer/:id
    const id = req.params.id
    try{
        const result = await removeCustomer(id)
        res.json(result)
    } catch (err) {
        console.log("Error: "+err)
        res.status(500).send("Error: "+err)
    }
}
module.exports = {
    getAllCustomersC,
    getCustomerByIdC,
    addCustomerC,
    updateCustomerC,
    removeCustomerC
}