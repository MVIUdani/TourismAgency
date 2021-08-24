const con = require("../db");

module.exports = function(app){

app.post("/createFeedback",(req,res)=>{
const firstname = req.body.firstname;
const lastname = req.body.lastname;
const summary = req.body.summary;
const description = req.body.description;

con.query(
"INSERT INTO feedback (first_name, last_name, feedback_summary, description) VALUES (?,?,?,?)",
[firstname,lastname,summary,description],
(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);

});

app.get("readFeedback",(req,res)=>{
    con.query(
        "SELECT * FROM feedback",
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