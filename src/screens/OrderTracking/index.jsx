import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FormatUtil } from "../../utils";
import {
  BanIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ClockIcon,
  TruckIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderService } from "../../services";
const OrderStatus = ({ route }) => {
  const { itemId } = route.params;
  const navigation = useNavigation();
  const iconMapping = {
    Pending: ClockIcon,
    Delivered: TruckIcon,
    Cancelled: XCircleIcon,
    Delivered: CheckCircleIcon,
    Rejected: BanIcon,
  };
  const descriptionMapping = {
    Pending:
      "Your order has been successfully placed and is currently pending. We will soon proceed with the next steps to prepare and ship your items.",
    Delivering:
      "Your order is on its way. Our courier partner is currently delivering the product to your specified address. Please be available to receive it.",
    Cancelled:
      "Your order has been cancelled. If this was a mistake or you have any questions, please contact our support team for assistance.",
    Delivered:
      "Your order has been delivered successfully. Thank you for shopping with us! We hope to serve you again soon.",
    Rejected:
      "Your order has been rejected due to an issue with the payment or order details. Please review your information and try again, or contact our support for more help.",
  };
  const [order, setOrders] = useState({
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [orderItem, setOrderItem] = useState({
    productName: "",
    description: "",
    image: "",
    quantity: "",
    price: "",
  });
  const [track, setTrack] = useState([]);
  const fetchOrders = async () => {
    const response = await OrderService.getOrderById(itemId);
    setOrders(response);
  };
  const fetchOrderItem = async () => {
    const response = await OrderService.getOrderDetail(itemId);
    setOrderItem(response);
  };
  const fetchTrack = async () => {
    const response = await OrderService.getTracking(itemId);
    setTrack(response);
  };
  useEffect(() => {
    fetchOrders();
    fetchOrderItem();
    fetchTrack();
  }, [itemId]);
  const TrackingStep = ({ item, index }) => {
    const { name, creationDate } = item;
    const IconComponent = iconMapping[name];
    return (
      <View
        key={index}
        style={{ height: hp(10) }}
        className="flex-row  relative "
      >
        <View className="relative flex-col items-center">
          <View className="z-10 bg-pink-500 p-3 h-1/2 rounded-full">
            <IconComponent color="#ffffff" height={30} width={30} />
          </View>
          {index + 1 !== track.length && (
            <>
              <View className=" bg-pink-300 h-1/2  w-1 "></View>
              <View className="absolute top-1/2 -mt-1.5 w-1 h-6 bg-transparent" />
            </>
          )}
        </View>
        <View className="flex-1 pl-4 ">
          <Text className="font-bold">{name}</Text>
          <Text className="text-gray-500">{descriptionMapping[name]}</Text>
          <Text className="text-gray-500">
            {FormatUtil.formatDateString(creationDate)}
          </Text>
        </View>
      </View>
    );
  };

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
              <Text className="text-lg font-bold">Order Id - {itemId}</Text>
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
                  {orderItem.productName}
                </Text>
                <Text className="text-gray-700">{orderItem.description}</Text>
                <View className="w-full flex-row justify-between">
                  <Text className="bg-slate-200 p-1 rounded-lg">
                    Quantity : {orderItem.quantity}
                  </Text>
                  <Text className=" bg-slate-200 p-1 rounded-lg text-sm  font-bold">
                    ${orderItem.price}
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
                  {track.map((item, index) => {
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
          <View className="p-5 bg-white rounded-3xl shadow  m-3">
            <Text className="text-lg font-semibold ml-2">Delivery Address</Text>
            <View className="flex-row items-center">
              <View className="bg-black">
                <Image
                  source={require("../../../assets/house.jpg")}
                  style={{ height: 50, width: 50 }}
                />
              </View>

              <View className="mt-3 ml-8 ">
                <Text className="font-semibold">Address - {order.address}</Text>
                <Text>Email - {order.email}</Text>
                <Text>Phone Number - {order.phoneNumber}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OrderStatus;
