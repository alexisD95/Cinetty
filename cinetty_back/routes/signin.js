const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');
let UserSession = require('../models/userSession.model');

router.route('/').post((req, res) => {
  //Get the request parameters
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  //Check if the user exists
  User.find({email : email}, (err, user) => { 
    if(err){
      res.status(400).json('User is not signed up');
    }
    else if(user){
      if (bcrypt.compareSync(password, user[0].password)) {
        console.log("[signin] password validated")
        //Handling UserSession
        UserSession.count({ userId: user[0]._id }, (err, count) => { 
          if(count>0){   
            //Upadating user session   
            UserSession.findOne({ userId: user[0]._id}, (err, session) => {
              if(err)
              {
                //Error occured
                res.status(400).json('Error: ' + err);
              }
              else{
                //Updating the session
                session.isValid = true;
                session.timestamp = Date.now();
      
                console.log("[signin] user session updated : " + session)

                session.save()
                .then(() => res.send({
                  token : session.userId,
                  priviledge : session.priviledge
                }))
                .catch(err => res.status(400).json('Error: ' + err));
              }
            });
          }
            
          else{
            //Creating a user session
            const userSession = new UserSession();
            userSession.userId = user[0]._id;
            userSession.priviledge = user[0].priviledge;

            console.log("[signin] user session created : " + userSession)

            userSession.save()
              .then(() => res.send({
                token : userSession.userId,
                priviledge : userSession.priviledge
              }))
            .catch(err => res.status(400).json('User session creation error: ' + err));
            
          }
        });
      }
      else{
        res.status(400).json('Invalid credentials');
      }
    }
  });
});

module.exports = router; 