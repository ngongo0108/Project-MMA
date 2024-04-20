import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/stores/configureStore";
import MainContainer from "./src/navigations";

export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </Provider>
  );
}
