import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



let [counter, setCounter]  = useState(15)

// let counter = 5;

const addValue = () =>{
   
  setCounter(counter+1)
  // counter = counter+1;
  
 

}

const removeValue =() =>{
  setCounter(counter-1);
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>
        
        Add Value </button>

      <br />
      <button
      onClick={removeValue}
      >Remove Value  </button>
      <p>footer: </p>
    </>
  )
}

export default App
