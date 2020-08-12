import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '~/components/PageHeader';
import TeacherItem, { Teacher } from '~/components/TeacherItem';

import { Container, Teachers } from './styles';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(() => {
        async function loadFavorites() {
            const response = await AsyncStorage.getItem('favorites');

            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        }

        loadFavorites();
    });

    return (
        <Container>
            <PageHeader title="Meus proffys favoritos" />

            <Teachers>
                {favorites.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} favorited />
                ))}
            </Teachers>
        </Container>
    );
};

export default Favorites;
