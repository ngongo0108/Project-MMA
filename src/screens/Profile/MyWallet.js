import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { TransactionService } from "../../services";
import { FormatUtil } from "../../utils";
const WalletScreen = () => {
  const route = useRoute();
  const user = route.params.user;
  const [transactions, setTransactions] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await TransactionService.getTransaction(1, 3);
      setTransactions(response.items);
    };
    fetchData();
  }, []);
  return (
    <ScrollView>
      <View className="flex-row justify-between bg-emerald-700 items-center rounded-b-2xl">
        <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-xl ml-12">My Wallet</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Recharge")}>
            <Text className="text-white text-lg rounded-md p-1">
              Recharge
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-5">
        <View className="justify-center items-center">
          <View
            className="bg-green-600 rounded-xl p-5"
            style={{ height: 210, width: 350 }}
          >
            <Text className="text-gray-300 text-sm">Available Balance</Text>
            {transactions?.length > 1 ? (
              <Text className="text-white text-4xl py-3">
                ${transactions[0].balanceRemain}
              </Text>
            ) : (
              <Text className="text-white text-4xl py-3">$0</Text>
            )}

            <Text className="py-2 text-4xl">**** **** ****</Text>
            <Text className="text-white text-xl">{user.name}</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center mt-10 mb-3">
          <Text className="text-xl text-gray-600 ">Last Transactions</Text>
          {transactions?.length < 1 ? (
            <Text></Text>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Transaction Detail", { transactions })
              }
            >
              <Text className="text-sm text-blue-600">See more</Text>
            </TouchableOpacity>
          )}
        </View>
        {transactions.length === 0 ? (
          <Image
            style={{ width: 370, height: 350 }}
            source={require("../../../assets/emptyTransaction.png")}
          />
        ) : (
          <View className="rounded-xl shadow-md pt-3 flex-1 h-96">
            {transactions.length === 0 ? (
              <Image
                style={{ width: 370, height: 350 }}
                source={require("../../../assets/emptyTransaction.png")}
              />
            ) : (
              transactions.map((item) => (
                <View
                  key={item.id.toString()}
                  className="flex-row justify-between items-center px-5 py-3"
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
                        Balance Remain: {item.balanceRemain}
                      </Text>
                    </View>
                  </View>
                  {item.status == 1 ? (
                    <Text className="text-sm font-semibold">
                      +<Text>${item.amount}</Text>
                    </Text>
                  ) : (
                    <Text className="text-sm font-semibold">
                      -<Text>${item.amount}</Text>
                    </Text>
                  )}
                </View>
              ))
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default WalletScreen;
