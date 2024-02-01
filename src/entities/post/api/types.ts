export type RequestCreatePostBody = {
  title: string
  content: string
}

export type ResponseCreatePost = {
  id: string
  title: string
  content: string
  createdAt: string
}
