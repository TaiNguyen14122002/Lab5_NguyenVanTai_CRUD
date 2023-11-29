import React, { useEffect,  useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { Appbar, TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database'
import { string } from 'yup';


export const HomeScreen = ({navigation}) => {
  
  const [productNames, setProductNames] = useState([]);
    
    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     try {
    //       const snapshot = await firestore().collection('Product').get();
    //       const productsData = snapshot.docs.map(doc => doc.data());
    //       setProductNames(productsData);
    //     } catch(error) {
    //       console.log('Lỗi khi lấy dữ liệu sản phẩm: ', error);
    //     }
    //   };
    //   fetchProducts();
    // },[])



    //Tự động tải lại dữ liệu khi có sự thay đổi
    useEffect(() => {
      const unsubscribe = firestore().collection('Product').onSnapshot((snapshot) => {
        const productsData = snapshot.docs.map((doc) => doc.data());
        setProductNames(productsData);
      });
      return () => unsubscribe();
    }, []);
  
    //Nhấn vào flatlist sẽ chuyển đến trang chi tiết
    const HandleProductDetail = (product) => {
      navigation.navigate('ProductDetail', {product})
    }


    //Nhấn và giữ để mở tuỳ chọn onLongPress
    const handleLongPress = (item) => {
      Alert.alert(
        'Xoá',
        `Bạn có chắc chắn muốn xoá dịch vụ `,
        [
          { text: 'Cancel', onPress: () => ('') },
          { text: 'Delete', onPress: () => handleDelete (item) },
        ],
        { cancelable: true }
      );
    };

    // Xoá dữ liệu trên Firebase
    const handleDelete = async(itemId) => {
      const stringitem = String(itemId);

      // Lấy đường dẫn tới doc trên Firestore
       await firestore()
        .collection('Product')
        .doc(stringitem).delete();
        console.log('Xoá dịch vụ thành công')
    };



    const handleLogout = () => {
          auth().signOut().catch(error => console.log('Error Logging Out: ', error));
      };
  return (

    <View style={{flex:1, paddingHorizontal: 20, marginTop: 20}}>
      <View>
        
        
        <Text style={{fontWeight: 'bold',
                      color: 'black',
                      padding: 20}}>{auth().currentUser.email}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}> Danh sách dịch vụ </Text>
          <Button style={{backgroundColor:'#428bca',
                            width:'10%',
                            color: '#fff',
                            borderRadius: 50}} onPress={()=>{navigation.navigate('AddProduct')}}>
                            <Text style={{color:'#fff'}}>+</Text>
                        </Button>
        </View>
        <FlatList data={productNames}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => HandleProductDetail(item)} onLongPress={() => handleLongPress(item)}>
        <View style={{alignItems: 'center'}}>
            
              <View style={{flexDirection: 'row' , 
                          justifyContent: 'space-between', 
                          width: '90%',
                          backgroundColor: '#ddd',
                          alignItems: 'center',
                          borderColor: '#428bca',
                          marginTop: 20,
                          padding: 10,
                          borderWidth: 1,
                          borderRadius: 10}}>
                <Text style={{color: 'black',
                              fontWeight: 'bold'}}>{item.ServiceName}</Text>
                <Text>{item.Price} <Text style={{textDecorationLine: 'underline',}}>đ</Text></Text>
              </View>
            
          </View>
        </TouchableOpacity>
        
                  )}
        
        />
        <View style={{alignItems: 'center', marginTop: 25,}}>
        <Button style={{backgroundColor:'#428bca',
                            width:'90%',
                            color: '#fff',
                            borderRadius: 50}} onPress={handleLogout}>
                            <Text style={{color:'#fff'}}>Đăng xuất</Text>
        </Button>
            {/* <Button style={{backgroundColor:'#428bca',
                            width:'10%',
                            borderRadius: 50}} title='Đăng xuất'  onPress={handleLogout}/> */}
        </View>
            
        </View>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});