import { Link } from "react-router-dom";

const Left = () => {
    return (
        <ul className="list-group mt-5">
            <li className="list-group-item active"> Profile Setting</li>
            <li className="list-group-item text-primary">
                <Link className="nav-link" class="left" to="/businesslogo">
                    <i className="fa fa-user"></i> Business Logo
                </Link>
            </li>

            <li className="list-group-item text-primary">
                <Link className="nav-link" class="left" to="/contactdetails">
                    <i className="fa fa-headset"></i> Contact Details
                </Link>
            </li>
            <li className="list-group-item text-primary">
                <Link className="nav-link" class="left" to="/socialmedia">
                    <i className="fa fa-book"></i> Social Media
                </Link>
            </li>
            <li className="list-group-item text-primary">
                <Link className="nav-link" class="left" to="/about">
                    <i className="fa fa-television"></i> About Business
                </Link>
            </li>
            <li className="list-group-item text-primary">
                    <Link className="nav-link" class="left" to="/myservices">
                        <i className="fa fa-tools"></i> My Services
                    </Link>
                </li>

                <li className="list-group-item text-primary">
                    <Link className="nav-link" class="left" to="/enquiry">
                        <i className="fa fa-headset"></i> My Enquiry
                    </Link>
                </li>
            
        </ul>
    )
}
export default Left;