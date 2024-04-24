import React, {useNavigation} from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const MyWalletScreen = () => {
    return(
        <ScrollView style={{width:"100%"}}>
        <View style={{backgroundColor: '#F9D2E5', flexDirection: 'column', justifyContent:'center', alignItems: 'center', paddingTop: 30}}>
            <Text style={{fontSize: 15, fontWeight: "300", padding: 10}}>Availble Balance</Text>
            <Text style={{fontSize: 25, fontWeight: "500"}}><FontAwesome name="dollar" size={15} color="black" /> 999 999 999</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 15, padding: 10}}><AntDesign name="plus" size={24} color="black" /> ADD MONEY</Text>
            </TouchableOpacity>
        </View>
            
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
export default MyWalletScreen;