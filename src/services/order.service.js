import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = API_URL_ENV + `/Order`;
const API_URL_Detail = API_URL_ENV + `/OrderDetail`;
const initialData = {
  totalPagesCount: 0,
  items: [],
};

class OrderService {
  static async checkOut(inputs) {
    const accessToken = await AsyncStorage.getItem("accessToken");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.post(`${API_URL}/CheckOut`, inputs);

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
        text1: "Error",
      });
    }
  }

  static async getOrders(StatusCode, PageSize, PageIndex) {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.get(
        `${API_URL}/GetOrderFilterByLogin?StatusCode=${StatusCode}&PageSize=${PageSize}&PageIndex=${PageIndex}`
      );
      if (response.data.isSuccess) {
        const updatedItems = await Promise.all(
          response.data.data.items.map(async (item) => {
            const detail = await axios.get(
              `${API_URL_Detail}/GetOrderDetailsById?orderId=${item.id}`
            );
            let imageArray = detail.data.data[0].product.image.split(";");
            item.image = imageArray[0];
            item.productName = detail.data.data[0].product.name;
            item.description = detail.data.data[0].product.description;
            return item;
          })
        );

        return { ...response.data.data, items: updatedItems };
      }
    } catch {
      return initialData;
    }
  }
  static async getOrderById(orderId) {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.get(
        `${API_URL}/GetOrderById?orderId=${orderId}`
      );
      if (response.data.isSuccess) {
        return response.data.data;
      }
    } catch (error) {}
  }
  static async getOrderDetail(orderId) {
    try {
      const response = await axios.get(
        `${API_URL_Detail}/GetOrderDetailsById?orderId=${orderId}`
      );
      if (response.data.isSuccess) {
        let imageArray = response.data.data[0].product.image.split(";");
        response.data.data[0].image = imageArray;
        response.data.data[0].productName = response.data.data[0].product.name;
        response.data.data[0].description =
          response.data.data[0].product.description;
        return response.data.data[0];
      }
    } catch (error) {}
  }
  static async getTracking(orderId) {
    try {
      const response = await axios.get(
        `${API_URL_Detail}/GetOrderTrackingById?orderId=${orderId}`
      );
      return response.data.data;
    } catch (error) {}
  }
  static async cancelOrder(orderId) {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.put(`${API_URL}/UpdateOrderStatus`, {
        id: orderId,
        statusCode: 3,
      });
      if (response.data.isSuccess) {
        Toast.show({
          type: "success",
          text1: "Cancel Order",
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
export { OrderService as default };
