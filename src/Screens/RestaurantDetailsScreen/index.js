import { View, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../data/restaurants.json";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  // console.warn(id);

  return (
    <View style={styles.page}>
    <StatusBar style="light" />
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  )
}

export default RestaurantDetailsScreen

