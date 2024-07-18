import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    title: string;
}

const CategoriesCard: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
            <Icon name="arrow-forward" size={24} color="#007f7f" />
        </TouchableOpacity>
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
        padding: 24,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontFamily: 'IBMPlexMono-Regular',
        color: 'black',
        fontSize: 16,
        marginVertical: 4,
    },
  });

export default CategoriesCard