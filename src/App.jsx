import React, { useState, useEffect } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  const [zIndexMap, setZIndexMap] = useState({})
  const [topZIndex, setTopZIndex] = useState(10)

  const focusWindow = (windowName) => {
    setTopZIndex(prev => {
      const next = prev + 1
      setZIndexMap(z => ({
        ...z,
        [windowName]: next
      }))
      return next
    })
  }

  useEffect(() => {
    Object.keys(windowState).forEach(window => {
      if (windowState[window] && !zIndexMap[window]) {
        focusWindow(window)
      }
    })
  }, [windowState])

  return (
    <main>
      <Nav />
      {windowState.github && <Github windowName="github" setWindowState={setWindowState} zIndex={zIndexMap.github} onFocus={focusWindow} />}
      {windowState.note && <Note windowName="note" setWindowState={setWindowState} zIndex={zIndexMap.note} onFocus={focusWindow} />}
      {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} zIndex={zIndexMap.resume} onFocus={focusWindow} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} zIndex={zIndexMap.spotify} onFocus={focusWindow} />}
      {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} zIndex={zIndexMap.cli} onFocus={focusWindow} />}
      <Dock windowState={windowState} setWindowState={setWindowState} />
    </main>
  )
}

export default App
