import { View, Text, ScrollView } from "react-native";
import SliderBanner from "../../components/Home/SliderBanner";
import CategoryList from "../../components/Home/CategoryList";
import Banner from "../../components/Home/Banner";
import SliderBanner1 from "../../components/Home/SliderBanner1";

const HomeScreen = () => {
  return (
    <View>
      {/* <View style={{height: 60, backgroundColor: '#e6417b', }}><Text style={{ color: 'white', fontSize: 30, fontWeight: '500' }}></Text></View> */}
      <SliderBanner />
      <CategoryList />
      <SliderBanner1 />
      <CategoryList />
    </View>
  );
};
export default HomeScreen;
