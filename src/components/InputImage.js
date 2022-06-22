import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { name, data, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
        <input
          type={ type }
          data-testid={ data }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Image;
