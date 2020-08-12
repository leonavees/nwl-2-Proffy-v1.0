import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
    padding: 40px;
    background-color: #8257e5;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const BackButtonIcon = styled.Image.attrs({
    resizeMode: 'contain',
})``;

export const LogoImg = styled.Image.attrs({
    resizeMode: 'contain',
})``;

export const Title = styled.Text`
    font-family: 'Archivo-Bold';
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    max-width: 160px;
    margin: 40px 0;
`;
