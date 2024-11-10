import React from "react";
import { useState,useRef } from "react";
import './App.css'

function App(){
    const[time,setTime]=useState(0);
    let timeRef=useRef(null);
    function starttimer(){
        timeRef.current=setInterval(()=>{
            setTime(time=>time+1)


        },1000)

    }
    function stoptimer(){
      clearInterval(timeRef.current);
      timeRef.current=null;
    }
    function resetTimer(){
        stoptimer();
        setTime(0);
    }
    return(
        <div className="wrapper">
        <h1 id="name">Stopwatch React Application</h1>
        <h1>{time}   Seconds</h1>
        <div className="buttons">
        <button onClick={starttimer}>Start</button>
        <button onClick={stoptimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        </div>

        

        </div>
    );


}
export default App;