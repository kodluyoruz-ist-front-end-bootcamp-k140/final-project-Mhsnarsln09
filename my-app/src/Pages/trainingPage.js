
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore"

import "./page.css"

export function Training() {
    const [gyms, setGyms] = useState([])
    const gymsCollectionRef = collection(db, "gym")
    const getGyms = async () => {
        const data = await getDocs(gymsCollectionRef)
        setGyms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        getGyms()
    }, [])
    return (
        <>
            <Header />
            <div className="container trainingpage">
                {gyms.map((gym,i) => {
                    return (
                        <div className="card mb-3" key={gym.id}>
                            <div className="row g-0">
                                <div className="col-md-4" style={{marginTop:"2%"}}>
                                    <div id={`carouselExampleIndicators${i}`} className="carousel slide" data-bs-ride="true" >
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target={`#carouselExampleIndicators${i}`}data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target={`#carouselExampleIndicators${i}`}data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="https://cdn.mos.cms.futurecdn.net/t4LzQQL75En7bRD7iyxNWd.jpg" className="d-block w-100 trainingimg" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://www.singlecare.com/blog/wp-content/uploads/2021/12/Blog_122921_Best_diet_for_weight_loss.png" className="d-block w-100 trainingimg" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://www.healthkart.com/connect/wp-content/uploads/2016/11/banner-5.jpg" className="d-block w-100 trainingimg" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title mt-1">{gym.name}</h5>
                                        <p className="card-text mt-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text mt-4">Email: {`${gym.name.toLowerCase().replace(/ /g, "_")}@gmail.com`}</p>
                                        <p className="card-text mt-5">Distance: {gym.distance}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}