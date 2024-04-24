import axios from "axios";

import Toast from "react-native-toast-message";
import API_URL_ENV from "../configs/api";
import { Alert } from "react-native";
const API_URL = API_URL_ENV + `/Authentication`;
class AuthenticationService {
  static async Login(inputs) {
    try {
      const response = await axios.post(`${API_URL}/Login`, inputs);
      if (response.data.isSuccess === true) {
        Toast.show({
          type: "success",
          text1: response.data.message,
        });
        return response.data;
      } else {
        console.log("Login fail");
        Toast.show({
          type: "error",
          text1: response.data.message,
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  static async Register(inputs) {
    try {
      const response = await axios.post(`${API_URL}/Register`, inputs);
      // const response = await axios.post(`https://eb88-171-239-142-13.ngrok-free.app/api/Authentication/Register`, inputs);
      console.log("register");

      if (response.data.isSuccess === true) {
        Toast.show({
          type: "success",
          text1: response.data.message,
        });
      } else {
        Toast.show({
          type: "error",
          text1: response.data.message,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
      });
    }
  }
}
export { AuthenticationService as default };
