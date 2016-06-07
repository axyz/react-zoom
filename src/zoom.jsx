import React, {Component, PropTypes} from 'react';

const _justify = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};

const _align = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
};

class Zoom extends Component {
    render() {
        const {
            vAlign,
            hAlign,
            offset,
            width,
            height,
            isVisible,
            children,
            zIndex
        } = this.props;

        const wrapperStyle = {
            zIndex: zIndex,
            position: 'fixed',
            display: isVisible ? 'flex' : 'none',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            justifyContent: _justify[hAlign],
            alignItems: _align[vAlign]
        };

        const modalStyle = {
            position: 'relative',
            overflow: 'auto',
            left: offset.x,
            top: offset.y,
            width,
            height
        };

        return (
            <div className="zoom_wrapper" style={wrapperStyle}>
                <div className="zoom_modal" style={modalStyle}>
                    {children}
                </div>
            </div>
        );
    }
}

Zoom.propTypes = {
    isVisible: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    hAlign: PropTypes.oneOf(['left', 'center', 'right']),
    vAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    zIndex: PropTypes.number
};

Zoom.defaultProps = {
    isVisible: false,
    width: '100%',
    height: '100%',
    hAlign: 'center',
    vAlign: 'center',
    offset: {
        x: 0,
        y: 0
    },
    zIndex: 1
};

export default Zoom;
