import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const Label = styled.Text`
    color: #d4c2ff;
    font-family: 'Poppins-Regular';
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: '#c1bccc',
})`
    height: 54px;
    background-color: #fff;
    border-radius: 8px;
    justify-content: center;
    padding: 16px;
    margin-top: 4px;
    margin-bottom: 16px;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f7;
`;

export const Teachers = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
})`
    margin-top: -40px;
`;

export const SearchForm = styled.View`
    margin-bottom: 24px;
`;

export const ClassLabel = styled(Label)``;

export const ClassInput = styled(Input)``;

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputBlock = styled.View`
    width: 48%;
`;

export const WeekDayLabel = styled(Label)``;

export const WeekDayInput = styled(Input)``;

export const TimeLabel = styled(Label)``;

export const TimeInput = styled(Input)``;

export const SubmitButton = styled(RectButton)`
    background-color: #04d361;
    flex-direction: row;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-family: 'Archivo-Bold';
    font-size: 16px;
`;
