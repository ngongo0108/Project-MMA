import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import OrderService from "../../services/order.service";
import UserService from "../../services/user.service";

const CheckoutScreen = ({ route }) => {
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  //   const { totalPrice, voucher } = route.params;
  //   console.log("SSS", voucher);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const { totalPrice = 0, voucher = null } = route.params || {};
  console.log("ass", totalPrice, voucher.id);

  const navigation = useNavigation();

  const fetchUserInfo = async () => {
    try {
      const result = await UserService.getVoucherByLogin();
      console.log("WWW", result.data);
      setUser(result.data);
    } catch (error) {
      console.log("Userttt", error);
    }
  };

  const handleCheckout = async () => {
    try {
      const result = await OrderService.checkOut({
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        address: address,
        name: user?.name,
        voucherId: voucher?.id,
      });

      if (result.isSuccess === true) {
        navigation.navigate("Cart");
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Payment</Text>
      <View style={styles.input_container}>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={user.name}
            placeholder={"Name"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={user.phoneNumber}
            placeholder={"Phone Number"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={user.email}
            placeholder={"Email"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={address}
            onChangeText={setAddress}
            placeholder={"Address"}
          />
        </View>
        <View style={styles.text_container_info}>
          <Text style={styles.inputBox}>Voucher: {voucher.name}</Text>
          <Text style={styles.inputBox}>Total: ${totalPrice}</Text>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={handleCheckout}>
            <Text style={{ fontSize: 20 }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
  input_container: {
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  text_container_info: {
    width: "95%",
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  inputBox: {
    width: "100%",
    fontSize: 20,
    padding: 10,
  },
  button_container: {
    borderWidth: 0.2,
    margin: 50,
    borderRadius: 40,
    width: "95%",
  },
  button: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "#f19c38",
    alignItems: "center",
    borderRadius: 10,
  },
});
