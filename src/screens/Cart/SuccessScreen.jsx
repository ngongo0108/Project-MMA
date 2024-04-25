import { useNavigation, useRoute } from "@react-navigation/core";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import UserService from "../../services/user.service";
import OrderService from "../../services/order.service";

const SuccessScreen = ({ route }) => {
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  //   const { totalPrice, voucher } = route.params;
  //   console.log("SSS", voucher);

  


  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  }

 

  

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Successfully</Text>
      <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={handleNavigateHome}>
            <Text style={{ fontSize: 20 }}>Back to Home</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: 'center'
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
    width: "80%",
  },
  button: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "#f19c38",
    alignItems: "center",
    borderRadius: 10,
  },
});
