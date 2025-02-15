import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Contacts from './components/Contacts'
import About from './components/About'
import MainLayout from './layouts/MainLayout'
import CoursesList from './components/CoursesList'
import SingleCourse from './components/SingleCourse'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="courses" element={<CoursesList/>}/>
            <Route path="courses/:courseSlug" element={<SingleCourse/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
