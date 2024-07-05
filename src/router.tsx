import { Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import Home from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  )
}
