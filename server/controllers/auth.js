const User = require('../models/user');

exports.signup=(req,res)=>{
   //console.log('REQ BODY ON SIGNUP',req.body)
   const{name,email,password} = req.body;

   User.findOne({email: req.body.email})
   .exec((err,user)=>{
       if(user) {
           return res.status(400).json({
               error: 'User with that email already exists'
           });
       }
   });

   let newUser = new User({name,email,password});
   newUser.save((err,success)=>{
       if(err) {
           return res.status(400).json({
               error: 'Error saving user in database. Try again.'
           });
       }
       res.json({
           message: 'Signup success! Please login.'
       });
   });
};