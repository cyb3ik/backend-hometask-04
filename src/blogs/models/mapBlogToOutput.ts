import { WithId } from "mongodb"
import { RawBlog, BlogOutputModel } from "./blogTypes"

export const mapBlogToOutput = (dto: WithId<RawBlog>): BlogOutputModel => {
    return {
        id: dto._id.toString(),
        name: dto.name,
        description: dto.description,
        websiteUrl: dto.websiteUrl,
        createdAt: dto.createdAt,
        isMembership: dto.isMembership
    }
}