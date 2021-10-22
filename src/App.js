import { React, useState } from 'react'
import Display from './components/display/Display'
import Toolbar from './components/tools/Toolbar'
import useTimer from './components/tools/useTimer'
import Modal from './components/modals/Modal'


const SESSION_DURATION = 1500; // 1500 seconds, so 25 minutes

export default function App() {
    const [showModal, setShowModal] = useState(false);
    const [{ running, seconds }, { setRunning, setSeconds }] = useTimer(SESSION_DURATION, false, () => setShowModal(true));

    const handleMinus = () => { setSeconds(val => Math.max(val - 60, 0)) };
    const handleReset = () => { setSeconds(SESSION_DURATION) };
    const handleStartPause = () => {
        running ? setRunning(false) : setRunning(true);
    };
    const handlePlus = () => { setSeconds(val => val + 60) };

    const handleClose = () => {
        setShowModal(false);
        handleReset();
    }
    const handleRestart = () => {
        handleClose();
        handleStartPause();
    }

    return (
        <div>
            <Display seconds={seconds} />
            <Toolbar
                running={running}
                onMinus={handleMinus}
                onReset={handleReset}
                onStartPause={handleStartPause}
                onPlus={handlePlus}

            />
            {showModal && <Modal onClose={handleClose} onRestart={handleRestart} />}
        </div>
    )
}
