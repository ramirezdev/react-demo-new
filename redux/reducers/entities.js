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

const initialState = {
  posts: [],
  postsFetching: false,
  postsError: false,
  tweets: [],
  tweetsFetching: false,
  tweetsError: false,
  news: [],
  newsFetching: false,
  newsError: false
}

export default function entities ( state = initialState, action ) {

  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        posts: [],
        postsFetching: true
      }
    case FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        postsFetching: false,
        posts: action.data
      }
    case FETCHING_POSTS_FAILURE:
      return {
        ...state,
        postsFetching: false,
        postsError: true
      }
    case FETCHING_TWEETS:
      return {
        ...state,
        tweets: [],
        tweetsFetching: true
      }
    case FETCHING_TWEETS_SUCCESS:
      return {
        ...state,
        tweetsFetching: false,
        tweets: action.data
      }
    case FETCHING_TWEETS_FAILURE:
      return {
        ...state,
        tweetsFetching: false,
        tweetsError: true
      }
    case FETCHING_NEWS:
      return {
        ...state,
        news: [],
        newsFetching: true
    }
    case FETCHING_NEWS_SUCCESS:
      return {
        ...state,
        newsFetching: false,
        news: action.data
    }
    case FETCHING_NEWS_FAILURE:
      return {
        ...state,
        tweetsFetching: false,
        newsError: true
    }
    default:
      return state
  }

}