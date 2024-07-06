import { Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import Home from './pages/Home'
import Settings from './pages/Settings'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
