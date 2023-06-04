import React, {FC, ReactElement} from 'react'
import {StyleSheet, View} from 'react-native'

const Footer: FC<{children: ReactElement}> = ({children}) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'flex-start',
    padding: 16,
  },
})

export default Footer
