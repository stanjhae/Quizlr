import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Answer: FC<{answer?: string}> = ({answer = ''}) => {
  return (
    <View>
      <Text style={styles.title}>Answer</Text>
      <Text style={styles.text} numberOfLines={10}>
        {answer}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 25,
    color: '#2DC59F',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 25,
    color: 'rgba(255, 255, 255, 0.7)',
  },
})

export default Answer
