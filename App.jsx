import React, { useState } from 'react';


const App=() =>{
    let time=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);
    const updateTime=() =>{
        let updatedtime=new Date().toLocaleTimeString();
        setCtime(updatedtime);
    }
    setInterval(updateTime,20);
    return(
        <h1 style={{textAlign:"center",fontSize:"100px"}}>{ctime}</h1>
    ); 
}
export default App;