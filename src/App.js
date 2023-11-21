import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Show from './show'


function App() {
  const details=[

    {
    name:"Ashok",
    skills:[
    {name:"developer", type:"Fullstack"},
    {name:"developer", type:"Fullstack"}
    ]
    
    },
    {
    name:"Rahul",
    skills:[
    {name:"designer", type:"CADD"},
    {name:"designer", type:"Autocad"}
    ]
    
  }
    
    
    ]
  const[count,setCount]=useState("Pink")
  const change=()=>{
      setCount("Green")
  } 
  return (
    <div className="App">
       
        <div className="data2">
                <p>value:{count}</p>
                <button onClick={change}>change</button>
                <Show dataStore={details}/>
          </div> 
      </div>
  );
}

export default App