
import {createStore} from "redux";

const defaultRoomState= {
	selected: false,
	numOfAdults: 1,
	numOfChildren: 0,
	selectable: true
}
const defaultState = {
	rooms: [
		{...defaultRoomState, selected: true, selectable: false},
		{...defaultRoomState},
		{...defaultRoomState},
		{...defaultRoomState},
	],
	foo: 'ha'
}
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		 case 'FOO':
			  return {...state, foo: action.payload};
		 default:
			  return state
	}
};

export const makeStore = (initialState, options) => {
	return createStore(reducer, initialState);
}