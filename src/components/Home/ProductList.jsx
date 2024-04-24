import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '../ProductCard'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function ProductList() {
    const [data, setData] = useState([1, 1, 1, 1, 1]);
    const product = [
        {
            id: 1,
            name: "Milk",
            price: "100",
            image: "",
        },
        {
            id: 2,
            name: ""
        }
    ];

    return (
        <View>
            <Text>Categories</Text>
            <View style={{ height: hp }}>
                <FlatList
                    data={data}
                    horizontal 
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: 130, height: 150, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity disabled style={{ width: 100, height: 100, backgroundColor: '#e6417b', borderRadius: 10, }}>
                                    <ProductCard />
                                </TouchableOpacity>
                            </View>
                        )
                    }}

                />
            </View>
            
        </View>
    )
}