import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Following from '../Following/Following'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import ForYouScreen from '../ForYou/ForYouScreen'

const Tabs = createMaterialTopTabNavigator()
const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tabs.Navigator
      style={{paddingTop: insets.top}}
      pagerStyle={{backgroundColor: 'red'}}>
      <Tabs.Screen
        name="Following"
        component={Following}
        options={{
          tabBarContentContainerStyle: {
            backgroundColor: '#161616',
          },
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tabs.Screen
        name="For You"
        component={ForYouScreen}
        options={{
          tabBarContentContainerStyle: {
            backgroundColor: '#161616',
          },
          tabBarActiveTintColor: '#fff',
        }}
      />
    </Tabs.Navigator>
  )
}

export default HomeScreen
