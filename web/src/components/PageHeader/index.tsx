import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '~/assets/logo.svg';
import backIcon from '~/assets/icons/back.svg';

import { Header, TopBarContainer, HeaderContent } from './styles';

interface Props {
    title: string;
    description?: string;
}

const PageHeader: React.FC<Props> = ({ title, description, children }) => {
    return (
        <Header>
            <TopBarContainer>
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </TopBarContainer>

            <HeaderContent>
                <strong>{title}</strong>
                {description && <p>{description}</p>}
                {children}
            </HeaderContent>
        </Header>
    );
};

export default PageHeader;
