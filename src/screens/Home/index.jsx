import { View, Text, ScrollView } from "react-native";
import SliderBanner from "../../components/Home/SliderBanner";
import CategoryList from "../../components/Home/CategoryList";
import Banner from "../../components/Home/Banner";

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* <View style={{height: 60, backgroundColor: '#e6417b', }}><Text style={{ color: 'white', fontSize: 30, fontWeight: '500' }}></Text></View> */}
      <SliderBanner />
      <CategoryList />
      <SliderBanner />
      <CategoryList />
      <Banner />
    </ScrollView>
  );
};
export default HomeScreen;
