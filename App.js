import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import UpdateCounter from './UpdateCounter';

const UpdatedClickCounter = UpdateCounter(ClickCounter);
const UpdatedHoverCounter = UpdateCounter(HoverCounter);


function App() {
  return (
    <div className="App">
      <UpdatedClickCounter/>
      <UpdatedHoverCounter/>
    </div>
  );
}

export default App;
