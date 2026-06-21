import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Work from '../pages/Work'
import Blog from '../pages/Blog'

const AppRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services/>} />
         <Route path="/work" element={<Work/>} />
         <Route path="/blog" element={<Blog/>} />
         
    </Routes>
  )
}


export default AppRoutes