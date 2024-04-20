import React from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
    const navigation = useNavigation();
    return(
        <ScrollView style={{width:"100%"}}>
            <TouchableOpacity onPress={() => navigation.navigate("Change Password")}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <AntDesign name="key" size={24} color="#393E41" padding={15} />
                        <Text style={{fontSize: 20, fontWeight: 600, color: '#393E41'}}>Change Password</Text>
                    </View>
                    <AntDesign name="right" size={24} color="#393E41" marginRight={10}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("My Wallet")}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <AntDesign name="wallet" size={24} color="#393E41" padding={15} />
                        <Text style={{fontSize: 20, fontWeight: 600, color: '#393E41'}}>My Wallet</Text>
                    </View>
                    <AntDesign name="right" size={24} color="#393E41" marginRight={10}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Octicons name="list-ordered" size={24} color="#393E41" padding={15}/>
                        <Text style={{fontSize: 20, fontWeight: 600, color: '#393E41'}}>Orders</Text>
                    </View>
                    <AntDesign name="right" size={24} color="#393E41" marginRight={10}/>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
})
export default Settings;