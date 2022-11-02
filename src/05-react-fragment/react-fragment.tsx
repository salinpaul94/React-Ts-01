import React, { Fragment } from 'react';

const fruitsEl = (
    <Fragment>
        <li>Apples</li>
        <li>Oranges</li>
    </Fragment>
);

const veggiesEl = (
    <Fragment>
        <li>Potatoes</li>
        <li>Onions</li>
    </Fragment>
);

const chocolateEl = (
    <Fragment>
        <li>Dairy Milk</li>
        <li>Silk</li>
    </Fragment>
)

const shoppingListEl = (
    <ul>
        {fruitsEl}
        {chocolateEl}
        {veggiesEl}
        {chocolateEl}
    </ul>
);

export default shoppingListEl;

