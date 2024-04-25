import React, {useState, useCallback} from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity, 
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ContractService } from "../../services";

const ContractScreen = () => {
  const mapStatus = {
    1: 'processing',
    2: 'cancelled',
    3: 'accepted',
    4: 'requestFixing'
  }
  const navigation = useNavigation();
  const [contracts, setContracts] = useState([]);
  
  const fetchData = async () => {
    const ressponse = await ContractService.getContract(0,10);
    setContracts(ressponse);
  }
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );
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
      {
        contracts.length === 0 ? (
          <Image
            style={{ width: 370, height: 350 }}
            source={require("../../../assets/emptyTransaction.png")}
          />
        ): (
            contracts.map((item) => (
            <TouchableOpacity key={item.contractID} onPress={() => navigation.navigate("Contract Detail",{item})}>
            <View
              style={{
                padding: 20,
                margin: 10,
                backgroundColor: "#fff",
                borderRadius: 10,
                backgroundColor: "#fff",
              }}
            >

              <View>
                <View style={{ flexDirection: "row", margin: 10 }}>
                <AntDesign
                  name="filetext1"
                  size={24}
                  color="black"
                  paddingRight={10}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold", color:'black' }}>
                  {item.title}
                </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
              {
                item.statusContract===1? (
                  <Text className='bg-yellow-300 rounded-md p-1 m-1'>
                    {mapStatus[item.statusContract]}
                  </Text>
                ):(
                  item.statusContract===2? (
                    <Text className='bg-red-300 rounded-md p-1 m-1'>
                    {mapStatus[item.statusContract]}
                    </Text>
                  ):(
                    item.statusContract===3? (
                    <Text className='bg-green-300 rounded-md p-1 m-1'>
                    {mapStatus[item.statusContract]}
                    </Text>
                  ):(
                  <Text className='bg-orange-300 rounded-md p-1 m-1'>
                    {mapStatus[item.statusContract]}
                  </Text>
                  ))
                )
              }
                <Text className='bg-orange-600 rounded-md p-1 m-1'>
                  {item.statusOrderProcessing.name}
                </Text>
              </View>
              </View>
              <View>
                <Text className='text-lg text-gray-500'>Customer Name: {item.customerContractName}</Text>
                <Text className='text-lg text-gray-500'>Order Name: {item.customerOrderProcessName}</Text>
              </View>
              <View className='flex-row justify-between items-center'>
              <View>
                <Text style={{ fontWeight: "300", fontSize: 18 }}>
                  Amount:{" "}
                  <Text style={{ fontSize: 18, color: "black" }}>
                    {item.value}
                  </Text>
                </Text>
              </View>
              <View>
                <Text style={{ fontWeight: "300", fontSize: 18 }}>
                  Pay:{" "}
                  <Text style={{ fontWeight: "500", fontSize: 25, color: "red" }}>
                    $ {item.pay}
                  </Text>
                </Text>
              </View>
              </View>
              
            </View>
            </TouchableOpacity>
          ))

        )
      }
    </ScrollView>
  );
};
export default ContractScreen;
