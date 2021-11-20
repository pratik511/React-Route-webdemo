import axios from 'axios';
import React, { useState, useEffect } from 'react';

const User = () => {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    
    
    const [fnameErr, setFnameerr] = useState({});
    ////data add karva mate
    const handlesubmit = () => {
        if(fname != '' && lname != '' && username != '' && pass != ''){
        const data = {
            FirstName: fname,
            LastName: lname,
            username: username,
            password: pass
        }
        // axios.post('https://reqres.in/api/login',data).then(res => alert(`Log in Successfully Token :-  ${res.data.token} `,res.data.token)).catch(err => alert(err) )
        axios.post('http://localhost:3006/user', data).then(res => console.log(res)).catch(err => console.log(err))

        setFname('');
        setLname('');
        setUsername('');
        setPass('');
        alert("Submit Your Data")
    }else{
        alert("Enter Your data")
    }

        const isValid = formValidation();
        if(isValid){
            setFname('');

        }
    };
    //// data delete karva mate
    // useEffect(() => {
    //     axios.delete('http://localhost:3006/user/')
    // },[])


    

    const formValidation = () =>{
        const fnameErr = {};
        let isValid= true;

        if(fname.trim().length < 5){
            fnameErr.fnameShort = "First name is too short";
            isValid = false;
        }
        if(fname.trim().length > 10){
            fnameErr.fnameLong = "First name is too long";
            isValid = false;
        }

        setFnameerr(fnameErr);
        return isValid;
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    
                    <input type="text" className="form-control" placeholder="Enter First Name" value={fname} onChange={e => setFname(e.target.value)} required></input><br />
                    {Object.keys(fnameErr).map((key) =>{
                        return <div style={{color:"red"}}>{fnameErr[key]}</div>
                    })}
                    <input type="text" className="form-control" placeholder="Enter Last Name" value={lname} onChange={e => setLname(e.target.value)} required></input><br />
                    <input type="email" className="form-control" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} required></input> <br />
                    <input type="password" className="form-control" placeholder="Enter Password" value={pass} onChange={e => setPass(e.target.value)} required></input><br />
                    <button onClick={() => handlesubmit()}> Submit</button>
                </div>
            </div>
        </div>
    )
}

export default User;
