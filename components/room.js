import styled from "styled-components";

const RoomWrapper = styled.div`
	border-radius: 4px;
	border: 4px solid ${props => props.selected? "#e7e7e7": "#cdd1dc"};
	margin: 10px;
`;
const RoomHeader = styled.div`
	background-color: ${props => props.selected ? "#e7e7e7": "#dbdbe3"};
	padding: 5px;
	display: flex;

`;
const RoomContent = styled.div`
	background-color: ${props => props.selected? "white": "#dbdbe3"};
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

function selectChangeHandler($event){
	console.log($event.target.checked);
}
const Room = ({selected, index, selectable, numOfAdults, numOfChildren, roomSelected, roomUnselected, numOfAdultsChanged, numOfChildrenChanged}) => (
	<RoomWrapper selected={selected}>
		<RoomHeader selected={selected}>
			{
				selectable ?
					<input type="checkbox" checked={selected} onChange={e => e.target.checked? roomSelected(index): roomUnselected(index)}></input>
					: ""
			}
			<span>
				Room {index + 1}
			</span>
			
		</RoomHeader>
		<RoomContent selected={selected}>
			<HeadCountWrapper>
				<span>Adults</span>
				<span>(18+)</span>
				<select 
					disabled={!selected}
					value={numOfAdults}
					onChange={e => numOfAdultsChanged(index, e.target.value)}>
					<option value="1">1</option>
					<option value="2">2</option>
          </select>
			</HeadCountWrapper>
			<HeadCountWrapper>
				<span>Children</span>
				<span>(0-17)</span>
				<select
					disabled={!selected}
					value={numOfChildren} 
					onChange={e => numOfChildrenChanged(index, e.target.value)} >
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
          </select>
			</HeadCountWrapper>
		</RoomContent>
	</RoomWrapper>
);

export default Room;

