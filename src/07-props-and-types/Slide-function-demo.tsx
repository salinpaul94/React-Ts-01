import React from 'react';
import Slide from './components/Slide-function';

import './Slide-demo.css'

const el = (
    <>
        <Slide heading="How do you do?" page={{current: 1, total: 2}}>
            <ul className='list-unstyled' style={{marginTop: '1.5em'}}>
                <li>You are here</li>
                <li>You are going??</li>
            </ul>
        </Slide>
        <Slide heading="What are you doing??" page={{current:2, total:2}}>
            <p>
                Bla Bla Bla
            </p>
        </Slide>
    </>
);

export default el;