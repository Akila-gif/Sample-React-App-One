import React, {useEffect, useState} from "react";
import NameListItem from "./NameListItem";
import "./NameList.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";

function NameList () {
    let [Emp,LoadData] = useState(false)
    let [Employees,AddEmploye] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => {
                return response.json();
            })
            .then((responseName) => {
                AddEmploye(Employees.concat([responseName.results[0]]));
                //console.log(responseName.results[0]);
            });
    },[Emp])

    const EmployeeComponent = () => {
        return Employees.map( (Employee) => {
            return (
                <NameListItem
                    key = {Employee.phone}
                    picture = {Employee.picture.large}
                    name = {Employee.name.first + Employee.name.last}
                    Email = {Employee.email}
                    Location = {Employee.location.city}
                    BirthDay = {Employee.dob.date}
                />
            );
        });
    };
    const AddEmployee = () =>{
        if (Emp===true){
            LoadData(false);
        }else {LoadData(true);}
        console.log("akil");
    };

    return (
        <React.Fragment>
            <button className="btn btn-primary mb-4" onClick={AddEmployee}>
                <FontAwesomeIcon icon={faUserPlus} className="pe-3"/>Employee
            </button>
            <div className="pt-3 example" style={{height : "300px", borderRadius : "10px",}}>
                <ul className=" bg-light shadow-lg scale-hover" style={{borderRadius : "20px", listStyle:"none"}}>
                    {EmployeeComponent()}
                </ul>
            </div>
        </React.Fragment>
    );

}

export default NameList;