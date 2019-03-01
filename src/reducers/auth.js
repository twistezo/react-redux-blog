const authShape = {
  displayName: '',
  email: '',
  isSignedIn: false,
  errorMessage: ''
}

export const auth = (state = authShape, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        ...state,
        isSignedIn: action.isSignedIn,
        errorMessage: action.errorMessage
      }
    case 'FETCHED_USER_DATA':
      return {
        ...state,
        displayName: action.displayName,
        email: action.email
      }
    default:
      return state
  }
}
