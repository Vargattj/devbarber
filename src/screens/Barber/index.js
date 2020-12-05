/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';

import {
  Container,
  Scroller,
  PageBody,
  BackButton,
  LoadingIcon,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  FakeSwiper,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  ServiceArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseButtonText,
  TestimonialArea,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);
  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      const json = await Api.getBarber(userInfo.id);
      if (json.error) {
        alert('Erro: ' + json.error);
      }
      setUserInfo(json.data);
      setLoading(false);
    };
    getBarberInfo();
  }, [userInfo.id]);

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}
            loop={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon width="24" height="24" fill="#fff" />
            </UserFavButton>
          </UserInfoArea>
          {loading && <LoadingIcon size="large" color="#63c2d1" />}

          <ServiceArea>
            <ServicesTitle>Lista de serviços</ServicesTitle>
            {userInfo.services &&
              userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>
                    <ServicePrice>R$ {item.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton>
                    <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
          </ServiceArea>

          <TestimonialArea></TestimonialArea>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>
    </Container>
  );
};
