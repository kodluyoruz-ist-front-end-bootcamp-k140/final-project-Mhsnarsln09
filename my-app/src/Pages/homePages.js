import { Header } from "../components/Header";


export function HomePages() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:"10%"}}>
                    <div  className="card mb-3" style={{maxWidth: "540px"}}>
                        <div  className="row g-0">
                            <div  className="col-md-4">
                                <img src="https://cdn.medimagazin.com.tr/cdn/images/muayene/bmi2.jpg" style={{marginTop:"8%"}} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div  className="col-md-8">
                                <div  className="card-body">
                                    <h5  className="card-title">BMI Analysis</h5>
                                    <p  className="card-text">Body Mass Index is a calculation tool that shows how close individuals are to their ideal weight.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div className="row">
                    <div  className="card mb-3" style={{maxWidth: "540px"}}>
                        <div  className="row g-0">
                            <div  className="col-md-4">
                                <img src="https://thumbs.dreamstime.com/b/dietolog-woman-clipboard-healthy-unhealthy-food-nutritionist-dietolog-woman-healthy-unhealthy-products-food-flat-168338394.jpg" style={{marginTop:"8%"}}  className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div  className="col-md-8">
                                <div  className="card-body">
                                    <h5  className="card-title">Nutritionits</h5>
                                    <p  className="card-text">You can reach nutritionits for your health. Click on the card for the closest and best nutritionist to you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div className="row">
                    <div  className="card mb-3" style={{maxWidth: "540px"}}>
                        <div  className="row g-0">
                            <div  className="col-md-4">
                                <img src="https://img.freepik.com/premium-vector/group-people-working-out-gym_18591-47480.jpg" style={{marginTop:"8%"}}  className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div  className="col-md-8">
                                <div  className="card-body">
                                    <h5  className="card-title">GYM</h5>
                                    <p  className="card-text">You can reach gyms for your health. Click on the card for the closest and best gym to you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}