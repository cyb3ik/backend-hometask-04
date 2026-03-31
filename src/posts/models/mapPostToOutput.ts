import { WithId } from "mongodb"
import { RawPost, PostOutputModel } from "./postTypes"

export const mapPostToOutput = (dto: WithId<RawPost>): PostOutputModel => {
    return {
        id: dto._id.toString(),
        title: dto.title,
        shortDescription: dto.shortDescription,
        content: dto.content,
        blogId: dto.blogId,
        blogName: dto.blogName,
        createdAt: dto.createdAt
    }
}