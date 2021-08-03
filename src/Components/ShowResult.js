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
                result.name_of_organization,
                result.contact_number,
                result.check_in_date,
                // result.Check-Out_Date,
                result.contact_person,
                result.contact_purpose,
                // result.person_image,
                // result.cnic_image,
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
                            <p>{result.name_of_organization}</p>
                            <p>{result.contact_number}</p>
                            <p>{result.check_in_date}</p>
                            {/* <p>{result.Check-Out_Date}</p> */}
                            <p>{result.contact_person}</p>
                            <p>{result.contact_purpose}</p>
                            <p><img src={result.cnic_image} alt="cnic image"/></p>
                            <p><img src={result.person_image} alt="person image"/></p>
                            <p/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ShowResult