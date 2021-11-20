import './Styles/App.css';
import React,{useState,useEffect} from 'react';



function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect( () => {
        // document.title = `Click ${count}`;
        alert(`Click Button `)
    },[count])

    return (
        <div>
            <button onClick={() => setCount(count +1)}>Click Me {count} </button>
            <button onClick={() => setCount1(count1 +1)}>Click Me {count1} </button>
        </div>
    );
}

export default App;