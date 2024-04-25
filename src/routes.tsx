import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantDetails from './pages/RestaurantDetails'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />
  </Routes>
)

export default Rotas
