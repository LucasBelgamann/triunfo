import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { name, data, type, onChange, value } = this.props;
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

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
