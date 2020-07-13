import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from '../components/Themed';
import ProductItem from '../components/ProductItem';

import Wine1 from '../../assets/images/wines/1.jpg';
import Wine2 from '../../assets/images/wines/2.jpg';
import Wine3 from '../../assets/images/wines/3.jpg';

const items = [
  {
    title: 'Banti Sunglose',
    subtitle: 'Красное сухое, Италия',
    recommendation: 'Магазин рекомендует',
    match: '75%',
    price: {
      cost: 85000, // в копейкаъ,
      vendor: 'Лента',
    },
    imgSrc: Wine1,
  },
  {
    title: 'Cralita Spongo',
    subtitle: 'Белое сухое, Новая Зеландия',
    // recommendation: 'Магазин рекомендует',
    // match: '75%',
    price: {
      cost: 125000, // в копейкаъ,
      vendor: 'Перекресток',
    },
    imgSrc: Wine2,
  },
  {
    title: 'Bio Bio',
    subtitle: 'Нгристое сухое, Италия',
    recommendation: 'Выбор блогера Prowince',
    match: '75%',
    price: {
      cost: 11000, // в копейкаъ,
      vendor: 'SimpleWine',
    },
    imgSrc: Wine3,
  },
];

export default function ProductsScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Фильтры: </Text>

      <ScrollView
        style={{
          height: '100%',
          paddingTop: 18,
          paddingLeft: 10,
          paddingBottom: 18,
        }}
      >
        {items.map((item, i) => (
          <ProductItem key={i} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 18,
    paddingLeft: 10,
    paddingBottom: 18,
  },
});
