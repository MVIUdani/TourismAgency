const con = require("../db");

module.exports = function(app){

app.post("/api/insert_vehicle_details",(req, res)=>{

    const name = req.body.name;
    const seats = req.body.seats;
    const color = req.body.color;
    const valid_date = req.body.valid_date;
    const cost = req.body.cost;
    const plate_no = req.body.plate_no;
    const other_details = req.body.other_details;
    const user_id = req.body.user_id;

    const sqlInsert = "INSERT INTO vehicle_info (name,seats,color,valid_date,cost,plate_no,other_details,user_id) VALUES (?,?,?,?,?,?,?,3)";
    db.query(sqlInsert, [name,seats,color,valid_date,cost,plate_no,other_details,user_id] , (err,result) => {
    console.log(result);
    res.send(result);

});

});

app.get("/api/show_vehicle_details", (req,res) => {
    db.query("SELECT * FROM vehicle_info WHERE user_id=3 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});



}