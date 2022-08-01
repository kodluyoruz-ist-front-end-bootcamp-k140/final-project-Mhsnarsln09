import React, {useState} from "react"
import "./style.css"
import toast from "react-hot-toast";
export function BmiCalculator() {

  // state
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0 ) {
      toast.error("Please enter a valid weight and height")
    } else {
      let bmi = (weight / (height / 100) ** 2)
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 18.5) {
        setMessage("You are underweight")
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight")
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a overweight")
      } else if(bmi >= 30){
        setMessage("You are obese")
      }else {
        setMessage("Please enter a valid weight and height")
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 18.5) {
      imgSrc = ""
    } else if (bmi >= 18.5 && bmi < 25) {
      imgSrc = "https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/underweight.png?raw=true"
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = "https://github.com/fireclint/bmi-calculator-react/blob/main/src/assets/overweight.png?raw=true"
    } else if(bmi >= 30 ){
      imgSrc = "https://banner2.cleanpng.com/20180821/ptj/kisspng-drawing-obesity-painting-sketch-vitamin-dieting-and-obesity-5b7c2cc038a816.2885828115348645762321.jpg"
    }
    
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="calculator">
      <div className="container bmical">
        <h2 className="center">BMI Calculator</h2>
        <form className="calform" onSubmit={calcBmi}>
          <div >
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}
            placeholder="eg 75" />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} 
             placeholder="eg 180" />
          </div>
          <div>
            <button className="btn btn-info btns" type="submit">Submit</button>
            <button className="btn btn-outline-info btns btno" onClick={reload} type="submit">Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div> 
      </div>
    </div>
  );
}

