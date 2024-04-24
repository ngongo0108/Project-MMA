import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryService } from '../../services';

const { height, width } = Dimensions.get('window')
const CategoryList = () => {

    const [data, setData] = useState([1, 1, 1, 1, 1])
    const [activeCategory, setActiveCategory] = useState();
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await CategoryService.getCategories();
        // console.log("category");
        // console.log(response)
        setCategories(response);
    };


    useEffect(() => {
        fetchCategories();
    }, []);
    useEffect(() => {
        if (categories?.length > 0) setActiveCategory(categories[0]);
    }, [categories]);

    const nameAndLinks = categories.map((cate) => {
        const [name, link] = cate.name.split(';');
        return { name, link };
    });


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <View style={{ height: 125 }}>
                <FlatList
                    data={nameAndLinks}
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: 130, height: 120, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity disabled style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    {/* {item.title} */}
                                    {/* <Text>{item.name}</Text> */}
                                    <Image style={{width: '80%', height: '80%'}} source={{ uri: `${item.link}` }} />
                                </TouchableOpacity>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
export default CategoryList

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