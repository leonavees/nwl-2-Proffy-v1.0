import styled, { css } from 'styled-components';

import { InputBlock } from '~/components/Input/styles';
import { TextareaBlock } from '~/components/Textarea/styles';
import { SelectBlock } from '~/components/Select/styles';

import { GlobalContainer } from '~/styles/global';

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export const Main = styled.main`
    margin: -3.2rem auto 3.2rem;
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    padding-top: 6.4rem;
    overflow: hidden;
    border-radius: 0.8rem;

    label {
        color: var(--color-text-component);
    }

    fieldset {
        border: 0;
        padding: 0 2.4rem;

        > legend {
            font: 700 2.4rem Archivo;
            color: var(--color-text-title);
            margin-bottom: 2.4rem;

            width: 100%;
            padding-bottom: 1.6rem;
            border-bottom: 1px solid var(--color-line-in-white);

            display: flex;
            align-items: center;
            justify-content: space-between;

            > button {
                background: none;
                border: 0;
                color: var(--color-primary);
                font: 700 1.6rem Archivo;
                cursor: pointer;
                transition: color 0.2s;

                &:hover {
                    color: var(--color-primary-dark);
                }
            }

            ${() =>
                isFirefox &&
                css`
                    > button {
                        float: right;
                    }
                `}
        }

        > ${InputBlock} + ${TextareaBlock}, > ${SelectBlock} + ${InputBlock} {
            margin-top: 2.4rem;
        }
    }

    fieldset + fieldset {
        margin-top: 6.4rem;
    }

    footer {
        padding: 4rem 2.4rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;

        > p {
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.4rem;
            line-height: 2.4rem;
            color: var(--color-text-component);

            > img {
                margin-right: 2rem;
            }
        }

        > button {
            width: 100%;
            height: 5.6rem;
            background: var(--color-secondary);
            color: var(--color-button-text);
            border: 0;
            border-radius: 0.8rem;
            font: 700 1.6rem Archivo;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            transition: background 0.2s;
            margin-top: 3.2rem;
            cursor: pointer;

            &:hover {
                background: var(--color-secondary-dark);
            }
        }
    }
`;

export const ScheduleItem = styled.div``;

export const Container = styled(GlobalContainer)`
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px) {
        max-width: 100vw;

        ${Main} {
            fieldset {
                padding: 0 6.4rem;
            }

            footer {
                display: flex;
                align-items: center;
                justify-content: space-between;

                padding: 4rem 6.4rem;

                > p {
                    justify-content: space-between;
                }

                > button {
                    width: 20rem;
                    margin-top: 0;
                }
            }
        }

        ${ScheduleItem} {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            column-gap: 1.6rem;

            ${InputBlock} {
                margin-top: 0;
            }
        }
    }
`;
