import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

export const ItemFood = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacityContainer
      activeOpacity={0.9}
      onPress={() => navigation.push('Details', {item})}>
      <Container>
        <SharedElement
          style={[StyleSheet.absoluteFill]}
          id={`item.${item.key}.bg`}>
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: item.color,
                borderRadius: 12,
              },
            ]}
          />
        </SharedElement>
        <SharedElement
          id={`item.${item.key}.text`}
          style={{position: 'absolute', top: 10, left: 10}}>
          <TextWrapper>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </TextWrapper>
        </SharedElement>
        <SharedElement
          id={`item.${item.key}.image`}
          style={{alignSelf: 'center', marginTop: 42}}>
          <ImageStyled source={item.url} />
        </SharedElement>
        <SharedElement id={`item.${item.key}.price`}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>${item.price}</Text>
        </SharedElement>
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
  justify-content: space-evenly;
`;

const ImageStyled = styled.Image`
  height: 100px;
  width: 100px;
  align-self: center;
  resize-mode: contain;
`;

const TextWrapper = styled.View``;

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
