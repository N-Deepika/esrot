import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./login.css";

const Login = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const [email,setEmail]=useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState("false");
  const handleemail=(e)=>{
      setEmail(e.target.value);
      console.log(email);
  }

  const handlepass=(e)=>{
    setPass(e.target.value);
    console.log(pass);
}
const handlecheck=(e)=>{
  setCheck(e.target.checked);
  console.log(check);
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(email,pass,check);
}
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
          <span onClick={props.onClose} className="closebtn">
              <i class="far fa-times-circle fa-2x"></i>
            </span>
            <h1 className="modal-title">Sign in</h1>
            <span className="modal-text">
            <p>Don’t worry, we won’t spam you
            or sell your information.</p>
            </span>
          
            <br/>
           
          </div>
         <form>
             <input
             className="loginfrom"
             type="email"
             value={email}
             placeholder="Email"
             onChange={(e)=>handleemail(e)}>
              
             </input>
             <input
             className="loginfrom"
             type="password"
             value={pass}
             placeholder="Password"
             onChange={(e)=>handlepass(e)}>
            
             </input>
             <div className="radiobox">
               <span><input className="lbl"  type="checkbox"
               value={check}
               onChange={(e)=>handlecheck(e)}/>
               <label >Remember Me</label></span>
               
               </div>
       
             <button className="login-btn" onClick={(e)=>handleSubmit(e)}>Log In</button>
         </form>
          <div className="modal-footer">
            <a className="forg">Forgot Password?</a>
            <a className="signup">Sign Up</a>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Login;       