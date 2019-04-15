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
					<Room key={index} {...room} index={index}></Room>
				))
			}
		</Rooms>
	)
}


export default connect(state => state)(Page);