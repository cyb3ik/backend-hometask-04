export type paginatedInput<S> = {
    pageNumber: number
    pageSize: number
    sortBy: S
    sortDirection: SortDirection
}

export enum SortDirection {
    asc = 'asc',
    desc = 'desc'
}