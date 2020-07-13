import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductItem = (props: any) => {
  const { title, subtitle, imgSrc } = props;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Image
        source={imgSrc}
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
        }}
      />
    </View>
  );
};

export default ProductItem;
