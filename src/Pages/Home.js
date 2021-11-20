import React from 'react'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
const Home = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img3} className="d-block w-100" style={{width:'1000px', height:'550px'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" style={{width:'1000px', height:'550px'}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100" style={{width:'1000px', height:'550px'}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='App'>
                <h1>Home Pages</h1>
            </div>
        </>            
    )
}

export default Home;
