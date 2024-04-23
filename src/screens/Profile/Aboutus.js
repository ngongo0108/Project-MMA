import React from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const AboutusScreen = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View className="flex-row justify-between mx-4 items-center">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{backgroundColor: '#fff', padding: 15, borderRadius: 10, marginTop: 10, flexDirection:'row', flex: 1}}
            >
                <AntDesign name="left" size={24} color="black" />
                <Text style={{fontSize: 20, marginLeft: 10}}> About Us</Text>
            </TouchableOpacity>
            </View>
            <View style={{padding: 20}}>
                <Image style={{height: 300, width: '100', borderRadius: 20}} source ={{uri: 'https://thewellesleynews.com/wp-content/uploads/2020/09/avatar.jpg'}}/>
                <View >
                    <Text style={{ paddingBottom: 10, fontSize: 15}}>
                    <Text style={{ fontSize: 25}}>W</Text>
                    elcome to the Milk Shop for Mom and Baby.              
                    </Text>
                    <Text style={styles.text}>
                    At the Milk Shop for Mom and Baby, we strive to provide a comprehensive and nurturing shopping experience tailored to the needs of both mothers and their babies. Our store offers a wide range of products designed to support the health and well-being of mothers during pregnancy, breastfeeding, and beyond, as well as cater to the needs of infants and young children.
                    </Text>
                    <Text style={styles.text}>
                    At the Milk Shop for Mom and Baby, we prioritize customer satisfaction and strive to create a supportive and welcoming environment for mothers and families. Our knowledgeable staff is dedicated to providing personalized assistance and guidance to ensure that every customer finds the products that best suit their needs.
                    </Text>
                    <Text style={styles.text}>
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