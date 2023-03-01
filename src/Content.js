import { useState } from "react";
const Content = () => {

    const [name, setname] = useState("Aditya");    
    const [count, setCount] = useState(0);

    const handleNameChange = ()=> {

        const names = ['Bob', 'Kevin', 'Aditya'];
        const random = Math.floor(Math.random()*3);
    
        setname(names[random]);
    }
    const handleClick = ()=> { 
        setCount(count+1);
        setCount(count+1);
        console.log(count);
        // when we call this function, then whatever the initial value of count is, that value will be printed
    }
    const handleClick2 = ()=> {
        console.log(count); 
    }

    return (
        
        <main>

            <p>
                Hello {name}!
            </p>
            
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me</button>

        </main>
    )
}

export default Content