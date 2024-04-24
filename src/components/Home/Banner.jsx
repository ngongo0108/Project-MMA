import { View, Text, Dimensions, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window')

export default function Banner() {

    const [data, setData] = useState([1, 1, 1, 1, 1]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Arrivals</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: height / 3 }}>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: width , height: height / 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity disabled style={{ width: '90%', height: '90%', backgroundColor: '#e6417b', borderRadius: 10, }}>

                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    title: {
        marginLeft: 20, 
        marginTop: 5, 
        fontSize: 16, 
        fontWeight: '600',
    }
})