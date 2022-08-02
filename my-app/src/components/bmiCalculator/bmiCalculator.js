import React, { useState } from "react"
import "./calculator.css"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function BmiCalculator() {

    // state
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [bmi, setBmi] = useState("")
    const [message, setMessage] = useState("")



    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if (weight === "" || height === "") {
            toast.error("Please enter a valid weight and height", { duration: 1000 })
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
            } else if (bmi >= 30) {
                setMessage("You are obese")
            } else {
                setMessage("Please enter a valid weight and height")
                toast.error("Please enter a valid weight and height", { duration: 1000 })
            }
        }
    }

    //  show image based on bmi calculation
    let imgSrc;

    if (bmi < 1) {
        imgSrc = null
    } else {
        if (bmi < 18.5) {
            imgSrc = "https://media.istockphoto.com/vectors/vector-drawing-of-couple-young-people-in-summer-cotton-jeans-clothing-vector-id1254410004?k=20&m=1254410004&s=612x612&w=0&h=kPD76ziUoUzG2E56rEsHoVXZPDZAZ3aePjnvsLvHuMY="
        } else if (bmi >= 18.5 && bmi < 25) {
            imgSrc = "https://media.istockphoto.com/vectors/cartoon-characters-people-plus-size-couple-vector-vector-id1164005096?k=20&m=1164005096&s=612x612&w=0&h=1epgYlUijljS45NGiLYoW4nS56d9dG5jB8lKdodb5nw="
        } else if (bmi >= 25 && bmi < 30) {
            imgSrc = "https://us.123rf.com/450wm/kos911/kos9111903/kos911190300084/124351573-a-man-and-a-woman-with-obesity-unhealthy-lifestyle-incorrect-food-concept-health-problems-of-fast-fo.jpg?ver=6"
        } else if (bmi >= 30) {
            imgSrc = "https://media.istockphoto.com/vectors/man-and-a-woman-with-obesity-vector-id1059059766?k=20&m=1059059766&s=612x612&w=0&h=l8qTCsHx9rz6M-b3pXgo7-V1hBEjzwkNIZ4SbNZVCmE="
        }

    }


    let reload = () => {
        window.location.reload()
    }
    const navigate = useNavigate()

    return (
        <>
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
                            <button className="btn btn-outline-info btns " onClick={reload} type="submit">Reload</button>
                        </div>
                    </form>

                    <div className="center">
                        <h3>Your BMI is: {bmi}</h3>
                        <h6>{message}</h6>
                    </div>

                    <div className="img-container">
                        <img src={imgSrc} alt=""></img>
                    </div>
                    <div className="dirpage">
                        <button className="btn btn-info btno"
                            style={{ marginRight: "10px" }}
                            onClick={() => navigate("/")}>Nutritionist</button>

                        <button className="btn btn-info btno"
                            onClick={() => navigate("/")} >Gym</button>
                    </div>
                </div>

            </div>
        </>
    );
}

