import { View, Text, FlatList, Touchable, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height, width } = Dimensions.get('window')

export default function SliderDate() {

    const [data, setData] = useState([1, 2,3,4,5,6,7,8,9,10]);
    const [currentIndex, setCurrentIndex] = useState(0);
    function getIndex(index) {
        setCurrentIndex(index);
    }

    return (
        <View>
            <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{justifyContent: 'center'}}>
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {getIndex(index)}}
                                    style={{
                                        width: currentIndex == index ? 60 : 50,
                                        height: currentIndex == index ? 60 : 50,
                                        borderRadius: currentIndex == index ? 30 : 25,
                                        backgroundColor: currentIndex == index ? '#e6417b' : 'gray',
                                        marginLeft: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }} >
                                    <Text style={{fontSize: 15, fontWeight: 600, color: 'white'}}>{item}</Text>

                                </TouchableOpacity>
                            </View>
                        )
                    }}

                />
            </View>
        </View>
    )
}