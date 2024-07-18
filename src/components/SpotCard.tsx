import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  id: number;
  title: string;
  image: any;
}

const SpotCard: React.FC<Props> = ({ id, title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{id}.</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image source={image} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: 8,
      paddingLeft: 18,
      overflow: 'hidden',
      backgroundColor: '#fff',
      elevation: 5,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: 5
    },
    text: {
      fontFamily: 'IBMPlexMono-Bold',
      color: '#008080',
      fontSize: 16,
      marginVertical: 4,
    },
    image: {
      width: 120,
      height: 63,
      resizeMode: 'cover'
    }
  });

export default SpotCard