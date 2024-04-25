import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, SafeAreaView, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ContractService } from "../../services";
const ContractDetailScreen = () => {
    const route = useRoute();
    const [contractDetail, setContractDetail] = useState({
        contractID: "",
        title: "",
        description: "",
        value: 0,
        pay: 0,
        statusContract: 1,
        customerId: "",
        customerContractName: "",
        customerOrderProcessName: "",
        phoneNumber: "",
        email: "",
        address: "",
        statusOrderProcessing: {
            name: "",
            statusCode: 1
        },
        item: [
        {
            productId: "",
            productName: "",
            price: 0,
            image: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
            quantity: 0
        }
        ]
    });
    const navigation = useNavigation();
    useEffect(()=> {
        const fetchContractItem = async () => {
            const itemDetail = await ContractService.getContractItem(route.params.item.contractID);
            setContractDetail(itemDetail)
        }
        fetchContractItem(contractDetail);
    },[]);
    const handleChange = async () => {
        try {
          await UserService.ChangePassword(form);
          dispacth(logout());
        } catch (error) {
          console.error("Error updating user information:", error);
        }
      };
    const handleChangeStatus = async (contracID, status) => {
        // console.log(contracID,' ', status);
        // navigation.navigate("Contract")
        try {
            await ContractService.updateStatusContract(contracID, status);
            navigation.navigate("Contract")
        } catch (error) {
            console.error("Update failed! ", error);
        }
    } 
    return(
        <SafeAreaView>
            <View className="flex-row justify-between pt-2 bg-orange-600 items-center rounded-b-2xl">
                <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl ">Detail</Text>
                    <Text></Text>
                </View>
            </View>   
            <View style={{flexDirection: 'column', margin: 10}}>
            <View className='items-center'>
            <Text style={{fontSize: 23, fontWeight: "600"}}>{contractDetail.title}</Text>
            </View>
                
                <View style={{flexDirection: 'column', alignItems: 'flex-start', margin: 10}}>
                    <Text>Customer Name: {contractDetail.customerContractName}</Text>
                    <Text>Email: {contractDetail.email}</Text>
                    <Text>Phone number: {contractDetail.phoneNumber}</Text>
                    <Text>Address: {contractDetail.address}</Text>
                    <Text>Amount: {contractDetail.value}</Text>
                    <Text>Payment: ${contractDetail.pay}</Text>
                    <Text>Decription: {contractDetail.description}</Text>
                </View>
                {
                    contractDetail.item.map((item) => (
                        <View style={{flexDirection: 'row', margin: 5, padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: '#fff'}}>
                            <Image style={{height: 100, width: 100, marginRight: 10}} source={{uri: item.image}}/>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: "500"}}>{item.productName}</Text>
                                <Text>Price: ${item.price}</Text>
                                <Text>Quantity: {item.quantity}</Text>
                            </View>
                        </View>
                    ))
                }
                <View className ="flex-row">
                    <TouchableOpacity 
                    onPress={()=> handleChangeStatus(contractDetail.contractID, 2)}
                    style={{width: '50%'}}>
                        <Text style={{backgroundColor: '#E62B58', borderRadius: 10, padding: 10, margin: 10, color: '#fff', textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> handleChangeStatus(contractDetail.contractID, 3)}
                    style={{width: '50%'}}>
                        <Text style={{backgroundColor: '#1EB781', borderRadius: 10, padding: 10, margin: 10, color: '#fff', textAlign: 'center'}}>Approve</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ContractDetailScreen;