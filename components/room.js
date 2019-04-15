import styled from "styled-components";

const RoomWrapper = styled.div`
	border-radius: 4px;
	border: 4px solid #e7e7e7;
	margin: 10px;
`;
const RoomHeader = styled.div`
	background-color: #e7e7e7;
	padding: 5px;
	display: flex;

`;
const RoomContent = styled.div`
	background-color: white;
	display: flex;
`;

const HeadCountWrapper = styled.div`
	display:flex;
	flex-direction: column;
	padding: 0 5px;
	span{
		margin: 5px;
	}
	select{
		margin: 5px;
	}
`;

function changeHandler(){}
const Room = ({selected, index, selectable, numOfAdults, numOfChildren}) => (
	<RoomWrapper>
		<RoomHeader>
			{
				selectable ?
					<input type="checkbox" defaultChecked={selected}></input>
					: ""
			}
			<span>
				Room {index + 1}
			</span>
			
		</RoomHeader>
		<RoomContent>
			<HeadCountWrapper>
				<span>Adults</span>
				<span>(18+)</span>
				<select value={numOfAdults} onChange={changeHandler()}>
					<option value="1">1</option>
					<option value="2">2</option>
          </select>
			</HeadCountWrapper>
			<HeadCountWrapper>
				<span>Children</span>
				<span>(0-17)</span>
				<select value={numOfChildren} onChange={changeHandler()} >
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
          </select>
			</HeadCountWrapper>
		</RoomContent>
	</RoomWrapper>
);

export default Room;

