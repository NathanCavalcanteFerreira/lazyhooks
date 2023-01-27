import { useState, useEffect } from "react"

export interface IUseSize {
    ref: React.RefObject<HTMLElement>
}

interface ISize{
    height: number
    width: number
}

export const useSize = ({ ref } : IUseSize) : ISize => {
  const [size, setSize] = useState({width: 0, height: 0})

  useEffect(() => {
    if (!ref.current) return
    const observer = new ResizeObserver(([entry]) => 
    setSize({ width: entry.contentRect.width, height: entry.contentRect.height }))
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return size
}