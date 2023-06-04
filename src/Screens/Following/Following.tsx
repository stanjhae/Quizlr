import React, {FC, useEffect} from 'react'
import {FlatList} from 'react-native'
import followingStore from './following.store'
import {getFollowingData} from './following.functions'
import {view} from '@risingstack/react-easy-state'
import Content from '../../Components/Content/Content'

const FollowingScreen: FC = () => {
  const {following} = followingStore

  useEffect(() => {
    getFollowingData()
      .then()
      .catch(() => null)
  }, [])

  const handleEndReached = () => {
    getFollowingData()
      .then()
      .catch(() => null)
  }

  return (
    <FlatList
      data={following}
      showsVerticalScrollIndicator={false}
      directionalLockEnabled
      pagingEnabled
      onEndReachedThreshold={2}
      onEndReached={handleEndReached}
      keyExtractor={item => item.flashcard_front || ''}
      renderItem={({item}) => {
        return <Content item={item} />
      }}
    />
  )
}

export default view(FollowingScreen)
