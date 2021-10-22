import React from 'react'
import { createPortal } from 'react-dom'
import Button from '../tools/Button'

export default function Modal({ onClose, onRestart }) {
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-box">
                <h4>{"Time is over, enjoy a small break ! ;-)"}</h4>
                <div className="modal-buttons">
                    <Button label={"Quit"} onClick={onClose} />
                    <Button label={"Restart Timer"} onClick={onRestart} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals")
    )
}
