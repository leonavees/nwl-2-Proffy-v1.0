import React from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '~/assets/give-classes-background.png';

import {
    Container,
    GiveClassesBgImage,
    Title,
    Description,
    OkButton,
    OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();

    return (
        <Container>
            <GiveClassesBgImage source={giveClassesBgImage}>
                <Title>Quer ser um Proffy?</Title>
                <Description>
                    Para começar, você precisa se cadastrar como professor na
                    nossa plataforma web.
                </Description>
            </GiveClassesBgImage>
            <OkButton onPress={() => goBack()}>
                <OkButtonText>Tudo bem</OkButtonText>
            </OkButton>
        </Container>
    );
};

export default GiveClasses;
