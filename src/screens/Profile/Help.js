import React from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const HelpScreen = () => {
    const navigation = useNavigation();
    return(
        <ScrollView style={{width:"100%"}}>
            <View className="flex-row justify-between mx-4 items-center">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{backgroundColor: '#fff', padding: 15, borderRadius: 10, marginTop: 10, flexDirection:'row', flex: 1}}
            >
                <AntDesign name="left" size={24} color="black" />
                <Text style={{fontSize: 20, marginLeft: 10}}>Helps & Contact Us</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Feather name="phone-call" size={24} color="#393E41" paddingLeft={15} />
                    <Text style={{fontSize: 15, color: '#393E41', padding: 10}}>(84+) 123 456 789</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <MaterialIcons name="bookmark-border" size={24} color="#393E41" paddingLeft={15} />
                    <Text style={{fontSize: 15, color: '#393E41', padding: 10, width: 360}}> Block E2a-7, D1 Street Saigon Hi-tech Park, Long Thanh My Ward, District 9, Ho Chi Minh City, Vietnam</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <AntDesign name="mail" size={24} color="#393E41" paddingLeft={15} />
                    <Text style={{fontSize: 15, color: '#393E41', padding: 10}}>contact@gmail.com</Text>
                </View>
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
export default HelpScreen;