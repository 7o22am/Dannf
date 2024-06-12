const bcrypt = require("bcrypt");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require("./../model/userModel");
const { emit } = require("process");


function generateVerificationCode() {
  const code = crypto.randomBytes(3).toString('hex');
  return code.toUpperCase();
}


exports.registrationComplete = (req, res, next) => {
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length < 1) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            next(err);
          } else {
            const user = new User({
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
              phone: req.body.phone,
              NatID: req.body.NatID,
              NumOfbike: req.body.NumOfbike,
              askQ: req.body.askQ,
            });
            user
              .save()
              .then((response) => {
                console.log(response);
                res.status(200).json({ message: "User Created Successfully" });
              })
              .catch((err) => {
                next({ message: err.message });
              });
          }
        });
      } else {
        // User already exists, so update the existing user object
        User.findOneAndUpdate(
          { email: req.body.email },
          {
            userName: req.body.userName,
            password: req.body.password,
            phone: req.body.phone,
            NatID: req.body.NatID,
            NumOfbike: req.body.NumOfbike,
            askQ: req.body.askQ,
          }
        )
          .then((response) => {
            console.log(response);
            res.status(200).json({ message: "User Updated Successfully" });
          })
          .catch((err) => {
            next(err);
          });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.register = (req, res, next) => {

 
  const verificationCode = generateVerificationCode();
  User.find({ email: req.body.email })
    .then((email) => {

      const user = new User({
        email: req.body.email,
        code: verificationCode,
        vercode: false,
      });
      console.log(user);
      user
        .save()
        .then((response) => {        
          console.log(response);
        })
        .catch((err) => {
          next({ message: err.message });
        });

      if (email) {

        const transporter = nodemailer.createTransport({
          service: "Gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: '7o22am@gmail.com',
            pass: 'blto owrw fqrr feai'
          },
        });
        const mailOptions = {
          from: "7o22am@gmail.com",
          to: req.body.email,
          subject: 'Email Verification',
          text: `Please copy the following code to verify your email: 
            
            ${verificationCode}
            `
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email: ", error);
          } else {
            console.log("Email sent: ", info.response);
          }
        });
        res.status(200).json({ message: 'Email sent to user' });
      } else {
        res.status(404).json({ message: 'Email dont  sent to user' });
      }
    })
    .catch((err) => {
      next(err);
    });

    User.findOneAndUpdate(
      { email: req.body.email },
      { code: verificationCode }
    ).then(updatedDocument => {
      console.log('Document updated:', updatedDocument);
    })
      .catch(error => {
        console.error('Error updating document:', error);
      });



};

exports.verify = ((req, res, next) => {
  User.find({ email: req.body.email })
    .then((user) => {
      if (user.length > 0) {

        if (req.body.code == user[0].code) {
          user[0].vercode = true;
          User.findOneAndUpdate(
            { email: req.body.email },
            { vercode: true }
          ).then(updatedDocument => {
            console.log('Document updated:', updatedDocument);
          })
            .catch(error => {
              console.error('Error updating document:', error);
            });
          res.status(200).json({ message: { "message": "verify sucess", "userData": user } })
        } else {
          res.status(404).json({ message: `codes does not match  ` })

        }
        ;
      }
      else {
        res.status(404).json({ message: "User Not Found!" })
      }

    }).catch((err) => {
      next(err);
    })
});



exports.getAllUsers = ((req, res, next) => {

  User.find().then((user)=>{
    res.status(200).json(user)
  }).catch((err) => {
    next(err);
  })
   
});


