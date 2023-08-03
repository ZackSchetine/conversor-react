import * as React from 'react';
import DropDown from './DropDown';
import ConversorDisplay from './ConversorDisplay';

const itemList = ['km/h para m/s', 'm/s para km/h'];
const SPEED_CONVERSION_FACTOR = 3.6;

export default function ConvVelocidade() {
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
                const kmhParaMs = parseFloat(inputValue) / SPEED_CONVERSION_FACTOR;
                setConversionResult(kmhParaMs.toFixed(2)); // Exibir o resultado com 2 casas decimais
                break;
            case itemList[1]:
                const msParaKmh = parseFloat(inputValue) * SPEED_CONVERSION_FACTOR;
                setConversionResult(msParaKmh.toFixed(2)); // Exibir o resultado com 2 casas decimais
                break;
            default:
                setConversionResult('');
        }
    };

    return (
        <div>
            <h2>Menu de conversão de velocidade</h2>
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
    )
}
