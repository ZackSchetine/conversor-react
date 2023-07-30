import * as React from 'react';
import DropDown from './dropDown';

const itemList = ['Celsius para Fahrenheit', 'Celsius para Kelvin'];

export default function ConvTemperatura() {
    const num = 20;
    const [selectedOption, setSelectedOption] = React.useState(null);
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
                const celsiusToFahrenheit = (parseFloat(inputValue) * 9 / 5) + 32;
                setConversionResult(celsiusToFahrenheit.toFixed(2));
                break;
            case itemList[1]:
                const celsiusToKelvin = parseFloat(inputValue) + 273.15;
                setConversionResult(celsiusToKelvin.toFixed(2));
                break;
            default:
                setConversionResult('');
        }
    };

    const renderSelectedComponent = () => {
        return (
            <div>
                {selectedOption && (
                    <>
                        <h3>{selectedOption}</h3>
                        <input
                            placeholder='Informe o valor em Celsius'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="button" onClick={handleConversion}>Converter</button>
                        {conversionResult && (
                            <span style={{
                                display: 'inline-block',
                                border: '1px solid #ccc',
                                marginTop: '30px',
                                padding: '5px',
                                borderRadius: '4px',
                                backgroundColor: '#f9f9f9',
                                color: '#333',
                                cursor: 'default'
                            }}>{conversionResult}</span>
                        )}
                    </>
                )}
            </div>
        );
    };

    return (
        <div>
            <h2>Menu de conversão de temperatura</h2>
            <p>Selecione uma das opções abaixo:</p>
            <DropDown itens={itemList} onSelect={handleOptionSelect} />
            {renderSelectedComponent()}
        </div>
    );
}
