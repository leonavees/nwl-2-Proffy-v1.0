import styled from 'styled-components';

import { InputBlock } from '~/components/Input/styles';
import { SelectBlock } from '~/components/Select/styles';

import { GlobalContainer } from '~/styles/global';

export const MainList = styled.main`
    margin: 3.2rem auto;
    width: 90%;
`;

export const Container = styled(GlobalContainer)`
    width: 100vw;
    height: 100vh;

    label {
        color: var(--color-text-in-primary);
    }

    form {
        margin-top: 3.2rem;

        > button[type='submit'] {
            width: 100%;
            height: 5.6rem;
            background: var(--color-secondary);
            color: var(--color-button-text);
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            font: 700 1.6rem Archivo;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            transition: background 0.2s;
            margin-top: 3.2rem;

            &:hover {
                background: var(--color-secondary-dark);
            }
        }
    }

    @media (min-width: 700px) {
        max-width: 100%;

        form {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 16px;
            position: absolute;
            bottom: -28px;
        }

        ${SelectBlock} {
            > select {
                padding: 0 1.2rem;
                font: 1.35rem Archivo;
            }
        }

        ${InputBlock}, ${SelectBlock} {
            margin-top: 0;
        }

        ${MainList} {
            padding: 32px 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`;
