import React from 'react';
import PropTypes from 'prop-types';

function Button({ title }){
  const buttonStyle = {
    color: title,
    height: '50px',
    margin: '5px',
    'border-radius': '5px',
    'background-color': 'black'
  };
  const clickHandler = event => {
    event.preventDefault();
    console.log(title);
  };
  
  return (
    <button style={buttonStyle} onClick={clickHandler}>{title}</button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
