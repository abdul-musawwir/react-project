import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { SERVER_IP } from './constants'

const Contact = (props) => {
  const [PropName,setPropName] = useState(props.data.name)
  const [cnic,setCnic] = useState(props.data.cnic)
  const [address,setAddress] = useState()
  const [NoOrg,setNoOrg] = useState()
  const [contactNo,setContactNo] = useState()
  const [checkIn,setCheckIn] = useState()
  const [contactPer,setcontactPer] = useState()
  const [purpose,setPurpose] = useState()

  const clickHandler = () => {
    axios.post("http://"+SERVER_IP+":5000/data_handling", {
      "name":PropName,
      "cnic":cnic,
      "address":address,
      "name_of_organization":NoOrg,
      "contact_number" : contactNo,
      "check_in_date" : moment().format().slice(0,-15),
      "contact_person" : contactPer,
      "contact_purpose" : purpose,
      "cnic_image" : props.image,
      "person_image" : props.data.image
    }).then(res => {
      // console.log(res.data.result)
      // setResult(res.data.result)

      console.log("successful")
  }).catch(err => {
      console.log(err);
      alert("error bois" + err);
  })
    let data = {
      "name":PropName,
      "cnic":cnic,
      "address":address,
      "name_of_organization":NoOrg,
      "contact_number" : contactNo,
      "check_in_date" : moment().format().slice(0,-15),
      "contact_person" : contactPer,
      "contact_purpose" : purpose,
      "cnic_image" : props.image,
      "person_image" : props.data.image
    }
    console.log(data)
  }



  useEffect(()=>{
    console.log(props.image)
    console.log(props.data.image)
  },[])
    return(
        <div style={{backgroundColor: "wheat"}}>

<h1 class = "text-center" style={{color: "black", paddingTop: "30px"}}><b> Contact Form</b></h1>



<div class = "container"  style={{padding: "4px" }}>
{/* <form method="post" action="/contact"> */}
    <div 
        class="form-image" 
        style={{ float:"right",paddingLeft: "250px", paddingRight: "200px", paddingTop: "20px"}}
    >
            <img  src={props.image}  style={{width:"200px",height:"150px"}} />
    </div>
    <br/><br/><br/><br/><br/><br/>
  {/* {% csrf_token %} */}
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px", paddingTop: "20px"}}>
    <label for="Name" class="form-label"><b>Visitor Name</b></label>
    <input type="text" value={PropName} onChange={(e)=>setPropName(e.target.value)} class="form-control" id="Name" name="Name" aria-describedby="emailHelp" placeholder="Enter Your Name Here"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="cnic" class="form-label"><b>Cnic</b></label>
    <input type="text" value={cnic} onChange={e=>setCnic(e.target.value)} class="form-control" id="cnic" name="cnic" placeholder="Enter Your cnic Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Address" class="form-label"><b>Address</b></label>
    <input type="text" onChange={e=>setAddress(e.target.value)} class="form-control" id="Address" name="Address" placeholder="Enter Your Address Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Organization" class="form-label"><b>Name of Organization</b></label>
    <input type="text" onChange={e=>setNoOrg(e.target.value)} class="form-control" id="Organization" name="Organization" placeholder="Enter Your Name of \Organization Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Contact_Number" class="form-label"><b>Contact Number</b></label>
    <input type="number" onChange={e=>setContactNo(e.target.value)} class="form-control" id="Contact_Number" name="Contact_Number" placeholder="Enter Your Contact Number Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Check-In" class="form-label"><b>Check-In Date</b></label>
    <input type="date-local" value={moment().format().slice(0,-15)} class="form-control" id="Check-In" name="Check-In" placeholder="Enter Your Check-In Date Here" readOnly/>
  </div>
  {/* <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Check-Out" class="form-label"><b>Check-Out Date and Time</b></label>
    <input type="datetime-local" class="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
  </div> */}
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Contact_Person" class="form-label"><b>Contact Person</b></label>
    <input type="text" class="form-control" onChange={e=>setcontactPer(e.target.value)} id="Contact_Person" name="Contact_Person" placeholder="Enter Your Contact Person Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Purpose" class="form-label"><b>Purpose of Visit</b></label>
    <input type="text" onChange={e=>setPurpose(e.target.value)} class="form-control" id="Purpose" name="Purpose" placeholder="Enter Your Purpose of Visit Here"/>
  </div>
  <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Picture" class="form-label"><b>Picture</b></label>
    <div 
        class="form-image" 
        style={{width:"16rem", height:"10rem", overflow:"hidden", display:"flex"}}
    >
            <img 
                //src={props.image}
                src={props.data.image}
                alt="./bulgaria.png" />
    </div>
    {/* <input type="file"  class="form-control" id="imgInp" name="file" accept="image/*" aria-label="File browser example"
            style={{padding: "30px",
            content: 'Select some files',
            display: "inline-block",
            background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
            border: "1px solid #999",
            borderRadius: "3px",
            padding: "5px 8px",
            outline: "none",
            whiteSpace: "nowrap",
            cursor: "pointer",
            textShadow: "1px 1px #fff",
            fontWeight: "700",
            fontSize: "10pt"}}  
            /> */}
                   {/* <img id="blah" src="../static/img/3.jpg" alt="your image" style="width: 200px; height: 200px; padding: 15px;" /> */}
    
  </div>
  <button style= {{flex: "content", marginLeft: "250px"}} onClick={clickHandler} type="submit" class="btn btn-primary">Submit</button>
{/* </form> */}
</div>
</div>
    )
}

export default Contact