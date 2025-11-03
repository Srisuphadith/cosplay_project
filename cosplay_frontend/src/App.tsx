import Profile from './page/profile'
import Login from './page/login';
import Grid from './page/css_grid';
import Home from './page/home';
import Register from './page/register';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  
  //navigate("/profile");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
