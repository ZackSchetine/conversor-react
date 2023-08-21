import * as React from 'react';
import './ConvVelocidade.css';

export default function Display(props) {
    return (
        <div>
            <h3>{props.selectedOption}</h3>
            <input
                placeholder='Informe o valor'
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button type="button" onClick={props.handleConversion}>Converter</button>
            {props.conversionResult && (
                <span className='custom-styled-span'>{props.conversionResult}</span>
            )}
        </div>
    );
}