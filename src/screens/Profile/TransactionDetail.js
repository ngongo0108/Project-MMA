import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TransactionService } from "../../services";
import { FormatUtil } from "../../utils";
const TransactionDetailScreen = () => {
    const [transactions, setTransactions] = useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        const fetchData = async () => {
            const response = await TransactionService.getTransaction(1, 10);
            setTransactions(response.items);
        }
        fetchData()
    },[])
    return (
      <ScrollView>
        <View className="flex-row justify-between pt-2 bg-emerald-700 items-center rounded-b-2xl">
          <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-xl">Transactions</Text>
            <Text></Text>
          </View>
        </View>
        <ScrollView>
        <Text className='p-2 my-3 text-lg font-light'>Recent transactions</Text>
          {transactions.map((item) => (
            <View
              key={item.id.toString()}
              className="flex-row justify-between items-center px-5 py-3  border-y border-gray-200"
            >
              <View className="flex-row">
                <Entypo name="wallet" size={40} color="#C96308" />
                <View className="pl-3 w-52">
                  <Text className="text-sm font-semibold">
                    {item.description}
                  </Text>
                  <Text className="text-gray-500">
                    {FormatUtil.formateDateAndTime(item.creationDate)}
                  </Text>
                  <Text className="text-gray-500">
                    Balance Remain: {FormatUtil.formatDola(item.balanceRemain)}
                  </Text>
                </View>
              </View>
              {item.status == 1 ? (
                <Text className="text-sm font-semibold">
                  +<Text>{FormatUtil.formatDola(item.amount)}</Text>
                </Text>
              ) : (
                <Text className="text-sm font-semibold">
                  -<Text>{FormatUtil.formatDola(item.amount)}</Text>
                </Text>
              )}
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    );
}
export default TransactionDetailScreen;