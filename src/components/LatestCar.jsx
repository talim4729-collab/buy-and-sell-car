import Itmbox from './Itmbox';
import latestcarimage1 from "../assets/Latestcar1.jpg"
import latestcarimage2 from "../assets/Latestcar2.jpg"
import latestcarimage3 from "../assets/Latestcar3.jpg"
import latestcarimage4 from "../assets/Latestcar4.jpg"
const LatestCar = () => {
    return (
        <>
            <section>
                <div style={{textAlign : 'center', padding : "40px"}}>
                    <h1>Latest Cars</h1>
                    <p>Browse your desire car from recently listed</p>
                </div>
                    <div className='cards'>
                        <div className='card itms'>
                            <Itmbox
                                carimage={latestcarimage1}
                                brand="Nissan"
                                carname="Nissan 370Z Clubspor"
                                link="/"
                                year="2015 "
                                gear='Aoutomatic '
                                location='Canada'
                                price="$98875 Fixxed"
                            />
                        </div>
                        <div className='card itms'>
                            <Itmbox
                                carimage={latestcarimage2}
                                brand="Lamborghini > Aventador"
                                carname="Lamborghini Aventador"
                                link="/"
                                year=" 2017 "
                                gear=' Manual '
                                location=' Canada '
                                price="$586090 Fixxed"
                            />
                        </div>
                        <div className='card itms'>
                            <Itmbox
                                carimage={latestcarimage3}
                                brand="Spyker > Spyder"
                                carname="Spyker C8 Spyder"
                                link="/"
                                year="2006 "
                                gear='Aoutomatic '
                                location='Maryland, USA'
                                price="$5648 Fixxed"
                            />
                        </div>
                        <div className='card itms'>
                            <Itmbox
                                carimage={latestcarimage4}
                                brand="Audi > A6"
                                carname="Audi R8"
                                link="/"
                                year="2017 "
                                gear='Aoutomatic '
                                location='Canada'
                                price="$46908 Fixxed"
                            />
                        </div>
                    </div>
            </section>
        </>
    );
};

export default LatestCar;