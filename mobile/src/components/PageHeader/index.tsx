import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '~/assets/icons/back.png';
import logoImg from '~/assets/logo.png';

import {
    Container,
    TopBar,
    Header,
    BackButton,
    BackButtonIcon,
    LogoImg,
    Title,
} from './styles';

interface Props {
    title: string;
    filterButton?: ReactNode;
}

const PageHeader: React.FC<Props> = ({ title, filterButton, children }) => {
    const { navigate } = useNavigation();
    return (
        <Container behavior="position">
            <TopBar>
                <BackButton onPress={() => navigate('Landing')}>
                    <BackButtonIcon source={backIcon} />
                </BackButton>

                <LogoImg source={logoImg} />
            </TopBar>

            <Header>
                <Title>{title}</Title>

                {filterButton}
            </Header>

            {children}
        </Container>
    );
};

export default PageHeader;
