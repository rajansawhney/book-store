import React from 'react';
import { graphql } from "react-apollo";
import { getBooks } from '../../graphql/booksQuery'


const BooksList = ({ data: { loading, error, allBooks, book } }) => {
    console.log(`allBooks = ${JSON.stringify(allBooks)}`);
    console.log(`books = ${JSON.stringify(book)}`);
    if (error) return `Error! ${error.message}`;
    if (loading) return "Loading...";

    return (
        <div>
            <div>
                <h2>ALL BOOKS</h2>
                <ul>
                    {allBooks.map(({ id, title, author }) =>
                        <li key={id}>
                            <br />
                            {title}
                            <br />
                            {author}
                            <br />
                        </li>)}
                </ul>
            </div>

            <br />

            <div>
                <h2>ONE BOOK</h2>
                <ul>
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default graphql(getBooks, { options: { variables: { id: 'book-3' } } })(BooksList);
