import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { MdEditLocation } from "react-icons/md";
import profile from "../assets/profile.jpg"
const Itmbox = ({carimage,brand,carname,year,gear,location,link,price,className}) => {
    return (
        <>
            <div className={`itmbox ${className}`}>
                <div className="itmbox-header">
                    <img width="100%" src={carimage}></img> 
                <span className='star-icon'><IoIosStar /></span>
                <img className="profile-icon" height="30px" src={profile} />
                </div>
                <p style={{color : '#00000083', padding : ' 5px 0'}}>{brand}</p>
                <h4><Link style={{color : 'black'}} to={link}>{carname}</Link></h4>
                <p style={{color : '#00000083', padding : ' 10px 0'}}> <FaCarSide /> {year} <GiGearStickPattern /> {gear} <MdEditLocation /> {location} </p>
                <p className="price">{price}</p>
            </div>
        </>
    );
};

export default Itmbox;