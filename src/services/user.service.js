import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = API_URL_ENV + `/User`;
const initialData = [];
class UserService {
  static async getInfo() {
    console.log("userService");
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.get(`${API_URL}/GetUserInformationByLogin`);
      console.log("userresponse", response);
      if (response.data.isSuccess) {
        return response.data.data;
      } else {
        Toast.show({
          type: "error",
          text1: response.data.message,
        });
      }
    } catch (error) {
      console.log("error user: ", error);
      Toast.show({
        type: "error",
        text1: "Error server",
      });
      return initialData;
    }
  }
}
export { UserService as default };
