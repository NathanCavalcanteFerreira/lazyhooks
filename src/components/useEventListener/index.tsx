import { useEffect, useRef } from "react"

interface IUseEventListener {
    eventType: string;
    callback: (event: Event) => void;
    element?: HTMLElement | Window
}

export const useEventListener  = (options : IUseEventListener) => {
    const {eventType, callback, element } = options
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        if (element == null) return
        const handler =( e : Event )=> callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])
    
}