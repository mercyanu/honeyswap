import React from 'react';
import './swap.style.css';
import xdai from '../../xdai-icon.png';
import arrow1 from '../../arrow-1.svg';
import arrow2 from '../../arrow-2.svg';
import arrow2w from '../../arrow-2-white.svg';
import close from '../../close.svg';
import Modal from 'react-bootstrap/Modal';

import {} from 'react-bootstrap';

const Swap = props => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }

    return(
        <div className="swap-container"> 
            <Modal show={isOpen} onHide={hideModal} centered>
                <Modal.Header dialogClassName={"modal-header-cont"}>
                    <div>Connect to a wallet</div>
                    <div onClick={hideModal} className="close-modal"><img src={close}/></div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <a href="#"><button className="btn-connect">Connect Wallet</button></a>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="input-container">
                <div className="swap-input-cont">
                    <div><p>From</p></div>
                    <div className="from-entry">
                        <input className="text-input" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79"/>
                        <button className="swap-btn-grp">
                            <span className="swap-btn-cont">
                                <img className="xdai-logo" src={xdai}/>
                                <span>XDAI</span>
                                <img className="arrow-2" src={arrow2}/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="swap-arrow-1"><img className="arrow-1" src={arrow1}/></div>
                <div className="swap-input-cont">
                    <div><p>To(estimated)</p></div>
                    <div className="from-entry">
                        <input className="text-input" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79"/>
                        <button className="swap-btn-grp2">
                            <span className="swap-btn-cont2">
                                <span className="token-text">Select a token</span>
                                <img className="arrow-2" src={arrow2w}/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="price-output-cont">
                    <div className="price-text">Price</div>
                    <div className="price-dash">-</div>
                </div>
            </div>
            <div>
                    <button onClick={showModal} className="btn-connect">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Swap;