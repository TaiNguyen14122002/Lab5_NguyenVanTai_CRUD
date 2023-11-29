import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import moment from 'moment';

const AddProductScreen = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const ref = firestore().collection('Product');

  //Nhan thoi gian thuc
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment().format('YYYY-MM-DD HH:mm:ss');
      setCurrentDateTime(now);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Xử lý để định dạng giá trị nhập vào (ví dụ: thêm dấu ',' sau mỗi 3 chữ số)
  const [amount, setAmount] = useState('');

  const formatCurrency = (value) => {
    
    const formattedValue = parseFloat(value.replace(/,/g, '')).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formattedValue;
  };


  async function addProduct() {
    await ref.add({
        ServiceName: productName,
        Price: productPrice,
        Creator: auth().currentUser.email,
        Time: currentDateTime
    });
    console.log('Thêm thành công Product');
    setProductName('');
    setProductPrice('');
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 30,}}>
        <View style={{marginTop: 20}}>
            <Text style={{ fontWeight: 'bold'}}>Service name *</Text>
            <TextInput
            placeholder="  Input a service name"
            onChangeText={(text) => setProductName(text)}
            value={productName}
            autoCorrect={false}
            style={{ borderWidth: 1, borderRadius: 10, borderColor: '#ddd', marginTop: 5, backgroundColor: '#ddd'}}
        />
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
            <Text style={{ fontWeight: 'bold'}}>Price *</Text>
            <TextInput
            placeholder="  Giá sản phẩm"
            onChangeText={(number) => setProductPrice(number)}
            value={productPrice}
            keyboardType="numeric"
            style={{ borderWidth: 1, borderRadius: 10, borderColor: '#ddd', marginTop: 5, backgroundColor: '#ddd'}}
        />
        </View>
      
      <Button title="Thêm sản phẩm" onPress={addProduct} />
    </View>
  );
};

export default AddProductScreen;
