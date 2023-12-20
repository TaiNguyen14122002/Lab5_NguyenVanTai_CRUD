import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';



const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const ref = firestore().collection('Product');
  const [image, setImage] = useState(null);

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

  //Nhận hình ảnh từ thư mục máy tính
  const chooseImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (!response.didCancel && !response.error) {
        setImage(response.uri);
      }
    });
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
    <View style={{ flex: 1, paddingHorizontal: 30, }}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Service name *</Text>
        <TextInput
          placeholder="  Input a service name"
          onChangeText={(text) => setProductName(text)}
          value={productName}
          autoCorrect={false}
          style={{ borderWidth: 1, borderRadius: 10, borderColor: '#ddd', marginTop: 5, backgroundColor: '#ddd' }}
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Price *</Text>
        <TextInput
          placeholder="  Giá sản phẩm"
          onChangeText={(number) => setProductPrice(number)}
          value={productPrice}
          keyboardType="numeric"
          style={{ borderWidth: 1, borderRadius: 10, borderColor: '#ddd', marginTop: 5, backgroundColor: '#ddd' }}
        />
      </View>

      <View style={{marginBottom: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Price *</Text>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="Chọn ảnh" onPress={chooseImage} />
      </View>

      <Button title="Thêm sản phẩm" onPress={addProduct} />
    </View>
  );
};

export default AddProductScreen;
