import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.price}>ServiceName: </Text>
        <Text style={styles.price_2}>{product.ServiceName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.price}>price: </Text>
        <Text style={styles.price_2}>{product.Price}đ</Text>
      </View>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.price}>Creator: </Text>
        <Text style={styles.price_2}>{product.Creator}</Text>
      </View>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.price}>Time: </Text>
        <Text style={styles.price_2}>{product.Time}</Text>
      </View>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.price}>Fianl update: </Text>
        <Text style={styles.price_2}>{product.Time}</Text>
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