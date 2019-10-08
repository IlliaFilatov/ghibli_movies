import React from 'react';
import ghibli from './images/ghibli.png'
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, filterFilms, setLoader } from './actions';
import axios from 'axios';
import Cards from './components/cards';
import Modal from './components/modal';

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.isLoaded);
  let filmsList = [];

  axios.get('https://ghibliapi.herokuapp.com/films')
  .then((res) => {

    filmsList = res.data;

    if(!isLoaded) {
      dispatch(getFilms(filmsList))
      dispatch(setLoader())
    };
  });

  function searchFilms(e) {
      let value = e.target.value;
      let reg = new RegExp(value, 'gi');

      dispatch(getFilms(filmsList));
      dispatch(filterFilms(reg));
  
      if(value.length === 0) {
        dispatch(getFilms(filmsList));
      }
  }

  return (
    <div className="App">
      <div>
        <img src={ghibli} alt="" className="logo"/>
        <input id="search-input" type="text" placeholder="search" className="search" onChange={(e) => searchFilms(e)}/>
      </div>
      <Cards></Cards> 
      <Modal></Modal>     
    </div>
  );
}

export default App;
