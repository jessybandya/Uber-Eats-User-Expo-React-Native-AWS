import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";
import RestaurantDetailsScreen from "../Screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../Screens/DishDetailsScreen";
import Basket from "../Screens/Basket";
import OrdersScreen from "../Screens/OrdersScreen";
import OrderDetails from "../Screens/OrderDetails";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Profile from "../Screens/Profile";

const Stack = createStackNavigator();

function Navigation(){
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}
    activeColor="#5C5CFF"
    inactiveColor="gray"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
         title: "Profile"
        }}
      />
    </Tab.Navigator>
  );
};


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={HomeScreen} 
      options={{ title: 'Restaurants', headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} 
      options={{ headerShown: false }}
      />
      <Stack.Screen name="Dish" component={DishDetailsScreen} 
      options={{
        headerTitleAlign : 'center',
        title: 'Restaurant Dish'
      }}
      />
      <Stack.Screen name="Basket" component={Basket} 
      options={{
        headerTitleAlign : 'center',
      }}
      />
    </Stack.Navigator>
  );
};


const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={OrdersScreen} 
      options={{
        headerTitleAlign: 'center'
      }}
      />
      <Stack.Screen name="Order" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default Navigation;
