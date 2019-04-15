
import { createStore } from "redux";

const defaultRoomState = {
	selected: false,
	numOfAdults: 1,
	numOfChildren: 0,
	selectable: true
}
const defaultState = {
	rooms: [
		{ ...defaultRoomState, selected: true, selectable: false },
		{ ...defaultRoomState },
		{ ...defaultRoomState },
		{ ...defaultRoomState },
	],
	foo: 'ha'
}
const reducer = (state = defaultState, action) => {
	let rooms;
	switch (action.type) {
		case 'FOO':
			return { ...state, foo: action.payload };
		case 'ROOM_SELECTED':
			console.log('room selected')
			rooms = state.rooms.map((room, index) => {
				if (index !== action.index) {
					return room;
				}
				return {
					...room,
					selected: true
				}
			});
			return {
				...state,
				rooms
			}
		case 'ROOM_UNSELECTED':
			rooms = state.rooms.map((room, index) => {
				if (index !== action.index) {
					return room;
				}
				return {
					...room,
					selected: false
				}
			});
			return {
				...state,
				rooms
			}
		default:
			return state
	}
};

export const makeStore = (initialState, options) => {
	return createStore(reducer, initialState);
}