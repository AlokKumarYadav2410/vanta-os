import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children, width = '40vw', height = '50vh', windowName, windowState, setWindowState }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 100
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div
                            onClick={() => setWindowState(state => ({ ...state, [windowName]: false }))}
                            className="dot red">
                        </div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p>alokkumaryadav - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
