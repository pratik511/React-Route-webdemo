import React,{useState,useEffect} from 'react';


const Api = () => {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then(resp => resp.json())
        .then(resp =>setPosts(resp))
    },[])
    
    return (
        <>
        <div>{
            posts.map(post => <div className="App1"><p>{`${post.id}. ${post.name} -${post.username} - ${post.email} - ${post.address.city}`}</p></div>)
        }</div>
        </>
    )
}

export default Api
