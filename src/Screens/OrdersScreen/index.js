import { View, Text, FlatList } from "react-native";

import OrderListItem from "../../components/OrderListItem";
import orders from "../../data/orders.json";

const OrderScreen = () => {
  return (
    <View style={{ height: "100%", width: "100%", paddingTop: 50 }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;
