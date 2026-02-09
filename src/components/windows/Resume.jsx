import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({ windowName, setWindowState, zIndex, onFocus }) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowState={setWindowState} zIndex={zIndex} onFocus={onFocus}>
        <div className="resume-window">
          <embed src="./resume.pdf" frameBorder="0"></embed>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
