import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import landingImg from '~/assets/landing.png';
import studyIcon from '~/assets/icons/study.png';
import giveClassesIcon from '~/assets/icons/give-classes.png';
import heartIcon from '~/assets/icons/heart.png';

import api from '~/services/api';

import {
    Container,
    LandingImg,
    Title,
    TitleBold,
    ButtonsContainer,
    StudyButton,
    StudyIcon,
    StudyButtonText,
    GiveClassButton,
    ClassIcon,
    GiveClassButtonText,
    TotalConnections,
    HeartIcon,
} from './styles';

const Landing: React.FC = () => {
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        async function loadConnections() {
            const { data } = await api.get('/connections');

            setTotalConnections(data.total);
        }

        loadConnections();
    }, []);

    return (
        <Container>
            <LandingImg source={landingImg} />

            <Title>
                Seja bem-vindo{'\n'} <TitleBold>O que deseja fazer?</TitleBold>
            </Title>

            <ButtonsContainer>
                <StudyButton onPress={() => navigate('Study')}>
                    <StudyIcon source={studyIcon} />
                    <StudyButtonText>Estudar</StudyButtonText>
                </StudyButton>
                <GiveClassButton onPress={() => navigate('GiveClasses')}>
                    <ClassIcon source={giveClassesIcon} />
                    <GiveClassButtonText>Dar aulas</GiveClassButtonText>
                </GiveClassButton>
            </ButtonsContainer>

            <TotalConnections>
                Total de {totalConnections} conexões realizadas{' '}
                <HeartIcon source={heartIcon} />
            </TotalConnections>
        </Container>
    );
};

export default Landing;
