const db = require("../db");

module.exports = function(app){


    app.post("/api/food_insert",(req, res)=>{

        const brekfast = req.body.brekfast;
        const lunch = req.body.lunch;
        const dinner = req.body.dinner;
        const juice = req.body.juice;
        const dessert = req.body.dessert;
        const user_id = req.body.user_id;
    
        const sqlInsert = "INSERT INTO food_details (brekfast,lunch,dinner,juice,dessert,user_id) VALUES (?,?,?,?,?,4)";
        db.query(sqlInsert, 
        [brekfast,lunch,dinner,juice,dessert,user_id] , 
        (err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });


    
    app.post("/api/room_insert",(req, res)=>{

        const all_room = req.body.all_room;
        const single = req.body.single;
        const double_room = req.body.double_room;
        const family = req.body.family;
        const user_id = req.body.user_id;
    
        const sqlInsert = "INSERT INTO room_details (all_room,single,double_room,family,user_id) VALUES (?,?,?,?,4)";
        db.query(sqlInsert, 
        [all_room,single,double_room,family,user_id] , 
        (err,result) => {
            if(err){
    
                console.log(err);
            }else{
    
                res.send(result);
            }
    
    });
    
    });


}