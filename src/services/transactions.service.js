import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = API_URL_ENV + `/Transaction`;

class TransactionService {
    static async getTransaction(PageIndex, PageSize) {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            const response = await axios.get(`${API_URL}/FilterTransactionByLogin?PageIndex=${PageIndex}&PageSize=${PageSize}`);

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
                text1: "Error server Transaction",
            });
        }
    }
}
export { TransactionService as default };