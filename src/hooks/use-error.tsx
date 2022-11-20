import { useCallback } from 'react'
import axios from 'axios'

interface ApiError {
  errorMessage: string
}

export function useError() {
  const handleError = useCallback((err: any) => {
    if (axios.isAxiosError(err)) {
      const data = err.response?.data as ApiError

      return {
        errorMessage: data?.errorMessage || 'Ops, tivemos um problema',
      }
    }

    return {
      errorMessage: err.message,
    }
  }, [])

  return {
    handleError,
  }
}
