import { Header } from "../components/Header";

export function ContactPages() {
    return (
        < >
            <Header />
            
                <h1 className="display-1" style={{ textAlign: "center", marginTop: "5px", color: "#1A8B9D" }}>My Nutritionist</h1>
                <div className="container" style={{ marginTop: "150px" }}>
                    <div className="row">
                        <div className="col-6" style={{ textAlign: "center", color: "#1A8B9D" }}>
                            <div>
                                <h1 className="display-1">Contact Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!</p>
                            </div>
                        </div>
                        <div className="col-6" >
                            <form className="row g-3">
                                <div className="col-md-6" >
                                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                                    <input type="email" className="form-control" id="inputContactName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Surname</label>
                                    <input type="password" className="form-control" id="inputContactSurname" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="inputContactEmail" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">What can we help you with?</label>
                                    <input type="text" className="form-control" id="inputContactHelp" />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    )
}