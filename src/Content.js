import ListItem from "./ListItem";

const Content = ({items, handleCheck, handleDelete}) => {  

    return (
        
        <>
            {items.length ? (
                <ListItem 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ): (
                <p style={{ marginTop: "2rem", textAlign: "center"}}>Your list is Empty</p>
            )}
        </>
    )
}

export default Content;