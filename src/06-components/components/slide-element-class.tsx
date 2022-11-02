import React, {Fragment, Component} from 'react';

import {
    headingText,
    bodyText,
    textCenter,
    listUnstyled
} from './slide.styles';

import './slide.css';

class Slide extends React.Component {
    render() {
        const slide = (
            <div className="slide">
                <h1 style={{...headingText, ...textCenter}}>Styling in React</h1>
                <hr />
                <div style={bodyText}>
                    <ul style={{ marginTop: '1em'}}>
                        <li>You hi hi hi</li>
                        <li>How how how</li>
                    </ul>
                </div>
            </div>
        );

        return slide;
    }
}

const el = (
    <Fragment>
        <Slide></Slide>
        <Slide />
    </Fragment>
);

export default el;