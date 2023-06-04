import React, {FC, useEffect, useState} from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {windowHeight, windowWidth} from '../../../constants'
import Actions from '../../../Components/Actions/Actions'
import followingStore from './following.store'
import {getFollowingData} from '../home.functions'
import {view} from '@risingstack/react-easy-state'
import User from '../../../Components/User/User'
import Description from '../../../Components/Description/Description'
import Footer from '../../../Components/Footer/Footer'
import Answer from '../../../Components/Answer/Answer'

const Following: FC = () => {
  const {following} = followingStore

  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    getFollowingData().then()
  }, [])

  const onPress = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <>
      <FlatList
        data={following}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        pagingEnabled
        keyExtractor={item => item.flashcard_front || ''}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback onPress={onPress}>
              <View style={styles.innerContainer}>
                <Actions />
                <Text style={styles.text}>{item?.flashcard_front}</Text>
                {showAnswer && <Answer answer={item?.flashcard_back} />}
                <Footer>
                  <>
                    <User user={item?.user} />
                    <Description description={item?.description} />
                  </>
                </Footer>
              </View>
            </TouchableWithoutFeedback>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    height: Platform.select({ios: windowHeight, android: windowHeight * 0.97}),
    paddingBottom: 170,
  },
  text: {
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 25,
    color: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#00425A',
    justifyContent: 'center',
    height: windowHeight * 0.79,
  },
  imageContent: {
    position: 'absolute',
    bottom: 20,
  },
  name: {
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 2,
    alignItems: 'flex-end',
  },
  avatar: {
    height: windowHeight * 0.79,
    width: windowWidth,
  },
  tagContainer: {position: 'relative', top: -40},
  tagInnerStyle: {paddingVertical: 7},
})

export default view(Following)
