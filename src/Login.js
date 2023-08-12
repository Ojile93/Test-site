import Header from "./Header.js"
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
    }}/><br/><br/><br/>
    <input type = 'submit' value ='Login' style={{position:"absolute",right:"5%"}}/>
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
