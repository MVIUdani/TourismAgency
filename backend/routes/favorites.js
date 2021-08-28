const con = require("../db");

module.exports = function(app){

    app.post("/addFavourite",(req,res)=>{
     const user_id = req.body.user_id;
     const place_id = req.body.place_id;
     
     con.query(
"INSERT INTO favorites (user_id, place_id) VALUES (?,?)",
[user_id, place_id],
(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
     );
     
    });
}