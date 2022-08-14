import React, { useEffect, useState } from "react"
import { Link} from "react-router-dom"

export function Pagination ({pages, setCurrentPage}) {
  
    
    const numOfPages = []
    for(let i = 1; i <= pages; i++){
        numOfPages.push(i)
    }
    const [currentButton, setCurrentButton] = useState(1)

    useEffect(() => {
        setCurrentPage(currentButton)
    },[currentButton, setCurrentPage])
    return(
        <nav ariaLabel="Page navigation example">
  <ul className="pagination justify-content-end">
    
    <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
        onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1 )}>Previous</a></li>
    {
         numOfPages.map((page, index) => {
             return (
                     <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><Link to={pages} className="page-link" onClick = {() => setCurrentButton(page)}>{page}</Link></li>
                    )
                    
                })
    }
    <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}><Link to={pages}  className="page-link"
            onClick = { () => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1 )}>Next</Link></li>
   
  </ul>
</nav>
    );
} 
    
    
    
