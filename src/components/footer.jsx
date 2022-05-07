import React from "react";

const Footer=()=>{
    return(
        <>
        <footer className="text-gray-600 body-font bg-gray-800 w-full h-full mt-80 border-solid border-2 border-black flex flex-col">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">  
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Disclaimer</h2>
            <p className="mt-2 text-sm text-gray-500">The Pool funders is just a platform to provide facility to raise funds for startups and Individual. It also facilitate Investors for investing in their chosen project idea or company. We don’t act as an investment advisory service. Although our verification process is very stringent but we do not take liability of any loss of funds due to negligence of the owner and investor or any use of third party. </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Starting Up</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">How to Invest</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">How to Raise</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Pricing</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Start Campaign</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Legal</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                </li>
               
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Pool Funders</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Trust Factor</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">FAQs</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Contact us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="./"  className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 2020 The Pool Funders. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </footer>
    </>
)}

export default Footer;