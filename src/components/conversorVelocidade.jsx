import * as React from 'react';
import DropDown from './dropDown';

const itemList = ['km/h para m/s', 'm/s para km/h'];

export default function ConvVelocidade() {
    const num = 20;
    const value = 3.6;

    const [selectedOption, setSelectedOption] = React.useState(null);

    console.log(selectedOption);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case itemList[0]:
                const result = num * value;
                return (
                    <div>
                        <h3> km/h -- m/s </h3>
                        <input placeholder='Informe o valor a ser convertido'></input>
                        <button type="button">Converter</button>
                        <span style={{
                            display: 'inline-block',
                            border: '1px solid #ccc',
                            marginTop: '30px',
                            padding: '5px',
                            borderRadius: '4px',
                            backgroundColor: '#f9f9f9',
                            color: '#333',
                            cursor: 'default'
                        }}>{result}</span>
                    </div >
                );
            case itemList[1]:
                return <h3> m/s -- km/h </h3>;
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