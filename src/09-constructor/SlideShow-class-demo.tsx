import React from 'react';
import SlideShow from './components/SlideShow-class';
import Slide from './components/Slide-class';

import './SlideShow-demo.css';

export default (
    <SlideShow initialActiveSlide={1}>
        <Slide heading="Styling in React">
            <ul style={{ marginTop: '1em'}}>
                <li>testing testing</li>
                <li>test test</li>
            </ul>
        </Slide>
        <Slide heading='Component Props'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis!
            </p>
        </Slide>
    </SlideShow>
);