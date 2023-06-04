import React, {FC} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {windowWidth} from '../../constants'

const Playlist: FC<{details?: string}> = ({details = ''}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Image style={styles.image} source={{uri: 'play'}} />
        </View>

        <Text style={styles.text}>Playlist • {details}</Text>
      </View>
      <View>
        <Image style={styles.rightArrow} source={{uri: 'right_arrow'}} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  rightArrow: {
    width: 10,
    height: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    gap: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161616',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: windowWidth,
    gap: 10,
    paddingLeft: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25,
    color: '#fff',
  },
})

export default Playlist
