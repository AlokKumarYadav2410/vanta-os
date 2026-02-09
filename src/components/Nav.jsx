import React from 'react'
import './nav.scss'
import DateTime from './DateTime'
const Nav = ({ windowState, setWindowState }) => {
    return (
        <nav>
            <div className="left">
                <div className="vanta-icon">
                    <img src="./navbar-icons/vanta-icon.png" alt="" />
                </div>

                <div
                    onClick={() => window.open("https://portfolio-alok-live.vercel.app/", "_blank")}
                    className="nav-item">
                    <p>Alok Kumar Yadav</p>
                </div>

                <div
                    onClick={() => setWindowState(state => ({ ...state, resume: windowState.resume ? false : true }))}
                    className="nav-item">
                    <p>File</p>
                </div>

                <div
                    onClick={() => setWindowState(state => ({ ...state, note: windowState.note ? false : true }))}
                    className="nav-item">
                    <p>Window</p>
                </div>

                <div
                    onClick={() => setWindowState(state => ({ ...state, cli: windowState.cli ? false : true }))}
                    className="nav-item">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="./navbar-icons/wifi.svg" alt="" />
                </div>

                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav