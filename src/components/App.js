import React from 'react';
import Display from "./Display";
import Buttonlayout from "./Buttonlayout";

const App = props =>  {
  return (
    <div className="App">
      <Display value = "25"/>
      <Buttonlayout />
    </div>
  );
}

export default App;
