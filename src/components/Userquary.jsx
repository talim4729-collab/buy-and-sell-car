import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Userquary = () => {
    const [qst1, setqst1] = useState(false)
    const [qst2, setqst2] = useState(false)
    const [qst3, setqst3] = useState(false)
    const [qst4, setqst4] = useState(false)
    const openquary = () => {
        setqst1(!qst1)
        setqst2(false)
        setqst3(false)
        setqst4(false)
    }
    const openquary2 = () => {
        setqst2(!qst2)
        setqst1(false)
        setqst3(false)
        setqst4(false)
    }
    const openquary3 = () => {
        setqst3(!qst3)
        setqst2(false)
        setqst1(false)
        setqst4(false)
    }
    const openquary4 = () => {
        setqst4(!qst4)
        setqst2(false)
        setqst3(false)
        setqst1(false)
    }
    return (
        <>
            <section>
                <div className='askquary'>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <ul>
                        <li>
                            <h2 onClick={openquary}> <RiArrowDropDownLine /> How long do I get theme update?</h2>
                            <p className={qst1 ? 'quary' : 'hide'}>When you purchased our theme, you will get lifetime update for future theme features improvement and for the future design improvements.</p>
                        </li>
                        <li>
                            <h2 onClick={openquary2}> <RiArrowDropDownLine /> Is there any paid plugins needed?</h2>
                            <p className={qst2 ? 'quary' : 'hide'}>No! Everything from the functionality we announced through the description of the ClassiAds product enters the final price of the product. There are no additional payments for the smooth running of the ClassiAds theme.</p>
                        </li>
                        <li>
                            <h2 onClick={openquary3}> <RiArrowDropDownLine /> Ways To Earn Money From ClassiAds ?</h2>
                            <p className={qst3 ? 'quary' : 'hide'}>There are several great ways to monetize: <br />

                                Pricing Packages <br />
                                Promotions <br />
                                Premium Profiles <br />
                                Microtransactions <br />
                                Affiliates <br />
                                Google Ads <br />
                                Third parties ads <br />

                                And all this with the help of WooCommerce with which you have all possible payment methods provided!</p>
                        </li>
                        <li>
                            <h2 onClick={openquary4}> <RiArrowDropDownLine /> What classified ads website is possible?</h2>
                            <p className={qst4 ? 'quary' : 'hide'}>You can create any type of classified ads website with a ClassiAds Classified Ads WordPress Theme, in a very professional and likable way for all visitors to your website.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Userquary;