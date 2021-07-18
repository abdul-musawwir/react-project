import React from 'react'

const Services = () => {
    return(
        <div style={{backgroundColor: "wheat"}}>
<h1 class = "text-center" style={{color:"black", paddingTop: "30px"}}><b> Report Generation Screen</b></h1>
<div class="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginTop: "70px"}}>
    <label for="Check-Out" class="form-label"><b>Report on Date</b></label>
    <input type="date" class="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
  </div>
<button style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "40px"}} type="submit" class="btn btn-primary">Generate</button>
<div class="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginBottom: "100px"}}>
    <label for="Contact_Number" class="form-label"><b>Report on a Duration:</b></label>
    
    <div class="mb-3" style={{paddingLeft: "0px", paddingRight: "0px"}}>
        <label for="Check-Out" class="form-label"><b>Starting Date:</b></label>
        <input type="date" class="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
    </div>
    <div class="mb-3" style={{paddingLeft: "0px", paddingRight: "0px"}}>
        <label for="Check-Out" class="form-label"><b>Ending Date </b></label>
        <input type="date" class="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
    </div>
  </div>
  <button style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "5px"}} type="submit" class="btn btn-primary">Generate</button>
</div>
    )
}

export default Services