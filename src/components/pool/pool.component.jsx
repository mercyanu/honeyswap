import React from 'react';

import info from '../../information.svg';
import './pool.style.css';


const Pool = props => {
    return(
        <div className="pool-container">
            <div>
                <a href="" className="liquid-link">Add Liquidity</a>
            </div>
            <div className="pool-output-cont">
                    <div className="pool-text">Your Liquidity</div>
                    <div className="pool-dash"><img src={info}></img></div>
            </div>
            <div className="conn-1">
                <span>Connect to a wallet to view your liquidity.</span>
            </div>
            <div className="import-1">
                <span>Don't see a pool you joined? </span><a href="">Import it.</a>
            </div>
        <div className="migrate-btn">
            <a href="">Migrate V1 Liquidity</a>
        </div>
        </div>

    )

}

export default Pool;