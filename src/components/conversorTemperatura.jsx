import * as React from 'react';
import DropDown from './dropDown';

const itemList = ['Celsius para Fahrenheit', 'Celsius para Kelvin'];

export default function convTemperatura() {
    return (
        <div>
            <h2>Menu de conversão de temperatura</h2>
            <p>Selecione uma das opções abaixo:</p>
            <DropDown itens={itemList} />
        </div>
    )
}