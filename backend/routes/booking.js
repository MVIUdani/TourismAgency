const con = require("../db");

module.exports = function(app){

    app.post("/creatBooking",(req,res) => {
        const no_of_days = req.body.no_of_days;
        const no_of_visitors = req.body.no_of_visitors;
        const no_of_rooms = req.body.no_of_rooms; 
        const price = req.body.price;

        con.query(
            "INSERT INTO bookings (no_of_days, no_of_visitors, no_of_rooms, price) VALUES (?,?,?,?)",
            [no_of_days, no_of_visitors, no_of_rooms, price],
            (err, result) => {
                if (err) 
                
                {
                  console.log(err);
                } else {
                  res.send("Values Inserted");
                }
              }
        );
    });

    app.post("/insertTransport_p2",(req,res)=>{
    const travel = req.body.travel;

    con.query(
      "INSERT INTO bookings (transport_type,price,packageID) VALUES (?,17000,2)",
    [travel],
    (err,result) => {
  if(err){
    console.log(err);
  }else{
    res.send("Values Inserted");
  }
}
    )
    });

    app.post("/insertCount_p2",(req,res)=>{
      const count = req.body.count;
      const room_count = req.body.room_count;
 
      con.query(
        "INSERT INTO bookings (no_of_visitors, no_of_rooms, packageID) VALUES (?,?,'2')",
        [count,room_count],
        (err,result) => {
          if(err){
            console.log(err);
          }else{
            res.send("Values Inserted");
          }
        }
      )

    });

}