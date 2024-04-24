import { TouchableOpacity, Image, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon, ShoppingBagIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigation } from "@react-navigation/native";
const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{ width: wp(44), height: wp(44) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={{ uri: item.image[0] }}
        style={{ width: wp(44), height: wp(44), borderRadius: 35 }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      {item.status === 2 && (
        <TouchableOpacity className="absolute top-1 right-3 rounded-full p-3 bg-slate-400">
          <Text className="text-red-600 font-bold">Active</Text>
        </TouchableOpacity>
      )}
      <View className="justify-between px-1">
        <Text className="text-white textShadow">{item.name}</Text>
      </View>
      <View className="flex-row justify-between items-center px-1">
        <Text className="text-2xl font-semibold text-white">${item.price}</Text>
        <TouchableOpacity
          onPress={() => {
            // dispatch(getWatch(item.id));
            navigation.navigate("DetailProduct", { itemId: item.id });
          }}
        >
          <View className="bg-white p-3 rounded-full">
            <ShoppingBagIcon size="25" color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductCard;
