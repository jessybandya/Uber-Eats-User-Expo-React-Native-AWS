import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import restaurants from "../../data/restaurants.json"
import RestaurantItem from '../../components/RestaurantItem'
import { StatusBar } from 'expo-status-bar';
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);
  if (!restaurants) {
    return <ActivityIndicator style={{flex: 1, justifyContent:'center', alignItems:'center'}} size={"large"} color="gray" />;
  }
  return (
    <View style={styles.page}>
    <StatusBar style='auto' />
    <FlatList
    data={restaurants}
    renderItem={({ item }) => <RestaurantItem restaurant={item} />}
    showsVerticalScrollIndicator={false}
  />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page: {
    padding: 5,
  },
});