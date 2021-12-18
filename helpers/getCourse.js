export const getCoursesByName = (name) => {
  const course = require('~/static/src/' + name + '.json')
  return course.reverse()
}

export const getRandomCourses = () => {
  const categories = require('~/static/src/categories.json')
  const randomIndex = random(0, Object.keys(categories).length)
  const title = categories[randomIndex].path
  return getCoursesByName(title)
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
