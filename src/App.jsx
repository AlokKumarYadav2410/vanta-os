import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'

const App = () => {
  return (
    <main>
      <Dock />
      <Nav />
      <Github />
      <Note />
    </main>
  )
}

export default App
