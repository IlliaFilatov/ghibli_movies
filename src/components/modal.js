import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../actions'

export default function Modal(){
    const dispatch = useDispatch();
    const details = useSelector(state => state.details);
    const films = useSelector(state => state.films);

    if (details !== null) {
      return (
        <div className="modal-container">
          <div className="modal-info">
            <h1 className="modal-info__header">{films[details].title}</h1>
            <p className="modal-info__description">{films[details].description}</p>
            <p className="modal-info__authors">
              <span className="modal-info__authors__director">Director: {films[details].director}</span>
              <span className="modal-info__authors__producer">Producer: {films[details].producer}</span>
            </p>
            <p className="modal-info__numbers">
              <span className="modal-info__numbers__date">Release: {films[details].release_date}</span>
              <span className="modal-info__numbers__score">Rotten Tomatos Score: {films[details].rt_score}/100</span>
            </p>
            <button className="close-modal button" onClick={() => dispatch(getDetails(null))}>close</button>
          </div>
        </div>
      )
    } else {
      return <></>
    }
}