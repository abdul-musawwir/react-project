import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SERVER_IP } from './constants'
import ShowResult from './ShowResult'


const Search = () => {

    const [date,setDate] = useState(null)
    const [cnic,setCnic] = useState(null)

    const [result,setResult] = useState(null)

    const handleDateClick=()=>{
        console.log(date)
        axios.get("http://"+SERVER_IP+":5000/data_handling", {
            params: {
                date: date
            }
        }).then(res => {
            console.log(res.data.result)
            setResult(res.data.result)
        }).catch(err => {
            console.log(err);
            alert("error bois" + err);
        });
    }

    const handleCnicClick=()=>{
        // console.log(cnic)
        axios.get("http://"+SERVER_IP+":5000/data_handling", {
            params: {
                cnic: cnic
            }
        }).then(res => {
            // console.log(res.data.result)
            setResult(res.data.result)
        }).catch(err => {
            console.log(err);
            alert("error bois" + err);
        });
    }

    // useEffect(()=>{
    //     console.log(result)
    // },[result])

    return(
        result?<ShowResult results={result} />:
        <>
            <div style={{backgroundColor: "wheat"}}>
    <h1 className = "text-center" style={{color:"black", paddingTop: "30px"}}><b> Query Search Screen</b></h1>
    <div className="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginTop: "100px"}}>
        <label for="Check-Out" className="form-label"><b>Query on Date</b></label>
        <input type="date"  onChange={(e)=>{setDate(e.target.value)}}   className="form-control" id="Check-Out" name="Check-Out" placeholder="Enter Your Check-Out Date Here"/>
    </div>
    <button onClick={handleDateClick} style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "95px"}} type="submit" className="btn btn-primary">Query</button>
    <div className="mb-3" style={{paddingLeft: "400px", paddingRight: "400px", marginBottom: "100px"}}>
        <label for="Contact_Number" className="form-label"><b>Query on Cnic Number</b></label>
        <input type="number" onChange={(e)=>{setCnic(e.target.value);console.log(cnic)}} className="form-control" id="Contact_Number" name="Contact_Number" placeholder="Enter Your Contact Number Here" />
    </div>
    <button onClick={handleCnicClick} style={{flex: "content", paddingLeft: "40px", paddingRight: "40px" ,marginLeft: "600px", marginTop: "20px", marginBottom: "95px"}} type="submit" className="btn btn-primary">Query</button>
    </div>
        </>
    )
}

export default Search