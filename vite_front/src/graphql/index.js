
import { gql } from '@apollo/client/core'

const GET_ALL_BOOKS = gql`
  query {
    allBooks {
        id
        title
        author
        yearPublished
        review
      }
    }
`
export {
  GET_ALL_BOOKS
}
