import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user/user.context'

import './navigation.styles.scss'
import { signOutAuthUser } from '../../utils/firebase/firebase'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  
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
              <div className="nav-link" onClick={signOutAuthUser}>Sign Out</div>
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
