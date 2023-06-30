const {knex, connection} = require("./connection") 

const getAllFlights = async () =>{
    const result = await knex.raw(`select * from flights`)
    return result
}  

const getFlightById = async (id) =>{
    const result = await knex.select().from('flights').where('id', id)
    return result
}

const addFlight = (object) => {// needs fix
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO adminstrators (airline_company_id, origin_country_id, destination_country_id, departure_time, landing_time,remaining_tickets) VALUES (?,?,?,?,?,?)`,
      [object.airline_company_id,
         object.origin_country_id,
          object.destination_country_id,
           object.departure_time,
            object.landing_time,
            object.remaining_tickets],
      (err, result) => {
        if (err) {
          console.error("Error: " + err);
          reject(err);
        } else {
          console.log(result);
          resolve(result);
              console.log("New Database Added")
        }
      }
    );
  });
};

const updateFlight  = async (obj, id) =>{
    return new Promise((resolve, reject) => {
    connection.query('UPDATE flights SET airline_company_id = ?,origin_country_id = ?,destination_country_id = ?,departure_time = ?,landing_time = ?, remaining_tickets =  ? WHERE id = ?',
     [obj.airline_company_id,
      obj.origin_country_id,
      obj.destination_country_id,
      obj.departure_time,
      obj.landing_time,
      obj.remaining_tickets,
       id],
       (err, res) => {
  if (err) {
    console.error(err);
    reject(err);
  } else {
    console.log(res);
    resolve(res)
    console.log("Database Updated")
  }
});
  });
}

const removeFlight = async (Id) =>{
    const result = await knex("flights").where({'id': Id}).del()
    return result
}

module.exports = {
    getAllFlights ,
getFlightById ,
addFlight ,
updateFlight ,
removeFlight 
}