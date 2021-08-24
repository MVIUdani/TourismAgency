const con = require("../db");

module.exports = function(app){

    app.get("/readPackage",(req,res)=>{
        con.query(
            "",

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