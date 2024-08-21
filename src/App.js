
import { useState } from 'react';
import './App.css';

function App() {

  //states

  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [message,setMessage] = useState('')

  return (
    <div className="App">
    <div className="container">
     <h1 className='center'>BMI CALCULATOR</h1>
     <form>
      <div>
        <label>Weight in Kg</label>
        <input value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Height in inches</label>
        <input value={height} onChange={(e) => setHeight(e.target.value)}></input>
      </div>
      <div>
        <button>Submit</button>
        
      </div>
      <div><button>Reload</button></div>

      

     </form>
     <div>
      <h2>You BMI is:</h2>
      <p>{message}</p>
     </div>
    </div>
     
    </div>
  );
}

export default App;
