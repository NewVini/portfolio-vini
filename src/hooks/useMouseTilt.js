import { useCallback, useState } from 'react'

export function useMouseTilt(intensity = 12) {
  const [style, setStyle] = useState({})

  const onMouseMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -intensity
      const rotateY = ((x - centerX) / centerX) * intensity

      setStyle({
        transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
        '--spot-x': `${x}px`,
        '--spot-y': `${y}px`,
      })
    },
    [intensity],
  )

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      '--spot-x': '50%',
      '--spot-y': '50%',
    })
  }, [])

  return { style, onMouseMove, onMouseLeave }
}
