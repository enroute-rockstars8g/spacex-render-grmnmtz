import { Link, Outlet } from 'react-router-dom'
import logo from '../src/assets/logo.png'

function App() {
  return (
    <div className="bg-gray-900 m-auto">
      <img src={logo} alt="spacex-logo" width="512" height="512" />
      <nav className="border-b-4 p-4 border-sky-700 ">
        <Link className="text-3xl text-gray-300 pl-2" to="/missions">
          Missions
        </Link>
        <Link className="text-3xl text-gray-300 pl-2" to="/dragons">
          Dragons
        </Link>
        <Link className="text-3xl text-gray-300 pl-2" to="/rockets">
          Rockets
        </Link>
        <Link className="text-3xl  text-gray-300 pl-2" to="/capsules">
          Capsules
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
