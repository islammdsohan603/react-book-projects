import React, { useEffect, useState } from 'react';

const Books = () => {
  const [activeTab, setActiveTab] = useState('read');
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState({
    read: [],
    wishlist: [],
  });

  // 🔥 helper: load from localStorage
  const getStorageData = key => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };

  // load data
  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data));

    setLists({
      read: getStorageData('readBooks'),
      wishlist: getStorageData('wishlist'),
    });
  }, []);

  // 🔥 filtered books (dynamic)
  const filteredBooks = books.filter(book =>
    lists[activeTab].includes(book.bookId),
  );

  // 🔥 delete handler (clean & reusable)
  const handleDelete = id => {
    const updatedList = lists[activeTab].filter(item => item !== id);

    const updatedLists = {
      ...lists,
      [activeTab]: updatedList,
    };

    setLists(updatedLists);

    localStorage.setItem(
      activeTab === 'read' ? 'readBooks' : 'wishlist',
      JSON.stringify(updatedList),
    );
  };

  return (
    <div className="pt-20 w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">My Books</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {['read', 'wishlist'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn capitalize ${
              activeTab === tab ? 'btn-primary' : 'btn-outline'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No {activeTab} books found 📚
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <div
              key={book.bookId}
              className="border p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-52 mx-auto object-contain"
              />

              <h2 className="text-xl font-bold mt-3 line-clamp-1">
                {book.title}
              </h2>

              <p className="text-gray-600">{book.author}</p>

              <button
                onClick={() => handleDelete(book.bookId)}
                className="btn btn-error w-full mt-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
