import React from 'react';
import {useState} from 'react';
import './index.css';


export default function App(){
  let [count,setCount] = useState(1)
  let [step, setStep] = useState(0)
  let [isDark,setDark] = useState();

  
  return(
    <div className={ `darkMode ${isDark ? 'darkMode' : 'lightMode'}`}>
      <button className="buton" onClick={()=> setDark(!isDark)}>{isDark ? 'Dark':'Light' } Mode</button>

      <h1 className="heading_style">
      Hello! Welcome 😄 To Counter Page📄
     </h1>
      <button onClick={()=>setCount(++count)}>Update Counter</button>
      <br />
      <h3>Value of Counter is :   <nbsp/>{count}</h3>
      <br/>
      <button onClick={()=>{
          var input = parseInt(prompt('enter the number which you want to increment','2'));
          const steps= setStep(step + input);
          return steps
          
        }
        }
        >
        Increment
        </button>
        <br />
        <h3>Initial value + Increment is : {step}</h3>
      
        </div>
        )
      }
