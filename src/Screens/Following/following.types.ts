type User = {
  name?: string
  avatar?: string
}

export type Following = {
  description?: string
  answer?: string
  playlist?: string
  flashcard_front?: string
  flashcard_back?: string
  user?: User
}

export type FollowingStoreType = {
  following: Following[]
}
