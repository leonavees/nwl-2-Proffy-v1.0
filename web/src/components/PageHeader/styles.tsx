import styled from 'styled-components';

export const TopBarContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-text-in-primary);

    > a {
        height: 3.2rem;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
        }
    }

    > img {
        height: 1.6rem;
    }
`;

export const HeaderContent = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto 6.4rem;

    > strong {
        font: 700 3.6rem Archivo;
        line-height: 4.2rem;
        color: var(--color-title-in-primary);
    }

    > p {
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
        margin-top: 2.4rem;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    @media (min-width: 700px) {
        height: 340px;

        ${TopBarContainer} {
            max-width: 1100px;
        }

        ${HeaderContent} {
            flex: 1;
            max-width: 740px;
            margin: 0 auto;
            padding-bottom: 48px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            > strong {
                max-width: 350px;
            }
        }
    }
`;