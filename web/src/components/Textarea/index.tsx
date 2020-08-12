import React, { TextareaHTMLAttributes } from 'react';

import { TextareaBlock } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<Props> = ({ label, name, ...rest }) => {
    return (
        <TextareaBlock>
            <label htmlFor={name}>{label}</label>
            <textarea {...rest} />
        </TextareaBlock>
    );
};

export default Textarea;
