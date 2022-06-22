import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Dell from './components/Delete';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deckCard: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.setState(
      ({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      }) => {
        const attr1 = Number(cardAttr1);
        const attr2 = Number(cardAttr2);
        const attr3 = Number(cardAttr3);

        const max = 90;
        const soma = 210;
        const min = 0;

        if (
          cardName.length > 0
          && cardDescription.length > 0
          && cardImage.length > 0
          && cardRare.length > 0
          && attr1 <= max
          && attr1 >= min
          && attr2 <= max
          && attr2 >= min
          && attr3 <= max
          && attr3 >= min
          && attr1 + attr2 + attr3 <= soma
        ) {
          return { isSaveButtonDisabled: false };
        }
        return { isSaveButtonDisabled: true };
      },
    );
  };

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    this.setState(
      ({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        deckCard,
      }) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        deckCard: [
          ...deckCard,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
      }),
    );
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  handleDelete = (name) => {
    const { deckCard } = this.state;
    const novo = deckCard.filter((item) => item.cardName !== name);
    this.setState(() => ({ deckCard: novo }));
    if (deckCard.every((card) => !card.cardTrunfo));
    this.setState(() => ({
      hasTrunfo: false,
    }));
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      deckCard,
    } = this.state;
    return (
      <div className="mae">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <div className="cardSide">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          {deckCard.map((item, index) => (
            <>
              <Card
                key={ index }
                cardName={ item.cardName }
                cardDescription={ item.cardDescription }
                cardAttr1={ item.cardAttr1 }
                cardAttr2={ item.cardAttr2 }
                cardAttr3={ item.cardAttr3 }
                cardImage={ item.cardImage }
                cardRare={ item.cardRare }
                cardTrunfo={ item.cardTrunfo }
              />
              <Dell
                data-testid="delete-button"
                onClick={ () => this.handleDelete(item.cardName) }
                cardName={ item.cardName }
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
