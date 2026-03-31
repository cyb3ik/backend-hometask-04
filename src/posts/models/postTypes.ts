import { paginatedInput } from "../../core/pagination/paginationTypes"

export type PostOutputModel = {
    id: string
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
    createdAt: string
}

export type PostInputModel = {
    title: string
    shortDescription: string
    content: string
    blogId: string
}

export type RawPost = {
    title: string
    shortDescription: string
    content: string
    blogId: string
    blogName: string
    createdAt: string
}

export enum PostSortAttributes {
    id = 'id',
    title = 'title',
    shortDescription = 'shortDescription',
    content ='content',
    blogId = 'blogId',
    blogName = 'blogName',
    createdAt = 'createdAt'
}

export type PaginationPostQuery = paginatedInput<PostSortAttributes>