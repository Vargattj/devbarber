import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c1d1;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  max-width: 250px;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
`;

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
`;
export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
