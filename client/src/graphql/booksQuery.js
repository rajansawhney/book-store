import gql from 'graphql-tag';

export const getBooks = gql`
    query ($id: ID!) {
      allBooks {
        id
        title
        author
      }
      book(id: $id) {
        id
        title
        author
      }
    }
`;