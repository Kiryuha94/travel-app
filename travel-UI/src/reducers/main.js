import actionTypes from 'actionTypes';

export default function main(state = {}, action) {
  const { payload } = action

  switch (action.type) {
    case actionTypes.SUCCESS:
      return { ...state, success: true };
    case actionTypes.FAILURE:
      return { ...state, success: false, user: 'Hello' };
    case actionTypes.REQUEST:
      return { ...state, ...payload };
    case actionTypes.SET_SEARCH:
      return { ...state, search: payload };
    case actionTypes.SET_COUNTRY_ITEM:
      return { ...state, item: payload };
    default:
      return state;
  }
}
