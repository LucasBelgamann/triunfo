import React from 'react';
import PropTypes from 'prop-types';

class Attr3 extends React.Component {
  render() {
    const { name, data, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
        <input
          type={ type }
          data-testid={ data }
          value={ value }
          onChange={ onChange }
          name={ name }
        />
      </label>
    );
  }
}

Attr3.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr3;
