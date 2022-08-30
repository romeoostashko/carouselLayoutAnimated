import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  AnimatedLayout,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  withTiming,
} from 'react-native-reanimated';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const FoodDetails = ({navigation, route}) => {
  const {item} = route.params;
  const {width, height} = Dimensions.get('window');

  const animatedFnDitails = index => {
    return values => {
      'worklet';

      const animationValuesX = [-width / 4, 0, width / 4];

      console.log(values);
      const animations = {
        opacity: withTiming(1, {duration: 2000}),
        transform: [
          {translateX: withTiming(0, {duration: 1500})},
          {translateY: withTiming(0, {duration: 1300})},
          {scale: withTiming(1, {duration: 1400})},
        ],
      };
      const initialValues = {
        opacity: 0,
        transform: [
          {translateX: -animationValuesX[index]},
          {translateY: -90},
          {scale: 0.4},
        ],
      };
      // const callback = finished => {
      //   // optional callback that will fire when layout animation ends
      // };
      return {
        initialValues,
        animations,
        //callback,
      };
    };
  };

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
              <Animated.View
                entering={animatedFnDitails(index)}
                key={`${subcategory.title}-${index + 33}`}>
                <ImageSubcategory source={subcategory.url} />
              </Animated.View>
            ))}
          </View>
        </View>
        <Animated.View
          entering={FadeInDown.duration(1500)}
          exiting={FadeOut.duration(1000)}
          style={{marginTop: 32}}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>${item.price}</Text>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            {item.description}
          </Text>
        </Animated.View>
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
  z-index: 2;
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
