import React from 'react';
import SlideShow from './components/SlideShow-class';
import Slide from './components/Slide-class';

import './SlideShow-demo.css';

export default (
    <SlideShow>
        <Slide heading='Styling in React'>
            <ul style={{marginTop: '1em'}}>
                <li>You are here</li>
                <li>You are there</li>
            </ul>
        </Slide>
        <Slide heading="testing">
            <p>
                testing testing testing
            </p>
        </Slide>
    </SlideShow>
);