const {knex, connection} = require("./connection") 

const getAllCustomers = async () =>{
    const result = await knex.raw(`select * from customers`)
    return result
}  

const getCustomerById  = async (id) =>{
    const result = await knex.select().from('customers').where('id', id)
    return result
}

const addCustomer  = (obj) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO customers (fname, lname, address, phone_no, credit_card_no) VALUES (?,?,?,?,?)`,
      [obj.fname,
        obj.lname,
        obj.address,
        obj.phone_no,
        obj.credit_card_no],
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


const updateCustomer  = async (obj, id) =>{
    return new Promise((resolve, reject) => {
    connection.query('UPDATE customers SET fname = ?,lname = ?,address = ?,phone_no = ?,credit_card_no = ? WHERE id = ?', [obj.fname,obj.lname,obj.address,obj.phone_no,obj.credit_card_no, id], (err, res) => {
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
const removeCustomer = async (Id) =>{
    const result = await knex("customers").where({'id': Id}).del()
    return result
}
module.exports = {
getAllCustomers,
getCustomerById,
addCustomer, 
updateCustomer, 
removeCustomer 
}