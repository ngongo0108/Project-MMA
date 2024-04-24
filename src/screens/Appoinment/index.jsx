import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { format } from "date-fns";
import AppointmentList from "../../components/Appoinment/AppointmentList";
import React, { useEffect } from "react";
import AppointmentService from "../../services/appointment.service";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

const AppointmentScreen = () => {
  const [appointmentList, setAppointmentList] = React.useState([]);
  const navigation = useNavigation();

  const fetchAppointments = async () => {
    const response = await AppointmentService.getAppointmentByJWT();
    console.log("sydiayiweyrieih");
    // console.log(response);
    // console.log(response.items);
    // setItem(response);
    setAppointmentList(response.items);
  };
  const statusFormat = (status, type) => {
    const statusName = ["Processing","Pending","Completed","Canceled"]
    switch (status) {
      case 1: {
        status = type? "Processing" : "grey";
        break;
      }
      case 2: {
        status = type? "Pending" : "grey";
        break;
      }
      case 3: {
        status = type? "Completed" : "green";
        break;
      }
      case 4: {
        status = type? "Canceled" : "red";
        break;
      } 
      default:
        break;
    }
    return status;
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  const renderAppointments = () => {
    if (!appointmentList || appointmentList.length === 0) {
      <Image
        source={{
          uri: "https://static-00.iconduck.com/assets.00/calendar-schedule-icon-1944x2048-twwxjkvv.png",
        }}
      />;
    } else {
      return appointmentList.map((appointment, index) => {
        return (
          <View key={index} style={{ backgroundColor: "pink", marginVertical: 10, marginHorizontal: 50, paddingHorizontal: 20, paddingVertical: 20, borderRadius:20 }}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>{appointment.name}</Text>
            <Text>Phone: {appointment.phone}</Text>
            <Text>Email: {appointment.email}</Text>
            <Text>Date: {format(appointment.date, "d MMM, y")}</Text>
            <Text>Time: {appointment.time}</Text>
            <Text style={{fontWeight: '500', fontSize: 18, color: statusFormat(appointment.status, false)}}>{statusFormat(appointment.status, true)}</Text>
          </View>
        );
      });
    }
  };

  return (
    <View>
      <Text>Appointment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    color: "#e6417b",
    marginTop: 40,
    marginLeft: 20,
  },
  image: {
    width: width,
    height: 200,
    opacity: 0.6,
    position: "relative",
  },
  container: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 70,
    right: 20,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e6417b",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
});
export default AppointmentScreen;


const styles = StyleSheet.create({

})
