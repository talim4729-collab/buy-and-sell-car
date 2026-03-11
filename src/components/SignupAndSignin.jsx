import loginsidebannar from "../assets/loginsidebannar.png"
import { useState } from "react";
const SignupAndSignin = () => {
    //popup
        const [signup,setsignup] =useState(true)
        const [signin,setsignin] =useState(false)

    //validation
     const [name,setname] =useState("")
        const [email,setemail] =useState("")
        const [password,setpassword] =useState("")
        const [repassword,setrepassword] =useState("")
        //err
        const [errname,seterrname] =useState("")
        const [errremail,seterremail] =useState("")
        const [errpassword,seterrpassword] =useState("")
        const [errrepassword,seterrrepassword] =useState('')
    
        function formvalidation(e){
            e.preventDefault()
            if(name===""){
                seterrname('Please enter valid name')
                return false
            }
            else{
                seterrname('')
            }
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if(!emailRegex.test(email)){
                seterremail('Please enter valid email')
                return false
            }
            else{
                seterremail('')
            }
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
            if (!passwordRegex.test(password)) {
                seterrpassword( "Password must include a number, a special character, and a letter, and be at least 8 characters long.")
                return false
            }
            else{
                seterrpassword('')
            }
            if(repassword !==password){
                seterrrepassword('Please enter your password')
                return false
            }
            else{
                seterrrepassword('')
            }
            alert( ' form sub,it')
            e.target.submit()
        }
    return (
        <>
            <section>
                <div className='loginbtns'>
                    <button onClick={() =>{setsignup(true) ; setsignin(false)}} >Sign-Up </button>
                    <span >Or </span>
                    <button onClick={() =>{setsignup(false) ; setsignin(true)}} >Sign-In </button>
                </div>
                <div className={signup ? 'loginfield' : 'hide'}>
                    <div >
                        <img height='300px' src={loginsidebannar} />
                        <h1>Welcome to Xyz Templete</h1>
                        <p>To connect with us please sign up for a new account if<br/> you are not having one already.</p>
                    </div>
                    <div className='contact-form' >
                        <div style={{textAlign : 'center'}}>
                            <h1>Create Account</h1>
                        <p>Sign in with this accoss the following sites.</p>
                        </div>
                        <form style={{margin : ' 20px 5%'}} onSubmit={formvalidation}>
                            <input type='text'value={name} onChange={(e) => setname(e.target.value)} placeholder='Full Name' /> <br />
                            <span className='errr'>{errname}</span>  <br />
                            <input type='text'value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email address' /> <br />
                            <span className='errr'>{errremail}</span>  <br />
                             <input type='text'value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Full Name' /> <br />
                            <span className='errr'>{errpassword}</span>  <br />
                            <input type='text'value={repassword} onChange={(e) => setrepassword(e.target.value)} placeholder='Email address' /> <br />
                            <span className='errr'>{errrepassword}</span>  <br />
                            <button type="submit">Sign-Up</button>
                        </form>
                    </div>
                </div>
                <div className={signin ? 'loginfield' : 'hide'}>
                    <div >
                        <img height='300px' src={loginsidebannar} />
                        <h1>Welcome to Xyz Templete</h1>
                        <p>To connect with us please sign up for a new account if <br/> you are not having one already.</p>
                    </div>
                    <div className='contact-form' >
                        <div style={{textAlign : 'center'}}>
                            <h1>Login Account</h1>
                        <p>Sign in with this accoss the following sites.</p>
                        </div>
                        <form style={{margin : ' 20px 5%'}} onSubmit={formvalidation}>
                            <input type='text'value={name} onChange={(e) => setname(e.target.value)} placeholder='Full Name' /> <br />
                            <span className='errr'>{errname}</span>  <br />
                             <input type='text'value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Full Name' /> <br />
                            <span className='errr'>{errpassword}</span>  <br />
                            <button type="submit">Sign-In</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupAndSignin;