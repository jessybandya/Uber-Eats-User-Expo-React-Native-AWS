import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import restaurants from "../../data/restaurants.json"
import RestaurantItem from '../../components/RestaurantItem'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View>
    <StatusBar style='auto' />
     <FlatList
     data={restaurants}
     renderItem={({ item }) => <RestaurantItem restaurant={item}/>}
     showsVerticalScrollIndicator={false}
     />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})