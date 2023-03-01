import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"

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
const Content = () => {

    const [items, setItems] = useState(myItems);    
    
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
        
        const newItems = items.filter(item => item.id != id);
        setItems(newItems);
        localStorage.setItem("localStorage", JSON.stringify(newItems));
    }

    return (
        
        <main>
            {items.length ? (
            <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={()=> handleCheck(item.id)}
                                checked={item.check}
                            />
                            <label 
                                style={ (item.check) ? {textDecoration : "line-through"} : null}
                                onClick={()=> handleCheck(item.id)}>
                                    {item.item}
                            </label>
                            <FaTrashAlt 
                                onClick={()=> handleDelete(item.id)}
                                role="button"
                                tabIndex="0" 
                            />
                        </li>
                    ))}
                </ul>
            ): (
                <p style={{ marginTop: "2rem", textAlign: "center"}}>Your list is Empty</p>
            )}
        </main>
    )
}

export default Content;