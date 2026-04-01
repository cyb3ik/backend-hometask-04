import { param } from 'express-validator'
 
export const blogIdValidation = 
    param('blogId')
      .exists().withMessage('Blog ID is required')

      .isString().withMessage('Blog ID must be a string')
    
      .isMongoId().withMessage('Invalid format of Blog ID')