import catagryIMG1 from "../assets/catagry1.png";
import catagryIMG2 from "../assets/catagry2.png";
import catagryIMG3 from "../assets/catagry3.png";
import catagryIMG4 from "../assets/catagry4.png";
import catagryIMG5 from "../assets/catagry5.png";
import catagryIMG6 from "../assets/catagry6.png";
import catagryIMG7 from "../assets/catagry7.png";
import catagryIMG8 from "../assets/catagry8.png";
import catagryIMG9 from "../assets/catagry9.png";
import catagryIMG10 from "../assets/catagry10.png";
import catagryIMG11 from "../assets/catagry11.png";
import catagryIMG12 from "../assets/catagry12.png";
import catagryIMG13 from "../assets/catagry13.png";
import catagryIMG14 from "../assets/catagry14.png";
import catagryIMG15 from "../assets/catagry15.png";
import catagryIMG16 from "../assets/catagry16.png";
import catagryIMG17 from "../assets/catagry17.png";
import catagryIMG18 from "../assets/catagry18.png";
import { Link } from "react-router-dom";

const Catagery = () => {
    const carBrands = [
        { name: "Volkswagen", ads: 1, image: catagryIMG1 },
        { name: "Ford", ads: 1, image: catagryIMG2 },
        { name: "Mercedes", ads: 1, image: catagryIMG3 },
        { name: "Alfa Romeo", ads: 1, image: catagryIMG4 },
        { name: "BMW", ads: 1, image: catagryIMG5 },
        { name: "Audi", ads: 1, image: catagryIMG6 },
        { name: "Porsche", ads: 1, image: catagryIMG7 },
        { name: "Ferrari", ads: 1, image: catagryIMG8 },
        { name: "Hyundai", ads: 1, image: catagryIMG9 },
        { name: "Jaguar", ads: 1, image: catagryIMG10 },
        { name: "Nissan", ads: 1, image: catagryIMG11 },
        { name: "Suzuki", ads: 0, image: catagryIMG12 },
        { name: "Spyker", ads: 1, image: catagryIMG13 },
        { name: "Lada", ads: 0, image: catagryIMG14 },
        { name: "Mini", ads: 1, image: catagryIMG15 },
        { name: "Datsun", ads: 0, image: catagryIMG16 },
        { name: "Lamborghini", ads: 1, image: catagryIMG17 },
        { name: "Bugatti", ads: 1, image: catagryIMG18 }
    ];
    return (
        <>
          <section>
            <div className="car-barand">
                {carBrands.map((carcatagery, index) => {
                    return (
                        <div className='card'>
                        <Link to="/" ><img src={carcatagery.image} /></Link>
                        <div className="card-body">
                            <Link to="/" ><b>{carcatagery.name}</b></Link> <br/>
                            <span style={{color : 'red'}}> {carcatagery.ads} Ads </span>
                        </div>
                    </div>
                    )
                })}
            </div>
          </section>
        </>
    );
};

export default Catagery;