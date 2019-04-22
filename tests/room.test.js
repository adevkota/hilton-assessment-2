import React from "react";
import ReactDOM from "react-dom";
import Room from "../components/room";
import renderer from "react-test-renderer";
import {mount} from "enzyme";

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

test("matches snapshot for a selectable room", () => {
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
});

test("matches snapshot for the first room (always selected, cannot be unselected)", () => {
	const component = renderer.create(
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
	);

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test("numOfAdultsChanged callback called when number of adult is changed", () => {
	let adultCount = 1;
	const app = mount(
		<Room
			selected={true} 
			index={0}
			selectable={false}
			numOfAdults={adultCount} 
			numOfChildren={1} 
			roomSelected={()=>{}} 
			roomUnselected={()=>{}} 
			numOfAdultsChanged={(index, value)=>{
				adultCount = value;
			}} 
			numOfChildrenChanged={()=>{}}
		/>
	);

	const adultSelector = app.find(("select.adult"));
	adultSelector.simulate("change", {target: {value: 0}});
	expect(adultCount).toEqual(0);
});
test("numOfChildredChanged callback called when number of children is changed", () => {
	let childCount = 0;
	const app = mount(
		<Room
			selected={true} 
			index={0}
			selectable={false}
			numOfAdults={1} 
			numOfChildren={childCount} 
			roomSelected={()=>{}} 
			roomUnselected={()=>{}} 
			numOfAdultsChanged={() => {}} 
			numOfChildrenChanged={(index, value)=>{
				childCount = value;
			}}
		/>
	);

	const childSelector = app.find(("select.children"));
	childSelector.simulate("change", {target: {value: 1}});
	expect(childCount).toEqual(1);
});

test("roomSelected callback called if a room is selected", () => {
	let isTestRoomSelected = false;
	const app = mount(
		<Room
			selected={isTestRoomSelected} 
			index={1}
			selectable={true}
			numOfAdults={1} 
			numOfChildren={0} 
			roomSelected={index => {
				isTestRoomSelected = true;
			}} 
			roomUnselected={()=>{}} 
			numOfAdultsChanged={() => {}} 
			numOfChildrenChanged={() => {}}
		/>
	);

	const roomSelector = app.find(("input"));
	roomSelector.simulate("change", {target: {checked: true}});
	expect(isTestRoomSelected).toEqual(true);
});
test("roomUnselected callback called if a room is unselected", () => {
	let isTestRoomSelected = true;
	const app = mount(
		<Room
			selected={isTestRoomSelected} 
			index={1}
			selectable={true}
			numOfAdults={1} 
			numOfChildren={0} 
			roomSelected={() => {}} 
			roomUnselected={index => {
				isTestRoomSelected = false;
			}} 
			numOfAdultsChanged={() => {}} 
			numOfChildrenChanged={() => {}}
		/>
	);

	const roomSelector = app.find(("input"));
	roomSelector.simulate("change", {target: {checked: false}});
	expect(isTestRoomSelected).toEqual(false);
});
