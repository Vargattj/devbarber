/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import {
  Container,
  Scroller,
  FakeSwiper,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
} from './styles';
import Api from '../../Api';

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
          <UserInfoArea></UserInfoArea>
          <ServiceArea>
            <TestimonialArea></TestimonialArea>
          </ServiceArea>
        </PageBody>
      </Scroller>
    </Container>
  );
};