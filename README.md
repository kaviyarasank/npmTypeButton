# TypeScript Supported Button
# Usage 

import Button from "type-button/dist/Button";

import './App.css';

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


## DEMO 

["https://62bd3a794828364157fee48d--dainty-marshmallow-6d612c.netlify.app/"]
## Available Props

1.height

2.width

3.name

4.borderradius

5.onClick

6.testid 
