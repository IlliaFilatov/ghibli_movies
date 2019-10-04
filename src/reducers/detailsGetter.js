const detailsGetter = (state = null,  action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return state = action.number;
    default:
      return state;
  }
};

export default detailsGetter;