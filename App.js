import { StyleSheet, View } from 'react-native';
import Navigation from './src/Navigation';
import Basket from './src/Screens/Basket';
import DishDetailsScreen from './src/Screens/DishDetailsScreen';
import HomeScreen from './src/Screens/HomeScreen';
import OrderDetails from './src/Screens/OrderDetails';
import OrderScreen from './src/Screens/OrdersScreen';
import RestaurantDetailsScreen from './src/Screens/RestaurantDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
