import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'

// App component is parent of all the other component in the component tree
function App() {

  const name = "Aditya Dey";
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


export default App;
