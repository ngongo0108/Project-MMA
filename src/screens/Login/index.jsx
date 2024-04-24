import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthenticationService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/actions/userAction";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpLink = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = async () => {
    try {
      const result = await AuthenticationService.Login({
        userName: username,
        password: password,
      });
      if (result.isSuccess === true) {
        dispatch(loginSuccess(result.data));
        let accessToken = result.data.accessToken;
        let refreshToken = result.data.refreshToken;
        await AsyncStorage.setItem("accessToken", accessToken);
        await AsyncStorage.setItem("refreshToken", refreshToken);
      } else {
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>E-Commerce Android App</Text>
      </View>

      <View style={styles.input_container}>
        <View style={styles.text_container}>
          <Feather name="user" size={24} color="black" />
          <TextInput
            style={styles.inputBox}
            value={username}
            onChangeText={setUsername}
            placeholder={"Username"}
          />
        </View>

        <View style={styles.text_container}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.login_container}
        onPress={() => handleLogin()}
      >
        <Text style={styles.login_button}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text_navigate} onPress={handleSignUpLink}>
        <Text>Don't have an Account?</Text>
        <Text style={{ fontWeight: "700" }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputBox: {
    width: "80%",
    fontSize: 20,
    padding: 10,
  },
  input_container: {
    width: "75%",
    alignItems: "center",
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  login_button: {
    backgroundColor: "#f19c38",
    width: "100%",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  login_container: {
    width: "70%",
    borderRadius: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    marginBottom: 30,
  },
  text_navigate: {
    flexDirection: "row",
    gap: 5,
  },
});
