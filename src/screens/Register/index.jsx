import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AuthenticationService } from "../../services";
import { useNavigation } from "@react-navigation/core";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [dateOfBird, setDateOfBird] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async () => {
    try {
      await AuthenticationService.Register({
        userName: username,
        name: name,
        dateOfBird: "2024-04-21T12:37:53.958Z",
        gender: "male",
        email: email,
        phoneNumber: "0123456787",
        password: password,
        passwordConfirm: passwordConfirm,
      });
    } catch (error) {}
  };

  const navigation = useNavigation();
  const handleSignUpLink = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create An Account</Text>
      <View style={styles.input_container}>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={setName}
            placeholder={"Fullname"}
          />
        </View>

        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={username}
            onChangeText={setUsername}
            placeholder={"Username"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            placeholder={"Email"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder={"Phone Number"}
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            secureTextEntry
          />
        </View>
        <View style={styles.text_container}>
          <TextInput
            style={styles.inputBox}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder={"Confirm Password"}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={{ fontSize: 20 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.text_navigate} onPress={handleSignUpLink}>
        <Text>Have an Account?</Text>
        <Text style={{ fontWeight: "700" }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputBox: {
    width: "85%",
    fontSize: 20,
    padding: 10,
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    margin: 10,
    borderRadius: 40,
    padding: 5,
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "600",
  },
  input_container: {
    marginTop: 30,
  },
  button_container: {
    borderWidth: 0.2,
    margin: 50,
    borderRadius: 40,
    width: "85%",
  },
  button: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "#f19c38",
    alignItems: "center",
    borderRadius: 40,
  },
  text_navigate: {
    flexDirection: "row",
    gap: 5,
  },
});
