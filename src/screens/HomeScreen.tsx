import React from 'react';
import { View, Text, ImageBackground, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HighlightsCard from '../components/HighlightsCard';
import CategoriesCard from '../components/CategoriesCard';
import GuideCard from '../components/GuideCard';

const highlightItems = [
  { id: 1, image: require('../assets/images/surfing.png'), title: 'Surfing', subtitle: 'Best Hawaiian islands for surfing.' },
  { id: 2, image: require('../assets/images/hula.jpg'), title: 'Hula', subtitle: 'Try it yourself.' },
  { id: 3, image: require('../assets/images/volcanoes.jpg'), title: 'Volcanoes', subtitle: 'Volcanic conditions can change at any time.' },
];

const CategoriesItems = [
  { id: 1, title: 'Adventure' },
  { id: 2, title: 'Culinary' },
  { id: 3, title: 'Eco Tourism' },
  { id: 4, title: 'Family' },
  { id: 5, title: 'Sport' },
];

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.container, { paddingTop: insets.top }]}>
          <ImageBackground
            source={require('../assets/images/banner.png')}
            style={styles.imageBackground}
          >
            <Text style={styles.welcomeText}>Welcome{'\n'}to Hawaii</Text>
          </ImageBackground>
          <View style={[styles.subContainer, {paddingRight: 0, paddingLeft: 0}]}>
            <Text style={[styles.title,  {paddingRight: 18, paddingLeft: 18}]}>Highlights</Text>
            <FlatList
              data={highlightItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HighlightsCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.subContainer, {backgroundColor: '#e6f2f2', paddingBottom: 10}]}>
            <Text style={styles.title}>Categories</Text>
          {
            CategoriesItems.map((item, index) => 
              <CategoriesCard
                key={index}
                title={item.title}
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
    height: 480,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 56,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    marginBottom: 50,
    lineHeight: 60,
    opacity: 0.7,
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

export default HomeScreen;
