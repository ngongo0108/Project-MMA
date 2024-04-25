import React from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const AboutusScreen = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View className="flex-row justify-between pt-2 bg-blue-500 items-center rounded-b-2xl">
                <View className="flex-row justify-between items-center px-3 py-2 rounded-md flex-1 mt-5">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="text-lg">About Us</Text>
                    <Text></Text>
                </View>
            </View>  
            <View className='m-5' >
                <Image style={{height: 300, width: '100', borderRadius: 20}} source ={require("../../../assets/logo.jpg")}/>
                <View className='my-3'>
                    <Text className='py-2 text-sm'>
                    <Text className='text-3xl'>W</Text>
                    elcome to the Milk Shop for Mom and Baby.              
                    </Text>
                    <Text className='pb-1 text-sm'>
                    At the Milk Shop for Mom and Baby, we strive to provide a comprehensive and nurturing shopping experience tailored to the needs of both mothers and their babies. Our store offers a wide range of products designed to support the health and well-being of mothers during pregnancy, breastfeeding, and beyond, as well as cater to the needs of infants and young children.
                    </Text>
                    <Text className='pb-1 text-sm'>
                    At the Milk Shop for Mom and Baby, we prioritize customer satisfaction and strive to create a supportive and welcoming environment for mothers and families. Our knowledgeable staff is dedicated to providing personalized assistance and guidance to ensure that every customer finds the products that best suit their needs.
                    </Text>
                    <Text className='pb-1 text-sm'>
                    Whether you're a new mom embarking on the journey of motherhood or an experienced parent looking for trusted products, the Milk Shop for Mom and Baby is here to support you every step of the way. Welcome to our store, where motherhood and babyhood are celebrated and cherished.
                    </Text>
                </View>
            </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#2D2D2F',
        fontSize: 17, 
        fontWeight:'bold'
    },
    text:{
        paddingBottom: 5, 
        fontSize: 15
    }
})
export default AboutusScreen;