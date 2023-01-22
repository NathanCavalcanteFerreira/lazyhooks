import { useCallback, useEffect, useState } from "react"

interface IUseAsync{
    callback: () => Promise<any>;
    dependencies: Array<any>
}


export default function useAsync(options : IUseAsync) {
  const {callback, dependencies} = options;
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}