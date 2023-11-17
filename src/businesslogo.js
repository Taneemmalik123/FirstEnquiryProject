const BusinessLogo=()=>{
return(
    <div className="container">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-6">
            <h1 className="text-info m-4">Business Logo</h1>
            <div className="input-group">
                         <input type="file" className="form-control" />
                       </div>
                       
                        <div className="text-center m-4">
                            <button className="bg-primary rounded text-white"> Change Logo</button>
                        </div>
            </div>
            </div>
            <div className="col-lg-4"></div>

        </div>
    
)
}
export default BusinessLogo;