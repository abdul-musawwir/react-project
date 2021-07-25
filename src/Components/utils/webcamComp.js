import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Contact from "../Contact"

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };


  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const [image, setImage] = useState()
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
      },
      [webcamRef]
    );

    useEffect(()=>{
        console.log(image)
    },[image])
  
    return (image?<Contact image={image}/>:<>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={700}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        <a href="/contact"><button >Skip</button></a>
      </>
    );
  };

  export default WebcamCapture;