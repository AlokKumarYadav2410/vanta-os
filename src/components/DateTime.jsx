import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const format = time.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toLowerCase().replace(/,/g, '')

  return <div>{format}</div>
}

export default DateTime
