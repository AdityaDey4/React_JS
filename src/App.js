import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import { useState } from "react";

function App() {

  const myItems = [
    {
        id : 1,
        check : true,
        item : "Item 1"
    },
    {
        id : 2,
        check : false,
        item : "Item 2"
    },
    {
        id : 3,
        check : false,
        item : "Item 3"
    }
  ];

  const handleCheck = (id) => {
        
    const newItems = items.map(item => 
        item.id === id
            ? {...item, check : !item.check}
            : item
    );

    setItems(newItems);
    localStorage.setItem("localStorage", JSON.stringify(newItems));
  }

  const handleDelete = (id) => {
      
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      localStorage.setItem("localStorage", JSON.stringify(newItems));
  }

  const [items, setItems] = useState(myItems); 


  return (
    <div className="App">
      <Header title="Your Groceries List"/>
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}


export default App;
