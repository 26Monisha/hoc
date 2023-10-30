import React ,{useState} from "react";


const UpdateComponent = OriginalComponent=>{

  function NewComponent(){

    const [count,setCount] =useState(0);

    function increment(){
        setCount(count+1);
    }

    return <OriginalComponent count={count} increment={increment} />

  }
  return NewComponent;

}

export default UpdateComponent;