interface IUseAuthStatus {
  isAuthed: boolean
}

const useAuthStatus = (): IUseAuthStatus => {
  const isAuthed = false

  return { isAuthed }
}

export default useAuthStatus
