import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';

import './slides.css';

// type Props = {
//     heading: string,
//     page?:  {
//         current: number,
//         total: number
//     },
//     children: ReactNode
// };

function Slide ( { heading, children, page} /*{heading, page, children} : Props */) {
    const slide = (
        <div className="slide">
            <span className="slide-number">{page?.current} / {page?.total}</span>
            <h1 className="heading-text text-center">{heading}</h1>
            <hr />
            <div className="body-text">
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
    children: PropTypes.node.isRequired,
};
export default Slide;


{/* <ul className="list-unstyled" style= { { marginTop: '1.5em' } }>
<li>You can provide style using CSS classes</li>
<li>You can provide inline styles using a JS Object</li>
</ul> */}

// type Props = {
//     heading: string,
//     page?:  {
//         current: number,
//         total: number
//     },
//     children: ReactNode
// };

// const Slide = ( props : Props) => {
//     const slide = (
//         <div className="slide">
//             <span className="slide-number">{props.page?.current} / {props.page?.total}</span>
//             <h1 className="heading-text text-center">{props.heading}</h1>
//             <hr />
//             <div className="body-text">
//                 {props.children}
//             </div>
//         </div>
//     );

//     return slide;
    
// }