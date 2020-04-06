const router = require('express').Router();
let UserSession = require('../models/userSession.model');

router.route('/').post((req, res) => {
  //Get the request parameters
  const token = req.body.token;
  console.log("[verify] token from request : " + token)

  //Check if the user exists
  UserSession.find({userId : token}, (err, session) => { 
    console.log("[verify] session found : " + session)
    if(session.length != 1){
      res.send({
        message : "no session or multiple sessions found",
        isValid : false,
      })
    }
    else{
      res.send({
        isValid : session[0].isValid,
      })
    }
  });
});

module.exports = router; 