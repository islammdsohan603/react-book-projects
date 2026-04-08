import BooksCards from '../../ui/BooksCards';

const AllBooks = () => {
  return (
    <div className="w-10/12 mx-auto mb-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Books Collection
      </h1>
      <div>
        <BooksCards />
      </div>
    </div>
  );
};

export default AllBooks;
