import React, { useState, FormEvent } from 'react';

import Input from '~/components/Input';
import Select from '~/components/Select';

import api from '~/services/api';

import PageHeader from '~/components/PageHeader';
import TeacherItem, { Teacher } from '~/components/TeacherItem';

import { Container, MainList } from './styles';

const TeacherList: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teacherList, setTeacherList] = useState([]);

    async function handleSearchTeachers(event: FormEvent) {
        event.preventDefault();

        const { data } = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setTeacherList(data);
    }

    return (
        <Container>
            <PageHeader title="Estes são os proffys disponíveis.">
                <form onSubmit={handleSearchTeachers}>
                    <Select
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={event => setSubject(event.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            {
                                value: 'Educação Física',
                                label: 'Educação Física',
                            },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        label="Dia da semana"
                        name="week_day"
                        value={week_day}
                        onChange={event => setWeekDay(event.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            {
                                value: '3',
                                label: 'Quarta-feira',
                            },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                        value={time}
                        onChange={event => setTime(event.target.value)}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <MainList>
                {teacherList.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </MainList>
        </Container>
    );
};

export default TeacherList;
