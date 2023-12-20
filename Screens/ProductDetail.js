import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Button } from 'react-native-paper';
import dele from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import conan from '../assets/tai_tai.jpg'

export const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;

  //Nhấn vào sẽ chuyển đến màn hình cập nhập dữ liệu
  const HandleProductUpdate = (product) => {
    console.log("Tai" + product)
    navigation.navigate('UpdateProduct', { product })
  }

  const imageUrl = '';

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 25 }}>
        <Image source={conan} style={{ width: '100%', height: 200 }} />
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>ServiceName: </Text>
          <Text style={styles.price_2}>{product.ServiceName}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>price: </Text>
          <Text style={styles.price_2}>{product.Price}đ</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>Creator: </Text>
          <Text style={styles.price_2}>{product.Creator}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>Time: </Text>
          <Text style={styles.price_2}>{product.Time}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>Final update: </Text>
          <Text style={styles.price_2}>{product.Time}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <Button style={{
          backgroundColor: '#428bca',
          width: '50%',
          color: '#fff',
          marginRight: 5,
          borderRadius: 50
        }} onPress={() => HandleProductUpdate(product)}>
          <Text style={{ color: '#fff' }}>Sửa thông tin</Text>
        </Button>
        <Button style={{
          backgroundColor: '#428bca',
          width: '50%',
          color: '#fff',
          borderRadius: 50
        }} onPress={() => HandleProductUpdate(product)}>
          <Text style={{ color: '#fff' }}>Xoá thông tin</Text>
        </Button>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  price_2: {
    fontSize: 16,
    marginBottom: 16,
  },
});