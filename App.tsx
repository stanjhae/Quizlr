/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type {PropsWithChildren} from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import Following from './src/Screens/Home/Following/Following'

type SectionProps = PropsWithChildren<{
  title: string
}>

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  )
}

function ForYou() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>For you!</Text>
    </View>
  )
}

const TopTabs = createMaterialTopTabNavigator()
function HomeScreen() {
  const insets = useSafeAreaInsets()
  return (
    <TopTabs.Navigator style={{paddingTop: insets.top}}>
      <TopTabs.Screen name="Following" component={Following} />
      <TopTabs.Screen name="For You" component={ForYou} />
    </TopTabs.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => {
            console.log(route.name)
            return {
              tabBarStyle: {
                // width: windowWidth,
                backgroundColor: 'black',
              },
              tabBarShowLabel: false,
              tabBarInactiveTintColor: 'white',

              tabBarIcon: () => (
                <View style={{alignItems: 'center', paddingTop: 10}}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={{uri: route.name.toLowerCase()}}
                  />
                  <Text style={{fontSize: 12, color: '#fff', marginTop: 5}}>
                    {route.name}
                  </Text>
                </View>
              ),
              tabBarAccessibilityLabel: route.name,
            }
          }}>
          <Tab.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Discover" component={SettingsScreen} />
          <Tab.Screen name="Activity" component={SettingsScreen} />
          <Tab.Screen name="Bookmarks" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
