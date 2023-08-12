import {useState, useRef} from 'react'
import './App.css';
import edu2 from './Edu2.jpg';
import menuIcon from './menu_icon.png';
import whatapp from './Whatapp.jpg';
import facebook from './Facebook2.jpg';
import twitter from './twitter.jpg';
import email from './Email-black.jpeg';
import Instagram from './Instagram.jpg';
import location from './Location.jpeg';
import image1 from './Image1.jpeg';
import image2 from './Image2.jpeg';
import image3 from './Image3.jpg';

function Header (){
const stye = (event) => {
 document.querySelector ('#menu').style.display = 'none';
}
const openmenu = (event) =>{
  document.querySelector('#menu').style.display ="block"
}
const openmodal = (event) => {
  document.querySelector ('#modal').style.display ='block'
}
const closemodal =(event) => {
  document.querySelector ('#modal').style.display ='none'
}
  return(
    <div className='head'>
   <div className ='modal' id ='modal'>
    <p className="" style = {{textAlign: 'center'}}><b>Please login to view Results</b> </p>
    <p><a href='/Login' className='modal-ext'>Continue</a> <span onClick={closemodal}style={{color:"lightgreen"}}>Cancel</span></p>
    </div>
    <img src={menuIcon} className ='menuicon' onClick={openmenu}/>
    <ul className ='header'>
    <li><a href='/Register'>Register</a></li>
    <li><a href='/Login'>Login</a></li>
    <li onClick ={openmodal} style = {{color:"blue"}}>View Results</li>
    </ul>
    <div className='schname'><img src={edu2} className ='edu2'/> <p1><b> Our Lady Queen of Apostles College </b></p1></div>
<div className='Menu' id ='menu'>
  <div className =''>
  <p>Home <span className ='close' onClick={stye}>X</span></p>
  <p>Login</p>
  <p>View Results</p>
  <p>Register</p>
  <p>Contact Us </p>
  </div><hr/>
  <div className='menuImage'>
  <img src={whatapp} className ='img'/>
  <img src={facebook} className ='img'/>
  <img src={twitter} className ='img'/>
  <img src={email} className ='img'/>
  <img src={Instagram} className ='img'/>
  </div>
  </div>
  </div>
    )
}
export default Header
