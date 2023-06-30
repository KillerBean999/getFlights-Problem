const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())//adding body parser to express 

/////////////////////////DATABASE/////////////////////////////
////////////////////Airlines API////////////////////////

const {getAllAirlineCompaniesC,
    getAirlineByIdC,
    addAirlineC,
    updateAirlineC,
    removeAirlineC
} = require ('./controllers/airlineController')

app.get("/api/getAllAirlineCompanies", getAllAirlineCompaniesC)
//http://localhost:3000/api/getAllAirlineCompanies
app.get("/api/getAirlineById/:id", getAirlineByIdC)
//http://localhost:3000/api/getAirlineById/:id
app.post("/api/addAirline", addAirlineC)
//http://localhost:3000/api/addAirline
app.put("/api/updateAirline/:id", updateAirlineC)
//http://localhost:3000/api/updateAirline/:id
app.delete("/api/removeAirline/:id", removeAirlineC)
//http://localhost:3000/api/removeAirline/:id


////////////////////Airlines API////////////////////////
///////////////////Customers API////////////////////////
const {getAllCustomersC,
getCustomerByIdC,
addCustomerC,
updateCustomerC,
removeCustomerC
} = 
require('./controllers/customerController')

app.get("/api/getAllCustomers", getAllCustomersC)
//http://localhost:3000/api/getAllCustomers
app.get("/api/getCustomerById/:id", getCustomerByIdC)
//http://localhost:3000/api/getCustomerById/:id
app.post("/api/addCustomer",addCustomerC )
//http://localhost:3000/api/addCustomer
app.put("/api/updateCustomer/:id", updateCustomerC)
//http://localhost:3000/api/updateCustomer/:id
app.delete("/api/removeCustomer/:id",removeCustomerC )
//http://localhost:3000/api/removeCustomer/:id

///////////////////Customers API/////////////////////////
////////////////////////Admins///////////////////////////
const { getAllAdminsC,
    getAdminByIdC,
    addAdminC,
    updateAdminC,
    removeAdminC
} = require ('./controllers/adminsController')

app.get("/api/getAllAdmins", getAllAdminsC)
//http://localhost:3000/api/getAllAdmins
app.get("/api/getAdminById/:id", getAdminByIdC)
//http://localhost:3000/api/getAdminById/:id
app.post("/api/addAdmin", addAdminC)
//http://localhost:3000/api/addAdmin
app.put("/api/updateAdmin/:id",updateAdminC)
//http://localhost:3000/api/updateAdmin/:id
app.delete("/api/removeAdmin/:id", removeAdminC)
//http://localhost:3000/api/removeAdmin/:id

////////////////////////Admins///////////////////////////
///////////////////////Flights///////////////////////////
const {getAllFlightsC,
        getFlightByIdC,
        addFlightC,
        updateFlightC,
        removeFlightC
} = require('./controllers/flightsController')

app.get("/api/getAllFlights", getAllFlightsC)
//http://localhost:3000/api/getAllFlights
app.get("/api/getFlightById/:id",getFlightByIdC)
//http://localhost:3000/api/getFlightById/:id
app.post("/api/addFlight",addFlightC)
//http://localhost:3000/api/addFlight
app.put("/api/updateFlight/:id",updateFlightC)
//http://localhost:3000/api/updateFlight/:id
app.delete("/api/removeFlight/:id", removeFlightC) 
//http://localhost:3000/api/removeFlight/:id

///////////////////////Flights///////////////////////////
///////////////////////countries/////////////////////////

const {getAllCountriesC,
    getCountryByIdC,
    addCountryC,
    updateCountryC,
    removeCountryC
} = require('./controllers/countriesController')

app.get("/api/getAllCountries",getAllCountriesC )
//http://localhost:3000/api/getAllCountries
app.get("/api/getCountryById/:id",getCountryByIdC)
//http://localhost:3000/api/getCountryById/:id
app.post("/api/addCountry",addCountryC )
//http://localhost:3000/api/addCountry
app.put("/api/updateCountry/:id",updateCountryC)
//http://localhost:3000/api/updateCountry/:id
app.delete("/api/removeCountry/:id",removeCountryC ) 
//http://localhost:3000/api/removeCountry/:id

///////////////////////countries/////////////////////////
////////////////////////tickets//////////////////////////

const {getAllTicketsC,
    getTicketByIdC,
    addTicketC,
    updateTicketC,
    removeTicketC
} = require('./controllers/ticketsController')

app.get("/api/getAllTickets",getAllTicketsC)
//http://localhost:3000/api/getAllTickets
app.get("/api/getTicketById/:id",getTicketByIdC)
//http://localhost:3000/api/getTicketById/:id
app.post("/api/addTicket", addTicketC)
//http://localhost:3000/api/addTicket
app.put("/api/updateTicket/:id",updateTicketC )
//http://localhost:3000/api/updateTicket/:id
app.delete("/api/removeTicket/:id", removeTicketC) 
//http://localhost:3000/api/removeTicket/:id

////////////////////////tickets//////////////////////////
/////////////////////////DATABASE/////////////////////////////


////////////////////////////EJS/////////////////////////////
const expressLayouts = require ('express-ejs-layouts')
const path = require('path') 
const fs = require('fs')


//static files
app.use(express.static('Public'))
app.use('/css',express.static(__dirname+'Public/css'))

//set template engine
app.use(expressLayouts)
app.set('layout', './Layouts/full-width.ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
//http://localhost:3000
let count = 0;
app.get('/', (req,res) =>{
    console.log("Website Opened: "+count++);
    res.render('index')
})

app.get('/about', (req,res) =>{
    res.render('about')
})
app.get('/flights',getAllFlightsC)

app.get('/services', (req,res)=>{
    res.render('services')
})












////////////////////////////EJS/////////////////////////////



















//////////////////////STAYS FINAL///////////////////////

app.listen(3000, (err) =>{ //http/localhost3000/api/,...
    if(err) console.log(err)
    else console.log("Server is running on port 3000")
})

//////////////////////STAYS FINAL///////////////////////
