const con = require("../db");

module.exports = function(app){

app.post("/createRequest",(req,res) => {
const requested_places = req.body.requested_places;
const details = req.body.details;
const user_id = req.body.user_id;

con.query(
"INSERT INTO request (requested_places, details, user_id) VALUES (?,?,?)",
[requested_places,details, user_id],
(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);

});

app.get("readRequest",(req,res)=>{
    con.query(
        "SELECT * FROM request",
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
);
});

}