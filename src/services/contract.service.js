import axios from "axios";
import API_URL_ENV from "../configs/api";
import Toast from "react-native-toast-message";

const API_URL = API_URL_ENV + `/Contract`;
const initialData = [];
class ContractService {
    static async getContract(pageIndex, pageSize) {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            const response = await axios.get(`${API_URL}/GetContractsByLoginCustomer?pageIndex=${pageIndex}&pageSize=${pageSize}`);
            if (response.data.isSuccess) {
                return response.data.data.items;
            } else {
                Toast.show({
                type: "error",
                text1: response.data.message,
                });
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error server Contract",
            });
            return initialData;
        }
    }
    static async getContractItem(contractId) {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            const response = await axios.get(`${API_URL}/GetContractItem?contractId=${contractId}`, {
                
            });
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
    static async updateStatusContract(contractId, status) {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            const response = await axios.put(`${API_URL}/UpdateStatusContract?contractId=${contractId}&status=${status}`);
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
export { ContractService as default };
