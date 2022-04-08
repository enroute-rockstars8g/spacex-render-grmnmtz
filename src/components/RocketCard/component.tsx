export const RocketCard = ({ rocket }: { rocket: any }) => {
  return (
    <div key={rocket.id} className="bg-gray-800 text-white p-8 m-4 ">
      <div className="text-4xl py-4 font-bold">
        <p className="text-blue-300">{rocket.name}</p>
      </div>
      <p>Description: {rocket.description}</p>
      <div className="py-4">
        <p>Company: {rocket.company}</p>
        <p>Cost per launch: {rocket.cost_per_launch}</p>
        <p>Country: {rocket.country}</p>
      </div>
      <div>
        <p>
          Diameter: {rocket.diameter?.feet} feet, {rocket.diameter?.meters}{' '}
          meters
        </p>
        <p>First Flight {rocket.first_flight}</p>
        <p>Mass: {rocket.mass?.kg} kg</p>
      </div>
      <div className="py-4">
        <span className="pr-2">
          {' '}
          <a className="text-blue-300" href={rocket.wikipedia}>
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  )
}
