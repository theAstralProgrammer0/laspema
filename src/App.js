import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../src/pages/About'
import Home from '../src/pages/Home'
import Blog from '../src/pages/Blog'
import Team from '../src/pages/Team'
import Contact from '../src/pages/Contact'
import Signup from '../src/pages/Signup'
import Login from '../src/pages/Login'
import SignupNextForm from './components/SignupNextForm'
import AccountSelectForm from './components/AccountSelectForm'

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signup/account-setup/personal-info' element={<SignupNextForm/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/account-select' element={<AccountSelectForm/>}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
