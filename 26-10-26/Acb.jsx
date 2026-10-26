import {useRef} from 'react'
import './App.css'

function Acb()
{
    const inputRef = useRef(null);
    return(
        <div>
            <input type="text" ref={inputRef} defaultValue="mca"/>
            <button onClick={() => inputRef.current.focus()}>focus</button>
        </div>
    )
}

export default Acb