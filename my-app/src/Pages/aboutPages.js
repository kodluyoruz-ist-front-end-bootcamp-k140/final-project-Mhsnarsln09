import { Header } from "../components/Header";


export function AboutPages() {
    return (
        <>
            <Header />
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false"
            style={{margin:"0px 50px 50px 50px"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{height:"500px"}}  >
                    <div className="carousel-item active">
                        <img src="https://www.1mg.com/articles/wp-content/uploads/2017/05/rsz_shutterstock_547520209.jpg" className="d-block w-100 " style={{height:"500px"}} alt="..."/>
                            
                    </div>
                    <div className="carousel-item">
                        <img src="https://typelish.com/c/4bN0kZ2" className="d-block w-100" style={{height:"500px"}} alt="..."/>
                            
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.incimages.com/uploaded_files/image/1920x1080/morning-run-1940x900_36164.jpg" className="d-block w-100" style={{height:"500px"}} alt="..."/>
                           
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <h1 style={{textAlign:"center"}}>About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque molestias debitis nihil tenetur amet repellendus corporis ea corrupti quae, dolores et illum nemo eveniet eum, vel laborum in? Ut, eum.</p>
            </div>
        </>
    )
}