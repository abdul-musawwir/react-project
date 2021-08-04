import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Contact from "../Contact"
import axios from "axios";
import {SERVER_IP} from "../constants"
import { useHistory } from "react-router-dom";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };


  const WebcamCapture = () => {

    const history = useHistory()
    const webcamRef = React.useRef(null);

    const [image, setImage] = useState()
    const [data, setData] = useState(null)
  
    const captureUrdu = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        
        axios.post("http://"+SERVER_IP+":5000/image_urdu", {
            'image' : imageSrc
        }).then(res => {
            console.log("successfully inserted");
            // console.log(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err);
            console.log("error bois" + err);
        });
        setImage(imageSrc)
      },
      [webcamRef]
    );

    const captureEnglish = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        
        axios.post("http://"+SERVER_IP+":5000/image_english", {
            'image' : imageSrc
        }).then(res => {
          console.log("successfully inserted");
          // console.log(res.data)
          setData(res.data)
        }).catch(err => {
            console.log(err);
            console.log("error bois" + err);
        });
        setImage(imageSrc)
      },
      [webcamRef]
    );

    useEffect(()=>{
        console.log(data)
        if(image && data){
          history.push('/contact',{image:image,data:data})
        }
    },[data,image])
  
    return (<>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={700}
          videoConstraints={videoConstraints}
        />
        <button onClick={captureEnglish}>Capture english photo</button>
        <button onClick={captureUrdu}>Capture urdu photo</button>
        <a href="/contact"><button >Skip</button></a>
      </>
    );
  };

  export default WebcamCapture;