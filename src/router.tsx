import { Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Wishlist from './pages/Wishlist'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
