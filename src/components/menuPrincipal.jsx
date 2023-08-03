import * as React from 'react';
import './menu.css';

import ConvTemperatura from './ConversorTemperatura';
import ConvVelocidade from './ConversorVelocidade';
import DropDown from './DropDown';

const itemList = ['Conversor de Velocidade', 'Conversor de Temperatura'];

export default function MenuPrincipal() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  console.log(selectedOption);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case itemList[0]:
        return <ConvVelocidade />;
      case itemList[1]:
        return <ConvTemperatura />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Conversor de velocidade e temperatura</h1>
      <p>Selecione uma das opções abaixo:</p>
      <DropDown itens={itemList} onSelect={handleOptionSelect} />
      {renderSelectedComponent()}
    </div>
  );
}
