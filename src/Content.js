
const Content = () => {

    const handleNameChange = ()=> {

        const name = ['Bob', 'Kevin', 'Aditya'];
        const random = Math.floor(Math.random()*3);
    
        return name[random];
      }
    return (
        
        <main>

            <p>
                Hello {handleNameChange()}!
            </p>
            
        </main>
    )
}

export default Content