import { useState, createContext, useContext } from 'react'
import './App.css'

// Context nu naam Capital letter thi sharu karo
const MyContext = createContext();

function Comp1() {
    const { setData } = useContext(MyContext);

    return (
        <button onClick={() => setData("From Context")}>
            set Data
        </button>
    );
}

function Comp2() {
    const { data } = useContext(MyContext);
    return (
        <p>
            {data}
        </p>
    );
}

// React component nu naam Capital thi sharu thavu jaruri che (Abc)
function Abc() {
    const [data, setData] = useState("MCA");

    return (
        <div>
            <MyContext.Provider value={{ data, setData }}>
                <Comp1 />
                <Comp2 />
            </MyContext.Provider>
        </div>
    );
}

export default Abc;