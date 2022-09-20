//const Item = require("../models/User");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcrypt = require("bcryptjs");
const jwt =require('jsonwebtoken');
const config =  require('../config/config')

const nodemailer= require("nodemailer");
const randomstring= require("randomstring");
//const { config } = require("@fortawesome/fontawesome-svg-core");
const { info } = require("autoprefixer");
const bcryptjs = require("bcryptjs");

  // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmE5YTQ5OTU4NWRmZTUwZTg3NjVlZTUiLCJpYXQiOjE2NTU3MDcwNDYsImV4cCI6MTY1ODI5OTA0Nn0.PKjkL6aqduU95DObbG-TOZtsWkfA2HFvRmBAwOPy5kw"
  // "userId": "62a9a499585dfe50e8765ee5";

const sendresetpasswordMail = async(name, email, token)=> {
    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 25,
            secure: true,
            requireTLS: true,
            auth:{
                user:config.emailUser,
                pass:config.emailPassword
            }
        });
        const mailOptions = {
            from:config.emailUser,
            to: email,
            subject:'For reset password',
            html: '<p> Hii '+name+',Please copy the link and <a href="{{dbURL}}api/v1/auth/reset-password?token='+token+'"> reset your password </a>' 
        }
        console.log("hello", mailOptions);
        transporter.sendMail(mailOptions, function(error, infor){
            if(error)
                console.log(error);
            else
                console.log("Mail has been sent to the registered mail:- ", infor.response)
        });
    } catch (error) {
        res.status(400).send({
            msg:error.message
        });
    }

}

const register = async (req, res, next) => {
    try {
        console.log(req.body);
        const user = await User.create({ ...req.body });
        const token = jwt.sign({ userId: user._id, name:user.name }, 'jwtSecret', {
            expiresIn:'30d', 
        })
        res.status(StatusCodes.CREATED).json({ user:{name: user.name }, token, user_id: user._id, })  
    } catch (err) {
        return next(err);
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password)
        return next(new BadRequestError('Please provide email and password'));

    const user = await User.findOne({ email });
    if (!user)
        return next(new UnauthenticatedError('Invalid Credentials'));
    
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect)
        return next(new UnauthenticatedError('Invalid Credentials'));
    
    const token = user.createJWT()
    return res.status(StatusCodes.OK).json({ user: { name: user.name, email: user.email, user_id: user._id}, token })
};

const forgetPassword = async(req,res) => {

  try {
    const email = req.body.email;
    const userData = await User.findOne({ email:email });
    if(userData){
        const randomString = randomstring.generate();
        const data = await User.updateOne({email:email}, {$set:{token: randomString}})
        sendresetpasswordMail(userData.name, userData.email,randomString);
        res.status(200).send({msg:"Please check you inbox and reset your password."});
    }
    else{
      res.status(200).send({msg:"This email does not exists."});
    }
    
  } catch (error) {
      res.status(400).send({msg:error.message});
  }
   
}

const securePassword = async (password)=>{
  try {
    const passwordHash = await bcryptjs.hash(password,10);
    return passwordHash;
  } catch (error) {
    res.status(400).send({msg:error.message});
  }
}


const resetpassword = async (req, res) =>{
  try {
    
    const token = req.query.token;
    const tokenData = await User.findOne({ token: token })
    if(tokenData)
    {
        const password = req.body.password;
        const newPassword = await securePassword(password);
        const userData = await User.findByIdAndUpdate({ _id: tokenData._id  },{$set:{password:newPassword, token:'' }},{new:true});
        res.status(200).send({msg:"User password has been reset successfully", data: userData});
    }
    else{
      res.status(200).send({msg:"this link has been expired."});
    }
  } catch (error) {
    res.status(400).send({msg:error.message});
    
  }

}


module.exports = {
  register,
  login,
  forgetPassword,
  resetpassword,
  securePassword,
  sendresetpasswordMail
};