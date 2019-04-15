import { connect } from "react-redux";
import Room from "./room";
import styled from "styled-components";

const Form = styled.form`

`
const Rooms = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Page = ({rooms, ...props}) => {
	return (
		<Rooms>
			{
				rooms.map( (room, index)=> (
					<Room key={index} {...room} {...props} index={index}></Room>
				))
			}
		</Rooms>
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
	}
}

export default connect(state => state, mapDispatchToProps)(Page);