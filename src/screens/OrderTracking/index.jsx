import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  DocumentTextIcon,
  CubeIcon,
  TruckIcon,
  CheckCircleIcon,
  LocationMarkerIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
const OrderStatus = () => {
  const navigation = useNavigation();
  const iconMapping = {
    "Order Placed": DocumentTextIcon,
    "Order Packed": CubeIcon,
    "On the Way": TruckIcon,
    "Product Delivered": CheckCircleIcon,
  };
  const TrackingStep = ({ item, index }) => {
    const { title, description, time } = item;
    const IconComponent = iconMapping[title];
    return (
      <View
        key={index}
        style={{ height: hp(10) }}
        className="flex-row  relative "
      >
        <View className="relative flex-col items-center">
          <View className="z-10 bg-teal-500 p-3 h-1/2 rounded-full">
            <IconComponent color="#4F46E5" height={30} width={30} />
          </View>
          {index + 1 !== trackStep.length && (
            <>
              <View className=" bg-teal-500 h-1/2  w-1 "></View>
              <View className="absolute top-1/2 -mt-1.5 w-1 h-6 bg-transparent" />
            </>
          )}
        </View>
        <View className="flex-1 pl-4 ">
          <Text className="font-bold">{title}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="text-gray-500">{time}</Text>
        </View>
      </View>
    );
  };
  const trackStep = [
    {
      title: "Order Placed",
      description: "We have received your order",
      time: "Jul 21 04:40 PM",
    },
    {
      title: "Order Packed",
      description: "Your Product packed and ready to shipped",
      time: "Jul 21 04:40 PM",
    },
    {
      title: "On the Way",
      description:
        "Your Order is placed successfully. Our Courier Partner will soon deliver the product",
      time: "Jul 21 04:40 PM",
    },
    {
      title: "Product Delivered",
      description: "Our Courier Partner will deliver your product on",
      time: "Jul 21 04:40 PM",
    },
  ];
  return (
    <>
      <SafeAreaView className="flex-1">
        <StatusBar style={"light"} />
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <ChevronLeftIcon size="23" stroke={50} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView className="flex-1">
          <View className="mt-3">
            <View className="w-full items-center">
              <Text className="text-lg font-bold">
                Order Id - OD45126581664902
              </Text>
            </View>

            <View className="flex-row  my-2 border-y border-gray-200 py-3 px-5">
              <Image
                style={{ width: wp(20), height: hp(12) }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrdJRnYIabd-CM0w30Gz5HleYz9mGyP0fiLw2aaErOOlLTJA&s",
                }}
                className=" rounded-3xl mr-2"
              />
              <View
                style={{ width: wp(70), height: hp(12) }}
                className="flex items-start justify-between "
              >
                <Text className="font-bold text-xl">
                  Men's Long-Sleeve Shirt Pack
                </Text>
                <Text className="text-gray-700">
                  Product Description Men's Long-Sleeve Shirt Pack
                  twodxxxxxxxxxxx Men's Long-Sleeve Shirt Pack twodxxxxxxxxxxx
                  Men's Long-Sleeve Shirt Pack
                </Text>
                <View className="w-full flex-row justify-between">
                  <Text className="bg-slate-200 p-1 rounded-lg">
                    Quantity : 10
                  </Text>
                  <Text className=" bg-slate-200 p-1 rounded-lg text-sm  font-bold">
                    $180
                  </Text>
                </View>
              </View>
            </View>
            <View className="border-b border-gray-200">
              <View className="rounded-xl bg-white my-4 mx-3 p-3 shadow ">
                <Text className="text-xl font-bold pb-3 ">
                  Track Your Order
                </Text>

                <View className="relative">
                  {trackStep.map((item, index) => {
                    return (
                      <View key={index}>
                        <TrackingStep item={item} index={index} />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
          <View className="p-5 bg-white rounded-3xl shadow  mx-3">
            <Text className="text-lg font-semibold ml-2">Delivery Address</Text>
            <View className="flex-row items-center">
              <View className="bg-black">
                <Image
                  source={require("../../../assets/house.jpg")}
                  style={{ height: 50, width: 50 }}
                />
              </View>

              <View className="mt-3 ml-8 ">
                <Text className="font-semibold">Brandon Carl</Text>
                <Text>Email - chotrongnha@gmail.com</Text>
                <Text>Phone Number - +1 XXXXX YYYYY</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OrderStatus;
