import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, data, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}: `}
        <select data-testid={ data } name={ name } value={ value } onChange={ onChange }>
          <option name={ name }>normal</option>
          <option name={ name }>raro</option>
          <option name={ name }>muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
