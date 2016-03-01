import React, { Component } from 'react';
import ZoomExample from './zoom-example.jsx';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ZoomExample />
            </Provider>
        );
    }
};
