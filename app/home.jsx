import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Adidas', price: 2499.00, image: 'data:image/jpeg;base64,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' },
  { id: '2', name: 'Nike Air', price: 1599.00, image: 'data:image/jpeg;base64,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jwxgb30q0j9OsEk+II4KjRxg0ODq25ENhybdxHWby6GxS/8AR1z/ANv/APSdxEJziNMRwyvUUq+FxSoWJ6umUAtuPxb3ANttZ5gKOIwy5aPD8SQSS4c0iSSLXD5yb6D0HKSZELEff8Wxo/yzEfxUv7zFx1avWB6zhWJJtYf4ZG2gJDgkXufWSXEHOIkOHsdODYs991pnSx294edpsMLxrGUgFThWJ6sAZVOQFbaWFuX8v5SXEER6vSfFj/KsV6FJQvHsQzE1OF4o3YWvTptlTKAfxb3ufWSLEJzjh0x6Nvw7EjzoL9mnnW0s2vC6zDTXqKZN7m+jHyncxBy4fA8Wr01CDhuKOUAAhKKggaA5c+mlpn0+M4lv8txA/aOHH9c6mIOcc6uKxrfDgwvjUrJ/JQb/ADmz4ZTrhfespP5dh5TPiFzIREQpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z' },
  { id: '3', name: 'New Balance', price: 1999.00, image: 'data:image/jpeg;base64,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xmM6n7094j0c7MduJsID3dJVCfoB+H3Tqogc7S3E2Yumz8N50Ub9YGV9vf6MqrV3bDrw02N1WmOFVB1XgGgHhaXHEGvzbjfRftIiwUuOwgfHWYsRuRtc2vggxUgiwtmDcfStP0vEmRflX5wbdfbbniGzVBvckugz7g1WauyfRhtimxPyJcx9KvQ/Zcz9MxJOZPpb3b96/OuL9E+1a4ANKhTsb51r93IGSGB9EG0UQLxYQd5rVfgKP1y+ol+M9Hyu6oKh6A8Qf6zGURfXhpu3xKyRw3/5/UG77QJHYuHC+81D8JdkSuVTYb0DYIG74nEt+SaSg/6CZOYf0QbJUWag7/lV63wVgJ3sQOZoej7ZiWAwVHLTiBb9YmblLdDZ6+rgMKPDD0f3ZNRAj6ew8Kvq4aiPClTHwEzrs+iNKVMfmL9k2YgYRhU/AX9ET42CpnM00P5q/ZM8QPKUwNAB4C09REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==' },
  { id: '4', name: 'Air Jordan', price: 2999.00, image: 'data:image/jpeg;base64,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' },
];

const ShoppingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('catalog'); // catalog, details, checkout
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setCurrentScreen('details');
  };

  const handleBuyPress = () => {
    setCurrentScreen('checkout');
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={() => handleProductPress(item)}>
        <Text style={styles.buyButtonText}>BUY</Text>
      </TouchableOpacity>
    </View>
  );

  if (currentScreen === 'catalog') {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Categories!</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
        <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('login')}>
          <Text style={styles.backText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentScreen === 'details') {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedProduct.image }} style={styles.productDetailImage} />
        <Text style={styles.productName}>{selectedProduct.name}</Text>
        <Text style={styles.productPrice}>${selectedProduct.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
          <Text style={styles.buyButtonText}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('catalog')}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentScreen === 'checkout') {
    const subtotal = selectedProduct.price + 2.00; // $2 shipping fee
    return (
      <View style={styles.container}>
        <Text style={styles.checkoutText}>Thanks for buying {selectedProduct.name}</Text>
        <Text style={styles.checkoutText}>Quantity: 1</Text>
        <Text style={styles.checkoutText}>Shipping Fee: $50</Text>
        <Text style={styles.checkoutText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <TouchableOpacity style={styles.doneButton} onPress={() => setCurrentScreen('catalog')}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setCurrentScreen('login')}>
          <Text style={styles.backText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080', // Light blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  productList: {
    alignItems: 'center',
  },
  productCard: {
    width: 150,
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productDetailImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buyButtonText: {
    fontSize: 14,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
  },
  backText: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'underline',
  },
  checkoutText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'white',
  },
  doneButton: {
    backgroundColor: '#D8BFD8',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  buyMoreButton: {
    backgroundColor: '#D8BFD8',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  doneButtonText: {
    fontSize: 16,
    color: 'black',
  },
  buyMoreButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ShoppingApp;