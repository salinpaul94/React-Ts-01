import React from 'react';
import SlideShow from './components/SlideShow-function';
import Slide from './components/Slide-class';

import './SlideShow-demo.css';

export default (
    <SlideShow>
        <Slide heading="Styling in react">
            <ul style={{marginTop: '1em'}}>
                <li>test 1</li>
                <li>test 2</li>
            </ul>
        </Slide>
        <Slide heading="Component Props">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minus!
            </p>
        </Slide>
    </SlideShow>
);