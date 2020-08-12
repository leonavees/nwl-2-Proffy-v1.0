import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<Props> = ({ label, name, ...rest }) => {
    return (
        <InputBlock>
            <label htmlFor={name}>{label}</label>
            <input {...rest} />
        </InputBlock>
    );
};

export default Input;
