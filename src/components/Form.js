import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import TextArea from './TextArea';
import Select from './Select';
import CheckBox from './CheckBox';
import Button from './Button';
import Image from './InputImage';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <h1>Faça a sua carta</h1>
        <div className="cardName">
          <InputText
            placeholder="Digite o nome da sua carta"
            data="name-input"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div className="">
          <TextArea
            data="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div className="cardAttr1">
          <Attr1
            data="attr1-input"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div className="cardAttr2">
          <Attr2
            data="attr2-input"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div className="cardAttr3">
          <Attr3
            data="attr3-input"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div className="cardImage">
          <Image
            data="image-input"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div className="cardRare">
          <Select
            data="rare-input"
            name="cardRare"
            type="select"
            value={ cardRare }
            onChange={ onInputChange }
          />
        </div>
        {!hasTrunfo ? (
          <div>
            <CheckBox
              data="trunfo-input"
              name="cardTrunfo"
              type="checkbox"
              des="Super Trunfo"
              checked={ cardTrunfo }
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          </div>
        ) : (<span>Você já tem um Super Trunfo em seu baralho</span>)}
        <div className="Salvar">
          <Button
            data="save-button"
            name="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
