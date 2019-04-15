import { connect } from "react-redux";
import Room from "./room";
import styled from "styled-components";
import { saveState } from "../util/persistHelper";

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
	return (
		<div>
		<form onSubmit={e => handleSubmit(e, rooms)}>
			<Rooms>
				{
					rooms.map( (room, index)=> (
						<Room key={index} {...room} {...props} index={index}></Room>
					))
				}
			</Rooms>
			<Button type="submit">Submit</Button>
		</form>
			<Button onClick={e => props.loadFromCache()}>Load</Button>
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
		loadFromCache: () => {
			dispatch({
				type: "FOO",
				payload: "bar"
			})
		}

	}
}

export default connect(state => state, mapDispatchToProps)(Page);