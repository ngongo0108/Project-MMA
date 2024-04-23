import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
  ChevronLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CartService, ProductService } from "../../services";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
const DetailProductScreen = ({ route }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { itemId } = route.params;
  const flatListRef = useRef();
  const [productData, setProductData] = useState({
    image: [],
  });
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await ProductService.getProductById(itemId);
      setProductData(product);
    };
    fetchProduct();
  }, [itemId]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    if (!isSelectPicture) setAtiveIndex(Math.round(scrollPosition / 600));
    if (Math.round(scrollPosition / 600) === activeIndexImage)
      setIsSelectPicture(false);
  };
  const [activeIndex, setAtiveIndex] = useState(0);
  const [activeIndexImage, setAtiveIndexImage] = useState(0);
  const [isSelectPicture, setIsSelectPicture] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      Toast.show({
        type: "error",
        text1: "please Login first",
      });
      navigation.navigate("Login");
    } else {
      await CartService.addToCart(quantity, itemId);
    }
  };
  const renderImages = (item, index) => {
    return (
      <View key={index}>
        <Image
          style={{ width: wp(100), height: hp(55) }}
          source={{
            uri: item.item,
          }}
        />
      </View>
    );
  };
  const renderImage = (item, index) => {
    return (
      <View key={index}>
        <TouchableOpacity
          className={` m-2 rounded-2xl`}
          onPress={() => {
            setAtiveIndex(index);
            setAtiveIndexImage(index);
            setIsSelectPicture(true);
            flatListRef.current.scrollToIndex({
              index: index,
            });
          }}
        >
          <Image
            className="rounded-2xl "
            style={
              activeIndex === index
                ? { width: wp(16), height: hp(11) }
                : { width: wp(15), height: hp(10) }
            }
            source={{ uri: item }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <StatusBar style={"light"} />

      <View
        style={{ width: wp(100), height: hp(55) }}
        className="bg-white relative "
      >
        <FlatList
          data={productData.image}
          renderItem={renderImages}
          horizontal={true}
          pagingEnabled={true}
          onScroll={handleScroll}
          ref={flatListRef}
          getItemLayout={(data, index) => ({
            length: wp(100),
            offset: wp(100) * index,
            index,
          })}
        />
        <View className="absolute">
          <View
            className="flex-row justify-between m-6 items-center"
            style={{ width: wp(93) }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-white rounded-2xl p-3 shadow "
            >
              <ChevronLeftIcon size="23" stroke={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white rounded-2xl p-3 shadow ">
              <HeartIcon size="23" color={"gray"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className=" absolute bottom-14 w-full flex-row justify-center items-center mt-6 ">
          {productData.image.map((dot, index) => {
            return (
              <View
                key={index}
                className={`h-2 w-2 rounded-full m-1 ${
                  activeIndex === index ? "bg-red-600" : "bg-gray-300"
                }`}
              ></View>
            );
          })}
        </View>
      </View>
      {/* <SafeAreaView className="justify-between items-center w-full absolute"></SafeAreaView> */}
      <View
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14 "
      >
        <View className="">
          <Text className="text-5xl font-semibold ">{productData.name}</Text>

          <Text className="text-gray-500 ">{productData.description}</Text>

          {/* Images Options */}
          <ScrollView horizontal>
            {productData.image.map((item, index) => {
              return renderImage(item, index);
            })}
          </ScrollView>

          {/* Quantity Selector */}
          <View className="flex-row justify-center items-center pt-14">
            <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
              <TouchableOpacity
                className="rounded-2xl bg-white border-2 border-gray-200 p-3"
                onPress={handleDecreaseQuantity}
              >
                <MinusIcon size="20" strokeWidth={1.8} color="black" />
              </TouchableOpacity>
              <Text className="text-xl">{quantity}</Text>
              <TouchableOpacity
                className="rounded-2xl bg-white border-2 border-gray-200 p-3"
                onPress={handleIncreaseQuantity}
              >
                <PlusIcon size="20" strokeWidth={1.8} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Price and Buy Button */}
        <View className="mx-4 flex-row justify-between items-center my-10">
          <Animatable.Text
            delay={100}
            animation="slideInLeft"
            className="text-3xl font-semibold text-gray-800"
          >
            ${productData.price}
          </Animatable.Text>
          <Animatable.View animation="slideInRight">
            <TouchableOpacity
              className="bg-gray-800 p-4 px-14 rounded-2xl"
              onPress={handleAddToCart}
            >
              <Text className="text-white text-xl font-semibold">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </>
  );
};

export default DetailProductScreen;
