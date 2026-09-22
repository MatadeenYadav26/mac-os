import React from 'react'
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacWindow from './components/windows/MacWindow.jsx'

function App() {
  return (
    <main>
      <Nav />
      <Dock />

        <MacWindow>
        <h1>Hello User!</h1>
      </MacWindow>
    </main>
  )
}

export default App