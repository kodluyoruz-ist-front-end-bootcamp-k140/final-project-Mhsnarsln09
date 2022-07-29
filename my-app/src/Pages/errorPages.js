import { Link } from "react-router-dom"
export function ErrorPages () {
    return(
        <div className="container" style={{textAlign:"center", marginTop : "25vh"}}>
            <h1 className="display-1" >
                404
            <h1 >
                PAGE NOT FOUND
            </h1>
            </h1>
            <Link to="/">Ana Sayfaya Gitmek İçin Tıklayın</Link>
        </div>
    )
}