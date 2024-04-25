import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { UserService } from "../../services";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const dispacth = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState({
    userName: "",
    name: "",
    address: "",
    dateOfBird: "",
    gender: "",
    wallet: 0,
    email: "",
    phoneNumber: "",
  });
  const fetchDataUser = async () => {
    const response = await UserService.getInfo();
    setUser(response);
  };
  useFocusEffect(
    useCallback(() => {
      fetchDataUser();
    }, [])
  );
  const handleLogout = () => {
    dispacth(logout());
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-row items-center ml-5 mt-16 mb-5">
        <Image
          className="h-28 w-28 rounded-full"
          source={{
            uri: "https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png",
          }}
        />
        <View className="ml-4">
          <TouchableOpacity
            className="flex-row"
            onPress={() => navigation.navigate("Edit Profile", { user })}
          >
            <Text className="text-xl font-extrabold text-black p-2">
              {user.name}
            </Text>
            <AntDesign name="right" size={16} color="#4E5357" padding={13} />
          </TouchableOpacity>

          <Text className="text-sm text-gray-400 pl-2">{user.email}</Text>
        </View>
      </View>
      
      <View className="pt-7 bg-white ">
      <TouchableOpacity
          onPress={()=> navigation.navigate("My Wallet", { user })}
        >
          <View className="flex-row justify-between items-center bg-white mx-3 my-1">
            <View className="flex-row items-center m-1">
              <View className="bg-emerald-700 rounded-lg mr-2">
                <AntDesign
                  name="wallet"
                  size={24}
                  color="#fff"
                  padding={8}
                />
              </View>
              <Text className="text-xl font-normal text-black">
                My Wallet
              </Text>
            </View>
            <AntDesign
              name="right"
              size={20}
              color="#393E41"
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Change Password")}
        >
          <View className="flex-row justify-between items-center bg-white mx-3 my-1">
            <View className="flex-row items-center m-1">
              <View className="bg-purple-700 rounded-lg mr-2">
                <Ionicons
                  name="key-outline"
                  size={24}
                  color="#fff"
                  padding={8}
                />
              </View>
              <Text className="text-xl font-normal text-black">
                Change Password
              </Text>
            </View>
            <AntDesign
              name="right"
              size={20}
              color="#393E41"
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
          <View className="flex-row justify-between items-center bg-white mx-3 my-1">
            <View className="flex-row items-center m-1">
              <View className="bg-red-500 rounded-lg mr-2">
                <Octicons
                  name="list-ordered"
                  size={24}
                  color="#fff"
                  padding={8}
                />
              </View>
              <Text className="text-lg font-medium text-black">Orders</Text>
            </View>
            <AntDesign
              name="right"
              size={20}
              color="#393E41"
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contract")}>
          <View className="flex-row justify-between items-center bg-white mx-3 my-1">
            <View className="flex-row items-center m-1">
              <View className="bg-orange-500 rounded-lg mr-2">
                <AntDesign
                  name="filetext1"
                  size={24}
                  color="#fff"
                  padding={8}
                />
              </View>
              <Text className="text-lg font-medium text-black">Contract</Text>
            </View>
            <AntDesign
              name="right"
              size={20}
              color="#393E41"
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
        <View className="mt-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy Policy")}
          >
            <View className="flex-row justify-between items-center bg-white mx-3 my-1">
              <View className="flex-row items-center m-1">
                <View className="bg-green-500 rounded-lg mr-2">
                  <AntDesign name="Safety" size={24} color="#fff" padding={8} />
                </View>
                <Text className="text-lg font-medium text-black">
                  Privacy Policy
                </Text>
              </View>
              <AntDesign
                name="right"
                size={20}
                color="#393E41"
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("About Us")}>
            <View className="flex-row justify-between items-center bg-white mx-3 my-1">
              <View className="flex-row items-center m-1">
                <View className="bg-blue-500 rounded-lg mr-2">
                  <AntDesign
                    name="exclamationcircleo"
                    size={24}
                    color="#fff"
                    padding={8}
                  />
                </View>
                <Text className="text-lg font-medium text-black">About us</Text>
              </View>
              <AntDesign
                name="right"
                size={20}
                color="#393E41"
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Help & Contact Us")}
          >
            <View className="flex-row justify-between items-center bg-white mx-3 my-1">
              <View className="flex-row items-center m-1">
                <View className="bg-yellow-500 rounded-lg mr-2">
                  <AntDesign
                    name="message1"
                    size={24}
                    color="#fff"
                    padding={8}
                  />
                </View>
                <Text className="text-lg font-medium text-black">
                  Helps & Contact Us
                </Text>
              </View>
              <AntDesign
                name="right"
                size={20}
                color="#393E41"
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-10">
          <TouchableOpacity onPress={() => handleLogout()}>
            <View className="flex-row justify-between items-center bg-white mx-3 mb-3 my-1">
              <View className="flex-row items-center m-1">
                <View className="bg-gray-500 rounded-lg mr-2">
                  <MaterialIcons
                    name="logout"
                    size={24}
                    color="#fff"
                    padding={8}
                  />
                </View>
                <Text className="text-lg font-medium text-black">Log out</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
