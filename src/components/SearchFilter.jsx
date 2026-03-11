import { useState } from "react";
import { FaCarOn } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchFilter = () => {

    const carNames = ["Toyota Corolla", "Honda Civic", "Ford Mustang", "BMW 3 Series", "Audi A4", "Hyundai Elantra", "Kia Sportage", "Nissan Altima", "Chevrolet Malibu", "Mercedes C-Class"];

    const carMileage = ["18 km/l", "17 km/l", "12 km/l", "15 km/l", "14 km/l", "19 km/l", "16 km/l", "18 km/l", "15 km/l", "13 km/l"];

    const carCondition = ["New", "Used", "New", "Used", "New", "Used", "New", "Used", "New", "Used"];

    const carLocations = ["USA", "Germany", "Japan", "India", "UK", "Canada", "Australia", "UAE", "France", "South Korea"];

    const carYears = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];


    // value states
    const [carValue, setCarValue] = useState('')
    const [mileageValue, setMileageValue] = useState('')
    const [locationValue, setLocationValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    const [conditionValue, setConditionValue] = useState('')


    // dropdown states
    const [carname, setcarname] = useState(false)
    const [carmilage, setcarmilage] = useState(false)
    const [carlocation, setcarlocation] = useState(false)
    const [caryear, setcaryear] = useState(false)
    const [carcand, setcarcand] = useState(false)


    return (
        <>
            <section>

                <div className='search-filter'>


                    {/* CAR NAME */}
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={carValue}
                            onChange={(e) => setCarValue(e.target.value)}
                            placeholder='Enter Keyword'
                            onFocus={() => setcarname(!carname)}
                        />

                        <span onClick={() => setcarname(!carname)}><FaCarOn /> </span>

                        <div className={carname ? 'open' : 'hide'}>

                            {carNames.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setCarValue(data); setcarname(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>



                    {/* MILEAGE */}
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={mileageValue}
                            onChange={(e) => setMileageValue(e.target.value)}
                            placeholder='Enter Keyword'
                            onFocus={() => setcarmilage(!carmilage)}
                        />

                        <span onClick={() => setcarmilage(!carmilage)}><IoCaretDownSharp /> </span>

                        <div className={carmilage ? 'open' : 'hide'}>

                            {carMileage.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setMileageValue(data); setcarmilage(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>



                    {/* LOCATION */}
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={locationValue}
                            onChange={(e) => setLocationValue(e.target.value)}
                            placeholder='Enter Location'
                            onFocus={() => setcarlocation(!carlocation)}
                        />

                        <span onClick={() => setcarlocation(!carlocation)}><IoLocation /></span>

                        <div className={carlocation ? 'open' : 'hide'}>

                            {carLocations.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setLocationValue(data); setcarlocation(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>



                    {/* YEAR */}
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={yearValue}
                            onChange={(e) => setYearValue(e.target.value)}
                            placeholder='Enter Year'
                            onFocus={() => setcaryear(!caryear)}
                        />

                        <span onClick={() => setcaryear(!caryear)}><IoCaretDownSharp /> </span>

                        <div className={caryear ? 'open' : 'hide'}>

                            {carYears.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setYearValue(data); setcaryear(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>



                    {/* CONDITION */}
                    <div className='serch-input'>

                        <input
                            type='text'
                            value={conditionValue}
                            onChange={(e) => setConditionValue(e.target.value)}
                            placeholder='Enter Condition'
                            onFocus={() => setcarcand(!carcand)}
                        />

                        <span onClick={() => setcarcand(!carcand)}><IoMdArrowDropdown /> </span>

                        <div className={carcand ? 'open' : 'hide'}>

                            {carCondition.map((data, index) => (
                                <option
                                    key={index}
                                    onClick={() => { setConditionValue(data); setcarcand(false) }}
                                >
                                    {data}
                                </option>
                            ))}

                        </div>

                    </div>



                    <button
                        className='btn'
                        style={{ background: 'black', color: 'white', width: '300px' }}
                        type='search'
                    >
                        search
                    </button>


                </div>

            </section>
        </>
    );
};

export default SearchFilter;