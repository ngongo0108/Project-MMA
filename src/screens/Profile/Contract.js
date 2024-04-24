import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity, 
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ContractService } from "../../services";
const ContractScreen = () => {
  const navigation = useNavigation();
  const [contracts, setContracts] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      const ressponse = await ContractService.getContract(1,10);
      // console.log("contract: ", ressponse);
      setContracts(ressponse);
    }
    fetchData()
  },[])
  return (
    <ScrollView>
      <View className="flex-row justify-between pt-2 bg-orange-600 items-center rounded-b-2xl">
        <View className="flex-row justify-between items-center px-3 py-2 rounded-md flex-1 mt-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-lg">Contract</Text>
          <Text></Text>
        </View>
      </View>

      <View>
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: "#fff",
            borderRadius: 30,
            borderWidth: 0.5,
            position: "relative",
          }}
          placeholder=" Search"
          value=""
        />
        <TouchableOpacity style={{ position: "absolute", top: 22, right: 20 }}>
          <AntDesign name="search1" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Contract Detail")}>
        <View
          style={{
            padding: 20,
            margin: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "green",
            backgroundColor: "#fff",
          }}
        >

          <View style={{ flexDirection: "row", margin: 10 }}>
            <AntDesign
              name="filetext1"
              size={24}
              color="black"
              paddingRight={10}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              HOP DONG MUA BAN SUA CHO BE
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#1EB781",
                borderRadius: 10,
                padding: 3,
                margin: 3,
              }}
            >
              succeed
            </Text>
            <Text
              style={{
                backgroundColor: "#F6A92B",
                borderRadius: 10,
                padding: 3,
                margin: 3,
              }}
            >
              status order
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: "300", fontSize: 18 }}>
              Pay:{" "}
              <Text style={{ fontWeight: "500", fontSize: 25, color: "red" }}>
                $ 999 999 999
              </Text>{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contract Detail")}>
        <View
          style={{
            padding: 20,
            margin: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "red",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flexDirection: "row", margin: 10 }}>
            <AntDesign
              name="filetext1"
              size={24}
              color="black"
              paddingRight={10}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              HOP DONG MUA BAN SUA CHO BE
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#E62B58",
                borderRadius: 10,
                padding: 3,
                margin: 3,
              }}
            >
              cancel
            </Text>
            <Text
              style={{
                backgroundColor: "#F6A92B",
                borderRadius: 10,
                padding: 3,
                margin: 3,
              }}
            >
              status order
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: "300", fontSize: 18 }}>
              Pay:{" "}
              <Text style={{ fontWeight: "500", fontSize: 25, color: "red" }}>
                $ 999 999 999
              </Text>{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default ContractScreen;
