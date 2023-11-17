import { useEffect, useState } from "react";
import swal from "sweetalert";

const SocialMedia=()=>{

    let [facebook1,pickFacebook]=useState("");
    let [twitter1,pickTwitter]=useState("");
    let[linkedin1,pickLinkedin]=useState("")
    let[instagram1,pickInstagram]=useState("");
    
    const getmedia = () =>{
        let url = "https://www.firstenquiry.com/webapi/api/getsocialmedia";
        let userdata = {tokenno:localStorage.getItem("tokenno")};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(mediaArray=>{
             console.log(mediaArray);
             pickFacebook(mediaArray.facebook);
             pickLinkedin(mediaArray.linkedin);
             pickTwitter(mediaArray.twitter);
             pickInstagram(mediaArray.instagram);

        })
     }
     
     

     const updatemedia = () =>{
        let url = "https://www.firstenquiry.com/webapi/api/updatesocialmedia";
        let userdata = {
            tokenno:localStorage.getItem("tokenno"),
            facebook:facebook1,
            linkedin:linkedin1,
            twitter:twitter1,
            instagram:instagram1};
        let postdata = {
             headers:{'Content-Type':'application/json'},
             method:'POST',
             body:JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.text())
        .then(mediastatus=>{
         swal(mediastatus);
          
             
        })
     }

     useEffect(()=>{
        getmedia();
     },[1]);
    
return(
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <h1 className="text-info text-center m-4"> My social Media Profile</h1>
                
                <div>
                     Facebook url
                    <input type="text" className="form-control m-2" value={facebook1}
                            onChange={obj => pickFacebook(obj.target.value)}></input>
                </div>

                <div>
                     Twitter url
                    <input type="text" className="form-control m-2" value={twitter1}
                            onChange={obj => pickTwitter(obj.target.value)}></input>
                </div>

                <div>
                    Linkedin url
                    <input type="text" className="form-control m-2" value={linkedin1}
                            onChange={obj => pickLinkedin(obj.target.value)}></input>
                </div>

                <div>
                     Instagram url
                    <input type="text" className="form-control m-2" value={instagram1}
                            onChange={obj => pickInstagram(obj.target.value)}></input>
                </div>

                <div className="text-center">
                    <button className="bg-primary rounded text-white m-2" onClick={updatemedia}> Update </button>
                </div>
            </div>
            <div className="col-lg-2"></div>

        </div>
    </div>
)
}

export default SocialMedia;