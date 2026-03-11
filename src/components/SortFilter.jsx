import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const SortFilter = () => {
    const sortTerms = ["date", "random", "title", "price"];
    const [sortt, stsortt] = useState(false)
    const [value, setvalue] = useState('')

    return (
        <>
            <section>
                <div className='sort-filter'>
                    <div >
                        <h2>Result Found <span style={{ background: '#0000001d', padding: '5px' }}>20</span></h2>
                    </div>
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={value}
                            onChange={(e) => setvalue(e.target.value)}
                            placeholder='Enter Keyword'
                            onFocus={() => stsortt(!sortt)}
                        />

                        <span onClick={() => stsortt(!sortt)}> <IoMdArrowDropdown /> </span>

                        <div className={sortt ? 'open' : 'hide'}>

                            {sortTerms.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setvalue(data); setcarname(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SortFilter;