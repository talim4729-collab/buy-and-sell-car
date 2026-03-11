import { Link } from "react-router-dom";
import Carbrand1 from "../assets/carbrand1.png"
import Carbrand2 from "../assets/carbrand2.png"
import Carbrand3 from "../assets/carbrand3.png"
import Carbrand4 from "../assets/carbrand4.png"
import Carbrand5 from "../assets/carbrand5.png"
import Carbrand6 from "../assets/carbrand6.png"
const CarBrandNames = () => {
    return (
        <>
            <section>
                <div style={{textAlign : 'center', padding: '30px 0'}}>
                    <h3>Buy & Sell Anything</h3>
                </div>
                <div className='car-barand'>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand1} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>Bugatti</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand2} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>Volkswagen</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand3} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>Ford</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand4} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>Mercedes</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand5} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>Alfa Romeo</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                    <div className='card'>
                        <Link to="/" ><img src={Carbrand6} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>bmw</b></Link> <br/>
                            <span style={{color : 'red'}}> 1 Ads </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarBrandNames;