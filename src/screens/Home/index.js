import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {ItemPopularFod, ItemFood, ItemTab} from '../../components';

import {tabs, popularFood} from '../../data';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  console.log(popularFood);

  const renderItemTab = tab => (
    <ItemTab
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      tab={tab}
    />
  );

  const renderItemPopularFood = item => {
    return <ItemPopularFod item={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flexGrow: 0}}
        contentContainerStyle={{padding: 10}}
        data={tabs}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderItemTab(item)}
      />

      <FlatList
        contentContainerStyle={{padding: 10}}
        data={popularFood}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderItemPopularFood(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
