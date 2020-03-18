import React from 'react';


const { useEffect, useState, useRef } = React

let randomArr = [1,1,1];
randomArr = randomArr.map(arg =>{return parseInt(arg*((Math.random()*100/3)%10))} );
console.log('RANDOMARR',randomArr);
const randomNum = Math.floor(Math.random() * 10) + 1;
//const [randomObjWeight, setRandomObjWeight] = useState([...randomArr]);

const  renderShape= ()=>{

switch (randomNum%4) {
case 3:
    return "triangle";
case 2:
    return "oval";
case 1:
    return "rectangle";
default:
    return "rectangle";
}
};

//element.current.clientHeight

//const elemRender = renderShape();
const Falling = (element) => {
    const [fromTop, setFromTop] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        console.log(element.current.style.top = fromTop);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
}
  




const FallingObj = ()=>{

    const element = useRef();
    Falling(element);
 

      
    return (
        <>
           <div className={ renderShape()} ref={element}>{randomArr[1]}</div>
        </>
    );

}//Fall

export default FallingObj;