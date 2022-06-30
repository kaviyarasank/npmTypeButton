# TypeScript Supported Button
# Usage 

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

## Available Props

1.height

2.width

3.name

4.borderradius

5.onClick

6.testid 
