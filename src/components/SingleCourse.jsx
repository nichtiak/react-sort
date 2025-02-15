import { Link, useParams, useNavigate} from 'react-router-dom'
import coursesData from '../data/coursesData'
import { useEffect } from 'react'

const SingleCourse = () => {
  const { courseSlug } = useParams()
  const navigate = useNavigate()
  const course = coursesData.find((course) => course.slug === courseSlug)
  useEffect(() => {
    if (!course) {
      navigate('..', {relative: 'path'})
    }
  }, [course, navigate]) 

  // if (!course) {
  //   return <NotFound />
  // }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>Slug: {course?.slug}</h2>
      <h3>ID: {course?.id}</h3>
      <Link to=".." relative='path'>All courses</Link>
    </>
  )
}

export default SingleCourse
