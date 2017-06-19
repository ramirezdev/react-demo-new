import {
  FETCHING_BASE_DATA,
  FETCHING_BASE_DATA_SUCCESS,
  FETCHING_BASE_DATA_FAILURE,
} from '../constants';

export function getBase() {
  return {
    type: FETCHING_BASE_DATA
  }
}

export function getBaseSuccess( data ) {
  return {
    type: FETCHING_BASE_DATA_SUCCESS,
    data,
  }
}

export function getBaseFailure() {
  return {
    type: FETCHING_BASE_DATA_FAILURE
  }
}

export function fetchBase() {

  return ( dispatch ) => {
    dispatch( getBase() );
    const URL = "http://localhost:3000/base";
    return fetch( URL, { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ) )
        .then( ( [ response, json ] ) => {
        if( response.status === 200 ){
          dispatch( getBaseSuccess( json ) );
        } else {
          dispatch( getBaseFailure() );
      }
    } );
  }

}