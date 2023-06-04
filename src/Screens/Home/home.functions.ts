import followingStore from './Following/following.store'
import {apiRequest} from '../../utils/apiRequest'

const getFollowingData = async () => {
  try {
    const data = await apiRequest({
      route: 'following',
    })

    if (data) {
      console.log(data)
      followingStore.following = [...followingStore.following, data]
    }
  } catch (e) {
    console.log('Error', e)
  }
}

export {getFollowingData}
