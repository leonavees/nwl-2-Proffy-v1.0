import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { GlobalContainer } from '~/styles/global';

export const Container = styled(GlobalContainer)``;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    > img {
        height: 10rem;
    }

    > h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.9rem;
    }
`;

export const LandingImg = styled.img`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
`;

const Button = styled(Link)`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background 0.5s;

    &:first-child {
        margin-right: 1.6rem;
    }

    > img {
        width: 4rem;
        margin-right: 1.4rem;
    }
`;

export const StudyButton = styled(Button)`
    background: var(--color-primary-lighter);

    &:hover {
        background: var(--color-primary-light);
    }
`;

export const GiveClassesButton = styled(Button)`
    background: var(--color-secondary);

    &:hover {
        background: var(--color-secondary-dark);
    }
`;

export const TotalConnections = styled.span`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        margin-left: 0.8rem;
    }
`;

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);

    @media (min-width: 1100px) {
        ${Container} {
            max-width: 1100px;

            display: grid;
            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-areas:
                'logo hero hero'
                'buttons buttons total';
        }

        ${LogoContainer} {
            grid-area: logo;
            align-self: center;
            text-align: left;
            margin: 0;

            > h2 {
                text-align: initial;
                font-size: 3.6rem;
            }

            > img {
                height: 100%;
            }
        }

        ${LandingImg} {
            grid-area: hero;
            justify-self: end;
        }

        ${ButtonsContainer} {
            grid-area: buttons;
            justify-content: flex-start;

            > a {
                font-size: 2.4rem;
            }
        }

        ${TotalConnections} {
            grid-area: total;
            justify-self: end;
        }
    }
`;
