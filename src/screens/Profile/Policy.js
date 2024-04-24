import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const PolicyScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="flex-row justify-between pt-2 bg-green-800 items-center rounded-b-2xl">
        <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-lg text-white">Privacy Policy</Text>
          <Text></Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View>
          <Text style={{ paddingBottom: 10, fontSize: 15 }}>
            <Text style={{ fontSize: 25 }}>W</Text>
            elcome to the Milk Shop for Mom and Baby. This privacy policy
            describes how we collect, use, and protect your personal information
            when you use our app.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Information Collection and Use </Text>
          <Text style={styles.text}>
            When you use our app, we may collect personal information that you
            provide, including name, email address, phone number, and payment
            information when you make a purchase from our store. This
            information will be used to process your orders and send updates
            about your orders.
          </Text>
          <Text style={styles.text}>
            Additionally, we may also collect non-personal information about how
            you interact with our app, including device type, operating system,
            web browser, and similar information.
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Security of Information</Text>
          <Text style={styles.text}>
            We are committed to protecting your personal information and do not
            share this information with any third party outside of those
            involved in processing orders and providing services for our app.
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Changes to the Privacy Policy</Text>
          <Text style={styles.text}>
            We may update this Privacy Policy from time to time. We recommend
            that you review this page periodically for any changes.
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Contact</Text>
          <Text style={styles.text}>
            If you have any questions or suggestions about our Privacy Policy,
            please contact us via email:{" "}
            <Text style={{ color: "#1C5DCE" }}>contact@gmail.com</Text>.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    color: "#2D2D2F",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    paddingBottom: 10,
    fontSize: 15,
  },
});
export default PolicyScreen;
