import crypto from 'crypto';

const nodemailer = require('nodemailer');
const con = require("../db");

module.export = (app) => {
   app.post('/forgotPassword',(req,res)=>{
       if(req.body.email ===''){
           res.status(400).send('email required')
       }
       console.error(req.body.email);

     //should include select user query

   }).then((user)=>{
       if(user === null){
           console.error('email not in database');
           res.status(403).send('email not in db');
       }else{
           const token = crypto.randomBytes(20).toString('hex');

           //should include update user query
       }

       const transporter = nodemailer.createTransport({
           service: 'gmail',
           auth:{
               //include email addres & password here
               user: '',
               pass: '',
           },
       });

       const mailOptions = {
        from: '', // add our tour agency email address
        to: '${user.email}',
        subject: 'Link To Reset Password',
        text:
        'Your are receiving this because you have requeted the reset of the password for your account.\n\n'
        + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
        + 'http/localhost:3031/reset/${token}\n\n'
        + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
       };

       console.log('sending mail');

       transporter.sendMail(mailOptions, (err, response)=>{
           if(err){
               console.error('there was an error: ',err);
           }else{
               console.log('here is the res: ',response);
               res.status(200).json('recovery email sent');
           }
       });
   }) 
}