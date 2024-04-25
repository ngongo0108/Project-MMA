import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
import { UserService } from "../../services";
const RechargeScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState({
        userName:'',
    });
    useEffect(()=>{
        const fetchDataUser = async () => {
            const response = await UserService.getInfo();
            setUser(response);
        }
        fetchDataUser()
    },[])
    return(
        <ScrollView>
            <View className="flex-row justify-between pt-2 bg-emerald-700 items-center rounded-b-2xl">
                <View className="flex-row justify-between items-center p-3 rounded-md flex-1 mt-5">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl ">Recharge</Text>
                    <Text></Text>
                </View>
            </View>   
            <View className='items-center m-5' >
                
                <View className='bg-white p-4 rounded-xl shadow-md pt-28 mt-28 relative'>
                    <Text className='m-1'>
                    To deposit money into your account, please use your mobile app and scan the QR code below. Upon successful scanning, the corresponding amount will be transferred to your account and ready for immediate use.
                    </Text>
                    <Text className='m-1'>
                    If you encounter any issues during this process, please contact our support team for timely assistance.
                    </Text>
                </View>
                <Image
                    source={{
                    uri: `https://momosv3.apimienphi.com/api/QRCode?phone=0911413402&amount=0&note=${user.userName}`,
                    }}
                    style={{height: 190, width: 200}} 
                    className='rounded-2xl m-5 absolute' 
                />
            </View>
            
        </ScrollView>
    )
}
export default RechargeScreen;