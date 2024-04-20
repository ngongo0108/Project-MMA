import React, {useNavigation} from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";

const Orders = () => {
    return(
        <ScrollView style={{width:"100%"}}>
            <Text>Orders</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
})
export default Orders;