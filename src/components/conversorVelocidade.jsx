import * as React from 'react';
import DropDown from './dropDown';

const itemList = ['km/h para m/s', 'm/s para km/h'];

export default function ConvVelocidade() {
    const num = 10.8;
    const value = 3.6;
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // mexer aqui
    const handleConversion = () => {
        switch (selectedOption) {
            case itemList[0]:
                const kmhParaMs = parseFloat(inputValue) / value;
                setInputValue(kmhParaMs.toFixed(2)); // Exibir o resultado com 2 casas decimais
                break;
            case itemList[1]:
                const msParaKmh = parseFloat(inputValue) * value;
                setInputValue(msParaKmh.toFixed(2)); // Exibir o resultado com 2 casas decimais
                break;
            default:
                setInputValue('');
        }
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case itemList[0]:
                return (
                    <div>
                        <h3> km/h -- m/s </h3>
                        <input
                            placeholder='Informe o valor'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="button" onClick={handleConversion}>Converter</button>
                        <span style={{
                            display: 'inline-block',
                            border: '1px solid #ccc',
                            marginTop: '30px',
                            padding: '5px',
                            borderRadius: '4px',
                            backgroundColor: '#f9f9f9',
                            color: '#333',
                            cursor: 'default'
                        }}>{inputValue}</span>
                    </div>
                );
            case itemList[1]:
                return (
                    <div>
                        <h3> m/s -- km/h </h3>
                        <br />
                        <input
                            placeholder='Informe o valor'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="button" onClick={handleConversion}>Converter</button>
                        <span style={{
                            display: 'inline-block',
                            border: '1px solid #ccc',
                            marginTop: '30px',
                            padding: '5px',
                            borderRadius: '4px',
                            backgroundColor: '#f9f9f9',
                            color: '#333',
                            cursor: 'default'
                        }}>{inputValue}</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Menu de conversão de velocidade</h2>
            <p>Selecione uma das opções abaixo:</p>
            <DropDown itens={itemList} onSelect={handleOptionSelect} />
            {renderSelectedComponent()}
        </div>
    )
}
