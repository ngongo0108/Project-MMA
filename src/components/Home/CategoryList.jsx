import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window')

export default function CategoryList() {

    const [data, setData] = useState([1, 1, 1, 1, 1])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <View style={{ height: 125 }}>
                <FlatList
                    data={data}
                    horizontal 
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: 130, height: 120, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity disabled style={{ width: 100, height: 100, backgroundColor: '#e6417b', borderRadius: 10, }}>
                                    <Image source={{ uri: 'https://i.pinimg.com/736x/a7/ca/c6/a7cac667602d2e00040d0c438002ed2a.jpg' }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        height: 150,
    },
    title: {
        marginLeft: 15, 
        marginTop: 5, 
        fontSize: 16, 
        fontWeight: '600',
    }
})