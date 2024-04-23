import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = API_URL_ENV + `/Appointment`;

class AppointmentService {
    static async createAppointment(name, date, phone, email, time) {
        const accessToken = await AsyncStorage.getItem("accessToken");
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        try {
            const response = await axios.post(`${API_URL}/CreateAppointment`,
                {
                    name: name,
                    date: date,
                    phoneNumber: phone,
                    email: email,
                    time: time,
                }
            );
            console.log(response.data);

            if (response.data.isSuccess === true) {
                return response.data.data;
            } else {
                Toast.show({
                    type: "error",
                    text1: response.data.message,
                });
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error server",
            });
        }
    }
}
export { AppointmentService as default };