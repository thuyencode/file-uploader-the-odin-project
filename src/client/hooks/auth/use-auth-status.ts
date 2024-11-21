interface UseAuthStatus {
  isAuthed: boolean
}

const useAuthStatus = (): UseAuthStatus => {
  const isAuthed = true

  return { isAuthed }
}

export default useAuthStatus
