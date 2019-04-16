import { connect } from "react-redux";
import Room from "./room";
import styled from "styled-components";
import { saveState, loadState } from "../util/persistHelper";
import {useEffect} from "react";

const Rooms = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Button = styled.button`
	padding: 5px 10px;
	margin: 5px 10px;
`
function handleSubmit(e, rooms){
	saveState({rooms});
	e.preventDefault();
}
const Page = ({rooms, ...props}) => {
	useEffect(() => {
		let savedState = loadState();
		let savedRooms = savedState? savedState.rooms: undefined;
		props.loadFromCache(savedRooms);

	}, [])
	return (
		<div>
		<form onSubmit={e => handleSubmit(e, rooms)}>
			<Rooms>
				{
					rooms.map( (room, index)=> (
						<Room key={index.toString()} {...room} {...props} index={index}></Room>
					))
				}
			</Rooms>
			<Button type="submit">Submit</Button>
		</form>
	</div>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		roomSelected: (index) => {
			dispatch({
				type: "ROOM_SELECTED",
				index
			})
		},
		roomUnselected: (index) => {
			dispatch({
				type: "ROOM_UNSELECTED",
				index
			})
		},
		numOfAdultsChanged: (index, value) => {
			dispatch({
				type: "NUMBER_OF_ADULT_CHANGED",
				index,
				value
			})
		},
		numOfChildrenChanged: (index, value) => {
			dispatch({
				type: "NUMBER_OF_CHILDREN_CHANGED",
				index,
				value
			})
		},
		loadFromCache: (savedRooms) => {
			dispatch({
				type: "FOO",
				payload: { fooVal: "bar", savedRooms}
			})
		}

	}
}

export default connect(state => state, mapDispatchToProps)(Page);