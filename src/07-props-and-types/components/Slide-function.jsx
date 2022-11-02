import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

function Slide( {heading, children, page}) {
    const slide = (
        <div className='slide'>
            <span className='slide-number'>{page?.current}/{page?.total}</span>
            <h1 className='heading-text text-center'>{heading}</h1>
            <hr />
            <div className='body-text'>
                {children}
            </div>
        </div>
    );

    return slide;
}

Slide.propTypes = {
    heading: PropTypes.string.isRequired,
    page: PropTypes.shape({
        current: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired
    }),
    children: PropTypes.node.isRequired
};

export default Slide;