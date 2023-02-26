import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Aditya Dey";
  const handleNameChange = ()=> {

    const name = ['Bob', 'Kevin', 'Aditya'];
    const random = Math.floor(Math.random()*3);

    return name[random];
  }

  return ( // returns jsx : javascript in XML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to see what i change.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <p>
          Hello {handleNameChange()}!
        </p>
        
        <p>{name}</p> {/* this will act as a javascript variable*/}
        <p>{[1, 2, 3]}</p> {/* this will act as a javascript expression*/}
        <p>[1, 2, 3]</p> {/* this will act as a string*/}

        {/* we can't pass neither a boolean expression nor an object here */}
      </header>
    </div>
  );
}

export default App;
