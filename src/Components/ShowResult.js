import React, { useEffect, useState } from 'react'
import './ShowResult.css'

const ShowResult = (props)=>{
    const [downloadLink, setDownloadLink] = useState('')
    const [list,setList] = useState([])
    const makeTextFile = () => {
        // This creates the file. 
        // In my case, I have an array, and each item in 
        // the array should be on a new line, which is why
        // I use .join('\n') here.
        const data = new Blob([list.join('\n')], { type: 'text/plain' })
    
        // this part avoids memory leaks
        if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)
    
        // update the download link state
        setDownloadLink(window.URL.createObjectURL(data))
      }

      useEffect(()=>{
          var temp = []
        for (const result of props.results){
            // setList(result)
            temp = [...temp,
                result.name,
                result.cnic,
                result.address,
                result.organization_name,
                result.contact,
                // result.Check-In_Date,
                // result.Check-Out_Date,
                result.Contact_Person,
                result.Visit_Purpose,
                result.Image_Location,
                "\n\n"]
                // console.log(result)
        }
        // console.log(temp)
        setList(temp)
        
      },[props.results])
      useEffect(()=>{
          console.log(list)
          makeTextFile()
      },[list])

    return(
        <>
            <div className="showres" style={{backgroundColor: "wheat", alignItems:"center"}}>
            <a
            // this attribute sets the filename
            download='list.txt'
            // link to the download URL
            href={downloadLink}
            >
            download
            </a>
                {
                    props.results.map((result)=>(
                        <div className="showcard">
                            <p/>
                            <p>{result.name}</p>
                            <p>{result.cnic}</p>
                            <p>{result.address}</p>
                            <p>{result.organization_name}</p>
                            <p>{result.contact}</p>
                            {/* <p>{result.Check-In_Date}</p>
                            <p>{result.Check-Out_Date}</p> */}
                            <p>{result.Contact_Person}</p>
                            <p>{result.Visit_Purpose}</p>
                            <p>{result.Image_Location}</p>
                            <p/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ShowResult