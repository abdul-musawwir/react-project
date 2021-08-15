import { PDFViewer } from '@react-pdf/renderer'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import DocDownload from './utils/DocDownload'


const PdfGenerate = (props) => {

    const [data,setData] = useState(null)
    const [time, setTime] = useState(null)

    useEffect(()=>{
        setTime(moment().format().slice(0,-15))
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
            <DocDownload data ={data} time={time} />
        </PDFViewer>
        </div>:null}
        </>
    )
}

export default PdfGenerate