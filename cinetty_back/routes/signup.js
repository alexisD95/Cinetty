const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').post((req, res) => {
  //Get the request parameters
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  //TO CHANGE WHILE CREATING A ADMIN ACCOUNT (admin = priviledge 2)
  const priviledge = 0;

  //Check if the user exists
  User.count({email : email}, (err, previousUser) => { 
    if(previousUser > 0){
      res.status(400).json('User already exists');
    }
    else{
      //Save the user
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        priviledge
      });
      newUser.password = newUser.generateHash(password);

      console.log(newUser);

      newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('User save error: ' + err));
    }
  });
});

module.exports = router; 