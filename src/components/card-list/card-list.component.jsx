import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = props => {
    return <div className="card-list">
            {props.allWallets.map(wallet =>(
            <Card key={wallet.id} myWallet={wallet.name} cryptoVal={wallet.value}/>
          ))}
        </div>
}