import React from 'react'
import { Button } from 'flowbite-react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SignInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => { 
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
                })
            const data = await res.json()
            if (res.ok){
                dispatch(SignInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    } 


  return (
    <Button type='button' className=' bg-pink-200 border-2 border-pink-700 hover:bg-gradient-to-r from-orange-200   to-pink-600 rounded-lg text-black hover:bg-blue-400 transition duration-300 border-spacing-0 font-bold'  onClick={handleGoogleClick}>
      Continue with Google  
    </Button> 
    
  )
}

