import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import coursesData from '../data/coursesData'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  // функция сортировки
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) return sortedCourses
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const CoursesList = () => {
  const location = useLocation()
  const query = queryString.parse(location.search) // строка сортировки
  const [sortKey, setSortKey] = useState(query.sort) // ключ сортировки в состоянии
  const navigate = useNavigate()
  // console.log(sortCourses(coursesData, sortKey))

  const [sortedCourses, setSortedCourses] = useState(
    // состояние отсортированных курсов
    sortCourses(coursesData, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...coursesData])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'All courses'}</h1>
      <div className='selectBlock'>
        <label htmlFor="fruits">Select sorting method:</label>
        <select
          onChange={(event) => {
            const selectedValue = event.target.value
            navigate(`?sort=${selectedValue}`)
            setSortKey(selectedValue)
            setSortedCourses(sortCourses(coursesData, selectedValue))
          }}
          id="fruits"
        >
          {SORT_KEYS.map((word, index) => (
            <option key={index} value={word}>
              {word}
            </option>
          ))}
        </select>
      </div>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default CoursesList
