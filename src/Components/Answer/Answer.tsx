import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Answer: FC<{answer?: string}> = ({answer = ''}) => {
  return (
    <View>
      <Text>Answer</Text>
      <Text style={styles.text}>{answer}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 25,
    color: '#fff',
  },
})

export default Answer
