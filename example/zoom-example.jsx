import React, { Component } from 'react';
import Zoom from 'react-zoom';
import { connect } from 'react-redux';
import * as actions from './action-creators';

class ZoomExample extends Component {
    render() {
        return(
            <div>
                <button onClick={() => this.props.dispatch(actions.show())}>
                    SHOW
                </button>
                <Zoom
                  isVisible={this.props.isModalVisible}
                  width="50%"
                  height="50%"
                >
                    <button onClick={() => this.props.dispatch(actions.hide())}>
                        HIDE
                    </button>
                    <p>MODAL CONTENT</p>
                </Zoom>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isModalVisible: state
    };
};

export default connect(mapStateToProps)(ZoomExample);
