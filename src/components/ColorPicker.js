import React from 'react';
import PropTypes from 'prop-types';

function Button({ title }){
  const buttonStyle = {
    color: title,
    height: '50px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: 'black'
  };
  const clickHandler = event => {
    event.preventDefault();
    //eslint-disable-next-line
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
