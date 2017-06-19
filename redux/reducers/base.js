import {
  FETCHING_BASE_DATA,
  FETCHING_BASE_DATA_SUCCESS,
  FETCHING_BASE_DATA_FAILURE
} from '../constants';

const initialState = {
  menuItems: [],
  signature:'',
  tagLine: '',
  baseFetching: false,
  baseError: false
}

export default function base ( state = initialState, action ) {

  switch (action.type) {
    case FETCHING_BASE_DATA:
      return {
        ...state,
        menuItems: [],
        baseFetching: true
      }
    case FETCHING_BASE_DATA_SUCCESS:
      return {
        ...state,
        baseFetching: false,
        menuItems: action.data.menuItems,
        tagLine: action.data.tagLine,
        signature: action.data.signature
      }
    case FETCHING_BASE_DATA_FAILURE:
      return {
        ...state,
        baseFetching: false,
        baseError: true
    }

    default:
      return state
  }

}