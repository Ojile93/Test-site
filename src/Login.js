import header from "./Header.js"
import './App.css';
import {useState, useRef} from 'react'
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
    <p><a href='' className='modal-ext'>Continue</a> <span onClick={closemodal}style={{color:"lightgreen"}}>Cancel</span></p>
    </div>
    <img src={menuIcon} className ='menuicon' onClick={openmenu}/>
    <ul className ='header'>
    <li><a href='/Register'>Register</a></li>
    <li><a href=''>Login</a></li>
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

function Login(){
  const styl1 = {backgroundColor:"white", width:"90%", height:"70vh", borderRadius:"10px", 
    position:"relative", left:"", right:"2vh", top:"10vh",textAlign:" ", overflowY:"scroll", MarginLeft:""}
  return(
    <div>
    <div style={styl1}>
    <h3 style={{textAlign:"center",color:"blue"}}>Login as Student or Admin</h3>
    <form action ="" method ="">
    <label for ="Logusername" id ="logla">Enter Username </label>
    <input type="text" id ="logusername" placeholder ="Enter Username" onKeyUp={()=>{
      document.querySelector("#logla").style.display ="block"
    }} onBlur={()=>{
      let label= document.querySelector ("#logla");
      let inpu = document.querySelector ("#logusername")
      //if(inpu.value=""){
       // label.style.display="none"
     // }
    }}/><br/><br/><br/><br/>
    <label for ="logpassword" id ="logpas">Enter Password</label>
    <input type ="password" id ="logpassword" placeholder ="Enter Password"/><br/><br/><br/><br/>
    <label for= "passhow" id ="show" style={{display:"block", position:"relative",top:"10px"}}>Show Password </label>
    <input type ="checkbox" id ="passhow" style={{ position:"absolute", right:"80%",width:"30px"}} onClick={()=>{
      let checkbox =document.querySelector ("#passhow");
      let passInput= document.querySelector ("#logpassword");
      if(checkbox.checked){
        passInput.type ="text"
      //  passInput.disabled= true
      }else{
        passInput.type = "password"
      }
    }}/>
    </form><br/><br/><br/>
    <p style={{textAlign:"center"}}>Not yet registered? <a href="/Register" style={{textDecoration:"none"}}>Sign up</a> return <a href="/" style={{textDecoration:"none"}}> home </a></p>
    </div>
    </div>
    )
}

function LoginPage(){
  return(
  <div className="App">
  <Header/>
  <Login/>
  </div>
  )
}
export default LoginPage