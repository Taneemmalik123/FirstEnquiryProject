import { useEffect, useState } from "react";
import swal from "sweetalert";

const ContactDetails=()=>{

let[mobile1,pickMobile]=useState("");
let[email1,pickEmail]=useState("");
let[city1,pickCity]=useState("");
let[website1,pickWebsite]=useState("");
let[workingdays1,pickWorkingdays]=useState("");
let[workinghours1,pickWorkinghours]=useState("");
let[address1,pickAddress]=useState("");


    const getdetails = () =>{
        let url = "https://www.firstenquiry.com/webapi/api/getcontact";
        let userdata = {tokenno:localStorage.getItem("tokenno")};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(detailArray=>{
             console.log(detailArray);
             pickMobile(detailArray.mobile);
             pickEmail(detailArray.email);
             pickCity(detailArray.city);
             pickWebsite(detailArray.website);
             pickWorkingdays(detailArray.workingday);
             pickWorkinghours(detailArray.workinghour);
             pickAddress(detailArray.address);

        })
     }
     
     const updatecontact = () =>{
        let url = "https://www.firstenquiry.com/webapi/api/updatecontact";
        let userdata = {
            tokenno:localStorage.getItem("tokenno"),
            city:city1,
            address:address1,
            email:email1,
            mobile:mobile1,
            website:website1,
            workingday:workingdays1,
            workinghour:workinghours1
        };
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.text())
        .then(msg=>{
             swal(msg);
        })
     }

     useEffect(()=>{
        getdetails();
    },[1])
     
return(
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <div className="m-4">
                <h1 className="text-center text-info"> Contact Details</h1>
                </div>

                <div>
                     Business Mobile No
                    <input type="number" className="form-control m-2" value={mobile1}
                            onChange={obj => pickMobile(obj.target.value)}></input>
                </div>

                <div>
                     Business e-Mail Id
                    <input type="email" className="form-control m-2"value={email1}
                            onChange={obj => pickEmail(obj.target.value)}></input>
                </div>

                <div>
                    City Name
                    <select type="text" className="form-control m-2" value={city1}
                            onChange={obj => pickCity(obj.target.value)}>
                            <option value="14">saudi</option>
                            <option value="13">australia</option>
                            <option value="12">uae</option>
                            <option value="11">canada</option>
                            <option value="10">uk</option>
                            <option value="9">usa</option>
                            <option value="8">mysore</option>
                            <option value="7">kolkata</option>
                            <option value="6">hyderabad</option>
                            <option value="5">delhi</option>
                            <option value="4">mumbai</option>
                            <option value="3">pune</option>
                            <option value="2">chennai</option>
                            <option value="1" selected="">bangalore</option>
                            </select>
                </div>

                <div>
                     Business Website
                    <input type="text" className="form-control m-2" value={website1}
                            onChange={obj => pickWebsite(obj.target.value)}></input>
                </div>

                <div>
                     Working Days
                    <input type="text" className="form-control m-2" value={workingdays1}
                            onChange={obj => pickWorkingdays(obj.target.value)}></input>
                </div>

                <div>
                     Working Hours
                    <input type="text" className="form-control m-2" value={workinghours1}
                            onChange={obj => pickWorkinghours(obj.target.value)}></input>
                </div>

                <div>
                     Business Address
                     <textarea className="form-control m-2" value={address1}
                            onChange={obj => pickAddress(obj.target.value)}></textarea>
                </div>

                <div className="text-center">
                    <button className="bg-primary rounded text-white" onClick={updatecontact}> Update Contact </button>
                </div>

            </div>
            <div className="col-lg-2"></div>

        </div>
    </div>
)
}

export default ContactDetails;