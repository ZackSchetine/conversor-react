import * as React from 'react';

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
                <span style={{
                    display: 'inline-block',
                    border: '1px solid #ccc',
                    marginTop: '30px',
                    padding: '5px',
                    borderRadius: '4px',
                    backgroundColor: '#f9f9f9',
                    color: '#333',
                    cursor: 'default'
                }}>{props.conversionResult}</span>
            )}
        </div>
    );
}