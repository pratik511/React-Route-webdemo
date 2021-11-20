import React from 'react';
import Card from '../Component/Card';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg';

const About = () => {
    return (
        <>
            <div className='App' >
                <h1 > About Pages </h1>
                <Card name1="Pratik" name2="Patoliya" i1={img4} i2={img2}/>
                <Card name1="Pratik" name2="Pratik2" i1={img5} i2={img3}/>
            </div>

        </>
    )
}

export default About;


