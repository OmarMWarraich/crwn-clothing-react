import { signInWithGooglePopup, createUserDocumentAuth } from "../../utils/firebase/firebase"

const SignIn = () => {
    const handleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup()
            const userDocRef = await createUserDocumentAuth(user)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In With Google</button>
    </div>
  )
}

export default SignIn
