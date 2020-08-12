import React from 'react';

import whatsappIcon from '~/assets/icons/whatsapp.svg';

import api from '~/services/api';

import {
    Container,
    TeacherHeader,
    TeacherDescription,
    TeacherFooter,
} from './styles';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;
}

interface Props {
    teacher: Teacher;
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {
    async function handleCreateConnection() {
        await api.post('/connections', {
            user_id: teacher.id,
        });
    }

    return (
        <Container>
            <TeacherHeader>
                <img
                    src="https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt="Avatar"
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </TeacherHeader>

            <TeacherDescription>{teacher.bio}</TeacherDescription>

            <TeacherFooter>
                <p>
                    Preço/Hora <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    href={`http://wa.me/${teacher.whatsapp}`}
                    target="__blank"
                    onClick={handleCreateConnection}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </TeacherFooter>
        </Container>
    );
};

export default TeacherItem;
