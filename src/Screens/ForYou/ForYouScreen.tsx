import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const ForYouScreen = () => {
  return (
    <View style={styles.container}>
      <Text>For you!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
})

export default ForYouScreen
