import { Request, Response } from "express"
import { HTTPStatusCode } from "../../../core/utils/status-codes"
import { blogsService } from "../../application/blogs.service"
import { WithId } from "mongodb"
import { RawPost } from "../../../posts/models/postTypes"
import { postsService } from "../../../posts/application/posts.service"
import { mapPostToOutput } from "../../../posts/models/mapPostToOutput"
import { errorsHandler } from "../../../core/errors/errors-handler"

export const createPostForBlog = async (req: Request, res: Response) => {
    try {
        const createdPostId: string = await blogsService.createPostForBlog(String(req.params.blogId), req.body)

        const insertedPostWithId: WithId<RawPost> = await postsService.findById(createdPostId)

        const newPostOutput = mapPostToOutput(insertedPostWithId)

        res.status(HTTPStatusCode.CREATED).send(newPostOutput)
    }

    catch(e: unknown) {
        errorsHandler(e, res)
    }
}