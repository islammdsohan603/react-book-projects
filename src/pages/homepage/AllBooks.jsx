import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="pt-20">
      <div className="w-10/12 mx-auto mb-20">
        <h1 className="text-3xl font-bold text-center mb-10">All Books</h1>
        {/* All Data show */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(book => (
            <div
              key={book.id}
              className="border h-full space-y-3 cursor-pointer rounded-lg p-4 bg-linear-to-r from-blue-100 to-purple-100  hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-72 h-96 object-contain  mx-auto"
                />
              </div>

              <div className="flex items-center gap-4">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>

              <div className="divider"></div>
              <div className="flex items-center justify-between">
                <h1> {book.category} </h1>
                <div className="flex items-center gap-4">
                  <h1> {book.rating} </h1>
                  <Star className="text-yellow-500" />
                </div>
              </div>

              <button className="w-full">
                <Link
                  to={`/booksDetails/${book.bookId}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
