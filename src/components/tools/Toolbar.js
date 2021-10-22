import React from 'react'
import Button from './Button'

export default function Toolbar({ running = false, onMinus, onReset, onStartPause, onPlus }) {
    return (
        <div className="toolbar">
            <Button
                label={'-'}
                title={"Remove 1 minute"}
                disabled={running}
                onClick={onMinus}
            />
            <Button
                label={'RESET'}
                disabled={running}
                onClick={onReset}
            />
            <Button
                label={running ? "PAUSE" : "START"}
                title={`${running ? "PAUSE" : "START"} THE TIMER`}
                onClick={onStartPause}
            />
            <Button
                label={'+'}
                title={"Add 1 minute"}
                disabled={running}
                onClick={onPlus}
            />
        </div>
    )
}
