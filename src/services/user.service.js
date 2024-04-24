import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = API_URL_ENV + `/User`;

class UserService {

  static async getVoucherByLogin() {
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.get(`${API_URL}/GetUserInformationByLogin`);

      if (response.data.isSuccess === true) {
        Toast.show({
          type: "success",
          text1: response.data.message,
        });
        return response.data;
      } else {
        Toast.show({
          type: "error",
          text1: response.data.message,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Something user info went wrong",
      });
      console.log("User", error);
    }
  }

  
}
export { UserService as default };
