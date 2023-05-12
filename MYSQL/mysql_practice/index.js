const express = require("express");
const app = express();
const con = require("./connectMySql");
let PORT = process.env.PORT || 3000;


app.use(express.json());

// To the mySql data get
app.get("/", (req, res) => {
  con.query("select * from student", (err, result) => {
    if (err) {
      req.send(err);
    } else {
      res.send(result);
    }
  });
});

//To post a data
app.post("/", (req, res) => {
  const data = req.body;
  con.query("INSERT INTO student SET ?", data, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, function () {
  console.log("App Is Running On Port:", PORT);
});



