import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  render() {
    const { name, data, type, value, onChange } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
          <input
            type={ type }
            data-testid={ data }
            value={ value }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="segundoAtributo">
          {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
          <input
            type={ type }
            data-testid={ data }
            value={ value }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="terceiroAtributo">
          {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
          <input
            type={ type }
            data-testid={ data }
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

Number.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Number;
