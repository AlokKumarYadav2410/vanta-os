import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Github />
      <Note />
      <Resume />
      <Dock />
    </main>
  )
}

export default App
