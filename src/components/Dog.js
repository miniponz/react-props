import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight ? weight : 'unknown' }</dd>
    </dl>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string,
};

export default Dog;
