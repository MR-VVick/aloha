import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    title: string;
    description: string
}

const GuideCard: React.FC<Props> = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Image source={require('../assets/images/avatar.jpg')} style={styles.avatar} />
        </View>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      padding: 24,
      gap: 20,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#fff',
      elevation: 5,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginVertical: 6,
    },
    subContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    avatar: {
      width: 74,
      height: 74,
      borderRadius: 50,
    },
    title: {
      fontFamily: 'IBMPlexMono-Bold',
      color: 'black',
      fontSize: 24,
    },
    description: {
      color: '#585858',
      fontSize: 16,
      fontFamily: 'IBMPlexMono-Regular',
      marginBottom: 8,
    },
    outlineButton: {
      width: 116,
      borderWidth: 1,
      borderColor: '#008080',
      borderRadius: 8,
      paddingVertical: 8,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'IBMPlexMono-Bold',
      color: '#008080'
    }
  });

export default GuideCard