import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Button } from 'react-native-paper';
import dele from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export const UpdateProduct = ({ route }) => {
    const { product } = route.params;
    const [ServiceName, setServiceName] = useState('');
    const [Price, setPrice] = useState('');
    const navigation = useNavigation();

    //Nhấn vào sẽ chuyển đến màn hình cập nhập dữ liệu
    const handleUpdate = async (documentId) => {
        try {
            await firestore().collection('Product').doc(documentId).update({
                ServiceName: ServiceName,
                Price: Price,
            });
            console.log('Cập nhật dữ liệu thành công');
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.error('Lỗi khi cập nhật dữ liệu: ', error);
        }
    };


    return (
        <View style={styles.container}>
            <View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.price}>ServiceName: </Text>
                    <TextInput
                        placeholder='Nhập tên dịch vụ'
                        value={ServiceName}
                        onChangeText={(Text) => setServiceName(Text)}
                        style={{backgroundColor: '#ccc', borderRadius: 10, color: 'black'}}/>
                    
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.price}>price: </Text>
                    <TextInput
                        placeholder='Nhập giá dịch vụ'
                        value={Price}
                        onChangeText={(Text) => setPrice(Text)}
                        style={{backgroundColor: '#ccc', borderRadius: 10, color: 'black'}}/>
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
                }} onPress={() => handleUpdate(product.id)}>
                    <Text style={{ color: '#fff' }}>Lưu thông tin</Text>
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