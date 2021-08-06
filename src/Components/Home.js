import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { SERVER_IP } from './constants'
import './Home.css'


const Home = () => {

    const [seconds, setSeconds] = useState(30);
    const [checkout, setCheckout] = useState(0);
    const [remaining, setRemainig] = useState(0);
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        axios.get("http://"+SERVER_IP+":5000/home_screen_renderer",{
                params: {
                    date: moment().format().slice(0,-15),
                }
            }).then(res => {
                console.log(res.data)
                setTotal(res.data.total)
                setRemainig(res.data.remaining)
                setCheckout(res.data.checkout)
                // setResult(res.data.result)
            }).catch(err => {
                console.log(err);
                alert("error bois" + err);
            });
    },[])

    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
          console.log(seconds);
        } else {
            axios.get("http://"+SERVER_IP+":5000/home_screen_renderer",{
                params: {
                    date: moment().format().slice(0,-15),
                }
            }).then(res => {
                console.log(res.data)
                setTotal(res.data.total)
                setRemainig(res.data.remaining)
                setCheckout(res.data.checkout)
                // setResult(res.data.result)
            }).catch(err => {
                console.log(err);
                alert("error bois" + err);
            });
          setSeconds(30)
          console.log(seconds);
        }
      });

    return(<>
        <div class="container-bg"  > 
        <img id = "image" class="image" alt="bg-crescent" src="/logo.png"/>
        
        <div class="show-data-container">
            <div class="show-data-wrapper">
                <div class="billie">
                    <p>Total Visitors:&nbsp;</p>
                    <p></p>
                    <p>Checked out: &nbsp;</p>
                    <p></p>
                    <p style={{paddingRight:"40px"}}>Remaining:</p>
                </div>
                <div class="jean">
                    <p>{total}</p>
                    <p></p>
                    <p>{checkout}</p>
                    <p></p>
                    <p>{remaining}</p>
                </div>
            </div>
        </div>
        
        
        </div>  

        </>
    )
}

export default Home