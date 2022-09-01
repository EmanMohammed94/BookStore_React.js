import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  const [books, setBooks] = useState([]);
  let numbs = new Array(10).fill(1).map((element, index) => index + 1);
  async function getBooks(pageNum) {
    let { data } = await Axios.get(`http://gutendex.com/books?page=${pageNum}`);


    setBooks(data.results);

  }


  useEffect(() => {

    getBooks(1);

  }, [])




  return (
    <>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6 text-center ">Choose your favorite </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {books.map((book) => (
                <div key={book.id} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">


                    <img
                      src={book.formats["image/jpeg"]}

                      className="w-full h-full object-center lg:w-full lg:h-full cursor-pointer"
                    />

                  </div>
                  <Link to={'/bookdetails/' + book.id}>
                    <h3 className="ml-3 text-sm text-gray-500 font-bold text-white my-6 text-lg">

                      <span className="absolute inset-0  " />
                      {book.title}

                    </h3>
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </div>


        <div className='py-3 ml-6'>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {numbs.map((pageNum) => (<a onClick={() => getBooks(pageNum)} key={pageNum}
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              {pageNum}
            </a>))}
          </nav>

        </div>
      </div>



    </>
  )
}
