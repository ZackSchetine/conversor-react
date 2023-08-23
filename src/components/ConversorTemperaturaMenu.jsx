import * as React from 'react';
import DropDown from './DropDownButton';
import ConversorDisplay from './ConversorDisplay';
import { ValidarNumero } from './Validacao';

const itemList = [
  'Celsius para Fahrenheit',
  'Fahrenheit para Celsius',
  '',
  'Celsius para Kelvin',
  'Kelvin para Celsius',
];

export default function ConvTemperatura() {
  const [selectedOption, setSelectedOption] = React.useState(itemList[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [conversionResult, setConversionResult] = React.useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setInputValue('');
    setConversionResult('');
  };

  const handleConversion = () => {
    switch (selectedOption) {
      case itemList[0]:
        if (ValidarNumero(inputValue)) {
          const celsiusToFahrenheit = (parseFloat(inputValue) * 9 / 5) + 32;
          setConversionResult(celsiusToFahrenheit.toFixed(2));
        }
        break;
      case itemList[1]:
        if (ValidarNumero(inputValue)) {
          const fahrenheitToCelsius = (parseFloat(inputValue) - 32) * 5 / 9;
          setConversionResult(fahrenheitToCelsius.toFixed(2));
        }
        break;
      case itemList[3]:
        if (ValidarNumero(inputValue)) {
          const celsiusToKelvin = parseFloat(inputValue) + 273.15;
          setConversionResult(celsiusToKelvin.toFixed(2));
        }
        break;
      case itemList[4]:
        if (ValidarNumero(inputValue)) {
          const kelvinToCelsius = parseFloat(inputValue) - 273.15;
          setConversionResult(kelvinToCelsius.toFixed(2));
        }
        break;
      default:
        setConversionResult('');
    }
  };

  return (
    <div>
      <h2>Menu de conversão de temperatura</h2>
      <p>Selecione uma das opções abaixo:</p>
      <DropDown itens={itemList} onSelect={handleOptionSelect} />
      <ConversorDisplay
        selectedOption={selectedOption}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleConversion={handleConversion}
        conversionResult={conversionResult}
      />
    </div>
  );
}