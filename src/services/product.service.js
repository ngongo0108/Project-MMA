import axios from "axios";

import Toast from "react-native-toast-message";
import API_URL_ENV from "../configs/api";
const API_URL = API_URL_ENV + `/Product`;
class ProductService {
  static async getProductsByPage(page, searchName, category, price) {
    try {
      const response = await axios.get(`${API_URL}/FilterProducts2`, {
        params: {
          page: page,
          productName: searchName,
          categoryId: category.id,
          minPrice: price.min,
          maxPrice: price.max,
          pageSize: 10,
        },
      });
      if (response.data.isSuccess === true) {
        return response.data.data;
      } else {
        Toast.show({
          type: "error",
          text1: response.data.messages,
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
export { ProductService as default };
