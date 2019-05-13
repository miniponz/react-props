import React from 'react';
import PropTypes from 'prop-types';


// const name = 'purple';
// const hex = '#800080';
// const rgb = '128,0,128';

function compToHex(rgb) {
  let hex = rgb.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(rgb) {
  const regex = /(\d{1,3})/g;
  const divided = rgb.match(regex);
  let r = parseInt(divided[0]);
  let g = parseInt(divided[1]);
  let b = parseInt(divided[2]);
  return '#' + compToHex(r) + compToHex(g) + compToHex(b);
}




function Color({ name, hex, rgb }) {
  const dlStyle = {
    color: hex
  };
  return (
    <dl style={dlStyle}>
      <dt>Name</dt>
      <dd>{name || hex}</dd>

      <dt>Hex</dt>
      <dd>{hex ? hex : rgbToHex(rgb)}</dd>

      <dt>RGB</dt>
      <dd>{rgb}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
};


export default Color;
