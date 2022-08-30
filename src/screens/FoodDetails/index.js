import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const FoodDetails = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: item.color,
          },
        ]}
      />
      <IconWrapper onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={28} style={{}} color="#333" />
      </IconWrapper>

      <Container>
        <TextWrapper>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </TextWrapper>
        <View style={{marginTop: 64}}>
          <ImageStyled source={item.url} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            {item.subcategories.map((subcategory, index) => (
              <View key={`${subcategory.title}-${index + 33}`}>
                <ImageSubcategory source={subcategory.url} />
              </View>
            ))}
          </View>
        </View>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>${item.price}</Text>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            {item.description}
          </Text>
        </View>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 0.8;
  padding: 10px;
  justify-content: flex-start;
`;

const IconWrapper = styled.TouchableOpacity`
  padding: 4px;
  position: absolute;
  top: 35px;
  right: 10px;
  z-index: 2;
`;

const ImageStyled = styled.Image`
  height: 250px;
  width: 250px;
  align-self: center;
  resize-mode: contain;
`;

const ImageSubcategory = styled.Image`
  height: 56px;
  width: 56px;
  align-self: center;
  resize-mode: contain;
`;

const TextWrapper = styled.View``;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
`;
