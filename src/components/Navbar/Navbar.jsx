import { React, useState, useEffect } from "react";
import "./navbar.css";
import logo from "./logos/logo.png";

// import Login from "./../modal/login";
import Sign0 from "../modal/signup0";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
let acc;

const Navbar = () => {
  // const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const dispatch = useDispatch();
  //Creating metamask button
  const MetamaskHandler = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      alert("You Are Connected Now", account);
      setUserAddress(account);
      handleRef(account);
    } else {
      alert(
        "Please Install MetaMask: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'"
      );
    }
  };

  const disconnect = () => {
    sessionStorage.clear("meta-address");
    setUserAddress(null);
  };

  useEffect(() => {
    const metaAddress = sessionStorage.getItem("meta-address");
    if (metaAddress) {
      setUserAddress(JSON.parse(metaAddress));
      acc = metaAddress;
    }
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts) {
          if (acc) {
            acc = null;
          }
          disconnect();
        } else if (acc && acc !== accounts[0]) {
          MetamaskHandler();
        }
      });
    }
  },[]);
  const handleRef = (userAddress) => {
    if (userAddress) {
      var userDocRef = db.collection("users").doc(userAddress);
      userDocRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document exists");
        } else {
          setShow2(true);
        }
      });
    }
  };

  useEffect(() => {
    if (userAddress) {
      dispatch(setUser(userAddress));
      sessionStorage.setItem("meta-address", JSON.stringify(userAddress));

      console.log(userAddress);
    }
  }, [userAddress]);

  return (
    <>
    <div className=" w-full h-50 flex flex-col text-black  header-fixed fluid-header">
    <div className=" flex bg-transparent items-center border-2 border-black border-solid p-2 justify-between">
      <div className="object-left-top flex items-center">
        <div className="logo-wrapper flex flex-row ">
          <a href="./" className="logo flex flex-row"><img src={logo} alt="brand" /> <p className="justify-between ml-2 mt-2.5 text-black text-xl font-bold flex">CrowdFunders</p></a>
        </div>
        {/* <!-- End .logo-wrapper --> */}

        <div className="mainmenu-wrapper p-1">
          <nav id="sideNav" className="mainmenu-nav  xl:block">
            {/* <!-- Start Mainmanu Nav --> */}
            <ul className="mainmenu">
              <li className="has-dropdown has-menu-child-item">
                <a className="active text-red-500" href="./">What We Do!</a>
              
              </li>

              <li className="has-dropdown has-menu-child-item">
                <a href="./" className="font-bold">Category</a>
                <div className="submenu">
                <div className="col1">
          <a href="/">Advertising and Marketing</a>
        </div>
        <div className="col1">
          <a href="/">Arts</a>
        </div>
        <div className="col1">
          <a href="/">Cleantech</a>
        </div>
        <div className="col1">
          <a href="/">Design</a>
        </div>
        <div className="col1">
          <a href="/">Energy</a>
        </div>
        <div className="col1">
          <a href="/">Finance</a>
        </div>
        <div className="col1">
          <a href="/">Health</a>
        </div>
        <div className="col1">
          <a href="/">Legal</a>
        </div>
        <div className="col1">
          <a href="/">Music</a>
        </div>
        <div className="col1">
          <a href="/">Retail</a>
        </div>
        <div className="col1">
          <a href="/">Travel/Tourism</a>
        </div>
        <div className="col1">
          <a href="/">Aerospace</a>
        </div>
        <div className="col1">
          <a href="/">Automobiles</a>
        </div>
        <div className="col1">
          <a href="/">Consumer Product</a>
        </div>
        <div className="col1">
          <a href="/">Education</a>
        </div>
        <div className="col1">
          <a href="/">Fashion</a>
        </div>
        <div className="col1">
          <a href="/">Food</a>
        </div>
        <div className="col1">
          <a href="/">Hospitality</a>
        </div>
        <div className="col1">
          <a href="/">Manufacturing</a>
        </div>
        <div className="col1">
          <a href="/">Non Profit</a>
        </div>
        <div className="col1">
          <a href="/">Security</a>
        </div>
        <div className="col1">
          <a href="/">Telecom</a>
        </div>
        <div className="col1">
          <a href="/">Agriculture</a>
        </div>
        <div className="col1">
          <a href="/">Biotech</a>
        </div>
        <div className="col1">
          <a href="/">Data Analytics</a>
        </div>
        <div className="col1">
          <a href="/">Electronics</a>
        </div>
        <div className="col1">
          <a href="/">Film</a>
        </div>
        <div className="col1">
          <a href="/">Gaming</a>
        </div>
        <div className="col1">
          <a href="/">IT</a>
        </div>
        <div className="col1">
          <a href="/">Mobile</a>
        </div>
        <div className="col1">
          <a href="/">Real Estate</a>
        </div>
        <div className="col1">
          <a href="/">Sports</a>
        </div>
      </div>
                
              </li>
              
              
            </ul>
            {/* <!-- End Mainmanu Nav --> */}
          </nav>
        </div>
      </div>
      {/* <!-- End .header-left --> */}

      <div className="align-right flex items-center">
      <div class="topnav-right">
          

          {!userAddress && <button onClick={MetamaskHandler}>CONNECT</button>}
          <Sign0 onClose={() => setShow2(false)} show={show2} />

          <a className="button" href="/Campaign">
            <button>START CAMPAIGN</button>
          </a>
          {userAddress && (
            <a className="button" href="/User-dashboard">
              <button>DASHBOARD</button>
            </a>
          )}
        </div>
        <ul className="header-right-inner flex flex-row m-2 mt-2 ">
         <li className='mr-2'>
         <a href="/Campaign" className="btn btn-gradient btn-small">
              <span>START CAMPAIGN</span></a>
         </li>


          <li className="wallet-button ml-2"> <a href="./" className="btn btn-gradient btn-small">
              <span><i className="ri-wallet-3-line mr-1"></i>Connect</span></a></li>
          {/* <!-- End .wallet-button --> */}

         

        </ul>

      </div>
      {/* <!-- End .header-left --> */}
    </div>
  </div>
  </>
  )
}

export default Navbar