import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
  HeartIcon,
} from "react-native-heroicons/solid";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { OrderService } from "../../services";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
const OrdersScreen = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const StatusMap = {
    1: "Pending",
    2: "Delivering",
    3: "Cancelled",
    4: "Delivered",
    5: "Rejected",
  };
  const filter = [1, 2, 3, 4, 5];
  const [activeFilter, setActiveFilter] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    setScrollPosition(y);
    if (y + scrollViewHeight >= contentHeight) {
      performEndOfScrollAction();
    }
  };

  const handleContentSizeChange = (width, height) => {
    setContentHeight(height);
  };

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  };

  const performEndOfScrollAction = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const fetchOrders = async () => {
    const response = await OrderService.getOrders(
      activeFilter,
      10,
      currentPage
    );
    setOrders(response.items);
  };
  useEffect(() => {
    fetchOrders();
  }, [activeFilter]);
  useFocusEffect(
    useCallback(() => {
      setActiveFilter(1), setCurrentPage(1), setTotalPages(1), fetchOrders();
    }, [])
  );

  return (
    <>
      <StatusBar style={"light"} />
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white rounded-2xl p-3 shadow"
          >
            <ChevronLeftIcon size="23" stroke={50} color="black" />
          </TouchableOpacity>
        </View>
        <View className="p-3 ">
          <Text className="font-semibold text-3xl">Order</Text>
        </View>
        <View className="flex-row justify-between items-center relative pt-3">
          {filter.map((item, index) => {
            let isSelect = item === activeFilter;
            return (
              <TouchableOpacity
                key={index}
                className={`items-center justify-between px-6 w-1/5`}
                onPress={() => setActiveFilter(item)}
              >
                <Text
                  className={`text-xs  font-bold ${isSelect && "text-red-300"}`}
                >
                  {StatusMap[item]}
                </Text>
                {isSelect && (
                  <View className="flex-row justify-center">
                    <View className=" bg-orange-500 h-1 w-full rounded-2xl"></View>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleLayout}
          className="bg-slate-500"
        >
          <View
            className="pb-36 bg-slate-400 pt-3"
            style={{ minHeight: hp(80) }}
          >
            {orders.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("OrderTracking", { itemId: item.id })
                  }
                  className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2"
                >
                  <Image
                    className=" rounded-3xl"
                    style={{ height: hp(14), width: hp(14) }}
                    source={{ uri: item.image }}
                  />
                  <View className="flex flex-1 space-y-3">
                    <View className="pl-3">
                      <Text className="text-xl">{item.productName}</Text>
                      <Text className="text-gray-700">{item.description}</Text>
                    </View>

                    <View className="flex-row justify-between pl-3 items-center">
                      <Text className="text-gray-700 text-lg font-bold">
                        ${item.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            {orders.length === 0 && (
              <View className=" flex items-center">
                <Image
                  source={require("../../../assets/listNull.png")}
                  style={{ height: hp(50), width: wp(80) }}
                />
              </View>
            )}
            <ActivityIndicator animating={loading} color={MD2Colors.red800} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default OrdersScreen;
