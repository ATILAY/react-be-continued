// useEffect(() => {
//     const interval = setInterval(() => {
//     console.log('This will run every second!');
//     }, 1000);
//     return () => clearInterval(interval);
//     }, []);
import React from 'react';
import TT from "../TT";
import  FallingObj from '../FallingObj'

const { useEffect, useState, useRef } = React

const TTContainer = () =>{
    return (
        <div className="ttContainer">
            <FallingObj/>
            <TT/>
        </div>
    )
}//TTCon

export default TTContainer;