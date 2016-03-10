import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Zoom from './zoom.jsx';

function getZoomMock(opts) {
    const defaultOpts = {
        props: {},
        children: ['MODAL_CONTENT']
    };
    const options = Object.assign({}, defaultOpts, opts);

    return shallow(
        <Zoom {...options.props}>
            {options.children}
        </Zoom>
    );
}

test('should have 1 zoom_wrapper node', t => {
    const zoom = getZoomMock();

    t.is(zoom.find('.zoom_wrapper').length, 1);
});

test('should have 1 zoom_modal node', t => {
    const zoom = getZoomMock();

    t.is(zoom.find('.zoom_modal').length, 1);
});

test('should contain "MODAL_CONTENT"', t => {
    const zoom = getZoomMock();

    t.regex(zoom.html(), /MODAL_CONTENT/);
});
