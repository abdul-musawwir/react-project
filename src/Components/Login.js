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
        <div class="login">    
            <form id="login" method="get" action="login.php">    
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
                {/* <br/><br/>     */}
                {/* <input type="checkbox" id="check"/>    
                <span>Remember me</span>     */}
                {/* <br/><br/>     */}
                {/* Forgot <a href="#">Password</a>     */}
            </form>     
        </div>
        </div>
        </>
    )
}

export default Login