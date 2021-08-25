const con = require("../db");

module.exports = function(app){

    app.get("/readPackage",(req,res)=>{
        con.query(
            "select p.no_of_places_visit,p.time_limit,p.prize_with_van,pd.place_name,pd.place_description,t.type from package p,place_description pd,package_location pl,transport_type t,package_transport pt where pl.package_id=p.package_id and pl.place_id=pd.place_id and pt.package_id=p.package_id and pt.transport_id=t.transport_id",

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