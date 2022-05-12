import React, { useRef } from 'react';
import './training.css';

function TrainingInput({ title, placeholder }) {

  const lineRef = useRef()

  const coloredLine = () => {
      lineRef.current.style.backgroundColor = "#65C0CE"    
  }

  const blackLine = () =>{
    lineRef.current.style.backgroundColor = "black"
  }

  return (
    <div >
      <h3 className='input-title'>{title}</h3>
      <input className='input-field' placeholder={placeholder} style={{ border: "none" }} onClick={coloredLine} onPointerLeave={blackLine}></input>
      <div className='input-line'  ref={lineRef}></div>
    </div>
  );
}

export default TrainingInput
