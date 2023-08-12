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

function Register(){
  const labelStyle= ()=>{
    
  }
  const styl1 = {backgroundColor:"white", width:"90%", height:"70vh", borderRadius:"10px", 
    position:"relative", left:"", right:"2vh", top:"10vh",textAlign:" ", overflowY:"scroll", MarginLeft:""
  }
  return (
 <div style={{backgroundColor:"5BAACAFF", height:"100vh", marginTop:"", borderRadius:"10px"}}>
  <div style = {styl1} className="App">
  <h3 style={{ color:"blue", margin:"15px", position:"sticky",zIndex:""}}>Registration Form/Students Bio-data </h3>
    <form action="./" method="post">
   <label for ="firstName" id ="lafirstname">Enter First Name</label>
    <input type ="text" id ="firstName" name = "First Name" placeholder ="Enter First Name" required="required" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lafirstname");
      let inputFirstName = document.querySelector("#firstName");
      labelFirstName.style.display ="block";
     if( inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Firstname is required"; labelFirstName.style.color ="red"} else {labelFirstName.textContent="Entering FirstName"; labelFirstName.style.color="gray"}
    }}/><br/><br/><br/>
    <label for ="SurName" id ="lasurname">Enter Surname</label>
    <input type ="text" id ="SurName"  placeholder ="Enter Surname" required="required" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lasurname");
      let inputFirstName = document.querySelector("#SurName");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Surname is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Entering Surname";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
 <label for ="middleName" id ="lamidname">Enter Middle Name</label>
    <input type ="text" id ="middleName" placeholder ="Enter Middle Name" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lamidname");
      labelFirstName.style.display ="block";
    }}/><br/><br/><br/>
    <label for ="number" id ="lanumber">Enter Mobile Number</label>
    <input type ="number" id="number" placeholder ="Enter Mobile Number" required ="required" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lanumber");
      let inputFirstName = document.querySelector("#number");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Mobile Number is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter Mobile Number";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
    <label for ="email" id ="laemail">Enter Email Address</label>
    <input type ="email" id="email" placeholder="Enter Email address" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#laemail");
      let inputFirstName = document.querySelector("#email");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Email is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter Email Address";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
    <label style={{ position:"abosolute", left:"0px", display:"block"}}>Select Gender </label><br/>
 <label for = "male" style={{display:"block"}}> Male</label>
    <input type ="radio" className="radio" id ="male" name = "gender" value ="Male"/><br/>
 <label for ="female" style={{display:"block"}}>Female</label>
    <input type ="radio" className="radio" id ="female" name = "gender" value="Female"/><br/>
     <label for ="other" style={{display:"block"}}>Others</label>
    <input type ="radio" className="radio" id ="other" name = "gender"/><br/><br/><br/>
 <label for ="state" id="lastate">State of Origin</label>
    <input type ="text" id ="state" placeholder ="Enter State of Origin"onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lastate");
      let inputFirstName = document.querySelector("#state");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="State of Origin is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter State of Origin";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
     <label for ="lga" id ="lalga">Enter LGA of Origin</label>
    <input type ="text" id ="lga" placeholder ="Enter LGA of Origin" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lalga");
      let inputFirstName = document.querySelector("#lga");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="LGA is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter LGA of Origin";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
     <label for ="address" id ="lare">Enter Residential Address</label>
    <input type ="text" id ="address" placeholder ="Enter Residential Address" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lare");
      let inputFirstName = document.querySelector("#address");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Address is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter Residential Address";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
    <label style={{backgroundColor:"", float:"left", position:"abosolute",  left:"0px",color:"lightGreen", display:"block"}}>State of Origin the same as State of Residence?</label><br/><br/>
     <label for ="yes" className="" style={{ position:"abosolute", bottom:"px" ,display:"block"}}>Yes</label>
    <input type ="radio" className ="radio" id ="yes" name = "qtn" onClick={()=>{
    let yes = document.querySelector ("#yes");
      let add = document.querySelector ("#reState");
      let relga = document.querySelector ("#reLGA");
      if (yes.checked){
        add.disabled = true;
        relga.disabled = true;
      }
   } }/><br/>
 <label for ="no" style={{ position:"absolute",bottom:"", display:"block"}} >No</label>
    <input type ="radio" className ="radio"  id ="no" name = "qtn" onClick={()=>{
    let yes = document.querySelector ("#no");
      let add = document.querySelector ("#reState");
      let relga = document.querySelector ("#reLGA");
      if (yes.checked){
        add.disabled = false;
        relga.disabled = false;
      }
   } }/><br/><br/><br/>
 <label for ="reState" id ="lares">Enter State of Residence</label>
    <input type ="text" id ="reState"  placeholder ="Enter State of Residence" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#lares");
      let inputFirstName = document.querySelector("#reState");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="Residential state is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter Residential state";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
     <label for ="reLGA" id ="larel">Enter LGA of Residence</label>
    <input type ="text" id ="reLGA"  placeholder ="Enter LGA of Residence" onKeyUp={()=>{
      let labelFirstName = document.querySelector ("#larel");
      let inputFirstName = document.querySelector("#reLGA");
      labelFirstName.style.display ="block";
      if(inputFirstName.value.length < 1 ){ labelFirstName.textContent ="LGA of Residence is required";
        labelFirstName.style.color = "red"
      }
      else{labelFirstName.textContent="Enter LGA of Residence";
        labelFirstName.style.color ="gray"
      }
    }}/><br/><br/><br/>
    <label for ="username" id ='lausername'> Enter preferred login Username </label>
    <input type ="text" id ="username" placeholder ="Enter preferred Login Username" onKeyUp={ ()=>{
      let input = document.querySelector ("#username");
      let label = document.querySelector ("#lausername");
      label.style.display ="block"
      if(input.value.length<5){label.textContent ="Username should more than five characters";
      label.style.color ="red"}
      else{ label.textContent="Enter Username";
        label.style.color="gray"
      }
    }}/><br/><br/><br/>
    <label for= "password" id ="lapassword">Create Login Password </label>
    <input type="password" id ="password" placeholder ="Create Password" required="required" onKeyUp={()=>{
    let lapas =document.querySelector ("#lapassword")
    lapas.style.display ="block"}}/><br/><br/><br/>
    <label for = "conPassword" id ="lacon">Confirm Password</label>
    <input type ="password" id ="conPassword" placeholder ="Confirm Password" required ="required" onKeyUp={ ()=>{let conInput = document.querySelector("#conPassword");
      let pasInput = document.querySelector ("#password");
      let conInputv = document.querySelector("#conPassword");
      let Lapass = document.querySelector("#lapassword");
      let lacon = document.querySelector ("#lacon");
      lacon.style.display = "block"
      if(conInputv.value !==pasInput.value){
        lacon.textContent="Password does not match";
        lacon.style.color ="red"
      } else { lacon.textContent="Confirm Password";
        lacon.style.color="gray"
      }
   } }/><br/><br/><br/>
    <input type="checkbox" id ="checkbox" style={{ position:"absolute", right:"80%", fontSize:"10px"}} className="checkbox" onClick={()=>{
      let submitv = document.querySelector ("#submit");
      let box = document.querySelector (".checkbox");
      if(box.checked){ submitv.disabled=false}
    else{submitv.disabled=true}
      
    }}/>
    <p style={{ textAlign:"center",  position:"relative", left:"15%",boxSizing:"border-box",width:"85%"}} 
      > By checking this box you agree<br/> to the various terms, and conditions<br/> guiding this school and you as well <br/>understand that School is a regimented<br/> area, and as such some disciplinary<br/> measures may be used on your ward </p>
  <input type ="submit" id ="submit" value ="Submit" disabled={true}/>
    </form><br/><br/><br/><br/>
    <p style={{ textAlign:"center", textDecoration:"none"}}> Already registered?, <a href="/login" style={{textDecoration:"none"}}>sign in</a> return <a href="./" style={{textDecoration:"none"}}>home</a></p>
    </div>
    </div>
    )
}
function Footer(){
  return(
  <div>
    <div className ="foot" style={{textAlign:"", zIndex:"",height:"",color:"white"}} >&copy;2023</div>
    </div>
    )
}
function RegistrationPage(){
  return(
    <div className="App">
    <Header/>
    <Register/>
    <Footer/>
    </div>
    )
}
export default RegistrationPage
