import React from 'react';

const FruitsList = () => {
    const fruits = [
        'Apples',
        'Oranges',
        'Bananas',
        'Mango'
    ];

    return (
        <ul>
            {
                fruits.map(
                    ( fruit, idx ) => (
                        <li key={idx}>{fruit}</li>
                    )
                )
            }
        </ul>
    );
};

export default FruitsList;