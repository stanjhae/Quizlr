import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FEEDBACK} from './feedback.constants'

const Feedback: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How well did you know this?</Text>
      <View style={styles.feedbackItemContainer}>
        {FEEDBACK.map(feedbackItem => (
          <TouchableOpacity
            key={feedbackItem.id}
            style={[
              styles.feedbackItem,
              {backgroundColor: feedbackItem.color},
            ]}>
            <Text style={styles.feedBackText}>{feedbackItem.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  feedbackItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 16,
    gap: 8,
  },
  feedbackItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 5,
  },
  feedBackText: {
    fontWeight: '600',
    fontSize: 17,
    color: '#fff',
  },
})

export default Feedback
