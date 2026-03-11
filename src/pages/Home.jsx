import Bannar from '../components/Bannar';
import TopBannar from "../assets/top-bannar.png"
import SearchFilter from '../components/SearchFilter';
import CarBrandNames from '../components/CarBrandNames';
import LatestCar from '../components/LatestCar';
import PopulorLoction from '../components/PopulorLoction';
import FutureCar from '../components/FutureCar';
import Userquary from './../components/Userquary';

const Home = () => {
    return (
        <>
            <Bannar bannarUrl={TopBannar} />
            <SearchFilter />
            <CarBrandNames />
            <LatestCar />
            <PopulorLoction />
            <FutureCar />
            <Userquary />
        </>
    );
};

export default Home;