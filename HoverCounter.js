import React  from 'react';

function HoverCounter(props) {
   
  return (
     <>
     <h2 onMouseOver={props.increment}>HoverMe {props.count} time</h2>
     </>
  )
}

export default HoverCounter