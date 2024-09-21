import { Alert,Button, Label, TextInput,Spinner } from 'flowbite-react'
import  { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import OAuth from '../component/OAuth';




export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/Api/auth/SignUp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/SignIN');
      }
    } catch (error) {setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return ( <div className="bg-slate-950 w-full h-screen">
    
    <div className='flex p-40 max-w-53xl mx-auto flex-col md:flex-row md:items-center gap-40'>
    
        {/*left */}
        <div className='flex-1'> 
          <Link to='/' className='text-5xl font-bold'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700 rounded-lg text-white'>Uni</span>
          <span className='text-white font-boald'>Blog</span>
          </Link>
          
          <p className='text-sm mt-5 text-slate-400'>
          You can SignUp with your UserName, E-mail and password or with Google.
          If you're alrady use the system, please [Sign In] to join 
          our community. Happy blogging..!           
          </p>
        </div>
        
         {/*right */}
        <div className='flex-1 '>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your UserName' className='text-slate-200'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your E-mail'className='text-slate-200' />
              <TextInput type='email' placeholder='E-mail' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your Password' className='text-slate-200' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' type='submit' disabled={loading}>
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )} 
              </Button>
              <OAuth />
          </form>

          <div className='flex gap-3 text-sm mt-5'>
            <span className='text-white'>Have an Account?</span>
            <Link to='/SignIn' className='text-blue-500'>Sign In 
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div >

      </div>
    </div>  
    
  );
}
