import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAILURE,
  FETCHING_TWEETS,
  FETCHING_TWEETS_SUCCESS,
  FETCHING_TWEETS_FAILURE,
  FETCHING_NEWS,
  FETCHING_NEWS_SUCCESS,
  FETCHING_NEWS_FAILURE
} from '../constants';

const URL = 'http://localhost:3000/';

export function getPosts() {
  return {
    type: FETCHING_POSTS
  }
}

export function getPostsSuccess( data ) {
  return {
    type: FETCHING_POSTS_SUCCESS,
    data,
  }
}

export function getPostsFailure() {
  return {
    type: FETCHING_POSTS_FAILURE
  }
}

export function fetchPosts() {

  return ( dispatch ) => {
    dispatch( getPosts() );
    return fetch( URL + 'posts', { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ))
        .then( ( [ response, json ] ) => {
          if( response.status === 200 ){
            dispatch( getPostsSuccess( json ) );
          } else {
            dispatch( getPostsFailure() );
          }
    } );
  }

}

export function getTweets() {
  return {
    type: FETCHING_TWEETS
  }
}

export function getTweetsSuccess( data ) {
  return {
    type: FETCHING_TWEETS_SUCCESS,
    data,
  }
}

export function getTweetsFailure() {
  return {
    type: FETCHING_TWEETS_FAILURE
  }
}

export function fetchTweets() {

  return ( dispatch ) => {
    dispatch( getTweets() );
    return fetch( URL + 'tweets', { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ))
        .then( ( [ response, json ] ) => {
          if( response.status === 200 ){
            dispatch( getTweetsSuccess( json ) );
          } else {
            dispatch( getTweetsFailure() );
          }
    } );
  }

}

export function getNews() {
  return {
    type: FETCHING_NEWS
  }
}

export function getNewsSuccess( data ) {
  return {
    type: FETCHING_NEWS_SUCCESS,
    data,
  }
}

export function getNewsFailure() {
  return {
    type: FETCHING_NEWS_FAILURE
  }
}

export function fetchNews() {

  return ( dispatch ) => {
    dispatch( getNews() );
    return fetch( URL + 'news', { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ))
        .then( ( [ response, json ] ) => {
          if( response.status === 200 ){
            dispatch( getNewsSuccess( json ) );
          } else {
            dispatch( getNewsFailure() );
          }
    } );
  }
}