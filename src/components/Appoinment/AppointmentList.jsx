import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

export default function AppointmentList() {
    const data = [1,1,1,1];
  
  const render = (item, index) => {


    return(
        <View style={{paddingHorizontal: '10',height: 100, backgroundColor: 'pink',}}>
            <View>
                <Text>sdkfhdsk</Text>
            </View>
        </View>
    )
  }
  
  
  
    return (
    <View>
      <Text>AppointmentList</Text>
      <FlatList 
        data={data}
        renderItem={render}
      />
    </View>
  );
}
