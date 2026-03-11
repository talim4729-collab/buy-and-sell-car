import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import loginbannar from "../assets/loginbannar.jpg"
const Loginbannar = () => {
    return (
        <>
            <div className='login-bannar'>
               <img src={loginbannar} />
                <div className='bannar-content-link'>
                   <Link to="/">Home </Link> 
                   <span style={{color : 'white'}}><IoIosArrowForward /></span>
                   <Link to="/login">Login </Link>
                </div>
            </div>
        </>
    );
};

export default Loginbannar;