import React, { SelectHTMLAttributes } from 'react';

import { SelectBlock } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: {
        value: string;
        label: string;
    }[];
}

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
    return (
        <SelectBlock>
            <label htmlFor={name}>{label}</label>
            <select value="" {...rest}>
                <option value="" disabled hidden>
                    Selecione uma opção
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </SelectBlock>
    );
};

export default Select;
