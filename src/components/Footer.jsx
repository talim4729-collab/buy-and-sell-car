import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                  {/* About Us */}
                    <div className="footer-col">
                        <h3>About Us.</h3>
                        <ul>
                            <li><Link to="#">About Classiads</Link></li>
                            <li><Link to="#">Our Products</Link></li>
                            <li><Link to="#">Advertise With Us</Link></li>
                            <li><Link to="#">How To Pay</Link></li>
                            <li><Link to="#">FAQs</Link></li>
                            <li><Link to="#">Refunds & Returns</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Cars By Category */}
                    <div className="footer-col">
                        <h3>Cars By Category.</h3>
                        <ul>
                            <li><Link to="#">Toyota Cars for Sale</Link></li>
                            <li><Link to="#">Suzuki Cars for Sale</Link></li>
                            <li><Link to="#">Honda Cars for Sale</Link></li>
                            <li><Link to="#">Daihatsu Cars for Sale</Link></li>
                            <li><Link to="#">Mitsubishi Cars for Sale</Link></li>
                            <li><Link to="#">Nissan Cars for Sale</Link></li>
                            <li><Link to="#">Mercedes Cars for Sale</Link></li>
                            <li><Link to="#">Hyundai Cars for Sale</Link></li>
                            <li><Link to="#">BMW Cars for Sale</Link></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div className="footer-col">
                        <h3>Explore Classiads.</h3>
                        <ul>
                            <li><Link to="#">Used Cars</Link></li>
                            <li><Link to="#">Used Bikes</Link></li>
                            <li><Link to="#">New Cars</Link></li>
                            <li><Link to="#">Auto Parts & Accessories</Link></li>
                            <li><Link to="#">Cool Rides</Link></li>
                            <li><Link to="#">Forums</Link></li>
                            <li><Link to="#">Autoshow</Link></li>
                            <li><Link to="#">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Cars By City */}
                    <div className="footer-col">
                        <h3>Cars By City.</h3>
                        <ul>
                            <li><Link to="#">Cars in New York</Link></li>
                            <li><Link to="#">Cars in California</Link></li>
                            <li><Link to="#">Cars in Illinois</Link></li>
                            <li><Link to="#">Cars in Texas</Link></li>
                            <li><Link to="#">Cars in Maryland</Link></li>
                            <li><Link to="#">Cars in New Mexico</Link></li>
                            <li><Link to="#">Cars in Missouri</Link></li>
                            <li><Link to="#">Cars in Florida</Link></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div className="footer-col">
                        <h3>Important Links</h3>
                        <ul>
                            <li><Link to="#">Help Desk</Link></li>
                            <li><Link to="#">How it Works</Link></li>
                            <li><Link to="#">Refund and Returns Policy</Link></li>
                            <li><Link to="#">Terms of Services</Link></li>
                            <li><Link to="#">Site Map</Link></li>
                            <li><Link to="#">Posting Policy</Link></li>
                        </ul>
                    </div>
            </footer>
        </>
    );
};

export default Footer;