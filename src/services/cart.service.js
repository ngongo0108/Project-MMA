import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = API_URL_ENV + `/Cart`;

class CartService {
  static async addToCart(quantity, productID) {
    const accessToken = await AsyncStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.post(`${API_URL}/AddProduct`, {
        productId: productID,
        quantity: quantity,
      });
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
        text1: "Something went wrong",
      });
    }
  }

  static async getItemInCart() {
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.get(`${API_URL}/GetItemsInCart`);

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
        text1: "Something sss went wrong",
      });
      console.log("sdsds", error);
    }
  }

  static async increaseProductInCart(productID) {
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    console.log("4545454545", productID);

    try {
      const response = await axios.put(
        `${API_URL}/IncreaseProductInCart?productId=${productID}`
      );
      console.log("asasasaas");
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
        text1: "Something add quantity went wrong",
      });
      console.log("quantity", error);
    }
  }

  static async decreaseProductInCart(productId) {
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.put(
        `${API_URL}/DecreaseProductInCart?productId=${productId}`
      );

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
        text1: "Something add quantity went wrong",
      });
      console.log("quantity", error);
    }
  }
}
export { CartService as default };
