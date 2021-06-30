import React, { useState } from 'react'
//styles
import {WrapMain} from './index.styles'
//images
import NavigationIcon from '../assets/images/navIcon'
import Home from '../assets/images/Home'
import Team from '../assets/images/Team'
import Projects from '../assets/images/Projects'
import Calendar from '../assets/images/Calendar'
import Document from '../assets/images/Documents'
import Facebook from '../assets/images/Facebook'
import Twitter from '../assets/images/Twitter'
import Likein from '../assets/images/likein'
import Be from '../assets/images/Be'
import Diamond from '../assets/images/Diamond'
import CloseBtn from '../assets/images/CloseIcon'
export default function Main() {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "400px";
        // console.log('workkkk')
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    const handleShowPopUp = () => {
        setIsOpen(true)
    }
    const handleClosePopup = () => {
        setIsOpen(false)
    }
    const handleOpen = () => {
        document.getElementById('id01').style.display='block'
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <WrapMain isOpen={isOpen}>
            <div id="mySidenav" className="sidenav">
                <div>
                    <div className="wrap-logo">
                        <p className="logo">Coding <span>Addict</span></p>
                        <a href="" className="closebtn" onClick={() => closeNav()}>×</a>
                    </div>
                    <a className="a-style" href="#"><Home className="icon"/>Home</a>
                    <a className="a-style" href="#"><Team className="icon"/>Team</a>
                    <a className="a-style" href="#"><Projects className="icon"/>Projects</a>
                    <a className="a-style" href="#"><Calendar className="icon"/> Calendar</a>
                    <a className="a-style" href="#"><Document className="icon"/>Documents</a>
                </div>
                <div className="social-group">
                    <a href="https://facebook.com ">
                        <Facebook className="social-icon" />
                    </a>
                    <a href="https://twitter.com">
                        <Twitter className="social-icon" />
                    </a>
                    <a href="">
                        <Likein className="social-icon" />
                    </a>
                    <a href="">
                        <Be className="social-icon" />
                    </a>
                    <a href="">
                        <Diamond className="social-icon" />
                    </a>
                
                </div>
            </div>
                <NavigationIcon className="icon-style" onClick={() => openNav()}></NavigationIcon>
                <button className="btn-style" onClick={handleShowPopUp}>Show Modal</button>
                {
                    isOpen === true ?
                    <div className="modal">
                        <CloseBtn className="close-btn" onClick={handleClosePopup} />
                        <p className="title">Modal Content</p>
                    </div>
                    :
                    ""
                }

        </WrapMain>
    )
}
