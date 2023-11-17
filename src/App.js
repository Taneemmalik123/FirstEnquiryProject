import { HashRouter,Routes,Route } from "react-router-dom";
import EnquiryHeader from "./header";
import './App.css';
import Dashboard from "./businesslogo";
import About from "./about";
import Left from "./left";
import BusinessLogo from "./businesslogo";
import ContactDetails from "./contactdetails";
import SocialMedia from "./socialmedia";
import MyServices from "./myservices";
import Leads from "./enquiry";

const EnquiryApp =()=>{

return(
    <HashRouter>
        <EnquiryHeader/>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <Left/>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-8">

            <Routes>
        <Route exact path="/businesslogo" element={<BusinessLogo/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contactdetails" element={<ContactDetails/>} />
            <Route exact path="/socialmedia" element={<SocialMedia/>} />
            <Route exact path="/myservices" element={<MyServices/>} />
            <Route exact path="/enquiry" element={<Leads/>} />

        </Routes>
        </div>
          </div>
        </div>
        
    </HashRouter>
)

}

export default EnquiryApp;