import React, { useEffect, useState } from 'react'
import './Home.css'
import WebcamCapture from './utils/webcamComp'

const Home = () => {
    const [camOpen,setIsCamOpen] = useState(false);

    useEffect(()=>{
        console.log(camOpen)
    },[camOpen])

    return(camOpen?<WebcamCapture/>:<>
        <div class="container-bg"  > 
        <img id = "image" class="image" alt="bg-crescent" src="/logo.png"/>
        <button id ="btn" className = " container-fluid" onClick={()=>{setIsCamOpen(true)}} > 
            Start <br/> Scanning 
        </button>  
        </div>  

        </>
    )
}

export default Home