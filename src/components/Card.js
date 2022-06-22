import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <div className="cardBack">
          <div className="nameCard">
            <p data-testid="name-card" className="name-card">
              {cardName}
            </p>
          </div>
          <div className="image-card">
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <div className="description-card">
            <p data-testid="description-card">{cardDescription}</p>
          </div>
          <div className="attr-card">
            <p data-testid="attr1-card">
              Força...............
              {cardAttr1}
            </p>
            <p data-testid="attr2-card">
              Poder...............
              {cardAttr2}
            </p>
            <p data-testid="attr3-card">
              HP..................
              {cardAttr3}
            </p>
            <p data-testid="rare-card">{cardRare}</p>
          </div>
          {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
