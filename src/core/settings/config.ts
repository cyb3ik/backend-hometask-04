import * as dotenv from 'dotenv'
dotenv.config()

export const TESTING_PATH = '/ht_03/api/testing'
export const BLOGS_PATH = '/ht_03/api/blogs'
export const POSTS_PATH = '/ht_03/api/posts'

export const mongoUrl = process.env.MONGO_URL

export const PORT = process.env.PORT || 5002

export const adminUserName = process.env.ADMIN_USERNAME || 'admin'
export const adminPass = process.env.ADMIN_PASSWORD || 'qwerty'