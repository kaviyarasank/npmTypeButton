import './App.css';
import Button from './component/Button';

function App() {
  const handleClick=()=>{
    alert("hello")
  }
  return (
    <div className="App">
      <Button width="500px" height="60px" name="button" borderRadius="15px" onClick={handleClick}/>
    </div>
  );
}

export default App;
