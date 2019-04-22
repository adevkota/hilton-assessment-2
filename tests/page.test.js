import configureMockStore from "redux-mock-store";
import { defaultStore } from "../store";
import { mount } from "enzyme";
import Page from "../components/page";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

const mockStore = configureMockStore();
const store = mockStore(defaultStore);
const rooms = [{
	selected: false,
	numOfAdults: 1,
	numOfChildren: 0,
	selectable: true,
}]

test("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render((
		<Provider store={store}>
			<Page
				rooms={rooms}
				roomSelected={()=>{}} 
				roomUnselected={()=>{}} 
				numOfAdultsChanged={()=>{}} 
				numOfChildrenChanged={()=>{}}
				loadFromCache={()=>{}}
			/>
		</Provider>
	), div);
	ReactDOM.unmountComponentAtNode(div);
});

test("matches snapshot for a selectable room", () => {
	const component = renderer.create(
		<Provider store={store}>
			<Page
				rooms={rooms}
				roomSelected={()=>{}} 
				roomUnselected={()=>{}} 
				numOfAdultsChanged={()=>{}} 
				numOfChildrenChanged={()=>{}}
				loadFromCache={()=>{}}
			/>
		</Provider>
	);

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});