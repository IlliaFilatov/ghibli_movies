import { combineReducers } from 'redux';
import filmsGetter from './filmsGetter';
import isLoaded from './isLoaded';
import detailsGetter from './detailsGetter';

const allReducers = combineReducers({
  films: filmsGetter,
  isLoaded: isLoaded,
  details: detailsGetter
});

export default allReducers;