import {useState, useRef} from "react";
import {route, routes, link} from 'react-router-dom';
import './App.css';
import edu2 from './Edu2.jpg';
import menuIcon from './menu_icon.png';
import Background from './Adv.js';
import AppRouter from './RouterApp.js';

function App() {
  return (
    <div className='App'>
    <AppRouter/>
    </div>
    );
};
export default App;  
