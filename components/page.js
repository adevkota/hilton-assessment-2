import React from "react";
import { connect } from "react-redux";

const Page = (props) => (
	<h1>Hi</h1>
)


export default connect(state => state)(Page);