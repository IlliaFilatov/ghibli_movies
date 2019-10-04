import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../actions'

export default function Cards(){
    const dispatch = useDispatch();
    const films = useSelector(state => state.films);
    
    return (
      <>
        {
          films.map((el, index) => 
            <div card-id={index} key={index} className="card">
              <div className="card__header">{el.title}</div>
              <button className="card__button button" title="read more" onClick={(e) => dispatch(getDetails(+e.target.closest('.card').getAttribute('card-id')))}>info</button>
              <div className="card__body">{el.description}</div>
            </div>
          )
        }
      </>
    )
}