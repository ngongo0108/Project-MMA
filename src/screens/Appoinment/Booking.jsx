import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import SliderDate from '../../components/Booking/SliderDate'

import { Button, TextInput } from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function Booking() {

  const [texts, onChangeText] = React.useState('a@gmail.com');
  const [text, setText] = React.useState("");
  const [title, onChangeTitle] = React.useState('');
  const [number, onChangeNumber] = React.useState('123456789');


  return (
    <View style={{width: width, height: height, alignItems: 'center', backgroundColor: 'pink' }}>
      <Image style={{width: width, height: 200, opacity: 0.5,}} source={{ uri: 'https://womensmentalhealth.org/wp-content/uploads/2016/09/Mother-Infant-Love-1.jpg'}} />

      <ScrollView style={{ marginTop: -50, width: width, height: 1000, backgroundColor: 'white', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <View style={{width: width}}><View style={{paddingHorizontal: '20%', borderRadius: 80}}><SliderDate /></View></View>

        <View style={{}}>
          <View style={{ marginVertical: 20, marginHorizontal: 8, paddingHorizontal: 20 }}>

            <Text style={styles.title}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder='Ask here'
              underlineColor='#e6417b'
              activeUnderlineColor='#e6417b'
              value={text}
              onChangeText={text => setText(text)}
            />
            <Text style={styles.title}>Email</Text>
            
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              underlineColor='#e6417b'
              activeUnderlineColor='#e6417b'
              value={texts}
              placeholder="Your email"
              keyboardType="email-address"
            />


            <Text style={styles.title}>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              underlineColor='#e6417b'
              activeUnderlineColor='#e6417b'
              value={number}
              placeholder="Phone Number"
              keyboardType="numeric"
            />

          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Button mode="contained" style={{ width: '70%', height: 50, justifyContent: 'center', backgroundColor: '#e6417b'}} onPress={() => console.log('Pressed')}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Booking</Text>
            </Button>
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 10,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    color: '#222222',
    fontWeight: '500'
  },



  input: {
    height: 30,
    backgroundColor: 'white',
    borderColor: 'pink',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});