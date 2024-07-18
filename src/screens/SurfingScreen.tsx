import React from 'react';
import { View, Text, ImageBackground, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HighlightsCard from '../components/HighlightsCard';
import CategoriesCard from '../components/CategoriesCard';
import GuideCard from '../components/GuideCard';
import SpotCard from '../components/SpotCard';

const SpotItems = [
  { id: 1, image: require('../assets/images/maui.png'), title: 'Maui' },
  { id: 2, image: require('../assets/images/kauai.png'), title: 'Kauai' },
  { id: 3, image: require('../assets/images/honolulu.png'), title: 'Honolulu' },
];

const SurfingScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.container, { paddingTop: insets.top }]}>
          <ImageBackground
            source={require('../assets/images/surfing.png')}
            style={styles.imageBackground}
          >
            <Text style={styles.welcomeText}>Surfing</Text>
          </ImageBackground>
          <View style={[styles.subContainer, {backgroundColor: 'white'}]}>
            <Text style={styles.description}>
              Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.
            </Text>
          </View>
          <View style={[styles.subContainer, {backgroundColor: 'white', paddingBottom: 100}]}>
            <Text style={styles.title}>Top Spots</Text>
          {
            SpotItems.map((item, index) => 
              <SpotCard
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            )
          }
          </View>
          <View style={[styles.subContainer, {backgroundColor: '#e6f2f2', marginBottom: 100}]}>
            <Text style={styles.title}>Travle Guide</Text>
            <GuideCard
              title="Hadwin Malone"
              description='Guide since 2012'
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.buttonText}>Book a trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    lineHeight: 60,
    opacity: 0.7,
  },
  description: {
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Regular',
    lineHeight: 24,
    color: 'black'
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    paddingLeft: 17,
    paddingRight: 17,
    width: '100%'
  },
  floatingButton: {
    backgroundColor: '#007f7f',
    borderRadius: 8,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'IBMPlexMono-Bold',
  },
  subContainer: {
    flex: 1,
    paddingTop: 35,
    paddingRight: 18,
    paddingLeft: 18,
    gap: 15,
    width: '100%',
    backgroundColor: 'white'
  }
});

export default SurfingScreen;
