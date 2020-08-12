import React, { useState, useEffect } from 'react';

import logoImg from '~/assets/logo.svg';
import landingImg from '~/assets/landing.svg';

import studyIcon from '~/assets/icons/study.svg';
import giveClassesIcon from '~/assets/icons/give-classes.svg';
import purpleHeartIcon from '~/assets/icons/purple-heart.svg';

import api from '~/services/api';

import {
    PageLanding,
    Container,
    LogoContainer,
    LandingImg,
    ButtonsContainer,
    StudyButton,
    GiveClassesButton,
    TotalConnections,
} from './styles';

interface TotalConnectionsResponse {
    total: number;
}

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        async function loadConnections() {
            try {
                const { total } = (
                    await api.get<TotalConnectionsResponse>('/connections')
                ).data;

                setTotalConnections(total);
            } catch (err) {
                alert('Erro ao obter total de conexões');
            }
        }

        loadConnections();
    }, []);
    return (
        <PageLanding>
            <Container>
                <LogoContainer>
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </LogoContainer>

                <LandingImg src={landingImg} alt="Plataforma de estudos" />

                <ButtonsContainer>
                    <StudyButton to="/study">
                        <img src={studyIcon} alt="Estudar" /> Estudar
                    </StudyButton>
                    <GiveClassesButton to="give-classes">
                        <img src={giveClassesIcon} alt="Estudar" /> Dar aulas
                    </GiveClassesButton>
                </ButtonsContainer>

                <TotalConnections>
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </TotalConnections>
            </Container>
        </PageLanding>
    );
};

export default Landing;
