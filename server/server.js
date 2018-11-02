import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema';
import http from 'http'

const PORT = 4000;

let books = [
    {
        id: 'book-0',
        title: 'The Alchemist',
        author: 'Paulo Coelho'
    },
    {
        id: 'book-1',
        title: 'A Prisioner of Birth',
        author: 'Jeffrey Archer'
    },
    {
        id: 'book-2',
        title: 'Unaccustomed Earth',
        author: 'Jhumpa Lahiri'
    },
    {
        id: 'book-3',
        title: 'A Thousand Splendid Suns',
        author: 'Khaled Hosseini'
    }
]

let idCount = books.length;

const resolvers = {
    Query: {
        info: () => 'Hakuna Matata',

        allBooks: () => books,

        book: (root, args) => {
            const bookIndex = books.findIndex(book => book.id === args.id)

            return books[bookIndex]
        }
    },
    Mutation: {
        createBook: (root, args) => {
            const newBook = {
                id: `book-${idCount++}`,
                title: args.title,
                author: args.author
            };

            books.push(newBook);

            return newBook;
        },
        updateBook: (root, args) => {
            const bookIndex = books.findIndex(book => book.id === args.id);

            books[bookIndex] = {
                id: args.id,
                title: args.title,
                author: args.author
            };

            return books[bookIndex];
        },
        deleteBook: (root, args) => {
            const bookIndex = books.findIndex(book => book.id === args.id);

            books.splice(bookIndex, 1);

            return books[bookIndex];
        }
    },
    Book: {
        id: (root) => root.id, // root -> result of the previous resolver execution level
        title: (root) => root.title,
        author: (root) => root.author
    }
}

const apollo = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express()
apollo.applyMiddleware({ app })

const server = http.createServer(app)

server.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`));

