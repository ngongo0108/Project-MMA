import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CartService } from "../../services";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VoucherService from "../../services/voucher.service";

const CartScreen = () => {
  const [cartItem, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [voucher, setVoucher] = useState("");

  const navigation = useNavigation();

  const handleNavigateVoucher = () => {
    navigation.navigate("Voucher");
  };

  const handleNavigateCheckout = () => {
    navigation.navigate("Checkout", {
      cartItem: cartItem,
      totalPrice: totalPrice,
      voucher: {
        id: voucher.id,
        name: voucher.voucherName,
      },
    });
  };

  const getVoucherData = async () => {
    console.log("AAAAAAAAAAss");
    try {
      const existingData = await AsyncStorage.getItem("vouchers");
      console.log("BHBHBH", existingData);
      if (existingData) {
        const parsedData = JSON.parse(existingData);
        const value = parsedData[0];
        const detail_voucher = await VoucherService.getVoucherById(value);
        console.log("DDDDDDDD", detail_voucher.data);
        setVoucher(detail_voucher.data);
      } else {
        setVoucher("");
      }
    } catch (error) {
      console.log("Error getting voucher data", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getVoucherData();
      fetchCartItem();
    }, [])
  );

  // const getVoucherById = async () => {
  //   const result = await
  // }

  useEffect(() => {
    // Calculate total price whenever cart items change
    const calculateTotalPrice = () => {
      const total = cartItem.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      if (voucher.minimumOrderValue < total) {
        if ((total * voucher.percent) / 100 < voucher.maximumDiscountAmount) {
          const discountValue = total - (total * voucher.percent) / 100;
          setTotalPrice(discountValue);
        } else {
          const discountValue = total - voucher.maximumDiscountAmount;
          setTotalPrice(discountValue);
        }
      } else {
        setTotalPrice(total);
      }
    };
    calculateTotalPrice();
  }, [cartItem]);

  const fetchCartItem = useCallback(async () => {
    try {
      const result = await CartService.getItemInCart();
      console.log("HUNG NGUYEN", result);
      setCartItem(result.data);
    } catch (error) {
      console.log("Error", error);
    }
  }, []);

  useEffect(() => {
    fetchCartItem();
  }, [fetchCartItem]);

  const handleIncrease = async (productId) => {
    await CartService.increaseProductInCart(productId);
    fetchCartItem();
  };

  const handleDecrease = async (productId) => {
    await CartService.decreaseProductInCart(productId);
    fetchCartItem();
  };

  const renderItem = ({ item }) => (
    <View style={styles.cart_item}>
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <View style={styles.cart_info}>
        <Text style={styles.item_name}>{item.productName}</Text>
        <View style={styles.item_price}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.button_group}>
            <TouchableOpacity onPress={() => handleDecrease(item.productId)}>
              <Text style={styles.button_click}>-</Text>
            </TouchableOpacity>
            <Text style={styles.button_info}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.productId)}>
              <Text style={styles.button_click}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Cart Screen</Text>
      <FlatList
        contentContainerStyle={styles.cart_container}
        data={cartItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.productId}
      />
      <View style={styles.total_container}>
        <View style={styles.total_info_voucher}>
          <Text style={styles.regularText}>Voucher</Text>
        </View>
        <TouchableOpacity onPress={handleNavigateVoucher}>
          <View style={styles.total_payment_voucher}>
            {voucher ? (
              <Text style={styles.boldText}>{voucher.voucherName}</Text>
            ) : (
              <Text style={styles.boldText}>Voucher Title</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.total_container}>
        <View style={styles.total_info}>
          <Text style={styles.regularText}>Total: ${totalPrice}</Text>
        </View>
        <TouchableOpacity onPress={handleNavigateCheckout}>
          <View style={styles.total_payment}>
            <Text style={styles.boldText}>Buy ({cartItem?.length})</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cart_container: {
    alignItems: "center",
    marginTop: 30,
    flex: 1,
  },
  cart_item: {
    flexDirection: "row",
    gap: 20,
    width: "90%",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 10,
  },
  cart_info: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "60%",
  },
  item_name: {
    fontSize: 20,
  },
  item_price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
  },
  button_group: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 3,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button_click: {
    borderRadius: 10,
    padding: 3,
    width: 15,
    textAlign: "center",
    fontSize: 15,
  },
  button_info: {
    fontSize: 15,
  },
  total_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor: "beige",
  },
  total_info: {
    width: "75%",
    fontSize: 20,
  },
  total_info_voucher: {
    width: "60%",
    fontSize: 20,
  },
  regularText: {
    fontSize: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  total_payment: {
    backgroundColor: "#f19c38",
    paddingHorizontal: 17,
    paddingVertical: 18,
  },
  total_payment_voucher: {
    paddingHorizontal: 17,
    paddingVertical: 18,
  },
});
