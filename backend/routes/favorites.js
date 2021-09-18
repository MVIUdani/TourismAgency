const con = require("../db");

module.exports = function(app){

  //add place in package 1
    app.post("/addFavouriteP1",(req,res)=>{
     const user_id = req.body.user_id;
     const place_id = req.body.place_id;
     
     con.query(
"INSERT INTO favourites (user_id, place_id) VALUES (?,1)",
[user_id],
(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
     );
     
    });

    //add place in package 2
    app.post("/addFavouriteP2",(req,res)=>{
      const user_id = req.body.user_id;
      const place_id = req.body.place_id;
      
      con.query(
 "INSERT INTO favourites (user_id, place_id) VALUES (?,2)",
 [user_id],
 (err, result) => {
     if (err) {
       console.log(err);
     } else {
       res.send("Values Inserted");
     }
   }
      );
      
     });

     //add place in package 3
     app.post("/addFavouriteP3",(req,res)=>{
      const user_id = req.body.user_id;
      const place_id = req.body.place_id;
      
      con.query(
 "INSERT INTO favourites (user_id, place_id) VALUES (?,11)",
 [user_id],
 (err, result) => {
     if (err) {
       console.log(err);
     } else {
       res.send("Values Inserted");
     }
   }
      );
      
     });

     //add place in package 4
     app.post("/addFavouriteP4",(req,res)=>{
      const user_id = req.body.user_id;
      const place_id = req.body.place_id;
      
      con.query(
 "INSERT INTO favourites (user_id, place_id) VALUES (?,7)",
 [user_id],
 (err, result) => {
     if (err) {
       console.log(err);
     } else {
       res.send("Values Inserted");
     }
   }
      );
      
     });

     app.get("/readFavourites",(req,res)=>{

      con.query(
"SELECT p.place_name,p.place_description,p.place_image FROM place_description p,favourites f WHERE p.place_id=f.place_id",
 
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