import React from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const ChangePassScreen = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    return(
        <ScrollView style={{width:"100%"}}>
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{backgroundColor: '#fff', padding: 15, borderRadius: 10, marginTop: 10, flexDirection:'row', flex: 1}}
          >
            <AntDesign name="left" size={24} color="black" />
            <Text style={{fontSize: 20, marginLeft: 10}}> Change your password</Text>
          </TouchableOpacity>
        </View>
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>Old Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={styles.text}>New Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <View style={{padding: 10}}>
                    <Button
                    onPress={()=>{}}
                    title="Confirm"
                    color="#2290FF"
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 15,
    },
})
export default ChangePassScreen;