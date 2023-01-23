import './App.css';


const App = () => {
  console.log("I am here")
  console.log(process.env.REACT_APP_BACKEND_API)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Momi Foundation Coding</h1>
        <h1>Coming Soon</h1>
      </header>
    </div>
  );
}

export default App;
