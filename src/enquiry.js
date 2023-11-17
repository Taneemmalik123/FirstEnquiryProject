import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import swal from "sweetalert";

const Myenquiry = () => {

    let [leads, pickleads] = useState([]);

    const allleads = () => {
        let url = "https://www.firstenquiry.com/webapi/api/allleads";
        let userdata = {
            tokenno: localStorage.getItem("tokenno"),
        };
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
            .then(response => response.json())
            .then(accountarray => {
                pickleads(accountarray);
                console.log(accountarray);
                updatefilterdata(accountarray);
            })
    }

    useEffect(() => {
        allleads()
    }, [1]);

    //let[keyword, updateKeyword] = useState(""); // For Search

    let [filterdata, updatefilterdata] = useState([]);

    let updateKeyword = (searchKeyword) => {
        const newdatainfo = leads.filter((product) =>
            product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            product.email.toLowerCase().includes(searchKeyword.toLowerCase())
        )
        updatefilterdata(newdatainfo)
        setCurrentPage(0)
    }

    //Pagination

    let [pageno, pickpageno] = useState(5);
    let PER_PAGE = Number(pageno);
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(leads.length / PER_PAGE);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-4">
                    <h3 className="text-center text-info">
                        <i class="fa fa-headset text-info"></i> Enquiry List:{leads.length}
                    </h3>
                    {/* <h3 className="text-center" style={{color:"info"}}>
                        <i class="fa fa-headset" style={{color:"info"}}></i> Enquiry List
                     </h3>*/}
                    {/* <hr class="border border-danger border-2 opacity-60"/> */}
                    <div className="row mt-3">
                        <div className="col-lg-8">
                            <label className="me-1"> Show </label>
                            <select value={pageno}
                                onChange={suraj => pickpageno(suraj.target.value)}
                            >
                                <option value=""> Choose </option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select> entries
                        </div>
                        <div className="col-lg-4 mt-2">
                            Search : <input type="search" style={{ width: "230px", height: "28px" }}
                                onChange={obj => updateKeyword(obj.target.value)} />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-lg-12">
                            <table className="table table1 table-bordered table-hover table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th> Full Name </th>
                                        <th> Mobile </th>
                                        <th> Email </th>
                                        <th> Keyword </th>
                                        <th> City </th>
                                        <th> Varified </th>
                                        <th> Data </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterdata.slice(offset, offset + PER_PAGE).map((name, index) => {
                                            // if (name.title.toLowerCase().includes(keyword.toLowerCase()) ) 
                                            return (
                                                <tr key={index}>
                                                    <td>{name.id}</td>
                                                    <td> {name.name} </td>
                                                    <td> {name.mobile} </td>
                                                    <td> {name.email} </td>
                                                    <td> {name.keyword} </td>
                                                    <td> {name.city} </td>
                                                    <td> {name.codematch} </td>
                                                    <td> {name.postdate} </td>
                                                </tr>
                                            )
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
                                    containerClassName={"pagination  justify-content-center"}
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myenquiry;