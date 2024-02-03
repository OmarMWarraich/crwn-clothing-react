
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import { auth, signInWithGooglePopup, createUserDocumentAuth } from "../../utils/firebase/firebase"

import "./sign-in.styles.scss"


const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup()
            const userDocRef = await createUserDocumentAuth(user)
        } catch (error) {
            console.error(error)
        }
    }
     
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
