import * as React from 'react';
import DropDown from './dropDown';

const itemList = ['Celsius para Fahrenheit', 'Celsius para Kelvin'];

export default function ConvTemperatura() {
    const num = 20;
    let result = 0;
    const [selectedOption, setSelectedOption] = React.useState(null);

    console.log(selectedOption);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case itemList[0]:

                result = ((num * 9 / 5) + 32);
                return (
                    <div>
                        <h3> celsius -- fahrenheit </h3>
                        <br />
                        <span>{result}</span>
                    </div >
                );
            case itemList[1]:
                result = (num + 273.15);
                return (
                    <div>
                        <h3> celsius -- kelvin </h3>
                        <br />
                        <span>{result}</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Menu de conversão de temperatura</h2>
            <p>Selecione uma das opções abaixo:</p>
            <DropDown itens={itemList} onSelect={handleOptionSelect} />
            {renderSelectedComponent()}
        </div>
    )
}