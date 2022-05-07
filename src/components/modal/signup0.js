import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./login.css";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUserAddress } from "../features/userSlice";
// import { useHistory } from "react-router-dom";

const Login = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const [sopt, setsopt] = useState("base");
  const handlechange = (data) => {
    setsopt(data);
  };

  //save

  const [invfname, setInvfname] = useState("");
  const [invlname, setInvlname] = useState("");
  const [invpan, setInvpan] = useState("");
  const [invadhaar, setInvadhaar] = useState("");
  const [invphone, setInvphone] = useState("");
  const [invemail, setInvemail] = useState("");
  const [invpass, setInvpass] = useState("");

  const [entfname, setEntfname] = useState("");
  const [entlname, setEntlname] = useState("");
  const [entemail, setEntemail] = useState("");
  const [entpass, setEntpass] = useState("");

  const useraddress = useSelector(selectUserAddress);
  // const history = useHistory();

  const handlefname = (e) => {
    setInvfname(e.target.value);
    setEntfname(e.target.value);

    console.log(invfname);
  };

  const handlelname = (e) => {
    setInvlname(e.target.value);
    setEntlname(e.target.value);

    console.log(invlname);
  };
  const handlepan = (e) => {
    setInvpan(e.target.value);
    console.log(invpan);
  };
  const handleemail = (e) => {
    setInvemail(e.target.value);
    setEntemail(e.target.value);

    console.log(invemail);
  };
  const handleadhaar = (e) => {
    setInvadhaar(e.target.value);

    console.log(invadhaar);
  };
  const handlephone = (e) => {
    setInvphone(e.target.value);
    console.log(invphone);
  };
  const handlepass = (e) => {
    setInvpass(e.target.value);
    setEntpass(e.target.value);

    console.log(invpass);
  };

  //handleInvestor
  const handleInvestor = (e) => {
    e.preventDefault();
    if ({ useraddress }) {
      db.collection("users").doc(useraddress).set({
        type: "Investor",
        Firstname: invfname,
        Lastname: invlname,
        PanNo: invpan,
        AdhaarNo: invadhaar,
        PhoneNo: invphone,
        Email: invemail,
        Password: invpass,
      });
      console.log({ useraddress });
    }
  };

  //handleEntrepreneur
  const handleEntrepreneur = (e) => {
    e.preventDefault();
    if ({ useraddress }) {
      db.collection("users").doc(useraddress).set({
        type: "Entrepreneur",
        Firstname: entfname,
        Lastname: entlname,
        Email: entemail,
        Password: entpass,
      });
      console.log({ useraddress });
      alert("Thankyou for signing up");
      window.location.reload();
    }
  };

  //save_end
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  if (sopt === "base") {
    return ReactDOM.createPortal(
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span onClick={props.onClose} className="closebtn">
                <i class="far fa-times-circle fa-2x"></i>
              </span>
              <h1 className="modal-title">Sign up</h1>
              <span className="modal-text">
                <p>Don’t worry, we won’t spam you or sell your information.</p>
              </span>
            </div>

            <button
              className="login-btn"
              onClick={(e) => handlechange("base2")}
            >
              Investor
            </button>

            <button
              className="login-btn"
              onClick={(e) => handlechange("base3")}
            >
              Entrepreneur
            </button>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById("root")
    );
  }
  if (sopt === "base2") {
    return ReactDOM.createPortal(
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header2">
              <span onClick={props.onClose} className="closebtn">
                <i class="far fa-times-circle fa-2x"></i>
              </span>
              <h1 className="modal-title1">Sign Up</h1>
              <span className="modal-text2">
                <p>By signing up you agree to all the Terms and conditions.</p>
              </span>
            </div>
            <form>
              <input
                className="loginsmall first-left"
                type="text"
                value={invfname}
                onChange={(e) => handlefname(e)}
                placeholder="First Name"
              ></input>
              <input
                className="loginsmall"
                type="text"
                value={invlname}
                onChange={(e) => handlelname(e)}
                placeholder="Last Name"
              ></input>
              <input
                className="loginsmall first-left"
                type="text"
                value={invpan}
                onChange={(e) => handlepan(e)}
                placeholder="PAN"
              ></input>
              <input
                className="loginsmall"
                type="text"
                value={invadhaar}
                onChange={(e) => handleadhaar(e)}
                placeholder="Adhaar No."
              ></input>
              <input
                className="loginfrom"
                type="text"
                value={invphone}
                onChange={(e) => handlephone(e)}
                placeholder="Phone No."
              ></input>

              <input
                className="loginfrom"
                type="email"
                value={invemail}
                onChange={(e) => handleemail(e)}
                placeholder="Email"
              ></input>
              <input
                className="loginfrom"
                type="password"
                value={invpass}
                onChange={(e) => handlepass(e)}
                placeholder="Password"
              ></input>

              <button className="login-btn" onClick={handleInvestor}>
                Create Account
              </button>
            </form>
            <div className="modal-footer">
              <a href=" " className="forg1">Already a Member? Log In</a>
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById("root")
    );
  }
  if (sopt === "base3") {
    return ReactDOM.createPortal(
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content3" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header2">
              <span onClick={props.onClose} className="closebtn">
                <i class="far fa-times-circle fa-2x"></i>
              </span>
              <h1 className="modal-title">Sign Up</h1>
              <span className="modal-text2">
                <p>By signing up you agree to all the Terms and conditions.</p>
              </span>
            </div>
            <form>
              <input
                className="loginsmall first-left"
                type="text"
                onChange={(e) => handlefname(e)}
                placeholder="First Name"
              ></input>
              <input
                className="loginsmall"
                type="text"
                onChange={(e) => handlelname(e)}
                placeholder="Last Name"
              ></input>

              <input
                className="loginfrom"
                type="email"
                onChange={(e) => handleemail(e)}
                placeholder="Email"
              ></input>
              <input
                className="loginfrom"
                type="password"
                onChange={(e) => handlepass(e)}
                placeholder="Password"
              ></input>

              <button className="login-btn" onClick={handleEntrepreneur}>
                Create Account
              </button>
            </form>
            <div className="modal-footer">
              <a href=" " className="forg">Already a Member? Log In</a>
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById("root")
    );
  }
};

export default Login;
