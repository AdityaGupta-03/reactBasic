import logo from './logo.svg';

//  To style the app.jsx: App.css is used
import './App.css';

function App() {
  // Only 1 Tag is returned by the React
  return (
    // This is the react Fragment to return multiple things as a single container
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Coffee with Addy
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
