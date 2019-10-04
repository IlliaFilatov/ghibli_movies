const isLoaded = (state = false,  action) => {
  switch (action.type) {
    case 'LOAD':
      return state = true;
    default:
      return state;
  }
};

export default isLoaded;