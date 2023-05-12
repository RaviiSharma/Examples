const mySql = require("mysql2");

const con = mySql.createConnection({
  host: "localhost",
  user: "root",
 password:"Ravi@036",
  database: "ravi",
});

con.connect((err)=>{
  if (err) {
    throw err
  }
  else{
    console.log("My Sql DataBase Connected.....")
  }
});



module.exports=con;