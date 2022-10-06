import React from "react";
import dateFormat from "dateformat";

function NameListIte (props){
    return (
        <div className="border-bottom m-5 shadow-lg" style={{borderRadius : "10px"}}>
            <li className="row p-3">
                <div className="d-inline col-lg-3 p-2  align-self-center"><img className="hover-shadow img-fluid rounded-circle" src={props.picture} /></div>
                <div className=" col-lg-7  p-2 ">
                    <span className="d-block m-2 p-2 bg-primary text-white">Name : {props.name}  </span>
                    <span className="d-block m-2 p-2 bg-danger text-white">DOB : {dateFormat(props.BirthDay," mmmm dS, yyyy")}  </span>
                    <span className="d-block m-2 p-2 bg-info text-black">Location : {props.Location}</span>
                    <span className="d-block m-2 p-2 bg-dark text-white">Email : {props.Email}</span>
                </div>
            </li>
        </div>
    );
}

export default NameListIte;