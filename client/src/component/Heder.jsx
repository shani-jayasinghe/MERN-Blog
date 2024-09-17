import { Link } from 'react-router-dom'

export default function Heder() {
  return (
    <header>
        <div className='bg-slate-500'>
            <div className="flex justify-between p items-center max-w-6xl max-auto ">
                <h1 className=' max-w-6xl  p-4 self-center whitespace-nowrap text sm:text-3xl font-bold'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white'>Uni</span>
                <span className='text-white font-boald'>Blog</span>
                </h1>
            
      
            <ul className='flex gap-10 self-center'>
            <Link to='/'> <li className='hidden sm:inline text-slate-300 hover:underline hover:text-white text sm:text-xl'>Home</li> </Link>
            <Link to='/About'> <li className='hidden sm:inline text-slate-300 hover:underline hover:text-white text sm:text-xl'>About</li></Link>
            </ul>          
          
            <Link to='/SignIn'>
            <button className="bg-transparent border-2 border-blue-400 text-blue-400 px-3 py-1 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 font-bold  mr-4">Sign In</button>
            </Link>        
        </div>
        </div>
        
    </header>
  )
}
