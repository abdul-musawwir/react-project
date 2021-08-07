import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { SERVER_IP } from './constants'
import "./Entry.css"
import { Link, useHistory, useLocation } from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';
import WebcamCapture from './utils/webcamComp'
import InputMask from 'react-input-mask'

const Entry = (props) => {
  // const location = useLocation()
  const history = useHistory()
  const [PropName,setPropName] = useState(null)
  const [cnic,setCnic] = useState(null)
  const [perCount,setPerCount] = useState(null)
  const [NoOrg,setNoOrg] = useState(null)
  const [contactNo,setContactNo] = useState(null)
  const [checkIn,setCheckIn] = useState(null)
  const [checkOut,setCheckOut] = useState(null)
  const [contactPer,setcontactPer] = useState(null)
  const [purpose,setPurpose] = useState(null)
  const [picture,setPicture] = useState(null)
  

  const clickHandler = () => {
    axios.post("http://"+SERVER_IP+":5000/data_handling", {
      "name":PropName,
      "cnic":cnic,
      "Person_Count":perCount,
      "organization_name":NoOrg,
      "contact" : contactNo,
      "Check_In_Date" : moment().format().slice(0,-15),
      "Check_Out_Date" : "",
      "Contact_Person" : contactPer,
      "Visit_Purpose" : purpose,
      "picture" : picture,
      
    }).then(res => {
      console.log("successful")
      alert("Successfully inserted");
  }).catch(err => {
      console.log(err);
      alert("error bois" + err);
  })
    let data = {
      "name":PropName,
      "cnic":cnic,
      "person_count":perCount,
      "name_of_organization":NoOrg,
      "contact_number" : contactNo,
      "check_in_datetime" : moment().format().slice(0,-6),
      "check_out_datetime" : "",
      "contact_person" : contactPer,
      "contact_purpose" : purpose,
      "picture" : picture,
    }
    console.log(data)
  }

 



    return(
        <div className="maincontainer" >

<h1 class = "text-center" style={{color: "white", paddingTop: "30px"}}><b> Contact Form</b></h1>

<div style={{paddingLeft:"77%"}}><CancelIcon fontSize="large" onClick={()=>{history.push('/home')}} /></div>

<div class = "container" >
{/* <form method="post" action="/contact"> */}
    {/* <div 
        class="form-image" 
    >
            <img  src={location.state.image}  style={{width:"200px",height:"150px"}} />
    </div> */}
  {/* {% csrf_token %} */}
  <div class="mb-3" style={{ paddingTop: "20px"}}>
    <label for="Name" class="form-label"><b>Visitor Name</b></label>
    <input type="text" value={PropName} onChange={(e)=>setPropName(e.target.value)} class="form-control" id="Name" name="Name" aria-describedby="emailHelp" placeholder="Enter Your Name Here"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3" >
    <label for="cnic" class="form-label"><b>Cnic</b></label>
    {/* <input type="text" value={cnic} onChange={handleCnic(e)} class="form-control" id="cnic" name="cnic" placeholder="Enter Your cnic Here"/> */}
    <InputMask mask="99999-9999999-9" className="form-control" maskChar={null}  onChange={(e)=>{setCnic(e.target.value)}}  placeholder="Enter Your cnic Here"/>
  </div>
  <div class="mb-3" >
    <label for="Person_Count" class="form-label"><b>Person Count</b></label>
    <input type="text" onChange={e=>setPerCount(e.target.value)} class="form-control" id="Address" name="Address" placeholder="Enter Person Count Here"/>
  </div>
  <div class="mb-3" >
    <label for="Organization" class="form-label"><b>Name of Organization</b></label>
    <input type="text" onChange={e=>setNoOrg(e.target.value)} class="form-control" id="Organization" name="Organization" placeholder="Enter Name of Organization Here"/>
  </div>
  <div class="mb-3" >
    <label for="Contact_Number" class="form-label"><b>Contact Number</b></label>
    <input type="number" onChange={e=>setContactNo(e.target.value)} class="form-control" id="Contact_Number" name="Contact_Number" placeholder="Enter Your Contact Number Here"/>
  </div>
  <div class="mb-3" >
    <label for="Check-In" class="form-label"><b>Check-In Date</b></label>
    <input type="datetime-local" value={moment().format().slice(0,-6)} class="form-control" id="Check-In" name="Check-In" placeholder="Enter Your Check-In Date Here" readOnly/>
  </div>
  <div class="mb-3" >
    <label for="Check-Out" class="form-label"><b>Check-Out Date</b></label>
    <input type="datetime-local" class="form-control" id="Check-In" name="Check-In" placeholder="Enter Your Check-In Date Here" readOnly/>
  </div>
  {/* <div class="mb-3" style={{paddingLeft: "250px", paddingRight: "200px"}}>
    <label for="Check-Out" class="form-label"><b>Check-Out Date and Time</b></label>
    <input type="datetime-local" class="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
  </div> */}
  <div class="mb-3" >
    <label for="Contact_Person" class="form-label"><b>Contact Person</b></label>
    <input type="text" class="form-control" onChange={e=>setcontactPer(e.target.value)} id="Contact_Person" name="Contact_Person" placeholder="Enter Your Contact Person Here"/>
  </div>
  <div class="mb-3" >
    <label for="Purpose" class="form-label"><b>Purpose of Visit</b></label>
    <input type="text" onChange={e=>setPurpose(e.target.value)} class="form-control" id="Purpose" name="Purpose" placeholder="Enter Your Purpose of Visit Here"/>
  </div>
  <div class="mb-3" >
    <label for="Picture" class="form-label"><b>Picture</b></label>
    <div 
        class="form-image-last" 
    >
            {picture?<img 
                //src={props.image}
                src={picture}
                alt="./bulgaria.png" />:
            <WebcamCapture picture={picture} setPicture={setPicture}/>}
    </div>
   
    
  </div>
  <Link to='/home'>
  <button 
  style= {{
    flex: "content",
     marginLeft: "600px",
     position:"relative",
     marginTop:"-130px", 
     width:"150px",
     height:"50px", 
     fontSize:"25px",
     borderRadius:"25px",
     backgroundColor: "darkblue",
     }} onClick={clickHandler} type="submit" class="btn btn-primary">Submit</button></Link>
{/* </form> */}
</div>
</div>
    )
}

export default Entry