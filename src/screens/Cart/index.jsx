import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CartScreen = () => {
  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    if (amount < 100) {
      setAmount(amount + 1);
    }
  };

  const handleDecrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    //name
    //price
    //image
    //quantity
    <View style={styles.container}>
      <Text style={styles.headerText}>Cart Screen</Text>
      <View style={styles.cart_container}>
        <View style={styles.cart_item}>
          <Image
            style={styles.image}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <View style={styles.cart_info}>
            <Text style={styles.item_name}>Image name</Text>
            <View style={styles.item_price}>
              <Text style={styles.price}>$122</Text>
              <View style={styles.button_group}>
                <TouchableOpacity onPress={handleDecrease}>
                  <Text style={styles.button_click}>-</Text>
                </TouchableOpacity>
                <Text style={styles.button_info}>{amount}</Text>
                <TouchableOpacity onPress={handleIncrease}>
                  <Text style={styles.button_click}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.total_container}>
      <View style={styles.total_info}>
        <Text style={styles.regularText}>Total: $122</Text>
      </View>
      <TouchableOpacity>
      <View style={styles.total_payment}>
        <Text  style={styles.boldText}>Buy (0)</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  cart_container: {
    alignItems: "center",
    marginTop: 30,
    flex: 1
  },
  cart_item: {
    flexDirection: "row",
    gap: 20,
    width: "90%",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  cart_info: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "60%",
  },
  item_name: {
    fontSize: 20,
  },
  item_price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
  },
  button_group: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 3,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button_click: {
    borderRadius: 10,
    padding: 3,
    width: 15,
    textAlign: "center",
    fontSize: 15,
  },
  button_info: {
    fontSize: 15,
  },
  total_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor:'beige'
  },
  total_info: {
    width: '75%',
    fontSize: 20
  },
  regularText: {
    fontSize: 20
  },
  boldText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  total_payment: {
    backgroundColor: '#f19c38',
    paddingHorizontal: 17,
    paddingVertical: 18
  }

});
