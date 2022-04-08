import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-gray-900 m-auto">
      <h1 className="text-5xl p-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700">
        Space X Data
      </h1>
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
