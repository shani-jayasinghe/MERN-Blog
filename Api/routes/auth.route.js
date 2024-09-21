import express from 'express'
import { SignIn, SignUp, google } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/SignUp', SignUp);
router.post('/SignIn', SignIn);
router.post('/google', google)

export default router;