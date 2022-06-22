import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
  render() {
    const {
      name,
      data,
      type,
      des,
      onInputChange,
      cardTrunfo,
      onChange,
      checked,
    } = this.props;
    return (
      <label htmlFor={ name }>
        {`${des.charAt(0).toUpperCase() + des.slice(1)}: `}
        <input
          type={ type }
          data-testid={ data }
          onChange={ onChange }
          name={ name }
          onInputChange={ onInputChange }
          cardTrunfo={ cardTrunfo }
          checked={ checked }
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  des: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
