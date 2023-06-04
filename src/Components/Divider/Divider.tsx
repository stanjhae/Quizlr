import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'

type Props = {
  space?: number
  color?: string
}

const Divider: FC<Props> = ({space = 25, color = '#34535F'}) => {
  return (
    <View
      style={[styles.container, {marginVertical: space, borderColor: color}]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#34535F',
  },
})

export default Divider
