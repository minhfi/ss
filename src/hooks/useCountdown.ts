import { useState, useEffect } from 'react'

interface Countdown {
  minutes: number
  seconds: number
}

export const useCountdown = (initialMinutes: number, initialSeconds: number): Countdown => {
  const [countdown, setCountdown] = useState<Countdown>({
    minutes: initialMinutes,
    seconds: initialSeconds
  })

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown.minutes === 0 && prevCountdown.seconds === 0) {
          clearInterval(countdownInterval)
          return prevCountdown
        }

        if (prevCountdown.seconds === 0) {
          return {
            minutes: prevCountdown.minutes - 1,
            seconds: 59
          }
        }

        return {
          minutes: prevCountdown.minutes,
          seconds: prevCountdown.seconds - 1
        }
      })
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [])

  return countdown
}
