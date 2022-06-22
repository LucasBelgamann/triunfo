import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { name, data, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
        <textarea
          data-testid={ data }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
