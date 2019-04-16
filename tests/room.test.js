import React from "react";
import ReactDOM from "react-dom";
import Room from "../components/room";
import renderer from "react-test-renderer";

test("renders without crashing", () => {
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
});

test("matches snapshot", () => {
	const component = renderer.create(
		<Room
			selected={true} 
			index={1}
			selectable={true}
			numOfAdults={1} 
			numOfChildren={1} 
			roomSelected={()=>{}} 
			roomUnselected={()=>{}} 
			numOfAdultsChanged={()=>{}} 
			numOfChildrenChanged={()=>{}}
		/>
	);

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})