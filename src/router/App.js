import '../assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import LayoutPublic from '../components/LayoutPublic';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPublic />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
