const router = require('express').Router();
let Report = require('../models/report.model');

router.route('/').post((req, res) => {
  
  Report.count({ id: req.body.id }, (err, count) => { 
    if(count>0){      
      Report.findOne({ id : req.body.id}, (err, report) => {
        if(err)
        {
          console.log(err);
          res.status(400).json('Error: ' + err);
        }
        else{
          report.id = req.body.id;
          report.percentage = req.body.percentage;

          report.save()
            .then(() => res.json('Report updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      });
    }
      
    else{
      const id = req.body.id;
      const percentage = req.body.percentage;

      const newReport = new Report({
        id,
        percentage
      });

      newReport.save()
        .then(() => res.json('Report added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });

});

module.exports = router; 