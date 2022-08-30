import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ItemPopularFod = ({item}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <Image source={item.url} style={styles.popularImage} />

        <View style={{flex: 1}}>
          <Text style={styles.popularTitle}>{item.title}</Text>

          <View style={{flexDirection: 'row'}}>
            <AntDesign name="star" size={16} color="orange" />
            <Text>4.3</Text>
          </View>
        </View>

        <Text style={styles.popularPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  popularImage: {
    width: 54,
    height: 54,
    marginRight: 10,
    resizeMode: 'contain',
  },
  popularTitle: {
    fontWeight: '700',
    fontSize: 18,
  },

  popularPrice: {
    fontWeight: '700',
    fontSize: 16,
  },
});
