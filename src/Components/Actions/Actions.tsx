import {Text, View} from 'react-native'
import React from 'react'

const Actions = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        bottom: 30,
        gap: 15,
      }}>
      <View>
        <Text>Avatar</Text>
      </View>
      <View>
        <Text>Likes</Text>
      </View>
      <View>
        <Text>Comments</Text>
      </View>
      <View>
        <Text>Share</Text>
      </View>
      <View>
        <Text>Bookmark</Text>
      </View>
      <View>
        <Text>Flip</Text>
      </View>
    </View>
  )
}

export default Actions
