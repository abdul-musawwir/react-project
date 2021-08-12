import { PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import DocDownload from './utils/DocDownload'


const PdfGenerate = (props) => {

    const [data,setData] = useState(null)

    useEffect(()=>{
        var prmstr = window.location.search.split("=");
        var sid = prmstr[1];
        var args = JSON.parse(sessionStorage.getItem(sid));
        sessionStorage.removeItem(sid);
        setData(args);
    },[])
    return(
        <>
       {data? <div className="download" style={{width:"100%",height:"100vh"}}>
        <PDFViewer style={{ flex: 1, width:"100%",height:"100%" }}>
            <DocDownload data ={data} />
        </PDFViewer>
        </div>:null}
        </>
    )
}

export default PdfGenerate