import React from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from "react-native";

const ChangePass = () => {
    const [text, onChangeText] = React.useState('');
    return(
        <ScrollView style={{width:"100%"}}>
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
export default ChangePass;