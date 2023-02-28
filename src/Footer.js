const Footer = () => {
    const today = new Date();
    const footerStyle = {
      backgroundColor : "#353535",
      color : "#fff"
    };

  return (
    
    <footer style = {footerStyle}>

        <p>
            Copyright &copy; {today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer