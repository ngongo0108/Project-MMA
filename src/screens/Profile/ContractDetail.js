import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, SafeAreaView, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ContractDetailScreen = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View className="flex-row justify-between mx-4 items-center">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{backgroundColor: '#fff', padding: 15, borderRadius: 10, marginTop: 10, flexDirection:'row', flex: 1}}
                >
                    <AntDesign name="left" size={24} color="black" />
                    <Text style={{fontSize: 20, marginLeft: 10}}>Contract Detail</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', margin: 10}}>
                <Text style={{fontSize: 23, fontWeight: "600"}}>HOP DONG MUA BAN SUA CHO BE</Text>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', margin: 10}}>
                    <Text>Ben A: Nguyen Van A</Text>
                    <Text>Email: nguyenvana@gmail.com</Text>
                    <Text>Phone number: 0926 000 001</Text>
                    <Text>Address: Block E2a-7, D1 Street Saigon Hi-tech Park, Long Thanh My Ward, District 9, Ho Chi Minh City, Vietnam</Text>
                    <Text>Decription: Trong thời gian 3 tháng đầu khi mang thai, có rất nhiều mẹ gặp phải tình trạng chán ăn, mệt mỏi. Nhưng theo chu kỳ phát triển, giai đoạn này thai nhi cần bổ sung nhiều dưỡng chất. Vậy nên, mẹ có thể tìm hiểu các loại sữa bầu để bổ sung dinh dưỡng cho bé. Dưới đây là các loại sữa tốt cho bà bầu 3 tháng được tin dùng nhiều nhất.</Text>
                </View>
                <FlatList
                    data={[1,2,3]}
                    renderItem={()=> (
                        <View style={{flexDirection: 'row', margin: 5, padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: '#fff'}}>
                            <Image style={{height: 100, width: 100, marginRight: 10}} source={{uri: 'https://www.kidsplaza.vn/blog/wp-content/uploads/2022/05/cac-loai-sua-tot-cho-ba-bau.jpg'}}/>
                                <View>
                                    <Text style={{fontSize: 15, fontWeight: "500"}}>Sữa Abbott Similac Mom IQ Hoa Kỳ</Text>
                                    <Text>Price: $999 999 999</Text>
                                    <Text>Quantity: 100</Text>
                                </View>
                            </View>
                        )}
                    />
                <View className ="p-10 m-10 flex-row">
                    <TouchableOpacity style={{width: '50%'}}>
                        <Text style={{backgroundColor: '#E62B58', borderRadius: 10, padding: 10, margin: 10, color: '#fff', textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '50%'}}>
                        <Text style={{backgroundColor: '#1EB781', borderRadius: 10, padding: 10, margin: 10, color: '#fff', textAlign: 'center'}}>Approve</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ContractDetailScreen;