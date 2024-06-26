import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const { height, width } = Dimensions.get('window')

export default function SliderBanner() {
    const navigation = useNavigation();

    const [data, setData] = useState([
        'https://marketplace.canva.com/EAFoiE2zJcc/1/0/1600w/canva-yellow-playful-color-mom-and-baby-shop-business-banner-ZlevGgv_Xd8.jpg', 
        'https://www.shutterstock.com/image-vector/3d-vector-cute-baby-product-600nw-2340974895.jpg', 
        'https://static.vecteezy.com/system/resources/thumbnails/041/930/836/small/baby-items-horizontal-web-banner-kid-toys-booties-diapers-ball-pacifier-bodysuit-pyramid-and-other-newborn-elements-illustration-for-header-website-cover-templates-in-modern-design-vector.jpg', 
        'https://img.freepik.com/premium-vector/baby-goods-sale-banner-with-place-text-kids-store-vector-poster-with-hand-drawn-illustrations_255592-854.jpg', 
        'https://www.shutterstock.com/image-vector/baby-goods-horizontal-sale-banner-260nw-1171773772.jpg',
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={{ backgroundColor: '#fff', marginVertical: 5 }}>
            <View style={{ height: height / 4 + 10, justifyContent: 'center', alignItems: 'center' }}>
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
                                <TouchableOpacity onPress={() => {navigation.navigate('Products')}} style={{ width: '90%', height: '90%', backgroundColor: '#e6417b', borderRadius: 10, }}>
                                    <Image style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10,}} source={{ uri: `${item}` }} />
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

