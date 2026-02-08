import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({
  children,
  width = 600,
  height = 400,
  zIndex = 1,
  onFocus,
  windowName,
  setWindowState
}) => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const [size, setSize] = useState({
    width,
    height
  })

  const [position, setPosition] = useState({
    x: 300,
    y: 100
  })

  if (isMinimized) return null

  return (
    <Rnd
      style={{ zIndex }}
      onMouseDown={() => onFocus?.(windowName)}

      size={
        isFullscreen
          ? { width: '100vw', height: '100vh' }
          : size
      }
      position={
        isFullscreen
          ? { x: 0, y: 0 }
          : position
      }
      disableDragging={isFullscreen}
      enableResizing={!isFullscreen}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y })
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight
        })
        setPosition(pos)
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              title="Close"
              onClick={() =>
                setWindowState?.(state => ({
                  ...state,
                  [windowName]: false
                }))
              }
            />
            <div
              className="dot yellow"
              title="Minimize"
              // onClick={() =>
              //     setIsMinimized(!isMinimized)
              // }
              onClick={() =>
                setWindowState?.(state => ({
                  ...state,
                  [windowName]: false
                }))
              }
            />
            <div
              className="dot green"
              title="Fullscreen"
              onClick={() => setIsFullscreen(!isFullscreen)}
            />
          </div>
          <div className="title">
            <p>alokkumaryadav - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow
