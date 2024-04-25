import { addDays, eachDayOfInterval, eachWeekOfInterval, format, formatDate, subDays } from "date-fns";
import React from "react";
import { View, Text, Button, Modal, StyleSheet, ScrollView, Dimensions, FlatList, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window');


export default function DatePickerSlider({action}) {

  const [currentIndex, setCurrentIndex] = React.useState(0);



  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 0),
      end: addDays(new Date(), 30)
    },
    {
      weekStartsOn: 1,
    },
  ).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);

  function getIndex(index) {
    setCurrentIndex(index);
   
  };

  let x = 0;
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ width: width }}>
        <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}><Text style={{marginLeft: 20, marginVertical: 15, fontSize: 30, fontWeight: '600', color: '#e6417b' }}>{format(item[0], 'MMMM')} </Text></View>
        <View style={{ flexDirection: "row", width: '100%', justifyContent: 'space-around' }} >
          
          {item.map((day, j) => {
            const txt = format(day, 'E');

            return (
              <TouchableOpacity
                key={format(day, 'd')}
                onPress={() => { getIndex(format(day, 'd')); action((day.toISOString())) }}
                style={{
                  width: currentIndex === format(day, 'd') ? 60 : 40,
                  height: currentIndex === format(day, 'd') ? 60 : 50,
                  borderRadius: currentIndex === format(day, 'd') ? 30 : 25,
                  backgroundColor: currentIndex === format(day, 'd') ? 'pink' : 'white',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 15 }}>{txt}</Text>
                <Text style={{ fontSize: 20 }}>{format(day, 'd')}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <View >
      <View >
        <FlatList horizontal showsHorizontalScrollIndicator={false} pagingEnabled data={dates} renderItem={renderItem} />
      </View>
    </View>
  );
}