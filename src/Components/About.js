import React from 'react'

const About = () => {
    return(
        
        <>
            <div style={{backgroundColor: "wheat"}}>
    <h1 className = "text-center" style={{color:"black", paddingTop: "30px"}}><b> Query Search Screen</b></h1>
    <div className="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginTop: "100px"}}>
        <label for="Check-Out" className="form-label"><b>Query on Date</b></label>
        <input type="date" className="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
    </div>
    <button style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "95px"}} type="submit" className="btn btn-primary">Query</button>
    <div className="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginBottom: "100px"}}>
        <label for="Contact_Number" className="form-label"><b>Query on Cnic Number</b></label>
        <input type="number" className="form-control" id="Contact_Number" name="Contact_Number" placeholder="Enter Your Contact Number Here" />
    </div>
    <button style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "95px"}} type="submit" className="btn btn-primary">Query</button>
    </div>
        </>
    )
}

export default About