import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Heder from './component/Heder'
import DashBoard from './pages/DashBoard'
import CreatePost from './pages/CreatePost'


export default function App() {
  return (
    <BrowserRouter>
    <Heder />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='/SignUp' element={<SignUp />}/>
      <Route path='/DashBoard' element={<DashBoard />}/>
      <Route path='/CreatePost' element={<CreatePost />}/>     

    </Routes>
    </BrowserRouter>
  )
}
