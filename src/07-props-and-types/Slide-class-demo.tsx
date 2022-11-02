import React from 'react';
import Slide from './components/slide-class'

import './Slide-demo.css';

const el = (
    <>
    <Slide heading="How do you do?" page={{current:1, total:2}}>
        <ul className='list-unstyled' style={{marginTop: '1.5em'}}>
            <li>You are here</li>
            <li>Are you leaving</li>
        </ul>
    </Slide>
    <Slide heading="Where are you from" page={{current: 2, total:2}}>
        <p>
            why are you looking at me
        </p>
    </Slide>
    </>
);

export default el;