import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';
import { useState, useEffect } from "react";
import apiRequest from './ApiRequest.js';

function App() { 
 
  const API_URL = "  http://localhost:3500/myItems";

  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=> { // it it an asynchronous function
    
    const fetchItems = async ()=> {

      try {

        const responce = await fetch(API_URL);
        if(!responce.ok) throw Error("Did not recive expected data");
        const listItem = await responce.json();

        setItems(listItem);
        setFetchError(null);

      }catch(err) {
        setFetchError(err.message);
      }finally {
        setIsLoading(false);
      }
    }

    setTimeout(()=> {
      fetchItems();
    }, 2000);

  }, []);  

  const handleCheck = async (id) => {
        
    const newItems = items.map(item => 
        item.id === id
            ? {...item, check : !item.check}
            : item
    );

    setItems(newItems);

    const myItem = newItems.filter(item=> item.id === id);
    const updateOptions = {
      method : "PATCH", // will work as PUT
      headers : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify({ check : myItem[0].check})
    };

    const reqUrl = ''+API_URL+'/'+id;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }

  const handleDelete = async (id) => {
      
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);

      const deleteOptions = {
        method : "DELETE"
      }

      const reqUrl = ''+API_URL+'/'+id;
      const result = await apiRequest(reqUrl, deleteOptions);
      if(result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
     
    addItem(newItem); 
    setNewItem('');
  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = { id, check: false, item};

    const listItem = [...items, myNewItem];
    setItems(listItem);

    const postOption = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOption);
    if(result) setFetchError(result);
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
      <main>
        {isLoading && <p style={{textAlign:"center"}}>Loading Items....</p>}
        {fetchError && <p style={{color : "red", textAlign:"center"}}>Error : {fetchError}</p>}
        {!fetchError && !isLoading && <Content 
          items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer length={items.length}/> 
    </div>
  );
}


export default App;
