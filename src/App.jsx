import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main>
      <Dock />
      <Nav />
      <Github />
    </main>
  )
}

export default App
