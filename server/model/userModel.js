const mongoose=require('mongoose');
const { boolean } = require('webidl-conversions');

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    code: {
      type: String,
      required: false,
    },
    vercode: {
      type: Boolean  ,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    NatID: {
      type: Number,
      required: false,
    },
    NumOfbike: {
      type: Number,
      required: false,
    },
    askQ: {
      type: Boolean,
      required: false,
    },
   
  },
  { timestamps: true }
);

module.exports= mongoose.model('User', userSchema)