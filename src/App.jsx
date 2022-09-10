import './App.css';

const App = () => {
  const outside = true;
  const city = "Sarajevo";

  return (
    <div className="App">
      <h1>Hello {outside ? city : 'Istanbul' } !</h1>
      { !outside ? (<h2>It's sunny</h2>) : (<></>) }
    </div>
  )
}

export default App;