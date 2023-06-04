import React, {FC, useState} from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {windowHeight, windowWidth} from '../../constants'
import Actions from '../Actions/Actions'
import {view} from '@risingstack/react-easy-state'
import User from '../User/User'
import Description from '../Description/Description'
import Footer from '../Footer/Footer'
import Answer from '../Answer/Answer'
import Divider from '../Divider/Divider'
import Feedback from '../Feedback/Feedback'
import Playlist from '../Playlist/Playlist'
import {Following} from '../../Screens/Following/following.types'

//TODO: Fix full content height
const Content: FC<{item: Following}> = ({item}) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const onPress = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.innerContainer,
          {justifyContent: showAnswer ? 'flex-start' : 'center'},
        ]}>
        <Actions item={{avatar: item.user?.avatar}} />

        <View style={{width: windowWidth * 0.75}}>
          <Text style={styles.text}>{item?.flashcard_front}</Text>
        </View>
        <Footer>
          <>
            <View style={{width: windowWidth * 0.75, padding: 16}}>
              {showAnswer && (
                <>
                  <Divider />
                  <Answer answer={item?.flashcard_back} />
                </>
              )}
              {showAnswer && <Feedback />}
            </View>
            <TouchableOpacity style={{padding: 10}}>
              <User user={item?.user} />
              <Description description={item?.description} />
            </TouchableOpacity>
            <Playlist details={item?.playlist} />
          </>
        </Footer>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 25,
    color: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    paddingRight: 0,
    backgroundColor: '#00425A',
    height: windowHeight * 0.79,
  },
  avatar: {
    height: windowHeight * 0.79,
    width: windowWidth,
  },
})

export default view(Content)
