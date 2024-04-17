import { View, Text } from "react-native";

const OrdersScreen = () => {
  return (
    <View className="w-full rounded-lg   shadow-md ">
      <View className=" border-blue-500">
        <View className="p-4 bg-black-gradient rounded-lg md:p-8 ">
          <View className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold"></Text>
              <Text className="font-light text-gray-500 dark:text-gray-400">
                Apple
              </Text>
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold">Kpmg</Text>
              <Text className="font-light text-gray-500 dark:text-gray-400"></Text>
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold">Google</Text>
              <Text className="font-light text-gray-500 dark:text-gray-400"></Text>
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold">Sony</Text>
              <Text className="font-light text-gray-500 dark:text-gray-400"></Text>
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold">Amazon</Text>
              <Text className="font-light text-gray-500 dark:text-gray-400"></Text>
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="mb-2 text-3xl font-extrabold">20+</Text>
              <Text className="font-light text-gray-500 dark:text-gray-400">
                Members
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OrdersScreen;
