import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export const ItemTab = ({selectedTab, setSelectedTab, tab}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedTab(tab)}>
      <View
        style={[
          styles.pill,
          {
            backgroundColor: selectedTab === tab ? 'orange' : 'transparent',
          },
        ]}>
        <Text
          style={[
            styles.pillText,
            {color: selectedTab === tab ? 'white' : 'black'},
          ]}>
          {tab}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  pillText: {fontWeight: '700', fontSize: 14, lineHeight: 16},
});
