import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { toast } from 'react-toastify';

const BooksCards = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => {
        const singleBook = data.find(b => b.bookId == parseInt(id));
        setBook(singleBook);
      });
  }, [id]);

  const handleMarkRead = bookId => {
    const storedBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const exists = storedBooks.includes(bookId);

    if (exists) {
      toast.error('Already marked as read!');
      return;
    }

    // add to read
    storedBooks.push(bookId);
    localStorage.setItem('readBooks', JSON.stringify(storedBooks));

    // remove from wishlist
    const updatedWishlist = storedWishlist.filter(id => id !== bookId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    toast.success('Book marked as read!');
  };

  const handleWishlist = bookId => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const exists = storedWishlist.find(id => id === bookId);

    if (exists) {
      toast.error('Already in wishlist!');
      return;
    }

    storedWishlist.push(bookId);
    localStorage.setItem('wishlist', JSON.stringify(storedWishlist));

    toast.success('Added to wishlist!');
  };

  // Loading state
  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-linear-to-r from-blue-50 to-purple-50 min-h-screen">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-xl">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-72 h-96 object-contain rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-gray-600 text-lg">by {book.author}</p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {book.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {book.review || 'No description available.'}
            </p>

            {/* Info */}
            <div className="flex justify-between items-center pt-4">
              <span className="font-semibold">Category: {book.category}</span>

              <div className="flex items-center gap-2">
                <span className="font-semibold">{book.rating}</span>
                <Star className="text-yellow-500" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                onClick={() => handleMarkRead(book.bookId)}
                className="btn btn-primary w-full md:w-auto"
              >
                Mark as Read
              </button>

              <button
                onClick={() => handleWishlist(book.bookId)}
                className="btn bg-sky-600 text-white w-full md:w-auto hover:bg-sky-700"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCards;
