import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { SERVER_IP } from './constants'
import './Exit.css'

const Exit = () => {

    const [initials,setInitials] = useState(null)

    useEffect(()=>{
        axios.get("http://"+SERVER_IP+":5000/checkout_screen", {
            params: {
                date: moment().format().slice(0,-15),
            }
        }).then(res => {
            // console.log(res.data.result)
            setInitials(res.data.result)
            // console.log(initials)
            
        }).catch(err => {
            console.log(err);
            alert("error bois" + err);
        });
    },[])

    useEffect(()=>{
        console.log(initials)
    },[initials])

    return(
        <div class="maincontainer">
            {
                initials?initials.map((init)=>(
                    <div>
                        <p>{init.name}</p>
                        <p>{init.cnic}</p>
                        <p>{init.Person_Count}</p>
                        <p>{init.organization_name}</p>
                        <p>{init.contact}</p>
                        <p>{init.Check_In_Date}</p>
                        <p>{init.Check_Out_Date}</p>
                        <p>{init.Contact_Person}</p>
                        <p>{init.Visit_Purpose}</p>
                        <br/><br/><br/>
                    </div>
                )):null
            }
        </div>
    )
}

export default Exit