const db = require("../db");

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
    db.query(sqlInsert, 
    [name,seats,color,valid_date,cost,plate_no,other_details,user_id] , 
    (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }

});

});

app.get("/api/show", (req,res) => {
    db.query("SELECT * FROM vehicle_info WHERE user_id=3 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});


app.get("/api/showAccount_details", (req,res) => {
    db.query("SELECT * FROM bank_account_details WHERE user_id=3 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});



app.get("/api/booked_date_details", (req,res) => {
    db.query("SELECT * FROM vehicle_date WHERE user_id=3 ", (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }
    });
});

app.put("/api/update_date", (req,res) => {
   
    const bookeddate = req.body.bookeddate;
   
    const sqlUpdate = "UPDATE vehicle_date SET bookeddate=? WHERE user_id=3";

    db.query(sqlUpdate, [bookeddate],
        
        (err,result) => {
        if(err){

            console.log(err);
        }else{

            res.send(result);
        }

});

});



app.post("/api/transport_owner_date_insert",(req, res)=>{


    const bookeddate = req.body.bookeddate;
    const user_id = req.body.user_id;

    const sqlInsert = "INSERT INTO vehicle_date (bookeddate,user_id) VALUES (?,3)";
    db.query(sqlInsert, [bookeddate,user_id] ,
        (err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });


    app.post("/api/account_details_insert",(req, res)=>{

        const user_name = req.body.user_name;
        const bank_name = req.body.bank_name;
        const branch_name = req.body.branch_name;
        const account_no = req.body.account_no;
        const user_id = req.body.user_id;
    
        const sqlInsert = "INSERT INTO bank_account_details (user_name,bank_name,branch_name,account_no,user_id) VALUES (?,?,?,?,3)";
        db.query(sqlInsert, [user_name,bank_name,branch_name,account_no,user_id] ,(err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });

    
}