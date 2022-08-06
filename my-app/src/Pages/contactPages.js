import { Header } from "../components/Header";
import "./page.css"
export function ContactPages() {
    return (
        < >
            <Header />
            <h1 className="display-1 contacthead" style={{marginTop:"4%"}}>Good Food Good Health Good Life</h1>
            <div className="container contactdiv">
                <div className="row">
                    <div className="col-6 contactright" >
                        <div>
                            <h1 className="display-1">Contact Us</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sapiente possimus. Molestiae tenetur dolor labore.</p>
                        </div>
                    </div>
                    <div className="col-6 contactleft" >
                        <form className="row g-2 ">
                            <div className="col-md-6" >
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input className="form-control contactinput" id="inputContactName" placeholder="Name"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputSurname" className="form-label">Surname</label>
                                <input className="form-control contactinput" id="inputContactSurname" placeholder="Surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                                <input type="email" className="form-control contactinput" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">What we can help You with?</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
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