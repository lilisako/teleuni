export const getCoursesByName = (name) => {
  var course = require('~/static/src/' + name + '.json');
  return course.reverse()
}

export const getRandomCourses = () => {
  var categories = require('~/static/src/categories.json');
  var randomIndex = random(0, Object.keys(categories).length)
  var title = categories[randomIndex].path
  return getCoursesByName(title)
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
