import React from "react";
import ReactDOM from "react-dom";
import Room from "../components/room"

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render((
		<Room
			selected={true} 
			index={0}
			selectable={false}
			numOfAdults={1} 
			numOfChildren={1} 
			roomSelected={()=>{}} 
			roomUnselected={()=>{}} 
			numOfAdultsChanged={()=>{}} 
			numOfChildrenChanged={()=>{}}
		/>
	), div);
	ReactDOM.unmountComponentAtNode(div);
})