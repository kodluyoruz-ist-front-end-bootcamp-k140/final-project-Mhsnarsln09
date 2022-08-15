import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { db } from '../firebase'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { Pagination } from '../components/pagination'

export function Training() {
    const [gyms, setGyms] = useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(2)
    // DEFAULT DATA
    const gymsCollectionRef = query(collection(db, "gym"))
    const getGyms = async () => {
        const data = await getDocs(gymsCollectionRef)
        setGyms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    //  SEARCH DATA
    const gymsRef = query(collection(db, "gym"), where("name", ">=", search.toUpperCase()), where("name", "<=", search.toUpperCase() + "\uf8ff"))

    const getSearch = async () => {
        const data = await getDocs(gymsRef)
        setGyms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    // SORT DATA
    const getSort = async (item, type) => {
        const gymssortRef = query(collection(db, "gym"), orderBy(item, type))
        const data = await getDocs(gymssortRef)
        setGyms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        try {
            if (search.length < 3) {
                getGyms()
            } else if (search.length >= 3) {

                getSearch()
            } else {
                getSort()
            }
        } catch (e) {
            console.log(e)
        }

    }, [search, itemsPerPage, setItemsPerPage])
    // PAGİNATON 
    const indexofLastItems = currentPage * itemsPerPage
    const indexOfFirstItems = indexofLastItems - itemsPerPage
    const currentGyms = gyms.slice(indexOfFirstItems, indexofLastItems)
    const totalPagesNum = Math.ceil(gyms.length / itemsPerPage)
    return (
        <div>
                <Header />
                <div >
                    <div>
                        <div className="container trainingpage">
                            <div className="row">
                                <div className="col-11">
                                    <div className='searchbox'>
                                        <input className="searchbox-input" type="text" placeholder='Searching' onChange={e => setSearch(e.target.value)} />
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="dropdown sort">
                                        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort
                                        </button>
                                        <ul class="dropdown-menu" style={{ cursor: "pointer", padding: "10px" }}>
                                            <li onClick={() => getGyms()}>Default</li>
                                            <li onClick={() => getSort("name", "asc")}>A-Z</li>
                                            <li onClick={() => getSort("name", "desc")}>Z-A</li>
                                            <li onClick={() => getSort("distance", "asc")}>Distance Asc</li>
                                            <li onClick={() => getSort("distance", "desc")}>Distance Desc</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
                            {currentGyms.map((gym, i) => {
                                return (
                                    <div className="card mb-3" key={gym.id}>
                                        <div className="row g-0">
                                            <div className="col-md-4" style={{ marginTop: "2%" }}>
                                                <div id={`carouselExampleIndicators${i}`} className="carousel slide" data-bs-ride="true" >
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide-to="0" className="active" aria-current="true" ariaLabel="Slide 1"></button>
                                                        <button type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide-to="1" ariaLabel="Slide 2"></button>
                                                        <button type="button" data-bs-target={`#carouselExampleIndicators${i}`} data-bs-slide-to="2" ariaLabel="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <img src="https://www.aspilatesizmir.com/wp-content/uploads/2018/09/personal-trainer-1.jpg" className="d-block w-100 trainingimg" alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://conteudo.imguol.com.br/c/entretenimento/b9/2021/09/14/personal-trainer-exercicio-treino-1631649931301_v2_4x3.jpg" className="d-block w-100 trainingimg" alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://www.trainerize.com/blog/wp-content/uploads/2019/02/Fitness_for_2_selling_personal_training_to_couples.jpg" className="d-block w-100 trainingimg" alt="..." />
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
                                                    <p className="card-text mt-5">Distance: {gym.distance} Km</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                )
                            })}
                             {/* <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} /> */}
                        </div>
                    </div>
                </div>
        
        </div>
    )
}
