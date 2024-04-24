import { View, Text, FlatList, Touchable, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height, width } = Dimensions.get('window')

export default function SliderDate({action}) {

    const [data, setData] = useState(["10:00", "11:00", "12:00", "13:30", "14:15", "15:00", "16:30", "17:00", "18:15",]);
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
                                    onPress={() => {getIndex(index); action(item)}}
                                    style={{
                                        width: currentIndex == index ? 60 : 50,
                                        height: currentIndex == index ? 60 : 50,
                                        borderRadius: currentIndex == index ? 10 : 5,
                                        backgroundColor: currentIndex == index ? '#e6417b' : 'pink',
                                        borderColor: '#e6417b',
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