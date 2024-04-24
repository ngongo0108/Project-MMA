import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute, useIsFocused  } from "@react-navigation/native";
import { FormatUtil } from "../../utils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { UserService } from "../../services";
const EditProfileScreen = () => {
  const route = useRoute();
  const user = route.params.user;
  const navigation = useNavigation();
  const [form, setForm] = useState(user);
  const date = FormatUtil.formatDate(form.dateOfBird);
  const [showPicker, setShowPicker] = useState(false);
  const handleInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new date(form.dateOfBird);
    setShowPicker(false);
    setForm({
      ...form,
      dateOfBird: currentDate.toISOString(),
    });
  };
  const handleInfor = async () => {
    try {
        await UserService.ChangeInfo(form);
       
        const updatedUserData = await UserService.getInfo();
        setForm(updatedUserData);
    } catch (error) {
        console.error("Error updating user information:", error);
    }
};
// useEffect(() => {
//     if (!isFocused) {
//       // Send updated user data back to Profile screen
//       navigation.emit('updateUserData', form);
//     }
//   }, [isFocused]);
  return (
    <ScrollView>
      <View className="flex-row justify-between pt-5 bg-white items-center">
        <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-lg">Edit Profile</Text>
          <TouchableOpacity onPress={() => handleInfor()}>
            <Text className="text-lime-700 text-lg">Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white rounded-xl m-3 shadow-md p-2 relative pt-40 mt-20">
        <View
          className="items-center absolute rounded-full shadow-lg bg-white p-2 left-1/4"
          style={{ top: -50 }}
        >
          <Image
            style={{
              height: 180,
              width: 180,
              borderRadius: 100,
              position: "relative",
            }}
            source={{
              uri: "https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png",
            }}
          />
        </View>
        <View className="flex-row justify-between items-center border-b border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Name</Text>
          <TextInput 
          className="p-3 text-base" 
          onChangeText={(text) => handleInputChange("name", text)}
          value={form.name} 
          />
        </View>
        <View className="flex-row justify-between items-center border-y border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Address</Text>
          <TextInput
            className="p-3 text-base overflow-hidden text-ellipsis whitespace-nowrap"
            onChangeText={(text) => handleInputChange("address", text)}
            value={form.address}
          />
        </View>
        <View className="flex-row justify-between items-center border-y border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Email</Text>
          <TextInput 
          className="p-3 text-base" 
          onChangeText={(text) => handleInputChange("email", text)}
          value={form.email} 
          />
        </View>
        <View className="flex-row justify-between items-center border-y border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Phone number</Text>
          <TextInput
            className="p-3 text-base"
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
            value={form.phoneNumber}
            keyboardType="numeric"
          />
        </View>
        <View className="flex-row justify-between items-center border-y border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Gender</Text>
          <TextInput 
          className="p-3 text-base" 
          onChangeText={(text) => handleInputChange("gender", text)}
          value={form.gender} 
          />
        </View>
        <View className="flex-row justify-between items-center border-t border-gray-200 mx-5">
          <Text className="text-gray-400 text-base">Date of birth</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} className="p-3 text-base" >
            <Text>{FormatUtil.formatDate(form.dateOfBird)}</Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={new Date(form.dateOfBird)}
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default EditProfileScreen;
