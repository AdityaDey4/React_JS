
const Content = () => {

    const handleNameChange = ()=> {

        const name = ['Bob', 'Kevin', 'Aditya'];
        const random = Math.floor(Math.random()*3);
    
        return name[random];
    }
    const handleClick = ()=> {
        console.log("You clicked it...");
    }
    const handleClick2 = (name)=> {
        console.log("You clicked it... "+name);
    }
    const handleClick3 = (e)=> {
        console.log(e.target.innerText);
    }

    return (
        
        <main>

            <p>
                Hello {handleNameChange()}!
            </p>
            
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2("Aditya")}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click me</button>
            
            {/* double click does not work properly because in react double click = single click & again single click */}
        </main>
    )
}

export default Content