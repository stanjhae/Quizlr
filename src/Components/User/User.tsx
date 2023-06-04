import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const User: FC<{user?: User}> = ({user = {}}) => {
  return (
    <View>
      <Text style={styles.text}>{user?.name}</Text>
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

export default User
