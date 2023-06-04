import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {FC} from 'react'
import {Action} from './actions.types'

const Actions: FC<{item?: Action}> = ({item = {}}) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: 'heart'}} />
        <Text style={styles.actionDetails}>87</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: 'comment'}} />
        <Text style={styles.actionDetails}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: 'share'}} />
        <Text style={styles.actionDetails}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: 'bookmark'}} />
        <Text style={styles.actionDetails}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri: 'flip'}} />
        <Text style={styles.actionDetails}>Flip</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  outerContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 60,
    gap: 15,
  },
  image: {
    width: 35,
    height: 35,
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    marginBottom: 10,
  },
  actionDetails: {
    color: '#fff',
    fontSize: 12,
  },
})

export default Actions
