import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { UserService } from "../../services";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { useSelector } from "react-redux";
const ProfileScreen = () => {
  // const users = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchDataUser = async () => {
      const response = await UserService.getInfo();
      console.log('response User: ',response);
      setUser(response);
    };
    fetchDataUser();
  }, []);
  const handleLogout = () => {
    dispacth(logout());
  };
  return (
    <ScrollView className="w-full  mb-2">
      <View className="flex-auto flex-row mt-5 items-center justify-around">
        <Text></Text>
        <Text
          className="#2D2D2F fon"
          // style={{
          //   color: "#2D2D2F",
          //   fontSize: 25,
          //   fontWeight: "bold",
          //   position: "relative",
          // }}
        >
          My account
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Edit Profile")}>
          <AntDesign
            name="form"
            size={24}
            color="#4E5357"
            position="absolute"
            right={-20}
            top={-10}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 100 }}
          source={{
            uri: "https://thewellesleynews.com/wp-content/uploads/2020/09/avatar.jpg",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#393E41" }}>
            John Doe
          </Text>
          <Text style={{ fontSize: 15, color: "gray" }}>john@yopmail.com</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="wallet" size={24} color="#393E41" padding={10} />
            <Text style={{ fontSize: 15, fontWeight: "300", padding: 10 }}>
              Wallet
            </Text>
          </View>

          <Text style={{ fontSize: 20, fontWeight: "500", color: "red" }}>
            <FontAwesome name="dollar" size={15} color="red" /> 999 999 999
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, padding: 10, color: "#C23A27" }}>
              <AntDesign name="plus" size={20} color="#C23A27" /> ADD MONEY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Change Password")}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="setting" size={24} color="#393E41" padding={15} />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Change Password
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons
              name="list-ordered"
              size={24}
              color="#393E41"
              padding={15}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Orders
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contract")}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="filetext1"
              size={24}
              color="#393E41"
              padding={15}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Contract
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Privacy Policy")}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="Safety" size={24} color="#393E41" padding={15} />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Privacy Policy
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("About Us")}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="exclamationcircleo"
              size={24}
              color="#393E41"
              padding={15}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              About us
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Help & Contact Us")}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="message1" size={24} color="#393E41" padding={15} />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Helps & Contact Us
            </Text>
          </View>
          <AntDesign name="right" size={24} color="#393E41" marginRight={10} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLogout()}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="logout"
              size={24}
              color="#393E41"
              padding={15}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#393E41" }}>
              Log out
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    // backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
});
export default ProfileScreen;
