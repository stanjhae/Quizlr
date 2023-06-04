import {store} from '@risingstack/react-easy-state'
import {FollowingStoreType} from './following.types'

const followingStore: FollowingStoreType = store({
  following: [],
})

export default followingStore
