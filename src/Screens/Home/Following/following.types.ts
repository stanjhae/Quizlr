type User = {
  name?: string
  avatar?: string
}

type Following = {
  description?: string
  answer?: string
  flashcard_front?: string
  flashcard_back?: string
  user?: User
}

type FollowingStoreType = {
  following: Following[]
}
