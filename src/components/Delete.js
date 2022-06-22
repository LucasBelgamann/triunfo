import React from 'react';
import PropTypes from 'prop-types';

class Dell extends React.Component {
  render() {
    const { cardName, data, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid={ data }
        cardName={ cardName }
        onClick={ onClick }
      >
        Excluir

      </button>
    );
  }
}

Dell.propTypes = {
  cardName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Dell;
