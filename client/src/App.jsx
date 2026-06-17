import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import Addblog from './pages/admin/Addblog';
import Categories from './pages/admin/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/blogs/add" element={<Addblog />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
