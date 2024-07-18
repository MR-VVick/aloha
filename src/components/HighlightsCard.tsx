import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    image: any;
    title: string;
    subtitle: string;
}

const HighlightsCard: React.FC<Props> = ({ image, title, subtitle }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.circleButton}>
                <Icon name="arrow-forward" size={24} color="#007f7f" />
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cardContainer: {
        width: 304,
        height: 340,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginVertical: 6,
        marginBottom: 50
    },
    image: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    descriptionContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
    },
    title: {
        fontFamily: 'IBMPlexMono-Bold',
        color: '#007f7f',
        fontSize: 24,
        marginVertical: 4,
    },
    subtitle: {
        color: '#585858',
        fontSize: 16,
        fontFamily: 'IBMPlexMono-Regular',
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        paddingRight: 25, 
        paddingTop: 5,
        paddingBottom: 25
    },
    circleButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e6f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default HighlightsCard