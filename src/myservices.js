import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import swal from "sweetalert";

const MyServices = () => {

    let [service, updateservice] = useState([]);

    const getservice = () => {
        let url = "https://www.firstenquiry.com/webapi/api/allservice";
        let userdata = { tokenno: localStorage.getItem("tokenno") };
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.json())
            .then(serviceArray => {
                console.log(serviceArray);
                updateservice(serviceArray);
            })
    }

    let [add, updateadd] = useState("");

    const addservice = (add) => {
        let url = "https://www.firstenquiry.com/webapi/api/addservice";
        let userdata = {
            tokenno: localStorage.getItem("tokenno"),
            serviceid: add
        };
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.text())
            .then(msg => {
                swal(msg);
            })
    }

    let [hell, updatehell] = useState([]);

    const displayservice = () => {
        let url = " https://www.firstenquiry.com/webapi/api/myservice";
        let userdata = { tokenno: localStorage.getItem("tokenno") };
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.json())
            .then(myserviceArray => {
                console.log(myserviceArray);
                updatehell(myserviceArray);
            })
    }

    let [del, updatedel] = useState("")

    const deleteservice = (del) => {
        let url = "https://www.firstenquiry.com/webapi/api/deleteservice/" + del;
        let userdata = {
            tokenno: localStorage.getItem("tokenno"),
            serviceid: del
        };
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.text())
            .then(msg => {
                swal(msg);
                displayservice();
            })
    }

    
    useEffect(() => {
        getservice();
        displayservice();
    }, [1])

    //for search
    let [keyword, pickKeyword] = useState("");

    //for pagination
    let[pageno,pickPageno]=useState(4);
    const PER_PAGE = Number(pageno) ; //number in place og pageno
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(service.length / PER_PAGE);
    // pagination code end here

    return (
        <div className="container">
            <div className="row">

                <div className="col-lg-7">

                    <h3 className="text-primary m-4 text-center ">Business Keywords</h3>
                    Show
                    <select value={pageno} onChange={obj => pickPageno(obj.target.value)} className="m-2">
                    <option>Choose</option>
                        <option value={5}> 5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    entries
                    <lable className="m-2">Search:</lable>
                    <input type="text" className="select-control" onChange={obj => pickKeyword(obj.target.value)} />


                    <table className="table table-bordered shadow-lg p-4 mt-2 table-hover table-striped">
                        <thead className="text-center">
                            <tr className="table-primary">
                                <th> Sl.No </th>
                                <th> Title </th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-hover">
                            {
                                service.slice(offset, offset + PER_PAGE).map((data, index) => {
                                    if (data.title.toLowerCase().includes(keyword.toLowerCase())) {
                                        return (
                                            <tr key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.title}</td>
                                                <td className="text-danger text-center"><i className="fa fa-plus"
                                                    onClick={addservice.bind(this, data.id)}></i>
                                                </td>
                                            </tr>

                                        )
                                    }

                                })
                            }
                        </tbody>
                    </table>

                    <div className="mb-4 mt-4">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item "}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active primary"}
                        />

                    </div>
                </div>

                <div className="col-lg-5">
                    <h3 className="text-primary m-4 text-center ">Selected Keywords</h3>
                    <table className="table table-bordered table-hover shadow-lg p-4 table-striped">
                        <thead className="text-center">
                            <tr className="table-primary">
                                <th > Id </th>
                                <th> Service className </th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                hell.map((display, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{display.id}</td>
                                            <td>{display.title}</td>
                                            <td className="text-danger"><i className="fa fa-trash"
                                                onClick={deleteservice.bind(this, display.id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })

                            }



                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    )
}
export default MyServices;