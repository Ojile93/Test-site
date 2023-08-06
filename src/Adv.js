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
function Background(){
  const slideImages= [
     <img src={image1}/>, 
     <img src={image2}/>,
    <img src={image3}/>,
    ];
    var [num, setUpdateNum] =useState (0)
    const ov = useRef ();
    let length = slideImages.length;
    let next = () => {
let lastSlide = num === length-1;
let nextSlide = lastSlide ? 0 : num++
  setUpdateNum (
    nextSlide
      );
    };
    let mainSlide = document.querySelector ('.main')
   const prev = () =>{
     let firstSlide = num===0;
     let nextSlide = firstSlide ? length-1 : num--
     setUpdateNum(
       nextSlide 
       )

    };

const view = {
  time: <img src={image2}/>
}
const msg = [
  <img src ={image1}/>,
  'text2: logout',
  'text3: login',

]
const tex =()=>{
  document.querySelector('#main').style.display ='none'
}
return(  
<div className='bg'>
   <div>
   <div style={{fontSize:'25px', zIndex:'1', position:'absolute', right:'',top:'10%', color:'red'}}><p onClick={prev}>《</p>
  <span style={{float:'right', color:'red',position:'absolute', left:'1200%',top:"25px"}} onClick={next} className="left">》</span></div>
  <div className ="main" ref ={ov}>
   {slideImages[num]}
   </div>
   </div>
    <div className ='adv'><p> Announcements</p>
    </div>
    <div className='adv'>
    <p>Contact us</p>
    <p className='con'> <a href=''><img src={whatapp}/>09066346305</a></p><hr/>
    <p className='con'><a href=''><img src={twitter}/>@fidelisojile</a></p><hr/>
    <p className ='con'><a href=''> <img src={facebook}/>@fidelisojile</a></p><hr/>
    <p className='con'><a href=''><img src={email}/>Ojilefed@gmail.com </a></p><hr/>
    <p className ='con'><a href=''><img src={Instagram}/>@fidelisojile</a> </p><hr/>
    <p className ='con'><img src={location} onClick={console.log('it is wll')}/>Opp. Big Apple Resort, along Enugu-Makurdi-express way, Obu Otukpa Branch, Benue state.</p><hr/>
    </div>
    </div>
    )
}
function Footer(){
  return(
<div>
  <div className ='foot'> &copy; 2023</div>
  </div>
)

}
function Aggregate (){
  return(
    <div>
    <Header/>
    <Background/>
    <Footer/>
    </div>
    )
}
export default Aggregate;
