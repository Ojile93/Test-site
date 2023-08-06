import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Background from './Adv.js';
import Register from './Register.js';
import LoginPage from './Login.js'
function AppRouter(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path = "/" index element = {<Background/>}/>
    <Route path ="/Register" element= {<Register/>}/>
    <Route path ="/login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default AppRouter 
