import {Like} from './like'
export class Post {
    id?: string
    author: string
    authorId: string
    content: string
    published: Date
    title: string
    likes:Like
    
  }
  