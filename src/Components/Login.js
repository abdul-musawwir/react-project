import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './Login.css'

const Login = (props) => {
    const [Username,setUsername] = useState(null)
    const [Password,setpassword] = useState(null)
    const history = useHistory()

    function HandleLogin(){
        console.log("here"+Username+Password)
        
        if(Username==="admin" && Password==="password"){
            history.push("/home");
            // this.props.history.push("/home")
        }
    }

    return(
        <>
        
        <div className="container-bg">
            
        <img class="splash-logo" id = "image" alt="bg-crescent" src="/logo.png"/>
        <div class="login-container">
            <div class="login">    
                    <p className="heading">Crescent Steel</p> 
                    <label className="label2">
                        <b>User Name</b>    
                    </label>    
                    <input type="text" name="Uname" id="Uname" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>    
                    <br/><br/>    
                    <label className="label2">
                        <b>Password</b>    
                    </label>    
                    <input type="Password" name="Pass" id="Pass" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>    
                    <br/><br/>    
                    <input type="button" name="log" id="log" value="Log In Here" onClick={HandleLogin}/>   
                    
            </div>
            <div class="imagelog">
                        <img src="./new.jpeg" alt="login"  />
                    </div>
            {/* <div>
                <img src="./new.jpeg" alt="login"  />
            </div> */}
        </div>
        </div>
        </>
    )
}

export default Login