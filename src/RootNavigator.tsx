import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import SurfingScreen from './screens/SurfingScreen';
import Logo from './assets/svg/logo.svg';
import EmptyScreen from './screens/EmptyScreen';
import { View, Text, StyleSheet } from 'react-native';

type TabParamList = {
  Home: undefined;
  Surfing: undefined;
  Hula: undefined;
  Volcano: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Surfing':
                iconName = 'surfing';
                break;
              case 'Hula':
                iconName = 'nightlife';
                break;
              case 'Volcano':
                iconName = 'terrain';
                break;
              default:
                iconName = '';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#008080',
          tabBarInactiveTintColor: '#001A1A',
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={{ color: focused ? '#008080' : '#001A1A', fontFamily: 'IBMPlexMono-Bold', fontSize: 12 }}>
                {route.name}
              </Text>
              <View style={[styles.indicator, { backgroundColor: focused?'#008080': 'white'}]} />
            </View>
          ),
          tabBarStyle: {
            height: 72,
          },
          headerTitle: () => (
            <Logo width={100} height={30} />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            height: 80,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Surfing" component={SurfingScreen} />
        <Tab.Screen name="Hula" component={EmptyScreen} />
        <Tab.Screen name="Volcano" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
  },
  indicator: {
    marginTop: 4,
    height: 4,
    width: 90,
  },
});

export default RootNavigator;
