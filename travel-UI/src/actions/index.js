import actionTypes from 'actionTypes';

const createAction = (type) => (payload) => ({ payload, type });

export const set = (payload) => ({
  payload,
  type: actionTypes.SUCCESS,
});

export const setSearch = (payload) => ({
  payload,
  type: actionTypes.SET_SEARCH,
});

export const setCountryItem = createAction(actionTypes.SET_COUNTRY_ITEM);
export const setCountryFooter = createAction(actionTypes.SET_COUNTRY_FOOTER);
