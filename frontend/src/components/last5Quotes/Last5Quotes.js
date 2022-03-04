import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import FifthToLastQuote from './FifthToLastQuote.js';
import FourthToLastQuote from './FourthToLastQuote.js';
import ThirdToLastQuote from './ThirdToLastQuote.js';
import SecondToLastQuote from './SecondToLastQuote.js';
import LastQuote from './LastQuote.js';

function Last5Quotes() {
    return (
        <div style={{display: "flex"}}>
            <FifthToLastQuote />
            <FourthToLastQuote />
            <ThirdToLastQuote />
            <SecondToLastQuote />
            <LastQuote />
        </div>
    );
};

export default Last5Quotes;