import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import styled from 'styled-components/native';

export const ItemFood = ({item, navigation}) => {
  return (
    <TouchableOpacityContainer
      onPress={() => navigation.navigate('Details', {item})}>
      <Container>
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: item.color,
              borderRadius: 12,
            },
          ]}
        />

        <TextWrapper>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </TextWrapper>
        <ImageStyled source={item.url} />
      </Container>
    </TouchableOpacityContainer>
  );
};

const TouchableOpacityContainer = styled.TouchableOpacity`
  width: 175px;
  height: 260px;
  padding-horizontal: 5px;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
`;

const ImageStyled = styled.Image`
  height: 100px;
  width: 100px;
  align-self: center;
  resize-mode: contain;
  position: absolute;
`;

const TextWrapper = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`;
