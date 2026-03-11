import { Link } from "react-router-dom";

const Buttons = ({btnLink,btnName}) => {
    return (
        <>
            <button type='button' className='btn'><Link to={btnLink}>{btnName}</Link></button>
        </>
    );
};

export default Buttons;