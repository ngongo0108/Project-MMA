import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserService } from "../../services";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
const ChangePassScreen = () => {
  const navigation = useNavigation();
  const dispacth = useDispatch();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  const handleChange = async () => {
    try {
      await UserService.ChangePassword(form);
      dispacth(logout());
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };
  return (
    <ScrollView>
      <View className="flex-row justify-between pt-2 bg-purple-300 items-center rounded-b-2xl">
        <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-lg">Change your password</Text>
          <TouchableOpacity onPress={() => handleChange()}>
            <Text className="text-white text-lg">Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white flex-col rounded-lg shadow-md mx-3 p-5 my-20 pt-20">
        <View className='relative'> 
          <Text className="text-gray-500 font-normal text-base py-2">
            OLD PASSWORD
          </Text>
          <View className="flex-row justify-end items-center rounded-md border-2">
            <MaterialIcons name="key" size={24} color="black" padding={1} />
            <TextInput
              className="w-11/12 p-1 text-lg"
              secureTextEntry={true}
              onChangeText={(text) => handleInputChange("oldPassword", text)}
              value={form.oldPassword}
            />
          </View>
          <Text className="text-gray-500 font-normal text-base py-2">
            NEW PASSWORD
          </Text>
          <View className="flex-row justify-end items-center rounded-md border-2">
            <MaterialIcons name="key" size={24} color="black" padding={1} />
            <TextInput
              className="w-11/12 p-1 text-lg"
              secureTextEntry={true}
              onChangeText={(text) => handleInputChange("newPassword", text)}
              value={form.newPassword}
            />
          </View>
          <Text className="text-gray-500 font-normal text-base py-2">
            CONFIRM PASSWORD
          </Text>
          <View className="flex-row justify-end items-center rounded-md border-2">
            <MaterialIcons name="key" size={24} color="black" padding={1} />
            <TextInput
              className="w-11/12 p-1 text-lg"
              secureTextEntry={true}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              value={form.confirmPassword}
            />
          </View>
        </View>
        <View className="bg-purple-700 rounded-3xl absolute p-5 right-1/3" style={{ top: -70}}>
          <FontAwesome6 name="key" size={100} color="white" />
        </View>
      </View>
    </ScrollView>
  );
};
export default ChangePassScreen;
