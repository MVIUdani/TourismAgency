const con = require("../db");

module.exports = function(app){

    app.post("/creatBooking",(req,res) => {
        const no_of_days = req.body.no_of_days;
        const no_of_visitors = req.body.no_of_visitors;
        const no_of_rooms = req.body.no_of_rooms; 
        const price = req.body.price;

        con.query(
            "INSERT INTO booking (no_of_days, no_of_visitors, no_of_rooms, price) VALUES (?,?,?,?)",
            [no_of_days, no_of_visitors, no_of_rooms, price],
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