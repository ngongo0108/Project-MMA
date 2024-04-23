import { View, Text, ScrollView } from "react-native";
import SliderBanner from "../../components/Home/SliderBanner";
import CategoryList from "../../components/Home/CategoryList";
import Banner from "../../components/Home/Banner";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text style={{ color: 'white', fontSize: 50 }}>Home Screen</Text>
      <SliderBanner />
      <CategoryList />
      <SliderBanner />
      <CategoryList />
      <Banner />
    </ScrollView>
  );
};
export default HomeScreen;
