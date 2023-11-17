import { useState, useEffect } from "react";
import swal from "sweetalert";

const AboutUs = () => {

    let [year, updateYear] = useState("");
    let [text, updateText] = useState("");

    const getabout = () => {
        let url = "https://www.firstenquiry.com/webapi/api/getabout";
        let userdata = { tokenno: localStorage.getItem("tokenno")};
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.json())
            .then(aboutArray => {
                console.log(aboutArray);
                updateYear(aboutArray.establishment);
                updateText(aboutArray.about);
            })
    }

    let [about,setabout]=useState("");

    const updateabout = () =>{
        let url = "https://www.firstenquiry.com/webapi/api/updateabout";
        let userdata = {
            tokenno:localStorage.getItem("tokenno"),
            about:text,
            establishment:year
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
             console.log(about);
        })
     }

    useEffect(() => {
        getabout();
    },[1]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 mt-4">
                    <h1 className="text-info"> My Skills and Experience </h1>

                    <div>
                        Which Year you started your Business?
                        <input type="number" className="form-control mt-2" value={year}
                            onChange={obj => updateYear(obj.target.value)}></input>
                    </div>

                    <div className="mt-2">
                        Describe about your Business:
                        <textarea className="form-control mt-2" value={text}
                            onChange={obj => updateText(obj.target.value)}></textarea>
                    </div>

                    <div className="text-center">
                        <button className="bg-primary rounded mt-4 text-white" onClick={updateabout}> 
                        Update Now </button>
                    </div>
                </div>
                <div className="col-lg-2"></div>


            </div>
        </div>
    )
}
export default AboutUs;