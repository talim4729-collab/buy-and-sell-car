import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

const Contactform = () => {
    const [name,setname] =useState("")
    const [email,setemail] =useState("")
    const [number,setnumber] =useState("")
    const [massage,setmassage] =useState("")
    //err
    const [errname,seterrname] =useState("")
    const [errremail,seterremail] =useState("")
    const [errnumber,seterrnumber] =useState("")
    const [errmassage,seterrmassage] =useState('')

    function formvalidation(e){
        e.preventDefault()
        if(name===""){
            seterrname('Please enter valid name')
            return false
        }
        else{
            seterrname('')
        }
       if(email==="" || !email.includes("@" )){
            seterremail('Please enter valid email')
            return false
        }
        else{
            seterremail('')
        }
        if(number.length<10 || isNaN(number)){
            seterrnumber('Please enter valid number')
            return false
        }
        else{
            seterrnumber('')
        }
        if(massage===""){
            seterrmassage('Please enter valid massage')
            return false
        }
        else{
            seterrmassage('')
        }
        alert( ' form sub,it')
        e.target.submit()
    }
    return (
        <>
            <section>
                <div className='contact-container'>
                    <div >
                        <iframe
                            src="https://www.google.com/maps?q=New+Delhi,110059&output=embed"
                            width="100%"
                            height="100%">
                        </iframe>
                    </div>
                    <div className='contact-form'>
                        <h2>if already a member please get <Link style={{ color: 'blue' }} to="/">login</Link> here.</h2>
                        <form onSubmit={formvalidation}>
                            <input type='text'value={name} onChange={(e) => setname(e.target.value)} placeholder='Full Name' /> <br />
                            <span className='errr'>{errname}</span>  <br />
                            <input type='text'value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email address' /> <br />
                            <span className='errr'>{errremail}</span>  <br />
                            <input type='text'value={number} onChange={(e) => setnumber(e.target.value)} placeholder='Phone Number' /> <br />
                            <span className='errr'>{errnumber}</span>  <br />
                            <textarea value={massage} onChange={(e) => setmassage(e.target.value)} placeholder='Massage'></textarea> <br />
                            <span className='errr'>{errmassage}</span>  <br />
                            <button type='submit' >submit </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contactform;