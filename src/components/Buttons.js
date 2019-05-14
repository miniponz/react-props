import React from 'react';
import styles from './colorPicker.css';
import PropTypes from 'prop-types';


function Buttons({ colors }){
  let textStyle = {};
  const colorButtons = colors.map((color) => {
    const clickHandler = event => {
      event.preventDefault();
      //eslint-disable-next-line
        console.log(color);
    };
    textStyle = { color: color };
    return <button id={color} key={color} style={styles.button} onClick={clickHandler}><span style={textStyle}>{color}</span></button>;
  });
  return colorButtons;
}

Buttons.propTypes = {
  title: PropTypes.string.isRequired
};

export default Buttons;
