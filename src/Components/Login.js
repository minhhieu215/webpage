import React,{useState,useRef}from 'react';
const Login = () => {
  const emailRef = useRef()
  const [email , setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  const [ idea , setIdea ] = useState(false)
  
  const handleSubmit =()=>{
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    setEmail("")
    setPassword("")
    emailRef.current.focus();
    alert(`${validateEmail(email)&&"Email của mày là :"+ email||"Nhập sai email rồi thằng lồn"} pass là :${password},${idea&&"Mày đồng ý với điều khoản"||"Mày đéo đồng ý với điều khoản"}`)

  }
  return <div className="login_wrapper">
     <h1 className="heading_form">
    Log In
  </h1>
  <div className="login_form  ">
    <p className="forget_password">You don't have a password? Then please  <a href="">Sign Up</a></p>
    <input ref={emailRef} value={email} onChange={e=>setEmail(e.target.value)}className="Email" type="text" placeholder="Email address" />
    <br/>
    <input  value={password} onChange={e=>setPassword(e.target.value)} className="Password" type="password" placeholder="Password" />
    <br/>
    <div className="agree">
    <input value={idea}type="checkbox" onChange={()=>setIdea(!idea)} id="agree"/>
    <label  htmlFor="agree">
    I agree with the site's stated
    <span className="underline"> Privacy Policy </span>and <span className="underline">Terms & Conditions</span>
      </label>

    </div>
 
    <br/>

    <button onClick ={handleSubmit}className="login_btn">Login</button>
  </div>
  </div>;
};

export default Login;
