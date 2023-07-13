import React from 'react';

export const Button = (props) => {
  const { color, title, rating  } = props;

  const buttonStyle = {
    background: color,
  };

  return (
 <span className='container'>  
      <span>
        <h2 className='animeTitle'>{title}</h2>        
      </span>
   <span className='buttonsContainer'>
      <button className='ratingButton' style={buttonStyle}>{rating + "/5 start"}</button>
      <button className='deleteButton'>DELETE</button>
      <button className='editButton'>EDIT</button>  
    </span>  
 </span>


  );
}

export default Button;