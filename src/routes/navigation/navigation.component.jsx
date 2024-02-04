import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../components/context/user.context'

import './navigation.styles.scss'
import { signOutAuthUser } from '../../utils/firebase/firebase'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutAuthUser()
    setCurrentUser(null)
  }
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            {
              currentUser ? 
              <div className="nav-link" onClick={signOutHandler}>Sign Out</div>
              :
              <Link className="nav-link" to="/auth">Sign In</Link>
            }
         </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
