import React, { useState } from 'react';
import './GroupButton.css';


const GroupButton = (props) => {
  const [newIndex, setNewIndex] = useState(0);
  const handleClick = (title, index) => {
    setNewIndex(index);
    props.handleClick(title)
  }

  return (
  <section style={{height: props.height}} className={`group-button-container d-flex justfy-content-around justify-content-around ${props.wrapperClass}`}>
    {props.titles.map((title, index) => 
      <span 
        className={`c-pointer m-1 ${newIndex === index && 'active'} ${props.buttonClass}`} 
        
      >
        {title}
      </span>
    )}
  </section>
)};

export default GroupButton;