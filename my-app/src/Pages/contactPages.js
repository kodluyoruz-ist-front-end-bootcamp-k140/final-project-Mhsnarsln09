import { Header } from "../components/Header";
import "./page.css"
export function ContactPages() {
    return (
        < >
            <Header />

            <h1 className="display-1 contacthead">My Nutritionist</h1>
            <div className="container contactdiv">
                <div className="row">
                    <div className="col-6 contactright" >
                        <div>
                            <h1 className="display-1">Contact Us</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sapiente possimus. Molestiae tenetur dolor labore.</p>
                        </div>
                    </div>
                    <div className="col-6 contactleft" >
                        <form className="row g-3 ">
                            <div className="col-md-6" >
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input className="form-control" id="inputContactName" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputSurname" className="form-label">Surname</label>
                                <input className="form-control" id="inputContactSurname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
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