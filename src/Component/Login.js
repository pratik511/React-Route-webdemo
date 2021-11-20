import React, { useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState([]);
    
    ////data add karva mate
    const handlesubmit = () => {
        
        fetch('http://localhost:3006/user').then(res => res.json()).then(result => setUser(result))
        
        user.map((item) => {
            // debugger
            if(item.username == username && item.password == pass){
                alert("Succesfully Login")
            }
            else if(item.username == username && item.password != pass){
                alert("Password Wrong")
            }
            // else if(item.username != username && item.password != pass){
            //     alert("UserName & Password Wrong")
            // }
        })
        setUsername('');
        setPass('');
    };

    
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <input type="email" className="form-control" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} ></input> <br />
                        <input type="password" className="form-control" placeholder="Enter Password" value={pass} onChange={e => setPass(e.target.value)} ></input><br />
                        <button onClick={() => handlesubmit()}>Submit</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;