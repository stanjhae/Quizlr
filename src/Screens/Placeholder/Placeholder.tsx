import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

function PlaceholderScreen() {
  const {name} = useRoute()

  return (
    <View style={styles.container}>
      <Text>{name} screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
})

export default PlaceholderScreen
