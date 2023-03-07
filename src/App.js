import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';
import { useState, useEffect } from "react";

function App() { // whenever any state has changed, this function will recalled

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); 
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(()=> { // it it an asynchronous function
    
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
        
    const newItems = items.map(item => 
        item.id === id
            ? {...item, check : !item.check}
            : item
    );

    setItems(newItems);
  }

  const handleDelete = (id) => {
      
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    
    addItem(newItem);
    setNewItem('');
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = { id, check: false, item};

    const listItem = [...items, myNewItem];
    setItems(listItem);
  }
  
  return (
    <div className="App">
      <Header 
        title="Your Groceries List"
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}


export default App;
