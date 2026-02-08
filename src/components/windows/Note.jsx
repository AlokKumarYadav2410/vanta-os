import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow';
import './note.scss'

const Note = ({ windowName, setWindowState, zIndex, onFocus }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch('./note.txt')
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, [])
  return (
    <div>
      <MacWindow windowName={windowName} setWindowState={setWindowState} zIndex={zIndex} onFocus={onFocus}>
        <div className="note-window">
          {markdown ? <SyntaxHighlighter language='typescript' style={atomOneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
      </MacWindow>
    </div>
  )
}

export default Note
