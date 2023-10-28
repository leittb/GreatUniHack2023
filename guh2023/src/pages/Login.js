import React from 'react';
import { Outlet, Link } from "react-router-dom";


function LoginWindow(){
    const text = " admin'); DROP TABLE STUDENTS; --"
    const [counter, setCounter] = React.useState(0);

   
    function increaseCounter(event){
    
        setCounter((oldCounter)=>{
            return oldCounter + 1;
        });

    }
    return(
        <div style={{
            borderRadius:70,
            backgroundColor:"violet",
            position:'absolute',
            left:"25%",
            top:"25%",
            width: '50%',
            height:'50%',
            
            }}>
            <div className="login-wrapper" 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center'
            }}>

            <h1>Please Log In</h1>
            <form style={{width:"80%"}}>
                <label>
                    <p>Username</p>
                    <input style={{fontSize:30,width:"100%",borderRadius: "0 0 240px 50%/60px"}} type="text" value={text.slice(0,counter)} onChange={increaseCounter}/>
                </label>
                <label>
                    <p>Password</p>
                    <input style={{fontSize:30,width:"100%"}} type="password" />
                </label>
                <div>
                <button  type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
      )
}


function NoiceBackground(props){
 
    return (
    <svg 
        style={{
        backgroundColor:"white", position: 'absolute', 
        left: '0', 
        top: '0', 
        zIndex: -1,
        display:props.display,
        width:'100%',
        height:'100%',
       }}

       
        xmlns='http://www.w3.org/2000/svg'>
      
      <filter id='noiseFilter'>
          <feTurbulence 
            type='turbulence' 
            baseFrequency='0.01' 
            stitchTiles='stitch'> 
          </feTurbulence>
        </filter>
      
        <rect
          width='100%' 
          height='100%' 
          filter='url(#noiseFilter)' />
      </svg>
      )
    }




class Login extends React.Component {
    
    render(){
        return(
        <div>
        <NoiceBackground display='block'/>
        <LoginWindow/>
        </div>
        )
    }
}
export default Login;
  
  

  