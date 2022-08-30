import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import React, {useState} from 'react';

import {ItemPopularFod, ItemFood, ItemTab} from '../../components';

import {tabs, popularFood, food} from '../../data';

export const Home = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

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

  const renderItemFood = item => {
    return <ItemFood item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          style={{flexGrow: 0}}
          contentContainerStyle={{paddingVertical: 5, paddingHorizontal: 10}}
          data={tabs}
          keyExtractor={(item, index) => `${item}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => renderItemTab(item)}
        />
      </View>
      <View>
        <FlatList
          data={food}
          contentContainerStyle={{paddingVertical: 5, paddingHorizontal: 5}}
          horizontal
          snapToInterval={175}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({item}) => renderItemFood(item)}
        />
      </View>

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
