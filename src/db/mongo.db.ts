import { Collection, Db, MongoClient, WithId } from 'mongodb'
import { RawBlog } from '../blogs/models/blogTypes'
import { RawPost } from '../posts/models/postTypes'

export let client: MongoClient
export let postsCollection: Collection<RawPost>
export let blogsCollection: Collection<RawBlog>

const DB_NAME = 'bloggers-platform'
const POSTS_COLLECTION_NAME = 'posts'
const BLOGS_COLLECTION_NAME = 'blogs'
 
export async function runDB(url: string): Promise<void> {

    client = new MongoClient(url)
    const db: Db = client.db(process.env.DB_NAME || DB_NAME)
    
    postsCollection = db.collection<RawPost>(POSTS_COLLECTION_NAME)
    blogsCollection = db.collection<RawBlog>(BLOGS_COLLECTION_NAME)
    
    try {
        await client.connect()
        await db.command({ ping: 1 })
        console.log('Connected to database')
    } 
    catch (e) {
        await client.close()
        throw new Error(`Cannot connect to database: ${e}`)
    }
}