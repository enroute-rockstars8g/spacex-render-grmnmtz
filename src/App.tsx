import { Link, Outlet } from 'react-router-dom'
import logo from '../src/assets/logo.png'

function App() {
  const classes = {
    navLink: 'text-3xl text-gray-300 px-8',
    navContainer: 'border-b-4 p-4 border-sky-700 ',
    mainWrapper: 'bg-gray-900 m-auto',
  }

  return (
    <div className={classes.mainWrapper}>
      <Link to="/">
        <img src={logo} alt="spacex-logo" width="512" height="512" />
      </Link>
      <nav className={classes.navContainer}>
        <Link className={classes.navLink} to="/missions">
          Missions
        </Link>
        <Link className={classes.navLink} to="/dragons">
          Dragons
        </Link>
        <Link className={classes.navLink} to="/rockets">
          Rockets
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
