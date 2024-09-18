import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="bg-slate-950 w-full h-screen">

    <div className='flex p-40 max-w-53xl mx-auto flex-col md:flex-row md:items-center gap-40'>

        {/*left */}
        <div className='flex-1'> 
          <Link to='/' className='text-5xl font-bold'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700 rounded-lg text-white'>Uni</span>
          <span className='text-white font-boald'>Blog</span>
          </Link>

          <p className='text-white text-sm mt-5 text-slate-400'>
          You can SignUp with your E-mail and password or with Google.
          If you're new to our system, please [sign up] to join 
          our community of thinkers, writers, and innovators. 
          Together, we can inspire, inform, and make a 
          difference. Happy blogging..!          
          </p>
        </div>

         {/*right */}
        <div className='flex-1 '>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your UserName' className='text-slate-200'/>
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your E-mail'className='text-slate-200' />
              <TextInput type='text' placeholder='E-mail' id='email' />
            </div>
            <div>
              <Label value='Your Password' className='text-slate-200' />
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' type='submit'>Sign Up</Button>
          </form>

          <div className='flex gap-3 text-sm mt-5'>
            <span className='text-white'>Have an Account?</span>
            <Link to='/SignIn' className='text-blue-500'>Sign In 
            </Link>
          </div>
        </div >

      </div>
    </div>  
  )
}
