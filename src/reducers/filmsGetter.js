const filmsGetter = (state = [],  action) => {
  switch (action.type) {
    case 'GET_ALL':
      return state = action.data;
    case 'SEARCH': 
      return state.filter(film => film.title.match(action.data))
    default:
      return state;
  }
};

export default filmsGetter;