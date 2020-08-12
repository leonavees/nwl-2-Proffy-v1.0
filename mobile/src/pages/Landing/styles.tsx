import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const Button = styled(RectButton)`
    height: 150px;
    width: 48%;
    background-color: #333;
    border-radius: 8px;
    padding: 24px;
    justify-content: space-between;
`;

const ButtonText = styled.Text`
    font-family: 'Archivo-Bold';
    color: #fff;
    font-size: 20px;
`;

export const Container = styled.View`
    background-color: #8257e5;
    flex: 1;
    justify-content: center;
    padding: 40px;
`;

export const LandingImg = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 100%;
`;

export const Title = styled.Text`
    color: #fff;
    font-family: 'Poppins-Regular';
    font-size: 20px;
    line-height: 30px;
    margin-top: 80px;
`;

export const TitleBold = styled.Text`
    font-family: 'Poppins-SemiBold';
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;
`;

export const StudyButton = styled(Button)`
    background-color: #9871f5;
`;

export const StudyIcon = styled.Image``;

export const StudyButtonText = styled(ButtonText)``;

export const GiveClassButton = styled(Button)`
    background-color: #04d361;
`;

export const ClassIcon = styled.Image``;

export const GiveClassButtonText = styled(ButtonText)``;

export const TotalConnections = styled.Text`
    font-family: 'Poppins-Regular';
    color: #d4c2ff;
    font-size: 12px;
    line-height: 20px;
    max-width: 140px;
    margin-top: 40px;
`;

export const HeartIcon = styled.Image``;
