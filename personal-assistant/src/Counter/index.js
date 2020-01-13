import React from 'react'
import { Button } from '../AddTodo/styles'

const Counter = () =>{
    const[count,setCount]=useState([])
    return (
        <div>
            {count.map(v=> <p>{v}</p>)}
            <button type="button" onClick={()=>{setCount([...count,'hi'])}}>Increment</button>
            prints out more hi's , and uses the spread operator to deconstruct

            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/> set initial to empty string
            onChange changes on every key press
            event.target.value is next imput
            const [name, setName]

        </div>
    )
}

const [name, setName] = useState('')

<input value ={value}/>
{input, value, setValue}

Button{value, action}

const[state,dispatch] = useReducer(reducer, initArg, initFun)


for Fibonacci
const Counter = () =>{
    const prevFib = useRef(0)
    const [fib, setFib] = useState(1)

    return (
        <div>
            
            <button type="button" onClick={()=>{
                setFib(prevFib.current + fib 
                prevFib.current=fib)}}
            >Increment</button>

        </div>
    )
}

changing const input = useRef() will refuer it to the html;
<input ref ={input}

button onClick focus
used to change focus


