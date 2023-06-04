import React, {FC, ReactElement} from 'react'
import {StyleSheet, View} from 'react-native'

const Footer: FC<{children: ReactElement}> = ({children}) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'flex-start',
  },
})

export default Footer
