import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashBoard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 ">
    <div className="flex items-center">
      {/* Left Message Section */}
      <div className="bg-[#c5c2c7]  px-10  py-14 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Your LogIn Successfully..!</h1>
        
        {/* Image Section */}
        <div className="flex justify-center items-center mb-4 ml-20">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/user-verification-3d-icon-download-in-png-blend-fbx-gltf-file-formats--authentication-profile-pack-interface-icons-5915192.png?f=webp"  
            alt="Profile"
            className="w-48 h-48 rounded-lg"/>
          
          <div className="flex flex-col ml-20 gap-20 -10">
        </div>
      </div>

      {/* Right Buttons Section */}
      <div className="flex flex-col gap-4">
        <Link to={'/CreatePost'} > 
        <Button type='submit' className='bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white w-96'>
          Create a Post
        </Button>
        </Link>


        <Button type='submit' className='bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white w-96' >
          View all Post
        </Button>
        </div>
      
      </div>
    </div>
  </div>
);
  
}
