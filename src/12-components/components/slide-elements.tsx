import React, {Fragment} from 'react';

import {
    headingStyle,
    bodyStyle,
    textCenter,
    listUnstyled
} from './slide.styles';

import './slides.css';

const Slide = () => {
    const slide = (
        <div className="slide">
            <h1 style={{ ...headingStyle, ...textCenter }}>
                Styling in React
            </h1>
            <hr />
            <div style={bodyStyle}>
                <ul style={{ ...listUnstyled, marginTop: '1em' }}>
                    <li>You can provide style using CSS classes</li>
                    <li>You can provide inline styles using a JS Object</li>
                </ul>
            </div>
        </div>
    );

    return slide;
    
}

const el = (
    <Fragment>
        <Slide/>
        <Slide></Slide>
    </Fragment>
);

export default el;