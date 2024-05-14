import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface CardProps {
  image: ImageSourcePropType;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image && <Image source={image} style={styles.image} resizeMode="contain" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Card;
