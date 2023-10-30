import React  from 'react';

function ClickCounter(props) {
    
  return (
    <>
    <button onClick={props.increment}>Click Me {props.count} times</button>
    </>
  )
}

export default ClickCounter