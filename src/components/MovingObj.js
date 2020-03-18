import React from 'react';


const { useEffect, useState, useRef } = React

const useKey= (key,cb)=>{
  
  const callbackRef =  useRef(cb);

  useEffect(()=>{
    
    callbackRef.current =cb;
  }); //useE

  useEffect(()=>{
    
    const handleKeyPress = (e)=>{
      console.log("Working");
      //console.log(String.fromCharCode(e.keyCode));
      if(e.code === key){
        //cb(e){}//cb
        callbackRef.current(e);
      }//if
    }//handleK

    document.addEventListener("keydown", handleKeyPress);
    return ()=> document.removeEventListener("keydown", handleKeyPress);
  },[key]); //useEf
    
}//useKey


const MovingObj = () => {
  const [moveHorizontal, setMoveHorizontal] = useState(100);
  const divRef = useRef();
  const handleRight = ()=>{
    console.log("ArrowRight Pressed");
    setMoveHorizontal(moveHorizontal +1);
  }//handleRightLeft
  
  const handleLeft = ()=>{
    console.log("ArrowLeft Pressed");
    setMoveHorizontal(moveHorizontal -1);
  }//handleRightLeft
  useKey("ArrowRight",handleRight);
  useKey("ArrowLeft",handleLeft);
  // useEffect(()=>{
  //   console.log("render"); 
  // },[]);
  const divStyle = {
    color: 'blue',
    left: moveHorizontal
  };
  return(
     
      <div
        style={divStyle}
        ref={divRef}
        className="animate">
          {/* { ()=>divRef.current.style.left=moveHorizontal+'px'} */}
          DIV
       </div>
       
    
  );
}
export default MovingObj;
