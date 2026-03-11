import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import Logo from "../assets/logo.png"
import Buttons from "./Buttons";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    const [menu,setmenu] =useState(false)
    const openmenu=() =>{
        setmenu(!menu)
    }
    const [dropdown,setdropdown] =useState(false)
    const opendropdown=() =>{
        setdropdown(!dropdown)
    }
    return (
        <>
            <header>
                <nav>
                    <button className="menuBTN" onClick={openmenu} ><LuSquareMenu /></button>
                    <ul className={menu ? "mobile" : "destop"}>
                        <li className='nav-link'>
                            <Link to="/" >Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to="/listing" >Listing</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to="/catageries" >Catageries</Link>
                        </li>
                        <li className='nav-link' style={{position : 'relative'}}>
                            <Link onClick={opendropdown} >More <RiArrowDropDownLine /> </Link>
                            <div className={dropdown ? 'more' : 'hide'}>
                                <ul>
                                    <li>About</li>
                                    <li>Pravecy Policy</li>
                                    <li>FAQ</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </li>
                        <li className='nav-link'>
                            <Link to="/blog" >Blogs</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="extra-link">
                    <a href="tel:00 999 123 000X"> <IoCall /> 00 999 123 000X</a>
                    <span style={{paddingLeft : '40px',alignItems :'center'}} ><Link to="/login"> <CgProfile /> Login</Link></span>
                </div>
            </header>
            <div className="header-2">
                <div className="logo">
                   <Link to="/" ><img height="40px" src={Logo} /> </Link>
                </div>
                <div className="fb" >
                    <form>
                        <input type="search" placeholder="enter ketwords" />
                        <input type="email" placeholder="enter email"/>
                        <button type="search" className="searchbtn">serch</button>
                    </form>
                    <Buttons btnLink='/seller' btnName="sell your car" />
                </div>
            </div>
        </>
    );
};

export default Header;