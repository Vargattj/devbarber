import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin: 3px;
`;

export const FakeSwiper = styled.View`
  height: 140px;
  background-color: #63c2d1;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #fff;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #63c2d1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const ServiceArea = styled.View`
  margin: 30px 30px 20px 30px;
`;

export const ServicesTitle = styled.Text`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #268596;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
  flex: 1;
`;

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;

export const ServicePrice = styled.Text`
  color: #268596;
  font-size: 14px;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
  background-color: #4eadbe;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const ServiceChooseButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
