import React, { useState } from 'react'
import './App.css'


const App = () => {
  const[count, setCount] = useState(0); // intial value of the count
  const[message, setMessage] = useState(" ");


  // count limited to just 0 as min value
  const handleDecreaseBtn =  () =>{
    if(count <= 0){
      // display the setMessage whenever the condition above is false
      setMessage("You can not decrease below zero"); 

    }else{

      setCount(prev => prev - 1);

      // setMessage should display nothing if the condition is true
      setMessage(" ");
    }
      
    

  };
// count limited to just 10 as max value
  const  handleIncreaseBtn = () => {
    if(count >= 10){
      // display the setMessage whenever the condition above is false
      setMessage("You have reach the maximum Limit!")
    }
    else{
      setCount(prev => prev + 1);
      // setMessage should display nothing if the condition is true
      setMessage(" ");
    }
    
  }

  return (
    <div className="mainContainer">
      <div className='container'>
        <h1>{count}</h1>
        <section className='btnContainer'>
        <button onClick={handleDecreaseBtn}>Decrease</button>
        <button onClick={handleIncreaseBtn}>Increase</button>
        </section>
        {message && <p>{message}</p>}
        <p className='info-p'>
          Click the buttons above to decrease or increase number
        </p>
      </div>
      
    </div>
  )
}

export default App