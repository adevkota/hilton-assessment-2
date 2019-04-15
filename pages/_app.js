import React from 'react'
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";

class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {
		ctx.store.dispatch({type: 'FOO', payload: 'foo'})
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			}
		};
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}

};

export default withRedux(makeStore, { debug: true })(MyApp);