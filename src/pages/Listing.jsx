import SearchFilter from '../components/SearchFilter';
import SortFilter from '../components/SortFilter';
import ProductList from '../components/ProductList';
import Buttons from './../components/Buttons';

const Listing = () => {
    return (
        <>
            <SearchFilter/>
            <SortFilter/>
            <ProductList/>
            <div style={{textAlign : 'center', margin : '20px'}} >
                <Buttons btnLink='/listing' btnName='See More' />
            </div>
        </>
    );
};

export default Listing;