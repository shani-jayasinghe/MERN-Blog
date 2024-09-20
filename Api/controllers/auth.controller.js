import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const SignUp = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required..'));
    }

    const hashedPassord = bcryptjs.hashSync(password, 10);
 
    const newUser = new User({
        username,
        email,
        password: hashedPassord,
    });

try{ 
    await newUser.save();
    res.json('SignUp successful'); 
    }
    catch(error){
    next(error);
    }    
};


export const SignIn = async (req, res, next) => {
    const {email, password } = req.body;
    try{
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        res
        .cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(validUser);

    }catch (error){
        next(error);
    }
}


