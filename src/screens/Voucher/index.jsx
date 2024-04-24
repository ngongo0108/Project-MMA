import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import VoucherService from "../../services/voucher.service";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VoucherScreen = () => {
  const [click, setClick] = useState(false);
  const [voucherItem, setVoucherItem] = useState([]);
  const [vouchers, setVouchers] = useState(false);

  const navigation = useNavigation();

  const handlenavigateCart = () => {
    navigation.navigate("Cart");
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
  }

  const storeVoucherData = async (voucher) => {
  try {
    // Fetch existing stored data
    const existingData = await AsyncStorage.getItem('vouchers');
    console.log("HHH",existingData);
    let vouchers = [];

    if (existingData !== null) {
      vouchers = JSON.parse(existingData);
      setClick(!click)
      
      // Check if the voucher already exists in the list
      const existingVoucherIndex = vouchers.findIndex(v => v?.id === voucher.id);
      if (existingVoucherIndex !== -1) {
        AsyncStorage.clear();
        console.log('Voucher already exists in the list');
        return; // Exit the function if voucher already exists
      }
    }

    vouchers.push(voucher);

    // Store updated data
    await AsyncStorage.setItem('vouchers', JSON.stringify(vouchers));
    setClick(!click)
    console.log('Voucher stored successfully:', voucher);
  } catch (error) {
    console.log('Error storing voucher:', error);
  }
}


  const handleVoucherClick = (voucher) => {
    storeVoucherData(voucher);
  }

  const fetchVoucher = async () => {
    try {
      const result = await VoucherService.getVoucherByLogin();
      console.log("helllo", result.data.items);
      setVoucherItem(result.data.items);
    } catch (error) {
      console.log("Voucher screen", error);
    }
  };

  useEffect(() => {
    fetchVoucher();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.voucher_item}>
      <View style={styles.logo_container}>
        <MaterialCommunityIcons
          name="ticket-percent-outline"
          size={70}
          color="white"
        />
      </View>
      <View style={styles.info_container}>
        <View style={styles.des_container}>
          <Text style={styles.item_name}>{item.voucherName}</Text>
          <Text>Minimum order value: ${item.minimumOrderValue}</Text>
          <Text>EXP: {formatDate(item.endDate)}</Text>
        </View>

        <TouchableOpacity onPress={() => handleVoucherClick(item.id)}>
          <View>
            {click ? (
              <Entypo name="circle" size={24} color="black" />
            ) : (
              <AntDesign name="checkcircle" size={24} color="black" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Voucher</Text>
      {/* <View style={styles.voucher_container}>
        <View style={styles.voucher_item}>
          <View style={styles.logo_container}>
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={70}
              color="white"
            />
          </View>
          <View style={styles.info_container}>
            <View style={styles.des_container}>
              <Text style={styles.item_name}>Discount name</Text>
              <Text>Minimum order value: $20</Text>
              <Text>EXP: 31.05.2003</Text>
            </View>

            <TouchableOpacity onPress={() => setClick(!click)}>
              <View>
                {click ? (
                  <Entypo name="circle" size={24} color="black" />
                ) : (
                  <AntDesign name="checkcircle" size={24} color="black" />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

      <FlatList
        contentContainerStyle={styles.voucher_container}
        data={voucherItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity onPress={handlenavigateCart}>
        <View style={styles.button_container}>
          <Text style={{ color: "white", fontSize: 20 }}>Accept</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default VoucherScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  voucher_container: {
    alignItems: "center",
    marginTop: 30,
    flex: 1,
  },
  voucher_item: {
    flexDirection: "row",
    gap: 20,
    width: "90%",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  logo_container: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e75c3e",
    borderRadius: 10,
  },
  info_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  item_name: {
    fontSize: 20,
  },
  des_container: {
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 5,
  },
  button_container: {
    margin: 5,
    padding: 10,
    backgroundColor: "#e75c3e",
    alignItems: "center",
  },
});
