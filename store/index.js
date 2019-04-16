
import { createStore } from "redux";
import { loadState } from "../util/persistHelper";

const defaultRoomState = {
	selected: false,
	numOfAdults: 1,
	numOfChildren: 0,
}
const defaultState = {
	rooms: [
		{ ...defaultRoomState, selected: true, selectable: false },
		{ ...defaultRoomState },
		{ ...defaultRoomState },
		{ ...defaultRoomState },
	],
	foo: 'ha',
}


const reducer = (state = defaultState, action) => {
	let rooms;
	console.log(action.type)
	switch (action.type) {
		case 'FOO':
			let savedRooms = action.payload.savedRooms;
			if (savedRooms) {
				rooms = state.rooms.map((room, index) => {
					if (savedRooms) {
						return {
							...savedRooms[index]
						};
					}
					return room;
				})

				return {
					...state,
					rooms
				}
			}
			return {
				...state
			};
		case 'ROOM_SELECTED':
			rooms = state.rooms.map((room, index) => {
				if (index > action.index) {
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
				if (index < action.index) {
					return room;
				}
				return {
					...defaultRoomState
				}
			});
			return {
				...state,
				rooms
			}
		case 'NUMBER_OF_ADULT_CHANGED':
			rooms = state.rooms.map((room, index) => {
				if (index !== action.index) {
					return room;
				}
				return {
					...room,
					numOfAdults: action.value
				}
			});
			return {
				...state,
				rooms
			}
		case 'NUMBER_OF_CHILDREN_CHANGED':
			rooms = state.rooms.map((room, index) => {
				if (index !== action.index) {
					return room;
				}
				return {
					...room,
					numOfChildren: action.value
				}
			});
			return {
				...state,
				rooms
			}
		default:
			return { ...state};
	}
};
export const makeStore = (initialState , options) => {
	return createStore(reducer, initialState);
}