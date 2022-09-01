import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
export default function BookDetails() {

  let param = useParams();
  const [bookDetails, setBookDetails] = useState([]);

  async function getBookDetails(id) {
    let { data } = await Axios.get(`http://gutendex.com/books?ids=${id}`);
    setBookDetails(data.results);
  }


  useEffect(() => {
    getBookDetails(param.id)


  }, []);


  return (
    <>
      <div className="bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6 text-center ">Book Details</h2>
            <div className='p-5'>
              {bookDetails.map((book) => (
                <div key={book.id} className="display: flex">
                  <div >

                    <img
                      src={book.formats["image/jpeg"]}

                      className="w-full h-full object-center lg:w-full lg:h-full cursor-pointer"
                    />

                  </div>

                  <div className='display: flex flex-col ml-4'>

                    <span className="ml-3 text-sm text-white-500 font-bold text-white my-3 text-lg">

                      title :   {book.title}

                    </span>

                    <span className="ml-3 text-sm text-white-500 font-bold text-white my-3 text-lg">

                      Authors :   {book.authors[0].name}

                    </span>
                    <span className="ml-3 text-sm text-white-500 font-bold text-white my-3 text-lg">


                      bookshelves :   {book.bookshelves}

                    </span>
                    <span className="ml-3 text-sm text-white-500 font-bold text-white my-3 text-lg">


                      number of downloads :   {book.download_count}

                    </span>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
