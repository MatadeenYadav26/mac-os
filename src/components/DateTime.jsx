import React, { useEffect, useState } from 'react'

const DateTime = () => {

  const [now, setNow] = useState(new Date())

  useEffect(() => {

    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  const day = now.toLocaleDateString('en-US', {
    weekday: 'short'
  }).toLowerCase()

  const month = now.toLocaleDateString('en-US', {
    month: 'short'
  }).toLowerCase()

  const date = now.getDate()

  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).toLowerCase()

  return (
    <div>
      {day} {month} {date} {time}
    </div>
  )
}

export default DateTime