import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, data, onClick, disabled } = this.props;
    return (
      <button
        type="submit"
        data-testid={ data }
        name={ name }
        onClick={ onClick }
        disabled={ disabled }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
