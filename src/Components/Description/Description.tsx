import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Description: FC<{description?: string}> = ({description = ''}) => {
  return (
    <View>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 25,
    color: '#fff',
  },
})

export default Description
