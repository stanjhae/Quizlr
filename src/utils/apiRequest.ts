import {Alert} from 'react-native'
import {URL} from './apiRequest.constants'

type Method = 'POST' | 'PUT' | 'GET' | 'DELETE'

const apiRequest = async ({
  route,
  method = 'GET',
}: {
  route: string
  id?: string
  body?: any
  isJsonResponse?: boolean
  method?: Method
  version?: string
  extension?: string
}) => {
  try {
    const url = `${URL}/${route}`
    const requestInit: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await fetch(url, requestInit)

    if (response.ok) {
      return response?.json()
    } else {
      Alert.alert('Something went wrong')
      return null
    }
  } catch (e) {
    Alert.alert('Something went wrong', 'Please try again')
    return null
  }
}

export {apiRequest}
