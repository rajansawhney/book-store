export const typeDefs = `
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    type Query {
        info: String!
        allBooks: [Book!]!
        book(id: ID!): Book
    }

    type Mutation {
        # create a book
        createBook(title: String!, author: String!): Book!

        #update a book
        updateBook(id: ID!, title: String!, author: String!): Book

        #delete a book
        deleteBook(id: ID!): Book
    }
`;