import React from "react";
import 'react-bootstrap'
const  NavBar = () => {
    return(
        <div className="p-3 mb-2 bg-secondary text-white d-flex flex-wrap justify-content-between">
            <h1 className="">AWCreatuion</h1>
            <div className="d-inline pt-2 my-lg-0">
                <a href="#" className="text-light p-2 d-inline" style={{textDecoration : "none", fontSize : "20px"}}>Menu</a>
                <a href="#" className="text-light p-2 d-inline" style={{textDecoration : "none", fontSize : "20px"}}>Contact</a>
                <a href="#" className="text-light p-2 d-inline" style={{textDecoration : "none", fontSize : "20px"}}>About</a>
            </div>
        </div>
    );
};

export default NavBar;