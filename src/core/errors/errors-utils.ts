import { FieldError } from "./field-error"

export const createErrorsMessages = (errors: FieldError[], ): { errorsMessages: FieldError[] } => {
    return { errorsMessages: errors }
}