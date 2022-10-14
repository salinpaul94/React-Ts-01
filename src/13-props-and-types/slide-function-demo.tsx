import React from 'react';
import Slide from './slide-function';

const el = (
    <>
        <Slide heading="How do you styles in ReactJs" page={{ current: 1, total: 2 }}>
            <ul className="list-unstyled" style={{ marginTop: '1.5em' }}>
                <li>You can provide style using CSS classes</li>
                <li>You can provide inline styles using a JS Object</li>
            </ul>
        </Slide>

        <Slide heading="What are props" page={{ current: 2, total: 2 }}>
            <ul className="list-unstyled" style={{ marginTop: '1.5em' }}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga facere nostrum neque qui et numquam? Beatae esse doloribus, 
                    aperiam qui vel nisi similique iste a veniam sint facilis error, 
                    molestias modi eligendi laboriosam quibusdam quidem ab odio vitae 
                    voluptates quisquam officia maxime obcaecati! Magni at incidunt 
                    placeat, reiciendis eos dolore.
                </p>
            </ul>
        </Slide>

    </>

);

export default el;