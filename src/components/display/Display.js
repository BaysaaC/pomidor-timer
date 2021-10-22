import React from 'react'
import Cyphers from './Cyphers'

export default function Display({ seconds }) {
    return (
        <div className="cyphers">
            <Cyphers value={Math.floor(seconds / 60)} />
            <span style={{ opacity: seconds % 2 ? 0.5 : 1 }}>{":"}</span>
            <Cyphers value={seconds % 60} />
        </div>
    )
}
