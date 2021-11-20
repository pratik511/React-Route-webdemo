import React from 'react'
// import img4 from '../assets/img4.jpg'

const Card = (props) => {
    return (
        <>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div className="card" style={{width:'18rem'}}>
                    <img src={props.i1} className="card-img-top card-img" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{props.name1}</h5>
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width:'18rem'}}>
                    <img src={props.i2} className="card-img-top card-img" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{props.name2}</h5>
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
