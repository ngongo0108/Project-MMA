import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = API_URL_ENV + `/User`;
const initialData = [];
class UserService {
  static async getInfo() {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.get(`${API_URL}/GetUserInformationByLogin`);
      if (response.data.isSuccess) {
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
      return initialData;
    }
  }
  static async ChangeInfo(user) {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.put(`${API_URL}/UpdateUser`, {
        name: user.name,
        address: user.address,
        dateOfBird: user.dateOfBird,
        gender: user.gender,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
      if (response.data.isSuccess) {
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
        text1: "Error server",
      });
    }
  }
}
export { UserService as default };
