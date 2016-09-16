react-zoom
===========

Lightweight and stateless modal component for React.js

It uses only css3 flexbox for positioning.

Usage
-----
Add `react-zoom` as a dependency

`$ npm install --save react-zoom`

then simply use the provided component

Note that the component is stateless, so updating the `isVisible` property should
be handled in the model of your app (e.g. using redux or similar flux
implementations)

The component is also unstyled (except for the layout).

For the `Zoom` component to work correctly, please be sure to have support for
`flex` or eventually be sure to use polyfills.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Zoom from 'react-zoom';

ReactDOM.render(
    <div>
        <Zoom
            isVisible={true} // show or hide the modal (default to false)
            width="50%" // width of the modal in css format (default to "100%")
            maxWidth="200px"
            height="50%" // height of the modal in css format (default to "100%")
            maxHeight="50%"
            hAlign="center" // horizontal alignment ["left", "center", "right"] (default to "center")
            vAlign="center" // vertical alignment ["top", "center", "bottom"] (default to "center")
            offset={{ // offset from the current layout position
                x: '-20px' // horizontal offset in css format (default to "0")
                y: '5%' // vertical offset in css format (default to "0")
            }}
            zIndex={99} // zIndex for the modal (default to 1)
            overlay={someNode} // jsx node element to create a background overlay
        >

            ... // content of the modal

        </Zoom>
    </div>,
    document.getElementById('zoom-example')
);

```

Development
-----------
Clone the repository then

`$ npm install`

use

`$ make dist`

to build

and

`make dev`

to start a dev server on `localhost:8080`

to run tests just use

`$ npm test`

Warnings
--------
This component should not not be considered ready for production (until it will reach 1.0.0),
however testing and contributions are really welcome.
