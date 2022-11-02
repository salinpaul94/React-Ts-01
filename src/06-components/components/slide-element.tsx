import React, { Fragment } from 'react';

import {
    headingText,
    bodyText,
    textCenter,
    listUnstyled
} from './slide.styles';

import './slide.css';

const Slide = () => {
    const slide = (
        <div className="slide">
            <h1 style={{...headingText, ...textCenter}}>Styling in React</h1>
            <hr />
            <div style={bodyText}>
                <ul style={{...listUnstyled, marginTop: '1em'}}>
                    <li>You can provide style using Css classes</li>
                    <li>You can provide inline styles using a JS object</li>
                </ul>
            </div>
        </div>
    );

    return slide;
}

const el = (
    <Fragment>
        <Slide></Slide>
        <Slide />
    </Fragment>
);

export default el;