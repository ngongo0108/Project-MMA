import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";

const API_URL = API_URL_ENV + `/Category`;

class CategoryService {
  static async getCategories() {
    try {
      const response = await axios.get(`${API_URL}/GetCategories`);
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
export { CategoryService as default };
