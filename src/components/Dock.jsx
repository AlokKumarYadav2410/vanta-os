import React from 'react'
import './dock.scss'
const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => setWindowState(state => ({ ...state, github: true }))}
        className="icon github">
        <img src="./doc-icons/github.svg" alt="github" />
      </div>

      <div
        onClick={() => setWindowState(state => ({ ...state, note: true }))}
        className="icon note">
        <img src="./doc-icons/note.svg" alt="note" />
      </div>

      <div
        onClick={() => setWindowState(state => ({ ...state, resume: true }))}
        className="icon pdf">
        <img src="./doc-icons/pdf.svg" alt="pdf" />
      </div>

      <div 
        onClick={() => {window.open("https://calendar.google.com", "_blank")}}
        className="icon calender">
        <img src="./doc-icons/calender.svg" alt="calender" />
      </div>

      <div
        onClick={() => setWindowState(state => ({ ...state, spotify: true }))}
        className="icon spotify">
        <img src="./doc-icons/spotify.svg" alt="spotify" />
      </div>

      <div 
        onClick={() => {window.open("mailto:alokkumaryadav241004@gmail.com", "_blank")}}
        className="icon mail">
        <img src="./doc-icons/mail.svg" alt="mail" />
      </div>

      <div 
        onClick={() => {window.open("https://www.linkedin.com/in/alokkumaryadav2410", "_blank")}}
        className="icon link">
        <img src="./doc-icons/link.svg" alt="link" />
      </div>

      <div
        onClick={() => setWindowState(state => ({ ...state, cli: true }))}
        className="icon cli">
        <img src="./doc-icons/cli.svg" alt="cli" />
      </div>
    </footer>
  )
}

export default Dock
