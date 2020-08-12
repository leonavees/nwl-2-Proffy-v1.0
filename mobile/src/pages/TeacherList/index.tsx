import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { BorderlessButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

import PageHeader from '~/components/PageHeader';
import TeacherItem, { Teacher } from '~/components/TeacherItem';

import api from '~/services/api';

import {
    Container,
    Teachers,
    SearchForm,
    ClassLabel,
    ClassInput,
    InputGroup,
    InputBlock,
    WeekDayLabel,
    WeekDayInput,
    TimeLabel,
    TimeInput,
    SubmitButton,
    SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
    const [isfiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    // const week_days = {
    //     Domingo: 0,
    //     'Segunda-feira': 1,
    //     'Terça-feira': 2,
    //     'Quarta-feira': 3,
    //     'Quinta-feira': 4,
    //     'Sexta-feira': 5,
    //     Sábado: 6,
    // };

    async function loadFavorites() {
        const response = await AsyncStorage.getItem('favorites');

        if (response) {
            const favoritedTeachers = JSON.parse(response);
            const favoritedTeachersIds = favoritedTeachers.map(
                (teacher: Teacher) => teacher.id
            );

            setFavorites(favoritedTeachersIds);
        }
    }

    function handleToogleFiltersVisible() {
        setIsFiltersVisible(!isfiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setTeachers(response.data);
        setIsFiltersVisible(false);
        Keyboard.dismiss();
    }

    return (
        <Container>
            <PageHeader
                title="Proffys disponíveis"
                filterButton={
                    <BorderlessButton onPress={handleToogleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }
            >
                {isfiltersVisible && (
                    <SearchForm>
                        <ClassLabel>Matéria</ClassLabel>
                        <ClassInput
                            placeholder="Qual a matéria"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <InputGroup>
                            <InputBlock>
                                <WeekDayLabel>Dia da semana</WeekDayLabel>
                                <WeekDayInput
                                    placeholder="Qual o dia?"
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </InputBlock>

                            <InputBlock>
                                <TimeLabel>Horário</TimeLabel>
                                <TimeInput
                                    placeholder="Qual horário"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </InputBlock>
                        </InputGroup>

                        <SubmitButton onPress={handleFiltersSubmit}>
                            <SubmitButtonText>Filtrar</SubmitButtonText>
                        </SubmitButton>
                    </SearchForm>
                )}
            </PageHeader>

            <Teachers>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}
            </Teachers>
        </Container>
    );
};

export default TeacherList;
