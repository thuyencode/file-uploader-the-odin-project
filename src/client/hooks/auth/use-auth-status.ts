interface UseAuthStatus {
  isAuthed: boolean
}

const useAuthStatus = (): UseAuthStatus => {
  const isAuthed = false

  return { isAuthed }
}

export default useAuthStatus
