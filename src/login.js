import { useState } from "react";
import EnquiryHeader from "./header";

const Login=()=>{
    let [email, pickEmail] = useState("");
    let [password, pickPassword] = useState("");

    const goLogin = () =>{
        let url = "https://www.firstenquiry.com/webapi/login/auth";
        let userdata = {email:email, password:password};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
             if(userinfo.status=="SUCCESS")
             {
                 localStorage.setItem("tokenno", userinfo.tokenno);
                 localStorage.setItem("fullname", userinfo.name);
                 localStorage.setItem("type", userinfo.type);
                 window.location.reload();
             }else{
                 alert("Invalid or not exists")
             }
        })
     }     
    return(
        <div>

<nav className="navbar navbar-expand-lg class1">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                    <i class="fa-solid fa-magnifying-glass fa-beat-fade fa-lg text-warning"></i> Firstenquiry
                    </a>
                </div>
            </nav>
        <div className="container mt-5">
             <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="text-center">
                <h2><i className="fa fa-handshake text-warning p-4"></i> We Help</h2>
                </div>
                    <div className="card">
                       
                        <div className="card-header bg-info">
                            <h3 className="text-white"><i className="fa fa-house-lock text-white"></i> Login </h3>
                        </div>
    
                        <div className="card-body">
                            <div className="input-group">
                        <span className="input-group-text fa fa-lock p-3 "></span>
                        <input type="text" placeholder="Username or email" className="form-control" value={email}
                        onChange={obj => pickEmail(obj.target.value)}></input>
                        </div>
    
                        <div className="input-group mt-4">
                            <span className="input-group-text fa fa-user-lock"></span>
                            <input type="password" className="form-control" placeholder="Password" value={password}
                        onChange={obj => pickPassword(obj.target.value)}></input>
                        </div>
    
                       <div className=" mt-4">
                        <button className="form-control text-white bg-success" onClick={goLogin} mt-4>Login <i className="fa-solid fa-arrow-right" /></button>
                       </div>
    
                       <hr/>
    
                       <div className="text-center">
                        <a href="forgot-password ">forgot-password</a>
                       </div>
                       
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
    
            </div>
        </div>
        </div>
        
    );
    }


export default Login;