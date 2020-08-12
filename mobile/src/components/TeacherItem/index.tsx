import React, { useState } from 'react';
import { Linking } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {
    Container,
    Profile,
    Avatar,
    ProfileInfo,
    ProfileName,
    ProfileSubject,
    Bio,
    Footer,
    Price,
    PriceValue,
    ButtonsContainer,
    FavoriteButton,
    FavoriteIcon,
    ContactButton,
    WhatsappIcon,
    ContactButtonText,
} from './styles';

import heartOutlineIcon from '~/assets/icons/heart-outline.png';
import unFavoriteIcon from '~/assets/icons/unfavorite.png';
import whatsappIcon from '~/assets/icons/whatsapp.png';
import api from '~/services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface Props {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<Props> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    async function handleLinkToWhatsapp() {
        await api.post('/connections', {
            user_id: teacher.id,
        });

        await Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function handleToogleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray: Teacher[] = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex(
                (teacherItem: Teacher) => teacherItem.id === teacher.id
            );

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <Container>
            <Profile>
                <Avatar
                    source={{
                        uri: teacher.avatar,
                    }}
                />

                <ProfileInfo>
                    <ProfileName>{teacher.name}</ProfileName>
                    <ProfileSubject>{teacher.subject}</ProfileSubject>
                </ProfileInfo>
            </Profile>

            <Bio>{teacher.bio}</Bio>

            <Footer>
                <Price>
                    Preço/hora {'  '} <PriceValue>R$ {teacher.cost}</PriceValue>
                </Price>

                <ButtonsContainer>
                    <FavoriteButton
                        favorited={isFavorited}
                        onPress={handleToogleFavorite}
                    >
                        {isFavorited ? (
                            <FavoriteIcon source={unFavoriteIcon} />
                        ) : (
                            <FavoriteIcon source={heartOutlineIcon} />
                        )}
                    </FavoriteButton>

                    <ContactButton onPress={handleLinkToWhatsapp}>
                        <WhatsappIcon source={whatsappIcon} />
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
};

export default TeacherItem;
