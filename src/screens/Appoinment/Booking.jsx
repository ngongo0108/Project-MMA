import { format } from "date-fns";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SliderDate from "../../components/Booking/SliderDate";

import { Button, TextInput } from "react-native-paper";
import DatePickerSlider from "../../components/Booking/DatePickerSlider";
import AppointmentService from "../../services/appointment.service";
import { UserService } from "../../services";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

export default function Booking() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("a");
  const [email, setEmail] = React.useState("f");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState(new Date().toISOString());
  const navigation = useNavigation();

  const [user, setUser] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const fetchCreateBooking = async () => {
    const response = await AppointmentService.createAppointment(
      name,
      date,
      phone,
      email,
      time
    );
    // console.log(response);
    if (response !== undefined ) {
      navigation.navigate("Appointment");
    } else {
      Toast.show({
        type: "error",
        text1: response.data.message,
      });
    }
  };
  useEffect(() => {
    const fetchDataUser = async () => {
      const response = await UserService.getInfo();
      setUser(response);
    };
    fetchDataUser();
  }, []);
  useEffect(() => {
    setEmail(user.email);
    setPhone(user.phoneNumber);
  }, [user]);

  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Image
        style={{ width: width, height: 200, opacity: 0.6 }}
        source={{
          uri: "https://womensmentalhealth.org/wp-content/uploads/2016/09/Mother-Infant-Love-1.jpg",
        }}
      />

      <ScrollView
        style={{
          marginTop: -50,
          width: width,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <DatePickerSlider action={setDate} />
        <View style={{}}>
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 8,
              paddingHorizontal: 20,
            }}
          >
            <TextInput
              style={styles.input}
              underlineColor="#e6417b"
              value={format(date, "d MMM, y")}
              disabled
              onChangeText={(text) => setDate(text)}
            />
            <Text style={styles.title}>Time</Text>
            <View>
              <View style={{ paddingHorizontal: "5%", borderRadius: 80 }}>
                <SliderDate action={setTime} />
              </View>
            </View>

            <Text style={styles.title}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Ask here"
              underlineColor="#e6417b"
              activeUnderlineColor="#e6417b"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Text style={styles.title}>Email</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              underlineColor="#e6417b"
              activeUnderlineColor="#e6417b"
              value={email}
              placeholder="Your email"
              keyboardType="email-address"
            />

            <Text style={styles.title}>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              underlineColor="#e6417b"
              activeUnderlineColor="#e6417b"
              value={phone}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Button
              mode="contained"
              style={{
                width: "70%",
                height: 50,
                justifyContent: "center",
                backgroundColor: "#e6417b",
              }}
              onPress={fetchCreateBooking}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Booking</Text>
            </Button>
          </View>

        </View>
        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    color: "#222222",
    fontWeight: "500",
  },

  input: {
    height: 30,
    backgroundColor: "white",
    borderColor: "pink",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
