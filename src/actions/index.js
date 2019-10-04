export const getFilms = (films) => {
  return {
    type: 'GET_ALL',
    data: films
  }
}
export const filterFilms = (title) => {
  return {
    type: 'SEARCH',
    data: title
  }
}
export const setLoader = () => {
  return {
    type: 'LOAD'
  }
}
export const getDetails = (index) => {
  return {
    type: 'GET_DETAILS',
    number: index
  }
}