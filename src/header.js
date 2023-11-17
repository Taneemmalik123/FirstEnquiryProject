import {Link} from "react-router-dom"

const EnquiryHeader = () =>{
    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }
return(
<nav className="navbar navbar-expand-lg style abc">
            <div className="container">
                <a className="navbar-brand text-white" href="#">
                    <i className="fa fa-search text-warning fa-lg xyz p-2"></i> FirstEnquiryClient
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                   
                   
                        <li className="nav-item xyz m-2">
                        
                            <button className="nav-link text-white" onClick={logout} > 
                            Taneem <i className="fa fa-power-off"></i> Logout
                            </button>
                        </li>
                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default EnquiryHeader;