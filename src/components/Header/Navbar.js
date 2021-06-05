import  MenuList  from "./MenuList"
import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import "./style.css";
import {NavLink} from "react-router-dom";
import TocIcon from '@material-ui/icons/Toc';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";

 const Navb = () => {
	const [change, setChange] = useState(false)

	
const changeNavBar =() =>{
	if(window.scrollY >= 700){
		setChange(true)
	}
	else{
		setChange(false) 
	}
}

window.addEventListener('scroll', changeNavBar);


//  const [clicked, setClicked]=useState(false)


// const menuList = MenuList.map(({url,title} , index)=>{
//       return(
//         <li key={index}>
//           <NavLink exact to={url} activeClassName="active" >{title}</NavLink>
//         </li>
//       )
// })

// const handleClick = () =>{
//   setClicked(!clicked)
// }

  return (
    
      <Nav className={ change?' navbar active  navbar-expand-lg navbar-light fixed-top' : 'navbar  navbar-expand-lg navbar-light ' }>
        <div className="container head" >
          <Link  onClick={()=>scroll.scrollToTop()} className="navbar-brand  text-dark">Portfolio</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="home" smooth={true} duration={1000} className="nav-link text-dark ">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="gallery" smooth={true} duration={1000} className="nav-link text-dark">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="video" smooth={true} duration={1000} className="nav-link text-dark ">Videos</Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">About</a>
              </li>
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={1000} className="nav-link text-dark">Contact</Link>
              </li>
            </ul>
         
        </div>
      </Nav>
    
    // <nav className={change?'navbar active':'navbar'}>
    //   <div className="Logo" >Logo</div>
    //   <div className="menu-icon" onClick={handleClick}>
    //     {!clicked? <CloseIcon  /> :<TocIcon  />}  
    //   </div>
    //   <ul className={!clicked? "menuList": "menuList close"}>{menuList}</ul>
    // </nav>
  );
};

export default Navb;
