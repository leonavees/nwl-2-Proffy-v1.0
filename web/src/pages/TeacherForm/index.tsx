import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '~/components/Input';
import Textarea from '~/components/Textarea';
import Select from '~/components/Select';

import warningIcon from '../../assets/icons/warning.svg';

import PageHeader from '~/components/PageHeader';

import { Container, Main, ScheduleItem } from './styles';
import api from '~/services/api';

const TeacherForm: React.FC = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' },
        ]);
    }

    function setScheduleItemValue(
        position: number,
        field: string,
        value: string
    ) {
        const updatedScheduleItems = scheduleItems.map(
            (scheduleItem, index) => {
                if (index === position) {
                    return {
                        ...scheduleItem,
                        [field]: value,
                    };
                }

                return scheduleItem;
            }
        );

        setScheduleItems(updatedScheduleItems);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            await api.post('/classes', {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems,
            });

            alert('Aula criada com sucesso!');

            history.push('/');
        } catch (err) {
            alert(
                'Erro ao tentar criar, verifique se todos os campos foram preenchidos'
            );
        }
    }
    return (
        <Container>
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <Main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            label="Nome completo"
                            name="name"
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <Input
                            label="Avatar"
                            name="avatar"
                            type="text"
                            value={avatar}
                            onChange={event => setAvatar(event.target.value)}
                        />
                        <Input
                            label="WhatsApp"
                            name="whatsapp"
                            type="text"
                            value={whatsapp}
                            onChange={event => setWhatsapp(event.target.value)}
                        />
                        <Textarea
                            label="Biografia"
                            name="bio"
                            value={bio}
                            onChange={event => setBio(event.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

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
                        <Input
                            label="Custo da sua hora por aula"
                            name="cost"
                            type="text"
                            value={cost}
                            onChange={event => setCost(event.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => (
                            <ScheduleItem key={scheduleItem.week_day}>
                                <Select
                                    label="Dia da semana"
                                    name="week_day"
                                    value={scheduleItem.week_day}
                                    onChange={event =>
                                        setScheduleItemValue(
                                            index,
                                            'week_day',
                                            event.target.value
                                        )
                                    }
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
                                    label="Das"
                                    name="from"
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={event =>
                                        setScheduleItemValue(
                                            index,
                                            'from',
                                            event.target.value
                                        )
                                    }
                                />
                                <Input
                                    label="Até"
                                    name="to"
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={event =>
                                        setScheduleItemValue(
                                            index,
                                            'to',
                                            event.target.value
                                        )
                                    }
                                />
                            </ScheduleItem>
                        ))}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preenchar todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </Main>
        </Container>
    );
};
export default TeacherForm;
