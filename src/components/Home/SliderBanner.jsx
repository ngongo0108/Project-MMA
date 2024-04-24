import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window')

export default function SliderBanner() {

    const [data, setData] = useState([1, 1, 1, 1, 1])
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={{ backgroundColor: '#fff', marginVertical: 5 }}>
            <View style={{ height: height / 4, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: width - 40, height: currentIndex == index ? ((height / 4) + 15) : (height/4), justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity disabled style={{ width: '90%', height: '90%', backgroundColor: '#e6417b', borderRadius: 10, }}>
                                    <Image style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10,}} source={{ uri: 'https://marketplace.canva.com/EAFoiE2zJcc/1/0/1600w/canva-yellow-playful-color-mom-and-baby-shop-business-banner-ZlevGgv_Xd8.jpg' }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
            </View>
            <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={{
                                width: currentIndex == index ? 10 : 8,
                                height: currentIndex == index ? 10 : 8,
                                borderRadius: currentIndex == index ? 5 : 4,
                                backgroundColor: currentIndex == index ? '#e6417b' : 'gray',
                                marginLeft: 5
                            }}>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

