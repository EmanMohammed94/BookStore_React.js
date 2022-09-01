import React from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails';


export default function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
<Route path='bookdetails' element={ <BookDetails/>}>

<Route path=':id' element={<BookDetails/>} />


</Route>

    </Routes>

  </>
  )
}
