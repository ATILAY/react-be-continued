import React from 'react';
import MovingObj from '../MovingObj'
import  FallingObj from '../FallingObj'
const { useEffect, useState, useRef } = React

const TT =()=>{
    const ttRef = useRef();
    const [rotation, setRotation] = useState(0);
    const handleRotation = ()=>{
        console.log("rotation Active");
        setRotation(rotation -1);
      }//handleRightLeft
    return (
        
        <div
        onClick={() => {
            console.log("style_TTdiv ",ttRef.current.style);
         ttRef.current.style.webkitTransform = `rotate(${rotation}deg)`;
          
        }}
        ref={ttRef} className="tt">
            {/* <FallingObj/> */}
            <MovingObj/>
        </div>
        
    )
}//TT

export default TT;