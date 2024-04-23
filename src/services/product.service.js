import axios from "axios";

import Toast from "react-native-toast-message";
import API_URL_ENV from "../configs/api";
const API_URL = API_URL_ENV + `/Product`;
const initialData = {
  totalPagesCount: 1,
  items: [],
};
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
        response.data.data.items.map((item) => {
          let imageArray = item.image.split(";");
          item.image = imageArray;
        });

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
    } finally {
      return initialData;
    }
  }
  static async getProductById(ProductId) {
    try {
      const response = await axios.get(`${API_URL}/GetProductByID`, {
        params: {
          id: ProductId,
        },
      });
      if (response.data.isSuccess === true) {
        let imageArray = response.data.data.image.split(";");
        response.data.data.image = imageArray;

        return response.data.data;
      } else {
        // toast.error(response.data.message);
      }
    } catch (error) {
      //   toast.error("Something went wrong");
    }
  }
}
export { ProductService as default };
