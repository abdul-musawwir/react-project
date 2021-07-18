import React,{useState} from 'react'

const Navbar = () => {
    const [message,setMessage] = useState(null);
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Reception</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/about">Search</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/services">
                    Report Generation
                </a>
                </li>
                </ul>
            </div>
        </div>
        </nav>

        {message?
        <div class="alert alert- {{ message.tags }} alert-dismissible fade show" role="alert">
        <strong>{message} </strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>:null}
            </>
    )
}

export default Navbar