import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch(props.inputType) {
        case('input'):
            input = <input {...props}/>;
            break;
        case('textarea'):
            inputElement = <textarea {...props}/>;
            break;
        default:
            inputElement = <input {...props}/>;
    }

    return(
        <div>
            <label>{props.label}</label>

        </div>
    );
};

export default input;