import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import PlaceholderScreen from './Placeholder/Placeholder'
import HomeScreen from './Home/Home'

const Tab = createBottomTabNavigator()

const Screens = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarShowLabel: false,

          tabBarIcon: ({color}) => (
            <View style={styles.tabContainer}>
              <Image
                style={{width: 25, height: 25, tintColor: color}}
                source={{uri: route.name.toLowerCase()}}
              />
              <Text style={styles.tabTitle}>{route.name}</Text>
            </View>
          ),
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#555',
          tabBarAccessibilityLabel: route.name,
        }
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Discover" component={PlaceholderScreen} />
      <Tab.Screen name="Activity" component={PlaceholderScreen} />
      <Tab.Screen name="Bookmarks" component={PlaceholderScreen} />
      <Tab.Screen name="Profile" component={PlaceholderScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabContainer: {alignItems: 'center', paddingTop: 10},
  tabTitle: {fontSize: 12, color: '#fff', marginTop: 5},
})

export default Screens
