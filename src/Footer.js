const Footer = ({length}) => {
    const today = new Date();
    const footerStyle = {
      backgroundColor : "mediumblue",
      color : "#fff"
    };

  return (
    
    <footer style = {footerStyle}>

        <p>
            {/* Copyright &copy; {today.getFullYear()} */}
            {length} List {length <= 1 ? "Item" : "Items"} 
        </p>
    </footer>
  )
}

export default Footer