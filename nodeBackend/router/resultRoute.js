const express = require('express');
const router = express.Router();
const result = require('../model/Results')


router.post('/addResult', async (req, res) => {
    var student_name = req.body.student_name
    var father_name = req.body.father_name
    var dob = req.body.dob
    var address = req.body.address
    var mobile_no = req.body.mobile_no
    var email = req.body.email
    var city = req.body.city
    var state = req.body.state
    var pincode = req.body.pincode
    var marks = req.body.marks
    var class_alloted = req.body.class_alloted
    var date_enrolled = req.body.date_enrolled


    await result.create({ student_name:student_name, father_name:father_name, dob: dob, address:address,
      mobile_no:mobile_no, email:email, city:city, state:state, pincode:pincode, marks:marks, class_alloted:class_alloted, date_enrolled:date_enrolled }).then(() => {
    }).catch((err) => {
        console.log(err);
    });
    res.send(req.body);
    // res.send("save succesfully")
});



router.post('/updateresult', async (req, res) => { 
  var student_name = req.body.student_name
  var father_name = req.body.father_name
  var dob = req.body.dob
  var address = req.body.address
  var mobile_no = req.body.mobile_no
  var email = req.body.email
  var city = req.body.city
  var state = req.body.state
  var pincode = req.body.pincode
  var marks = req.body.marks
  var class_alloted = req.body.class_alloted
  var date_enrolled = req.body.date_enrolled
  const results = await result.findOne({
    where: {
      student_name: student_name,
    },
  });
  await result.update(
    {
     student_name:student_name,
     father_name:father_name,
      dob: dob,
      address:address,
      mobile_no:mobile_no,
      email:email,
      city:city,
      state:state,
      pincode:pincode,
      marks:marks,
      class_alloted:class_alloted,
      date_enrolled:date_enrolled

    },
    {
      where: { student_name: student_name }
    })
  res.send(true)

});
module.exports = router;