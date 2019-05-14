import React from 'react';
import PropTypes from 'prop-types';
import styles from './colorPicker.css';


function ColorPicker({ title }){
  const clickHandler = event => {
    event.preventDefault();
    //eslint-disable-next-line
    console.log(title);
  };
  
  const textStyle = {
    color: title
  };
  return (
    <button style={styles.button} onClick={clickHandler}><span style={textStyle}>{title}</span></button>
  );
}

ColorPicker.propTypes = {
  title: PropTypes.string.isRequired
};

export default ColorPicker;

