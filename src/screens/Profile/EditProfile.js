import React, {useNavigation} from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const EditProfile = () => {
    return(
        <ScrollView>
            <View style={{ alignItems:'center', margin: 20}}>
                <Image style={{height: 180, width: 180, borderRadius: 100, position:'relative'}} source ={{uri: 'https://thewellesleynews.com/wp-content/uploads/2020/09/avatar.jpg'}}/>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={24} color="black" style={styles.camera}/>
                </TouchableOpacity>
                
            </View>
            <View>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.textInput}>John Doe</TextInput>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.textInput}>Thomeson John Doe</TextInput>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput}>john@yopmail.com</TextInput>
                <Text style={styles.text}>Phone number</Text>
                <TextInput style={styles.textInput}>(84+) 987 654 321</TextInput>
            </View>
            <View style={{padding: 10}}>
                <Button
                onPress={()=>{}}
                title="Save"
                color="#2290FF"
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textInput : {
        backgroundColor: '#fff', 
        padding: 10, 
        borderRadius: 10, 
        fontWeight: "400", 
        fontSize: 15,
        margin: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 15,
    },
    camera: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        right: -80,
    }
})
export default EditProfile;