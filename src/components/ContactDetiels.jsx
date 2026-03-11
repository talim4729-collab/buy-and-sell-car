import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";

const ContactDetiels = () => {
    return (
        <>
            <section>
             <div style={{textAlign : 'center'}}>
                <h4 style={{color : '#b62953'}}>Get in touch</h4>
                <h1 style={{padding : '20px 0'}}>Got any questions? <br/> Don't hesitate to get in touch.</h1>
                 <div className="cards">
                    <div className="card">
                        <h1 className="contct-icon"><IoCall /></h1>
                        <h3>Phone Number</h3>
                        <a style={{color: 'black'}} href="tel:+14080089786X">+14 080089786X</a>
                    </div>
                    <div className="card">
                        <h1 className="contct-icon"><MdEmail /></h1>
                        <h3>Email Address</h3>
                        <a style={{color: 'black'}} href="tel:help.designinvento@gmail.com">help.designinvento@gmail.com</a>
                    </div>
                    <div className="card">
                        <h1 className="contct-icon"><PiBuildingOfficeBold /></h1>
                        <h3>Office Address</h3>
                        <p>i.e 55 Cyan Avenue, Suite 65 Los Angeles</p>
                    </div>
                </div>
              </div>
            </section>
        </>
    );
};

export default ContactDetiels;