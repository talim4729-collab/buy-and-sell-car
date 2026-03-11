import { FaCheck } from "react-icons/fa";
import Buttons from './Buttons';
import { FaTimes } from "react-icons/fa";
const Subscriptions = () => {
    return (
        <>
            <section>
                <div className='cards'>
                    <div className='card subscription'>
                        <p>Free Package</p>
                        <h1>FREE</h1>
                        <h2><Buttons btnLink='/login' btnName="Select This Plan" /> </h2>
                        <ul style={{paddingTop :"20px", textAlign: 'left'}}>
                            <li><FaTimes /> Sticky</li>
                            <li><FaTimes /> Featured</li>
                            <li>Up to 5 categories</li>
                            <li>Up to 3 locations</li>
                            <li>Up to 12 images</li>
                            <li>1 video</li>
                        </ul>
                    </div>
                    <div className='card subscription'>
                        <p>normal Package</p>
                        <h1>£10</h1>
                        <h2><Buttons btnLink='/login' btnName="Select This Plan" /> </h2>
                        <ul style={{paddingTop :"20px", textAlign: 'left'}}>
                            <li><FaTimes /> Sticky</li>
                            <li><FaCheck /> Featured</li>
                            <li>Up to 5 categories</li>
                            <li>Up to 5 locations</li>
                            <li>Up to 12 images</li>
                            <li>2 video</li>
                        </ul>
                    </div>
                    <div className='card subscription'>
                        <p>Best Package</p>
                        <h1>£15</h1>
                        <h2><Buttons btnLink='/login' btnName="Select This Plan" /> </h2>
                        <ul style={{paddingTop :"20px", textAlign: 'left'}}>
                            <li><FaTimes /> Sticky</li>
                            <li><FaCheck /> Featured</li>
                            <li>No categories</li>
                            <li>Up to 10 locations</li>
                            <li>Up to 10 images</li>
                            <li>5 video</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subscriptions;