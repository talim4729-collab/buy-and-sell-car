import { Link } from "react-router-dom";
import USA from "../assets/usa.jpg"
import Canada from  "../assets/cn.jpg"
import UK from "../assets/uk.jpg"
import PK from "../assets/px.jpg"
import NZ from "../assets/nz.jpg"

const PopulorLoction = () => {
    return (
        <>
            <section>
                <div style={{textAlign : 'center', padding : "40px"}}>
                    <h1>Latest Cars</h1>
                    <p>Browse your desire car from recently listed</p>
                </div>
                <div className='populoar-location'>
                    <div className='locationBNR'>
                        <Link to="/" ><img height="300px" width="100%" src={USA} /></Link>
                        <p className="lcationName">USA</p>
                    </div>
                    <div className='locationBNR'>
                        <Link to="/" ><img height="300px"width="100%" src={Canada} /></Link>
                        <p className="lcationName">Canada</p>
                    </div>
                    <div className='locationBNR'>
                        <Link to="/" ><img height="300px" width="100%" src={UK} /></Link>
                        <p className="lcationName">UK</p>
                    </div>
                    <div className='locationBNR'>
                        <Link to="/" ><img height="300px" width="100%" src={PK} /></Link>
                        <p className="lcationName">Pakistan</p>
                    </div>
                    <div className='locationBNR'>
                        <Link to="/" ><img height="300px" width="100%" src={NZ} /></Link>
                        <p className="lcationName">New Zealand</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopulorLoction;