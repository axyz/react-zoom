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
            maxWidth,
            maxHeight,
            height,
            isVisible,
            children,
            zIndex,
            overlay,
        } = this.props;

        const wrapperStyle = {
            zIndex: zIndex,
            position: 'fixed',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            display: isVisible ? 'table' : 'none',
        };

        const tableCellStyle = {
            display: 'table-cell',
            verticalAlign: vAlign === 'top' ? 'top' : vAlign === 'bottom' ? 'bottom' : 'middle',
        };

        const modalStyle = {
            position: 'relative',
            overflow: 'auto',
            marginLeft: hAlign === 'left' ? 0 : 'auto',
            marginRight: hAlign === 'right' ? 0 : 'auto',
            top: offset.y,
            left: offset.x,
            width,
            maxWidth,
            height,
            maxHeight,
            zIndex,

        };

        return (
            <div className="zoom_wrapper" style={wrapperStyle}>
                {overlay && overlay}
                <div style={tableCellStyle}>
                <div className="zoom_modal" style={modalStyle}>
                    {children}
                </div>
                </div>
            </div>
        );
    }
}

Zoom.propTypes = {
    isVisible: PropTypes.bool,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    hAlign: PropTypes.oneOf(['left', 'center', 'right']),
    vAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    zIndex: PropTypes.number,
};

Zoom.defaultProps = {
    isVisible: false,
    width: 'auto',
    maxWidth: 'none',
    height: 'auto',
    maxHeight: 'none',
    hAlign: 'center',
    vAlign: 'center',
    offset: {
        x: 0,
        y: 0
    },
    zIndex: 1
};

export default Zoom;
