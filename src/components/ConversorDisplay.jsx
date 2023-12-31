import * as React from 'react';
import './convVelocidade.css';

export default function Display(props) {
    return (
        <div className='teste'>
            <h3>{props.selectedOption}</h3>
            <input
                placeholder='Informe o valor'
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button className='converter-button' type="button" onClick={props.handleConversion}>Converter</button>
            <br />
            {props.conversionResult && (
                <span className='custom-styled-span'>{props.conversionResult}</span>
            )}
        </div>
    );
}