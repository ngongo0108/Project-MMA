import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";

const API_URL = API_URL_ENV + `/Order`;
const initialData = [];
class OrderService {
  static async checkOut() {
    try {
      const response = await axios.get(`${API_URL}/CheckOut`);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error server",
      });
      return initialData;
    }
  }
}
export { OrderService as default };
