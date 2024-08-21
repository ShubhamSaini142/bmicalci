import { useState } from "react";
import "./App.css";

function App() {
  //states

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  // events

  const reload = () => {
    window.location.reload();
  };

  const bmiCal = (event) => {
    event.preventDefault();

    if (weight == 0 || height == 0) {
      alert("Please Enter Correct values");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi);
    }

    if (bmi < 25) {
      setMessage("You are underweight");
    } else if (bmi >= 25 && bmi < 28) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="center">BMI CALCULATOR</h1>
        <form onSubmit={bmiCal}>
          <div>
            <label>Weight in Kg</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Height in Cm</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>
          <div>
            <button className= "btn" type="submit">Submit</button>
          </div>
          <div>
            <button className= "btn" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>
        <div>
          <h2>You BMI is:{bmi}</h2>
          <h3>
            {" "}
            <p>{message}</p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
